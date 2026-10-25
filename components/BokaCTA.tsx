import Link from "next/link";

export default function BokaCTA() {
  return (
    <section style={{
      background: "#3B1142",
      padding: "120px 80px",
      position: "relative",
      overflow: "hidden",
    }} className="tb-boka-cta">
      <div style={{
        maxWidth: 820,
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#F39AFA", fontWeight: 600, margin: "0 0 20px",
        }}>
          Kom i kontakt
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
          fontWeight: 700, lineHeight: 1.1,
          color: "#ffffff", margin: "0 0 20px",
          letterSpacing: "-0.01em",
        }}>
          Boka Terese.
        </h2>
        <p style={{
          fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.75)",
          margin: "0 auto 40px",
          maxWidth: 560,
        }}>
          Berätta om ert event och vad ni söker. Terese läser varje förfrågan själv och återkommer personligen.
        </p>
        <Link
          href="/kontakt"
          className="tb-btn"
          style={{
            display: "inline-flex", alignItems: "center",
            fontSize: 13, fontWeight: 700,
            background: "#F39AFA", color: "#1A0F2E",
            textDecoration: "none", padding: "16px 40px",
            borderRadius: 4, letterSpacing: "0.05em",
          }}
        >
          Skicka förfrågan
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-boka-cta { padding: 80px 32px !important; }
        }
      `}</style>
    </section>
  );
}
