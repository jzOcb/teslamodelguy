"use client";

import { FormEvent, useState } from "react";

type EmailCaptureProps = {
  source?: string;
  compact?: boolean;
};

export default function EmailCapture({
  source = "tesla-delivery-checklist",
  compact = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const raw = await response.text();
      let data: { ok?: boolean; error?: string } | null = null;

      try {
        data = raw ? (JSON.parse(raw) as { ok?: boolean; error?: string }) : null;
      } catch {
        data = null;
      }

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error ?? "Unable to subscribe right now.");
      }

      setStatus("success");
      setMessage("Success. Check your inbox for the printable checklist PDF.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Unable to subscribe right now. Please try again.");
    }
  }

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 md:p-6">
      <h2 className={`${compact ? "text-xl" : "text-2xl"} font-bold text-white mb-2`}>
        Get the Printable Delivery Checklist
      </h2>
      <p className="text-zinc-300 text-sm md:text-base mb-4">
        Enter your email and we&apos;ll send you a PDF you can bring to your delivery appointment.
      </p>

      {status === "success" ? (
        <p className="rounded-lg border border-emerald-700/50 bg-emerald-500/10 px-4 py-3 text-emerald-300 text-sm">
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor={`email-capture-${source}`}>
            Email address
          </label>
          <input
            id={`email-capture-${source}`}
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Me the PDF"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">{message || "Unable to subscribe right now."}</p>
      )}
    </section>
  );
}
