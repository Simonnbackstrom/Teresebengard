import { ogContentType, ogSize, renderOg } from "../_lib/og-card";

export const alt = "Om Terese Bengard";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOg("Om Terese", "Föreläsare, författare och kommunikatör.");
}
