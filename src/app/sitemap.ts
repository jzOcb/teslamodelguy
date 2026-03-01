import { MetadataRoute } from "next";

const base = "https://teslamodelguy.com";
const staticRoutes = [
  "/",
  "/about",
  "/best",
  "/best/tesla-model-y-juniper-accessories",
  "/guides",
  "/guides/first-things-to-do-tesla-model-y-juniper",
  "/guides/tesla-model-y-ceramic-tint-cost-guide",
  "/guides/tesla-model-y-juniper-delivery-checklist",
  "/guides/tesla-model-y-juniper-vs-old-differences",
  "/reviews",
  "/reviews/charging",
  "/reviews/exterior",
  "/reviews/floor-mats",
  "/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats",
  "/reviews/organizers",
  "/reviews/screen-protectors",
  "/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector",
  "/reviews/sunshades",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((path) => {
    const isPrimaryContentRoute =
      path === "/" ||
      path === "/best" ||
      path === "/guides" ||
      path === "/reviews" ||
      path.startsWith("/best/") ||
      path.startsWith("/guides/") ||
      path.startsWith("/reviews/");

    return {
      url: `${base}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: isPrimaryContentRoute ? "weekly" : "monthly",
      priority: path === "/" ? 1 : isPrimaryContentRoute ? 0.9 : 0.7,
    };
  });
}
