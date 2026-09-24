import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Rådgivning & processledning – Terese Bengard",
  description: "Terese Bengard leder processer och ger strategisk rådgivning inom landsbygdssäkring, platsutveckling, remisser och kommunikation.",
};

const omraden = [
  { title: "Landsbygdssäkring", body: "Att systematiskt granska beslut, satsningar och strategier utifrån hur de påverkar människor och platser utanför storstäderna." },
  { title: "Genomgång av strategi", body: "Utvärdering av befintliga strategier utifrån landsbygds- och platsperspektiv – och konkreta förslag på hur de kan vässas." },
  { title: "Remisser", body: "Analys och skarpa remissvar i frågor som rör landsbygdspolitik, plats och kommunikation." },
  { title: "Landsbygdspolitik", body: "Strategisk rådgivning i politiska processer, opinionsarbete och långsiktig påverkan för hela landet." },
  { title: "Urban norm", body: "Verktyg för att identifiera och utmana den urbana normen i organisationer, myndigheter och kommunikation." },
  { title: "Kommunikationsarbete", body: "Rådgivning kring budskap, målgrupper och strategier — särskilt när platsen och landsbygderna är i fokus." },
];

export default function RadgivningPage() {
  return (
    <main style={{ background: "#FDFAF8" }}>
      <PageHero
        title="Processledning, strategi och rådgivning med platsperspektiv."
        subtitle="På Plats leder längre processer och ger skarp rådgivning till kommuner, regioner, myndigheter och organisationer som vill förstå landsbygderna på riktigt."
      />

      {/* Processledning */}
      <section style={{ padding: "120px 80px 80px" }} className="tb-r-intro">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 600, margin: "0 0 24px",
          }}>
            Processledning & utvecklingsarbete
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
            fontWeight: 700, lineHeight: 1.2,
            color: "#1C1410", margin: "0 0 28px",
            letterSpacing: "-0.01em",
          }}>
            Längre processer där På Plats leder arbetet framåt över tid.
          </h2>
          <p style={{
            fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
            lineHeight: 1.75,
            color: "rgba(28,20,16,0.7)",
            margin: 0,
            maxWidth: 720,
          }}>
            Kan omfatta workshops, dialogprocesser, strategiarbete eller utveckling av
            större satsningar. Terese tar rollen som processledare — håller ihop
            arbetet, ställer de svåra frågorna och ser till att alla röster kommer in.
          </p>
        </div>
      </section>

      {/* Konsult/rådgivning */}
      <section style={{ padding: "40px 80px 120px" }} className="tb-r-omraden">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 600, margin: "0 0 40px",
          }}>
            Konsult & rådgivning
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }} className="tb-r-grid">
            {omraden.map((o, i) => (
              <div key={i} style={{
                background: "#F5EEE9",
                borderRadius: 8,
                padding: "36px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)",
                  fontWeight: 700,
                  color: "#1C1410",
                  margin: 0, lineHeight: 1.2,
                }}>
                  {o.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "rgba(28,20,16,0.65)",
                  margin: 0,
                }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KontaktCTA />

      <style>{`
        @media (max-width: 768px) {
          .tb-r-intro { padding: 80px 32px 48px !important; }
          .tb-r-omraden { padding: 24px 32px 80px !important; }
          .tb-r-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
