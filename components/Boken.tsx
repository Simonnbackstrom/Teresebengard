import Link from "next/link";
import Image from "next/image";

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
        <div style={{
          position: "relative",
          aspectRatio: "425/595",
          maxWidth: 340,
          width: "100%",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.65), 0 12px 28px -12px rgba(0,0,0,0.5)",
          transform: "rotate(-2deg)",
        }}>
          <Image
            src="/varldens-mittpunkt.png"
            alt="Bokomslag: Världens Mittpunkt – till landsbygdernas försvar av Terese Bengard"
            fill
            sizes="(max-width: 900px) 80vw, 340px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3.2vw, 3rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#F39AFA",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
          }}>
            Boken
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(2rem, 3vw, 3.5rem)",
            fontWeight: 500, lineHeight: 1.1,
            color: "#ffffff", margin: 0,
          }}>
            Världens mittpunkt till landsbygdernas försvar.
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.85,
            color: "rgba(253,250,248,0.65)",
            margin: 0, maxWidth: 460,
          }}>
            Med humor och värme benar Terese ut sanningar och myter om stad och land. Om centrum och periferi, den urbana normen, platsshaming och känslan av att inte finnas på kartan.
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
                background: "#882B8D", color: "#ffffff",
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
