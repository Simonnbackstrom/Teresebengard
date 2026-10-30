import { ogContentType, ogSize, renderOg } from "../_lib/og-card";

export const alt = "Kontakta Terese Bengard";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOg("Kontakt", "Bokningar, föreläsningar och moderatoruppdrag.");
}
