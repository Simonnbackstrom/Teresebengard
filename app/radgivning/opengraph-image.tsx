import { ogContentType, ogSize, renderOg } from "../_lib/og-card";

export const alt = "Rådgivning & processledning – Terese Bengard";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOg("Rådgivning · Processledning", "Strategisk rådgivning med landsbygdsperspektiv.");
}
