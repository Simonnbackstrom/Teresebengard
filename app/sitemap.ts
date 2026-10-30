import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://teresebengard.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/forelasningar`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/radgivning`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/om`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/kontakt`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
