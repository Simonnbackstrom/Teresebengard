"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      background: "#FDFAF8",
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "140px 60px 80px",
    }} className="tb-hero">

      {/* Stor rubrik */}
      <div style={{ maxWidth: 1100, margin: "0 auto 0", width: "100%" }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#C4607A",
          fontWeight: 600,
          margin: "0 0 40px",
        }}>
          Föreläsare · Författare · Moderator
        </p>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(3.5rem, 8vw, 9rem)",
          fontWeight: 700,
          lineHeight: 0.95,
          color: "#1C1410",
          margin: "0 0 56px",
          letterSpacing: "-0.02em",
        }}>
          Förändrar<br />synen på<br />landsbygden.
        </h1>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 32,
          borderTop: "1px solid rgba(28,20,16,0.1)",
          paddingTop: 32,
        }} className="tb-hero-bottom">
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            lineHeight: 1.75,
            color: "rgba(28,20,16,0.6)",
            margin: 0,
            maxWidth: 480,
          }}>
            Terese Bengard föreläser, modererar och skriver om landsbygd, plats och människorna som bor utanför storstäderna. Med humor, kunskap och ett skarpt öga för det som ofta förbises.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
            <Link href="/kontakt" style={{
              fontSize: 13,
              letterSpacing: "0.05em",
              fontWeight: 700,
              background: "#C4607A",
              color: "#ffffff",
              textDecoration: "none",
              padding: "14px 36px",
              borderRadius: 3,
              whiteSpace: "nowrap",
            }}>
              Boka mig
            </Link>
            <Link href="/forelasningar" style={{
              fontSize: 13,
              color: "rgba(28,20,16,0.45)",
              textDecoration: "none",
              fontWeight: 500,
              borderBottom: "1px solid rgba(28,20,16,0.2)",
              paddingBottom: 2,
              whiteSpace: "nowrap",
            }}>
              Mina föreläsningar →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-hero { padding: 120px 28px 60px !important; }
          .tb-hero-bottom { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
