import { promises as fs } from "node:fs";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SubscribeBody = {
  email?: string;
  source?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FALLBACK_FILE = "/tmp/subscribers.jsonl";

async function saveToSupabase(email: string, source: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return { used: false as const };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email,
      source,
      created_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Supabase insert failed", { status: response.status, details });
    throw new Error("Failed to store subscriber.");
  }

  return { used: true as const };
}

async function saveToFile(email: string, source: string) {
  const record = {
    email,
    source,
    created_at: new Date().toISOString(),
  };

  await fs.appendFile(FALLBACK_FILE, `${JSON.stringify(record)}\n`, "utf8");
}

async function readBody(request: Request): Promise<SubscribeBody> {
  try {
    return (await request.json()) as SubscribeBody;
  } catch {
    throw new Response("Invalid JSON body.", { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await readBody(request);
    const email = body.email?.trim().toLowerCase() ?? "";
    const source = body.source?.trim() || "unknown";

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
    }

    const supabaseResult = await saveToSupabase(email, source);

    if (!supabaseResult.used) {
      await saveToFile(email, source);
      return NextResponse.json({ ok: true, storage: "file" });
    }

    return NextResponse.json({ ok: true, storage: "supabase" });
  } catch (error) {
    if (error instanceof Response) {
      return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: error.status });
    }

    console.error("Subscribe API error", error);
    return NextResponse.json({ ok: false, error: "Subscription failed." }, { status: 500 });
  }
}
