import type { MetadataRoute } from "next";
import { getAllPosts } from "./_lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bengard.se";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const posts = await getAllPosts().catch(() => []);
  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}/blogg/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/forelasningar`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/radgivning`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/om`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blogg`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/kontakt`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    ...postEntries,
  ];
}
