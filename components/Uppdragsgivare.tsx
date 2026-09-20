import Image from "next/image";

const kunder = [
  "Sparbankernas Riksförbund",
  "Hälsa PåRikTigt",
  "Kommuner & Regioner",
  "Landsbygdsnätverket",
  "LRF",
  "Region Dalarna",
  "Folkbildningsförbundet",
  "Sparbankernas Riksförbund",
  "Hälsa PåRikTigt",
  "Kommuner & Regioner",
  "Landsbygdsnätverket",
  "LRF",
  "Region Dalarna",
  "Folkbildningsförbundet",
];

export default function Uppdragsgivare() {
  return (
    <section style={{ background: "#FDFAF8", padding: "88px 0 80px", overflow: "hidden" }} className="tb-uppdrag-section">
      <div style={{ padding: "0 80px", maxWidth: 1260, margin: "0 auto 56px" }} className="tb-uppdrag-header">
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(28,20,16,0.35)",
          fontWeight: 600,
          margin: 0,
        }}>
          Uppdragsgivare &amp; arrangörer
        </p>
      </div>

      {/* Logga-rad med Hälsa PåRikTigt + text-markerare */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 64,
        padding: "0 80px",
        maxWidth: 1260,
        margin: "0 auto 56px",
        flexWrap: "wrap",
      }} className="tb-uppdrag-logos">
        <div style={{ position: "relative", height: 52, width: 180, flexShrink: 0 }}>
          <Image
            src="/logo-halsa-pa-riktigt.png"
            alt="Hälsa PåRikTigt"
            fill
            style={{ objectFit: "contain", objectPosition: "left center" }}
          />
        </div>

        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.05rem",
          color: "rgba(28,20,16,0.3)",
          letterSpacing: "0.01em",
          lineHeight: 1.4,
        }}>
          Sparbankernas Riksförbund · LRF · Region Dalarna<br />
          Folkbildningsförbundet · Kommuner & Regioner
        </div>
      </div>

      {/* Rullande namnband */}
      <div style={{ overflow: "hidden", borderTop: "1px solid rgba(28,20,16,0.06)", borderBottom: "1px solid rgba(28,20,16,0.06)", padding: "18px 0" }}>
        <div className="tb-marquee-track" style={{
          display: "flex",
          gap: 80,
          width: "max-content",
          animation: "marquee 28s linear infinite",
        }}>
          {kunder.map((k, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(28,20,16,0.25)",
              whiteSpace: "nowrap",
            }}>
              {k}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-uppdrag-header { padding: 0 28px !important; }
          .tb-uppdrag-logos { padding: 0 28px !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
