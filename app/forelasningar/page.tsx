import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Föreläsningar – Terese Bengard",
  description: "Boka Terese Bengard som föreläsare. Engagerande föreläsningar om landsbygdsfrågor, platsperspektiv, kommunikation och kommunpolitik.",
};

const amnen = [
  {
    title: "Landsbygdsfrågor & platsutveckling",
    badge: "Mest populär",
    body: "Terese utmanar föreställningar om land och stad, centrum och periferi. En föreläsning som ger nya perspektiv på vad landsbygden är, vad den kan vara och varför det spelar roll för hela landet.",
  },
  {
    title: "Den urbana normen",
    badge: null,
    body: "Hur påverkar den urbana normen människor och platser? Terese belyser mekanismer som platsshaming, centrumhets och känslan av att inte finnas på kartan – och vad vi kan göra åt det.",
  },
  {
    title: "Beredskap och sårbarhet",
    badge: null,
    body: "Landsbygden spelar en avgörande roll för samhällets beredskap. Terese lyfter perspektiv på matproduktion, infrastruktur och det lokala samhällets styrkor i en osäker tid.",
  },
  {
    title: "Historiska och framtida perspektiv",
    badge: null,
    body: "Från 1800-talets avfolkning till 2100-talets utmaningar. En föreläsning som sätter nuet i ett längre sammanhang och ger verktyg att tänka långsiktigt om plats och befolkning.",
  },
  {
    title: "Kommunikation & påverkan",
    badge: null,
    body: "Hur kommunicerar du för att nå fram? Terese delar erfarenheter från politiken, media och civilsamhället om att driva frågor, bygga opinion och göra skillnad.",
  },
];

export default function ForelasningarPage() {
  return (
    <main style={{ background: "#FDFAF8" }}>
      <PageHero
        title="Nya perspektiv på landsbygd, plats och människorna som bor där."
        subtitle="Terese skräddarsyr sina föreläsningar efter målgrupp, event och sammanhang. Hon utmanar etablerade sanningar och slår hål på myter."
      />

      {/* Intro */}
      <section style={{ padding: "120px 80px 0" }} className="tb-f-intro">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
            fontWeight: 500,
            lineHeight: 1.7,
            color: "#1C1410",
            margin: 0,
          }}>
            Det viktigaste för mig när jag föreläser är kontakten med publiken. Jag vill beröra och nå in på djupet. Föreläsningarna ska skapa ökad förståelse, ge nya perspektiv och få människor att tänka ett varv till.
          </p>
        </div>
      </section>

      {/* Ämnen */}
      <section style={{ padding: "80px 80px 120px" }} className="tb-f-amnen">
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          {amnen.map((a, i) => (
            <div key={i} style={{
              background: "#F5EEE9",
              borderRadius: 8,
              padding: "48px 56px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                  fontWeight: 700,
                  color: "#1C1410",
                  margin: 0, lineHeight: 1.2,
                }}>
                  {a.title}
                </h2>
                {a.badge && (
                  <span style={{
                    background: "#C4607A", color: "#ffffff",
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.15em",
                    textTransform: "uppercase", padding: "4px 12px",
                    borderRadius: 50, whiteSpace: "nowrap",
                  }}>
                    {a.badge}
                  </span>
                )}
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(28,20,16,0.65)", margin: 0 }}>
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <KontaktCTA />

      <style>{`
        @media (max-width: 768px) {
          .tb-f-intro { padding: 80px 32px 0 !important; }
          .tb-f-amnen { padding: 48px 32px 80px !important; }
          .tb-f-amnen > div > div { padding: 36px 28px !important; }
        }
      `}</style>
    </main>
  );
}
