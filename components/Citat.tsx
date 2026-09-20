"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    quote: "Terese Bengard kombinerar djup kunskap om landsbygdsfrågor med en förmåga att nå fram till publiken på ett personligt och engagerande sätt. Föreläsningen gav oss nya perspektiv och satte igång viktiga samtal.",
    name: "Konferensdeltagare",
    title: "Kommunkonferens",
  },
  {
    quote: "Som moderator skapar Terese en trygghet i rummet som gör att alla vågar delta. Hon lyssnar aktivt, ställer rätt frågor och driver samtalet framåt med både humor och skärpa.",
    name: "Arrangör",
    title: "Regional konferens",
  },
  {
    quote: "Boksamtalet med Terese var en fantastisk upplevelse. Hon väcker tankar och skapar dialog kring frågor som ofta förbises. Världens mittpunkt är ett måste.",
    name: "Bibliotekarie",
    title: "Folkbiblioteket",
  },
  {
    quote: "Terese utmanar föreställningar på ett respektfullt men bestämt sätt. Hennes föreläsning om den urbana normen var ögonöppnande för många i vår organisation.",
    name: "HR-chef",
    title: "Region Norrland",
  },
];

export default function Citat() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handler = () => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, idx) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - trackCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = idx;
        }
      });
      setActive(closest);
    };
    handler();
    track.addEventListener("scroll", handler, { passive: true });
    return () => track.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>("[data-card]")[idx];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <section style={{ background: "#FDFAF8", padding: "120px 0 100px" }} className="tb-citat-section">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px 48px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32 }} className="tb-citat-head">
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#C4607A", fontWeight: 600, margin: 0,
        }}>
          Vad de säger
        </p>
        <div style={{ display: "flex", gap: 8 }} className="tb-citat-nav">
          <button
            type="button"
            aria-label="Föregående"
            onClick={() => scrollTo(Math.max(0, active - 1))}
            style={arrowStyle(active === 0)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Nästa"
            onClick={() => scrollTo(Math.min(reviews.length - 1, active + 1))}
            style={arrowStyle(active === reviews.length - 1)}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="tb-citat-track"
        style={{
          display: "flex",
          gap: 28,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "8px 80px 40px",
          scrollbarWidth: "none",
        }}
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            data-card
            className="tb-citat-card"
            style={{
              flex: "0 0 auto",
              width: "min(560px, 82vw)",
              scrollSnapAlign: "center",
              background: "#ffffff",
              border: "1px solid rgba(28,20,16,0.08)",
              borderRadius: 6,
              padding: "48px 44px",
              boxShadow: i === active ? "0 20px 40px -24px rgba(28,20,16,0.18)" : "0 6px 18px -14px rgba(28,20,16,0.08)",
              transform: i === active ? "translateY(0)" : "translateY(6px)",
              opacity: i === active ? 1 : 0.72,
              transition: "opacity 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <span aria-hidden style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "#C4607A",
              lineHeight: 0.8,
              display: "block",
            }}>
              &ldquo;
            </span>
            <p style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.05rem, 1.35vw, 1.3rem)",
              lineHeight: 1.7,
              color: "#1C1410",
              margin: 0,
              flex: 1,
            }}>
              {r.quote}
            </p>
            <div style={{ borderTop: "1px solid rgba(28,20,16,0.08)", paddingTop: 18 }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13, fontWeight: 600,
                color: "#1C1410", margin: 0,
              }}>
                {r.name}
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                color: "rgba(28,20,16,0.55)", margin: "4px 0 0",
              }}>
                {r.title}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, margin: "8px 0 40px" }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Gå till recension ${i + 1}`}
            onClick={() => scrollTo(i)}
            style={{
              width: i === active ? 28 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              background: i === active ? "#C4607A" : "rgba(28,20,16,0.18)",
              cursor: "pointer",
              transition: "width 0.25s ease, background 0.25s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="/kontakt" style={{
          fontFamily: "var(--font-sans)",
          display: "inline-flex", alignItems: "center",
          fontSize: 13, fontWeight: 700,
          background: "#C4607A", color: "#ffffff",
          textDecoration: "none", padding: "14px 40px", borderRadius: 3,
        }}>
          Boka Terese
        </Link>
      </div>

      <style>{`
        .tb-citat-track::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .tb-citat-section { padding: 80px 0 72px !important; }
          .tb-citat-head { padding: 0 28px 32px !important; }
          .tb-citat-track { padding: 8px 28px 32px !important; gap: 16px !important; }
          .tb-citat-card { padding: 36px 28px !important; }
        }
      `}</style>
    </section>
  );
}

function arrowStyle(disabled: boolean): React.CSSProperties {
  return {
    width: 40, height: 40, borderRadius: 999,
    border: "1px solid rgba(28,20,16,0.15)",
    background: disabled ? "transparent" : "#ffffff",
    color: disabled ? "rgba(28,20,16,0.25)" : "#1C1410",
    cursor: disabled ? "default" : "pointer",
    fontSize: 16,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    transition: "background 0.2s ease, border-color 0.2s ease",
  };
}
