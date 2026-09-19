"use client";

import Link from "next/link";
import { useState } from "react";

const items = [
  {
    nr: "01",
    label: "Föreläsare",
    heading: "Nya perspektiv på landsbygd, plats och de människor som bor där.",
    body: "Terese utmanar etablerade sanningar och slår hål på myter. Skräddarsydda föreläsningar om landsbygd, urban norm, beredskap och platsutveckling.",
    href: "/forelasningar",
  },
  {
    nr: "02",
    label: "Moderator",
    heading: "Leder samtal med kunskap, engagemang och humor.",
    body: "Kunnig, lyhörd och engagerad. Terese skapar trygghet i rummet och driver samtal framåt med precision och personlighet.",
    href: "/moderator",
  },
  {
    nr: "03",
    label: "Boksamtal",
    heading: "Världens mittpunkt – en bok om landsbygdernas försvar.",
    body: "Inspirerande boksamtal med dialog och reflektion kring stad och land, centrum och periferi, identitet och tillhörighet.",
    href: "/boken",
  },
];

export default function Tjanster() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section style={{ background: "#F5EEE9", padding: "100px 80px" }} className="tb-tjanster-section">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#C4607A", fontWeight: 600, margin: "0 0 60px",
        }}>
          Vad kan du boka?
        </p>

        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              alignItems: "start",
              gap: "0 40px",
              padding: "40px 0",
              borderTop: "1px solid rgba(28,20,16,0.12)",
              textDecoration: "none",
              transition: "opacity 0.2s",
              opacity: hov !== null && hov !== i ? 0.4 : 1,
            }}
            className="tb-tjanster-row"
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
          >
            <span style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 700,
              color: "rgba(28,20,16,0.15)",
              lineHeight: 1,
              paddingTop: 4,
            }}>
              {item.nr}
            </span>

            <div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
                color: "#C4607A", fontWeight: 600, margin: "0 0 12px",
              }}>
                {item.label}
              </p>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)",
                fontWeight: 700, lineHeight: 1.15,
                color: "#1C1410", margin: "0 0 14px",
              }}>
                {item.heading}
              </h3>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15, lineHeight: 1.75,
                color: "rgba(28,20,16,0.55)", margin: 0,
                maxWidth: 560,
              }}>
                {item.body}
              </p>
            </div>

            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13, fontWeight: 600,
              color: hov === i ? "#C4607A" : "rgba(28,20,16,0.35)",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
              paddingTop: 6,
            }}>
              Läs mer →
            </span>
          </Link>
        ))}

        <div style={{ borderTop: "1px solid rgba(28,20,16,0.12)", paddingTop: 48, marginTop: 0 }}>
          <Link href="/kontakt" style={{
            display: "inline-flex", alignItems: "center",
            fontFamily: "var(--font-sans)",
            fontSize: 13, letterSpacing: "0.05em", fontWeight: 700,
            background: "#C4607A", color: "#ffffff",
            textDecoration: "none", padding: "14px 40px", borderRadius: 3,
          }}>
            Boka mig
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .tb-tjanster-section { padding: 64px 28px !important; }
          .tb-tjanster-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .tb-tjanster-row span:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
