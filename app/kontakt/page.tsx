import type { Metadata } from "next";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta Terese Bengard för bokningsförfrågningar, föreläsningar, moderatoruppdrag och boksamtal.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: "/kontakt",
    title: "Kontakt – Terese Bengard",
    description:
      "Kontakta Terese Bengard för bokningsförfrågningar, föreläsningar, moderatoruppdrag och boksamtal.",
  },
};

export default function KontaktPage() {
  return (
    <main style={{ background: "#FDFAF8", paddingTop: 80 }}>
      <KontaktCTA image={{ src: "/terese-leende.jpg", alt: "Terese Bengard porträtt" }} />
    </main>
  );
}
