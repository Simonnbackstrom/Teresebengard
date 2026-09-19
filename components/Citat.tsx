import Link from "next/link";

const reviews = [
  {
    quote: "Terese Bengard kombinerar djup kunskap om landsbygdsfrågor med en förmåga att nå fram till publiken på ett personligt och engagerande sätt. Föreläsningen gav oss nya perspektiv och satte igång viktiga samtal.",
    name: "Konferensdeltagare",
    title: "Kommunkonferens",
  },
  {
    quote: "Som moderator skapar Terese en trygghet i rummet som gör att alla vågar delta. Hon lyssnar aktivt, ställer rätt frågor och driver samtalet framåt med både humor och skärpa.",
    name: "Arrangör",
    title: "Regional konferens",
  },
  {
    quote: "Boksamtalet med Terese var en fantastisk upplevelse. Hon väcker tankar och skapar dialog kring frågor som ofta förbises. Världens mittpunkt är ett måste.",
    name: "Bibliotekarie",
    title: "Folkbiblioteket",
  },
  {
    quote: "Terese utmanar föreställningar på ett respektfullt men bestämt sätt. Hennes föreläsning om den urbana normen var ögonöppnande för många i vår organisation.",
    name: "HR-chef",
    title: "Region Norrland",
  },
];

export default function Citat() {
  return (
    <section style={{ background: "#FDFAF8", padding: "120px 80px" }} className="tb-citat-section">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#C4607A", fontWeight: 600, margin: "0 0 72px",
        }}>
          Vad de säger
        </p>

        {reviews.map((r, i) => (
          <div key={i} style={{
            borderTop: "1px solid rgba(28,20,16,0.1)",
            padding: "52px 0",
            display: "grid",
            gridTemplateColumns: "64px 1fr",
            gap: "0 32px",
          }} className="tb-citat-row">
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "5rem",
              fontWeight: 700,
              color: "#C4607A",
              lineHeight: 0.8,
              userSelect: "none",
            }}>
              &ldquo;
            </span>
            <div>
              <p style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                lineHeight: 1.65,
                color: "#1C1410",
                margin: "0 0 24px",
              }}>
                {r.quote}
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13, fontWeight: 500,
                color: "rgba(28,20,16,0.5)",
                margin: 0,
              }}>
                {r.name} &middot; {r.title}
              </p>
            </div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid rgba(28,20,16,0.1)", paddingTop: 52 }}>
          <Link href="/kontakt" style={{
            fontFamily: "var(--font-sans)",
            display: "inline-flex", alignItems: "center",
            fontSize: 13, fontWeight: 700,
            background: "#C4607A", color: "#ffffff",
            textDecoration: "none", padding: "14px 40px", borderRadius: 3,
          }}>
            Boka Terese
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-citat-section { padding: 80px 28px !important; }
          .tb-citat-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
