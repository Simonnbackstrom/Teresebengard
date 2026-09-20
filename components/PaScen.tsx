import Image from "next/image";

export default function PaScen() {
  return (
    <section style={{ background: "#1C1410", overflow: "hidden" }} className="tb-pascen">
      {/* Fullbredd foto */}
      <div style={{ position: "relative", height: "70vh", minHeight: 480 }}>
        <Image
          src="/terese-panel.jpg"
          alt="Terese Bengard modererar på Sparbankernas Riksförbund, Almedalsveckan"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(28,20,16,0.85) 0%, rgba(28,20,16,0.2) 60%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 80px 64px",
          maxWidth: 1260,
        }} className="tb-pascen-caption">
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            margin: "0 0 12px",
          }}>
            På scen
          </p>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 2.4vw, 2.4rem)",
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.3,
            maxWidth: 640,
          }}>
            "Med humor, kunskap och ett skarpt öga för det som ofta förbises."
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "rgba(255,255,255,0.35)",
            margin: "16px 0 0",
            letterSpacing: "0.05em",
          }}>
            Sparbankernas Riksförbund · Almedalsveckan
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-pascen-caption { padding: 0 28px 48px !important; }
        }
      `}</style>
    </section>
  );
}
