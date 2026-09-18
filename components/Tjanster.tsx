"use client";

import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    label: "Föreläsare",
    heading: "Nya perspektiv på landsbygd och plats.",
    body: "Terese utmanar etablerade sanningar och slår hål på myter. Skräddarsydda föreläsningar om landsbygd, urban norm, beredskap och platsutveckling.",
    cta: "Läs mer",
    href: "/forelasningar",
    bg: "#E8D5D9",
  },
  {
    label: "Moderator",
    heading: "Leder samtal med kunskap och humor.",
    body: "Kunnig, engagerad och lyhörd. Terese skapar trygghet i rummet och driver samtal framåt med precision och personlighet.",
    cta: "Läs mer",
    href: "/moderator",
    bg: "#DDD0CB",
  },
  {
    label: "Boksamtal",
    heading: "Världens mittpunkt – till landsbygdernas försvar.",
    body: "Inspirerande boksamtal med dialog och reflektion. Terese väcker tankar om stad och land, centrum och periferi, identitet och tillhörighet.",
    cta: "Om boken",
    href: "/boken",
    bg: "#C9B8B3",
  },
];

export default function Tjanster() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{ background: "#FDFAF8", padding: "96px 80px" }} className="tb-tjanster-section">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#C4607A", fontWeight: 600, margin: "0 0 16px",
        }}>
          Vad kan du boka?
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(1.8rem, 2.8vw, 3.2rem)",
          fontWeight: 700, color: "#1C1410", margin: 0, lineHeight: 1.1,
        }}>
          Boka Terese till ditt nästa event.
        </h2>
      </div>

      <div className="tb-tjanster-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
      }}>
        {cards.map((card, i) => (
          <Link
            key={i}
            href={card.href}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              overflow: "hidden",
              borderRadius: 12,
              textDecoration: "none",
              minHeight: 460,
              background: card.bg,
              transform: hov === i ? "translateY(-4px)" : "translateY(0)",
              boxShadow: hov === i ? "0 16px 48px rgba(28,20,16,0.15)" : "0 2px 12px rgba(28,20,16,0.06)",
              transition: "transform 0.35s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
          >
            <div style={{ padding: "40px 36px" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase",
                color: "#C4607A", fontWeight: 600, margin: "0 0 14px",
              }}>
                {card.label}
              </p>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.3rem, 1.8vw, 1.9rem)",
                fontWeight: 700, lineHeight: 1.15,
                color: "#1C1410", margin: "0 0 14px",
              }}>
                {card.heading}
              </h3>
              <p style={{
                fontSize: 13, lineHeight: 1.75,
                color: "rgba(28,20,16,0.6)", margin: "0 0 28px",
              }}>
                {card.body}
              </p>
              <span style={{
                fontSize: 13, fontWeight: 600,
                color: "#C4607A",
                borderBottom: "1px solid #C4607A",
                paddingBottom: 2,
              }}>
                {card.cta} →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Link href="/kontakt" className="tb-btn" style={{
          display: "inline-flex", alignItems: "center",
          fontSize: 13, letterSpacing: "0.05em", fontWeight: 700,
          background: "#1C1410", color: "#FDFAF8",
          textDecoration: "none", padding: "15px 48px", borderRadius: 4,
        }}>
          Boka mig
        </Link>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tb-tjanster-grid { grid-template-columns: 1fr !important; }
          .tb-tjanster-section { padding: 64px 32px !important; }
        }
      `}</style>
    </section>
  );
}
