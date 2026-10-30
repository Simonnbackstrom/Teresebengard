import { ogContentType, ogSize, renderOg } from "./_lib/og-card";

export const alt = "Terese Bengard – Föreläsare, Författare & Moderator";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOg("Föreläsare · Författare · Moderator", "Hälsningar från landsbygden.");
}
