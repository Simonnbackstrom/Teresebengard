import { ogContentType, ogSize, renderOg } from "../_lib/og-card";

export const alt = "Föreläsare och moderator – Terese Bengard";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOg("Föreläsare · Moderator", "Platsperspektiv som berör och engagerar.");
}
