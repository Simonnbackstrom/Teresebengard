import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Moderator – Terese Bengard",
  description: "Boka Terese Bengard som moderator. Leder paneler, konferenser och event med kunskap, engagemang och humor.",
};

const egenskaper = [
  { title: "Kunnig och förberedd", body: "Terese sätter sig in i ert ämne, er organisation och er publik. Ingenting lämnas åt slumpen. Det ger ett samtal som känns levande och relevant." },
  { title: "Lyssnar aktivt", body: "Fångar upp trådar som andra missar och vet när hon ska driva framåt och när hon ska låta samtalet andas." },
  { title: "Humor och närvaro", body: "Skapar trygghet i rummet med värme och humor – utan att tappa fokus eller seriositet." },
  { title: "Ställer rätt frågor", body: "Tvekar inte att ställa frågan ingen annan vågade. Det skapar dynamik och samtal som känns äkta." },
];

const format = [
  "Konferenser och kick-offer",
  "Panelsamtal och debatter",
  "Nätverksevent och galamiddagar",
  "Intervjubaserade program",
  "Startmöten och avslutningsevent",
  "Boksamtal och seminarier",
];

export default function ModeratorPage() {
  return (
    <main style={{ background: "#FDFAF8" }}>
      <PageHero
        title="Leder samtal med kunskap, engagemang och humor."
        subtitle="Terese skapar trygghet i rummet och driver samtal framåt med precision och personlighet. Kunnig, förberedd och lyhörd."
      />

      {/* Egenskaper */}
      <section style={{ padding: "120px 80px", background: "#FDFAF8" }} className="tb-mod-section">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {egenskaper.map((e, i) => (
            <div key={i} style={{
              padding: "48px 0",
              borderTop: "1px solid rgba(28,20,16,0.08)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "start",
            }} className="tb-egenskap-row">
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                fontWeight: 700, color: "#1C1410",
                margin: 0, lineHeight: 1.2,
              }}>
                {e.title}
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(28,20,16,0.55)", margin: 0 }}>
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Format */}
      <section style={{ background: "#2A1F1A", padding: "120px 80px" }} className="tb-format-section">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 600, margin: "0 0 32px",
          }}>
            Passar för
          </p>
          <ul style={{ listStyle: "none", margin: "0 0 48px", padding: 0 }}>
            {format.map((f, i) => (
              <li key={i} style={{
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                fontWeight: 500,
                color: "rgba(253,250,248,0.75)",
                padding: "18px 0",
                borderBottom: i < format.length - 1 ? "1px solid rgba(253,250,248,0.08)" : "none",
                lineHeight: 1.3,
              }}>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <KontaktCTA />

      <style>{`
        @media (max-width: 768px) {
          .tb-mod-section { padding: 80px 32px !important; }
          .tb-format-section { padding: 80px 32px !important; }
          .tb-egenskap-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </main>
  );
}
