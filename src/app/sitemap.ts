import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://teslamodelguy.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://teslamodelguy.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://teslamodelguy.com/reviews", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://teslamodelguy.com/guides", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://teslamodelguy.com/best", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
