import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Om Terese – Terese Bengard",
  description: "Terese Bengard är föreläsare, författare och kommunikatör med fokus på landsbygdsfrågor och platsperspektiv.",
};

const meriter = [
  { title: "Ordförande i kommunstyrelsen", desc: "Mångårig erfarenhet av politiskt arbete och kommunal ledning." },
  { title: "Ledamot i Småföretagarnas Riksförbund", desc: "Engagemang för företagande och näringsliv utanför storstäderna." },
  { title: "Mångårig krönikör", desc: "Skriver och kommunicerar om landsbygd, plats och samhällsfrågor." },
  { title: "Styrelsearbete", desc: "Bred erfarenhet av styrelseuppdrag i organisationer och föreningar." },
  { title: "Författare", desc: "Debuterade 2024 med Världens mittpunkt – till landsbygdernas försvar (Mondial)." },
];

export default function OmPage() {
  return (
    <main style={{ background: "#FDFAF8" }}>
      <PageHero
        title="Föreläsare, författare och röst för landsbygderna."
        subtitle="Terese Bengard arbetar med landsbygdsfrågor, platsperspektiv, kommunikation och kommunpolitik. Hennes drivkraft är att förändra synen på landsbygderna och människorna som bor där."
      />

      {/* Intro-citat */}
      <section style={{ padding: "120px 80px", background: "#FDFAF8" }} className="tb-om-intro">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
            lineHeight: 1.6,
            color: "#1C1410",
            margin: "0 0 32px",
          }}>
            &ldquo;Min drivkraft är att förändra synen på landsbygderna och människorna som bor där. Jag vill bidra till bättre förutsättningar för att människor ska kunna leva och verka i hela landet.&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 32, height: 2, background: "#882B8D", borderRadius: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 13, color: "rgba(28,20,16,0.5)", margin: 0, fontWeight: 600 }}>
              Terese Bengard
            </p>
          </div>
        </div>
      </section>

      {/* Bakgrund */}
      <section style={{ padding: "0 80px 120px", background: "#FDFAF8" }} className="tb-om-bg">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 600, margin: "0 0 40px",
          }}>
            Bakgrund & erfarenhet
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {meriter.map((m, i) => (
              <div key={i} style={{
                padding: "40px 0",
                borderTop: "1px solid rgba(28,20,16,0.08)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                alignItems: "start",
              }} className="tb-merit-row">
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                  fontWeight: 700,
                  color: "#1C1410",
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(28,20,16,0.55)", margin: 0 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KontaktCTA />

      <style>{`
        @media (max-width: 768px) {
          .tb-om-intro { padding: 80px 32px !important; }
          .tb-om-bg { padding: 0 32px 80px !important; }
          .tb-merit-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </main>
  );
}
