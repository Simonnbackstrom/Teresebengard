import Link from "next/link";

const reviews = [
  {
    quote: "Terese Bengard är en föreläsare som verkligen berör. Hon kombinerar djup kunskap om landsbygdsfrågor med en förmåga att nå fram till publiken på ett personligt och engagerande sätt. Föreläsningen gav oss nya perspektiv och satte igång viktiga samtal.",
    name: "Konferensdeltagare",
    title: "Kommunkonferens",
  },
  {
    quote: "Som moderator skapar Terese en trygghet i rummet som gör att alla vågar delta. Hon lyssnar aktivt, ställer rätt frågor och driver samtalet framåt med både humor och skärpa.",
    name: "Arrangör",
    title: "Regional konferens",
  },
  {
    quote: "Boksamtalet med Terese var en fantastisk upplevelse. Hon har en unik förmåga att väcka tankar och skapa dialog. Boken Världens mittpunkt är ett måste för alla som är intresserade av landsbygdsfrågor.",
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
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#C4607A", fontWeight: 600, margin: "0 0 16px",
        }}>
          Vad de säger
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(1.8rem, 2.8vw, 3rem)",
          fontWeight: 700, color: "#1C1410", margin: 0, lineHeight: 1.1,
        }}>
          Det säger de som bokat Terese.
        </h2>
      </div>

      <div className="tb-citat-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2,
        maxWidth: 1100,
        margin: "0 auto 64px",
      }}>
        {reviews.map((r, i) => (
          <div key={i} style={{
            padding: "44px 40px",
            background: i % 2 === 1 ? "#F5EEE9" : "#FDFAF8",
            borderTop: "2px solid #C4607A",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}>
            <span style={{ color: "#C4607A", fontSize: 15, letterSpacing: 3 }}>★★★★★</span>
            <p style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: 15, lineHeight: 1.9,
              color: "rgba(28,20,16,0.75)",
              margin: 0, flexGrow: 1,
            }}>
              &ldquo;{r.quote}&rdquo;
            </p>
            <div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#1C1410" }}>{r.name}</p>
              <p style={{ margin: "4px 0 0", fontSize: 12, color: "rgba(28,20,16,0.4)" }}>{r.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <Link href="/kontakt" className="tb-btn" style={{
          display: "inline-flex", alignItems: "center",
          fontSize: 13, fontWeight: 700,
          background: "#C4607A", color: "#ffffff",
          textDecoration: "none", padding: "15px 40px", borderRadius: 4,
        }}>
          Boka Terese
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-citat-grid { grid-template-columns: 1fr !important; }
          .tb-citat-section { padding: 80px 32px !important; }
        }
      `}</style>
    </section>
  );
}
