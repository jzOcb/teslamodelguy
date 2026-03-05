import { MetadataRoute } from "next";

const base = "https://www.teslamodelguy.com";
const staticRoutes = [
  "/",
  "/about",
  "/best",
  "/best/tesla-model-y-juniper-accessories",
  "/guides",
  "/guides/first-things-to-do-tesla-model-y-juniper",
  "/guides/tesla-model-y-ceramic-tint-cost-guide",
  "/guides/tesla-model-y-juniper-24000-mile-review",
  "/guides/tesla-model-y-juniper-accessories-you-dont-need",
  "/guides/tesla-model-y-juniper-delivery-checklist",
  "/guides/tesla-model-y-juniper-vs-old-differences",
  "/guides/new-model-y-juniper-worth-upgrade-4-month-review",
  "/reviews",
  "/reviews/charging",
  "/reviews/charging/best-tesla-model-y-juniper-phone-mount",
  "/reviews/exterior",
  "/reviews/exterior/best-tesla-model-y-juniper-mud-flaps",
  "/reviews/floor-mats",
  "/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats",
  "/reviews/floor-mats/3d-maxpider-vs-weathertech-tesla-model-y",
  "/reviews/floor-mats/do-old-model-y-floor-mats-fit-juniper",
  "/reviews/organizers",
  "/reviews/organizers/best-tesla-model-y-juniper-center-console-organizer",
  "/reviews/screen-protectors",
  "/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector",
  "/reviews/sunshades",
  "/reviews/sunshades/best-tesla-model-y-juniper-sunshade",
  "/tools",
  "/tools/delivery-checklist",
  "/tools/new-owner-setup",
  "/tools/savings-calculator",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((path) => {
    const isPrimaryContentRoute =
      path === "/" ||
      path === "/best" ||
      path === "/guides" ||
      path === "/reviews" ||
      path === "/tools" ||
      path.startsWith("/best/") ||
      path.startsWith("/guides/") ||
      path.startsWith("/reviews/") ||
      path.startsWith("/tools/");

    return {
      url: `${base}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: isPrimaryContentRoute ? "weekly" : "monthly",
      priority: path === "/" ? 1 : isPrimaryContentRoute ? 0.9 : 0.7,
    };
  });
}
