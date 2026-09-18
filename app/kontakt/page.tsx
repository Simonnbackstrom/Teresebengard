import type { Metadata } from "next";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Kontakt – Terese Bengard",
  description: "Kontakta Terese Bengard för bokningsförfrågningar, föreläsningar, moderatoruppdrag och boksamtal.",
};

export default function KontaktPage() {
  return (
    <main style={{ background: "#FDFAF8", paddingTop: 80 }}>
      <KontaktCTA />
    </main>
  );
}
