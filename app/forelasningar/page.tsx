import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import KontaktCTA from "@/components/KontaktCTA";

export const metadata: Metadata = {
  title: "Föreläsningar & moderator – Terese Bengard",
  description: "Boka Terese Bengard som föreläsare eller moderator. Föreläsningar om landsbygdsfrågor, urban norm och beredskap – samt moderatorskap och boksamtal.",
};

const amnen = [
  {
    title: "Landsbygdsfrågor & platsutveckling",
    badge: "Mest populär",
    body: "Terese utmanar föreställningar om land och stad, centrum och periferi. En föreläsning som ger nya perspektiv på vad landsbygderna är, vad de kan vara och varför det spelar roll för hela landet.",
  },
  {
    title: "Den urbana normen",
    badge: null,
    body: "Hur påverkar den urbana normen människor och platser? Terese belyser mekanismer som platsshaming, centrumhets och känslan av att inte finnas på kartan – och vad vi kan göra åt det.",
  },
  {
    title: "Beredskap och sårbarhet",
    badge: null,
    body: "Landsbygderna spelar en avgörande roll för samhällets beredskap. Terese lyfter perspektiv på matproduktion, infrastruktur och det lokala samhällets styrkor i en osäker tid.",
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

const boksamtalsAmnen = [
  "Synen på människor som bor på landsbygderna",
  "Den norrländska kvinnan",
  "Föreställningen om att staden är normen",
  "Centrum och periferi",
  "Platsshaming och andra begrepp kopplade till plats och identitet",
];

export default function ForelasningarPage() {
  return (
    <main style={{ background: "#FDFAF8" }}>
      <PageHero
        title="Föreläsningar och moderatorskap med platsperspektiv."
        subtitle="Terese skräddarsyr föreläsningar och leder samtal med kunskap, engagemang och humor. Utmanar etablerade sanningar och slår hål på myter."
      />

      {/* Föreläsningar — intro */}
      <section id="forelasningar" style={{ padding: "120px 80px 0" }} className="tb-f-intro">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 600, margin: "0 0 24px",
          }}>
            Föreläsningar
          </p>
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

      {/* Föreläsningar — ämnen */}
      <section style={{ padding: "56px 80px 120px" }} className="tb-f-amnen">
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
                    background: "#882B8D", color: "#ffffff",
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

      {/* Moderator — egenskaper */}
      <section id="moderator" style={{ padding: "0 80px 40px", background: "#FDFAF8" }} className="tb-mod-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 600, margin: "0 0 24px",
          }}>
            Moderator
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 2.6vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.15,
            color: "#1C1410", margin: "0 0 8px",
            letterSpacing: "-0.01em",
          }}>
            Leder samtal med kunskap, engagemang och humor.
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.85,
            color: "rgba(28,20,16,0.65)",
            margin: 0, maxWidth: 720,
          }}>
            Terese skapar trygghet i rummet och driver samtal framåt med precision och personlighet — kunnig, förberedd och lyhörd.
          </p>
          {egenskaper.map((e, i) => (
            <div key={i} style={{
              padding: "40px 0",
              borderTop: "1px solid rgba(28,20,16,0.08)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "start",
              marginTop: i === 0 ? 48 : 0,
            }} className="tb-egenskap-row">
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                fontWeight: 700, color: "#1C1410",
                margin: 0, lineHeight: 1.2,
              }}>
                {e.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(28,20,16,0.55)", margin: 0 }}>
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Moderator — passar för */}
      <section style={{ background: "#2A1F1A", padding: "120px 80px" }} className="tb-format-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#F39AFA", fontWeight: 600, margin: "0 0 32px",
          }}>
            Passar för
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
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

      {/* Boksamtal */}
      <section id="boksamtal" style={{ background: "#F5EEE9", padding: "120px 80px" }} className="tb-boksamtal-section">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(28,20,16,0.65)", margin: "0 0 40px", maxWidth: 720 }}>
            Terese erbjuder boksamtal med inspiration och dialog – för bibliotek, studiecirklar, konferenser och föreningar. Samtalen berör bland annat:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
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
          .tb-f-intro { padding: 80px 32px 0 !important; }
          .tb-f-amnen { padding: 40px 32px 64px !important; }
          .tb-f-amnen > div > div { padding: 36px 28px !important; }
          .tb-mod-section { padding: 0 32px 24px !important; }
          .tb-egenskap-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .tb-format-section { padding: 80px 32px !important; }
          .tb-boksamtal-section { padding: 80px 32px !important; }
        }
      `}</style>
    </main>
  );
}
