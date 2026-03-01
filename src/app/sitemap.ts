import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://teslamodelguy.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/best`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/best/tesla-model-y-juniper-accessories`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/first-things-to-do-tesla-model-y-juniper`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/tesla-model-y-juniper-delivery-checklist`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides/tesla-model-y-juniper-vs-old-differences`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
