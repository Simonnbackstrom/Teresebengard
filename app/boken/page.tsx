import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Världens mittpunkt – Terese Bengard",
  description: "Terese Bengards bok Världens mittpunkt – till landsbygdernas försvar. Benar ut sanningar och myter om stad och land.",
};

const boksamtalsAmnen = [
  "Synen på människor som bor på landsbygden",
  "Den norrländska kvinnan",
  "Föreställningen om att staden är normen",
  "Centrum och periferi",
  "Platsshaming och andra begrepp kopplade till plats och identitet",
];

export default function BokenPage() {
  return (
    <main style={{ background: "#FDFAF8" }}>
      <PageHero
        title="Världens mittpunkt – till landsbygdernas försvar."
        subtitle="Med humor och värme benar Terese Bengard ut sanningar och myter om stad och land."
        bg="#2A1F1A"
      />

      {/* Om boken */}
      <section style={{ padding: "120px 80px" }} className="tb-bok-section">
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }} className="tb-bok-grid">
          {/* Bokomslag */}
          <div style={{
            background: "#882B8D",
            borderRadius: 8,
            aspectRatio: "2/3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            textAlign: "center",
            boxShadow: "0 16px 48px rgba(28,20,16,0.15)",
          }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
              fontWeight: 700, color: "#ffffff",
              margin: "0 0 12px", lineHeight: 1.2,
            }}>
              Världens mittpunkt
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11, color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.1em", margin: "0 0 32px",
              textTransform: "uppercase",
            }}>
              till landsbygdernas försvar
            </p>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.4)" }} />
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12, color: "rgba(255,255,255,0.5)",
              margin: "16px 0 0", letterSpacing: "0.05em",
            }}>
              Terese Bengard
            </p>
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
              color: "#882B8D", fontWeight: 600, margin: 0,
            }}>
              Om boken
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 2.4vw, 2.8rem)",
              fontWeight: 700, lineHeight: 1.1, color: "#1C1410", margin: 0,
            }}>
              En bok om att finnas på kartan.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(28,20,16,0.65)", margin: 0 }}>
              I boken benar Terese ut sanningar och myter om stad och land. Med humor och värme tar hon upp centrum och periferi, den urbana normen, begreppsförvirring, centrumhets, platsshaming och känslan av att inte finnas på kartan.
            </p>
            <p style={{ fontSize: 13, color: "rgba(28,20,16,0.4)", margin: 0 }}>
              Mondial · 28 mars 2024 · 255 sidor
            </p>
            <a
              href="https://www.adlibris.com/se/bok/varldens-mittpunkt-till-landsbygdernas-forsvar-9789172227934"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", alignSelf: "flex-start",
                fontSize: 13, fontWeight: 700,
                background: "#882B8D", color: "#ffffff",
                textDecoration: "none", padding: "14px 32px", borderRadius: 4,
              }}
            >
              Köp boken →
            </a>
          </div>
        </div>
      </section>

      {/* Boksamtal */}
      <section style={{ background: "#F5EEE9", padding: "120px 80px" }} className="tb-boksamtal-section">
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 600, margin: "0 0 24px",
          }}>
            Boksamtal
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 2.6vw, 3rem)",
            fontWeight: 700, lineHeight: 1.1, color: "#1C1410",
            margin: "0 0 24px",
          }}>
            Inspiration och dialog kring bok och ämne.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(28,20,16,0.65)", margin: "0 0 40px" }}>
            Terese erbjuder boksamtal med inspiration och dialog – för bibliotek, studiecirklar, konferenser och föreningar. Samtalen berör bland annat:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 48px", display: "flex", flexDirection: "column", gap: 14 }}>
            {boksamtalsAmnen.map((a, i) => (
              <li key={i} style={{
                fontSize: 15, color: "rgba(28,20,16,0.65)",
                display: "flex", alignItems: "flex-start", gap: 14,
                lineHeight: 1.6,
              }}>
                <span style={{ width: 18, height: 1, background: "#882B8D", display: "inline-block", flexShrink: 0, marginTop: 11 }} />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <KontaktCTA />

      <style>{`
        @media (max-width: 768px) {
          .tb-bok-section { padding: 80px 32px !important; }
          .tb-bok-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .tb-boksamtal-section { padding: 80px 32px !important; }
        }
      `}</style>
    </main>
  );
}
