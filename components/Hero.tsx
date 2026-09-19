"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="tb-hero" style={{
      position: "relative",
      minHeight: "100svh",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
    }}>
      {/* Bakgrundsfoto – Terese vid sjön i rosa kavaj */}
      <Image
        src="/terese-sjo.jpg"
        alt="Terese Bengard"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
        sizes="100vw"
      />

      {/* Gradient nerifrån */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(20,14,12,0.72) 0%, rgba(20,14,12,0.25) 55%, transparent 100%)",
      }} />

      {/* Textinnehåll */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 64px 96px",
      }} className="tb-hero-content">
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.65)",
          fontWeight: 500,
          margin: "0 0 24px",
        }}>
          Föreläsare · Författare · Moderator
        </p>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(3.2rem, 7vw, 8rem)",
          fontWeight: 700,
          lineHeight: 0.95,
          color: "#ffffff",
          margin: "0 0 48px",
          letterSpacing: "-0.02em",
          maxWidth: 800,
        }}>
          Förändrar<br />synen på<br />landsbygden.
        </h1>

        <div style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          <Link href="/kontakt" style={{
            fontSize: 13,
            letterSpacing: "0.05em",
            fontWeight: 700,
            background: "#C4607A",
            color: "#ffffff",
            textDecoration: "none",
            padding: "15px 40px",
            borderRadius: 3,
            whiteSpace: "nowrap",
          }}>
            Boka mig
          </Link>
          <Link href="/forelasningar" style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            fontWeight: 500,
            borderBottom: "1px solid rgba(255,255,255,0.35)",
            paddingBottom: 2,
            whiteSpace: "nowrap",
          }}>
            Mina föreläsningar →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-hero-content { padding: 0 28px 72px !important; }
        }
      `}</style>
    </section>
  );
}
