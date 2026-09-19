import Link from "next/link";
import Image from "next/image";

export default function OmPreview() {
  return (
    <section style={{ background: "#FDFAF8", padding: "120px 80px" }} className="tb-om-section">
      <div className="tb-om-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {/* Foto */}
        <div style={{
          borderRadius: 4,
          aspectRatio: "4/5",
          position: "relative",
          overflow: "hidden",
        }}>
          <Image
            src="/terese-portatt.jpg"
            alt="Terese Bengard"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#C4607A", fontWeight: 600, margin: 0,
          }}>
            Om Terese
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 2.8vw, 3.2rem)",
            fontWeight: 700, lineHeight: 1.1,
            color: "#1C1410", margin: 0,
          }}>
            Kvinna på landsbygden som förändrar samtalet.
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.85,
            color: "rgba(28,20,16,0.6)",
            margin: 0, maxWidth: 440,
          }}>
            Terese Bengard är föreläsare, författare och utbildad kommunikatör. Hennes drivkraft är att förändra synen på landsbygden och människorna som bor där.
          </p>
          <p style={{
            fontSize: 16, lineHeight: 1.85,
            color: "rgba(28,20,16,0.6)",
            margin: 0, maxWidth: 440,
          }}>
            Hon har varit ordförande i kommunstyrelsen, är ledamot i Småföretagarnas Riksförbund och är mångårig krönikör. Hennes uppdrag kommer från kommuner, regioner och konferensarrangörer i hela landet.
          </p>
          <Link href="/om" style={{
            fontSize: 14, fontWeight: 600,
            color: "#1C1410", textDecoration: "none",
            display: "inline-flex", alignItems: "center",
            padding: "13px 28px",
            border: "2px solid #1C1410",
            borderRadius: 4,
            alignSelf: "flex-start",
          }}>
            Läs mer om mig →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tb-om-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .tb-om-section { padding: 80px 32px !important; }
        }
      `}</style>
    </section>
  );
}
