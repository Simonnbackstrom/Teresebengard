import Link from "next/link";

export default function Boken() {
  return (
    <section style={{ background: "#2A1F1A", padding: "120px 80px" }} className="tb-boken-section">
      <div className="tb-boken-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {/* Bokomslag-placeholder */}
        <div style={{
          background: "#C4607A",
          borderRadius: 8,
          aspectRatio: "2/3",
          maxWidth: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          textAlign: "center",
          boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
        }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 2vw, 2rem)",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 16px",
            lineHeight: 1.2,
          }}>
            Världens mittpunkt
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.1em",
            margin: "0 0 32px",
            textTransform: "uppercase",
          }}>
            till landsbygdernas försvar
          </p>
          <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.4)" }} />
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
            margin: "16px 0 0",
            letterSpacing: "0.05em",
          }}>
            Terese Bengard
          </p>
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#C4607A", fontWeight: 600, margin: 0,
          }}>
            Boken
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(2rem, 3vw, 3.5rem)",
            fontWeight: 700, lineHeight: 1.05,
            color: "#ffffff", margin: 0,
          }}>
            Världens mittpunkt – till landsbygdernas försvar.
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.85,
            color: "rgba(253,250,248,0.65)",
            margin: 0, maxWidth: 460,
          }}>
            Med humor och värme benar Terese ut sanningar och myter om stad och land. Om centrum och periferi, den urbana normen, platsshaming och känslan av att inte finnas på kartan.
          </p>
          <p style={{
            fontSize: 13, color: "rgba(253,250,248,0.4)",
            margin: 0,
          }}>
            Mondial · 28 mars 2024 · 255 sidor
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
            <a
              href="https://www.adlibris.com/se/bok/varldens-mittpunkt-till-landsbygdernas-forsvar-9789172227934"
              target="_blank"
              rel="noopener noreferrer"
              className="tb-btn"
              style={{
                display: "inline-flex", alignItems: "center",
                fontSize: 13, fontWeight: 700,
                background: "#C4607A", color: "#ffffff",
                textDecoration: "none", padding: "14px 32px", borderRadius: 4,
              }}
            >
              Köp boken
            </a>
            <Link href="/boken" style={{
              display: "inline-flex", alignItems: "center",
              fontSize: 13, fontWeight: 500,
              color: "rgba(253,250,248,0.6)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(253,250,248,0.2)",
              paddingBottom: 2,
            }}>
              Om boksamtal →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tb-boken-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .tb-boken-section { padding: 80px 32px !important; }
        }
      `}</style>
    </section>
  );
}
