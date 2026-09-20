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

const AUTOPLAY_MS = 6000;
const N = reviews.length;
// Render three sets: [prev-clones | main | next-clones]. Start on main set.
const items = [...reviews, ...reviews, ...reviews];

export default function Citat() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const isJumping = useRef(false);

  const scrollToIndex = (index: number, smooth: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>("[data-card]")[index];
    if (!card) return;
    isJumping.current = !smooth;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: smooth ? "smooth" : "auto",
    });
    if (!smooth) {
      window.setTimeout(() => { isJumping.current = false; }, 40);
    }
  };

  useEffect(() => {
    scrollToIndex(N, false);
    setActive(0);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handler = () => {
      if (isJumping.current) return;
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
      setActive(closest % N);

      // Silently jump to middle set when nearing edges
      if (closest < N) {
        scrollToIndex(closest + N, false);
      } else if (closest >= 2 * N) {
        scrollToIndex(closest - N, false);
      }
    };
    track.addEventListener("scroll", handler, { passive: true });
    return () => track.removeEventListener("scroll", handler);
  }, []);

  const next = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let current = 0, best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - trackCenter);
      if (d < best) { best = d; current = i; }
    });
    scrollToIndex(current + 1, true);
  };

  const prev = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let current = 0, best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - trackCenter);
      if (d < best) { best = d; current = i; }
    });
    scrollToIndex(current - 1, true);
  };

  const goto = (dotIdx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let current = 0, best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - trackCenter);
      if (d < best) { best = d; current = i; }
    });
    const currentRealIdx = current % N;
    const diff = ((dotIdx - currentRealIdx + N) % N);
    const target = current + (diff <= N / 2 ? diff : diff - N);
    scrollToIndex(target, true);
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      style={{ background: "#FDFAF8", padding: "120px 0" }}
      className="tb-citat-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px 64px", textAlign: "center" }} className="tb-citat-head">
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#882B8D",
          fontWeight: 700,
          margin: 0,
          lineHeight: 1,
        }}>
          Recensioner
        </h2>
        <p style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
          color: "rgba(28,20,16,0.55)",
          margin: "18px 0 0",
        }}>
          Vad arrangörer, deltagare och publik säger.
        </p>
      </div>

      <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto", padding: "0 24px" }} className="tb-citat-wrap">
        <button
          type="button"
          aria-label="Föregående recension"
          onClick={prev}
          className="tb-citat-arrow tb-citat-arrow-left"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Nästa recension"
          onClick={next}
          className="tb-citat-arrow tb-citat-arrow-right"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div
          ref={trackRef}
          className="tb-citat-track"
          style={{
            display: "flex",
            gap: 28,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            padding: "8px 56px 40px",
            scrollbarWidth: "none",
          }}
        >
          {items.map((r, i) => {
            const isActive = i % N === active;
            return (
              <article
                key={i}
                data-card
                className="tb-citat-card"
                style={{
                  flex: "0 0 auto",
                  width: "min(460px, 82vw)",
                  scrollSnapAlign: "center",
                  background: "#ffffff",
                  border: "1px solid rgba(28,20,16,0.08)",
                  borderRadius: 8,
                  padding: "36px 32px",
                  boxShadow: isActive ? "0 24px 48px -24px rgba(28,20,16,0.22)" : "0 6px 18px -14px rgba(28,20,16,0.08)",
                  transform: isActive ? "translateY(0)" : "translateY(6px)",
                  opacity: isActive ? 1 : 0.6,
                  transition: "opacity 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                <span aria-hidden style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.6rem",
                  fontWeight: 700,
                  color: "#F39AFA",
                  lineHeight: 0.6,
                  display: "block",
                }}>
                  &ldquo;
                </span>
                <p style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
                  lineHeight: 1.6,
                  color: "#1C1410",
                  margin: 0,
                  flex: 1,
                }}>
                  {r.quote}
                </p>
                <div style={{ borderTop: "1px solid rgba(28,20,16,0.08)", paddingTop: 18 }}>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 13, fontWeight: 700,
                    color: "#1C1410", margin: 0,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>
                    {r.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    color: "rgba(28,20,16,0.55)", margin: "4px 0 0",
                  }}>
                    {r.title}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 8 }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Gå till recension ${i + 1}`}
            onClick={() => goto(i)}
            style={{
              width: i === active ? 32 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              background: i === active ? "#882B8D" : "rgba(28,20,16,0.18)",
              cursor: "pointer",
              transition: "width 0.25s ease, background 0.25s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
        <Link href="/kontakt" className="tb-citat-cta" style={{
          fontFamily: "var(--font-display)",
          display: "inline-flex", alignItems: "center",
          fontSize: 13, fontWeight: 700, letterSpacing: "0.05em",
          background: "#882B8D", color: "#ffffff",
          textDecoration: "none", padding: "15px 44px", borderRadius: 3,
          transition: "background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
          boxShadow: "0 8px 22px -14px rgba(136,43,141,0.9)",
        }}>
          Boka Terese
        </Link>
      </div>

      <style>{`
        .tb-citat-track::-webkit-scrollbar { display: none; }
        .tb-citat-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: 52px;
          height: 52px;
          border-radius: 999px;
          border: none;
          background: #ffffff;
          color: #882B8D;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px -8px rgba(28,20,16,0.25), 0 2px 6px rgba(28,20,16,0.08);
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .tb-citat-arrow:hover {
          background: #882B8D;
          color: #ffffff;
          transform: translateY(-50%) scale(1.06);
        }
        .tb-citat-cta:hover { background: #5A1D5F; transform: translateY(-2px); box-shadow: 0 14px 28px -14px rgba(136,43,141,0.9); }
        .tb-citat-arrow-left { left: -4px; }
        .tb-citat-arrow-right { right: -4px; }
        @media (max-width: 768px) {
          .tb-citat-section { padding: 80px 0 !important; }
          .tb-citat-head { padding: 0 24px 40px !important; }
          .tb-citat-wrap { padding: 0 8px !important; }
          .tb-citat-track { padding: 8px 20px 32px !important; gap: 16px !important; }
          .tb-citat-card { padding: 36px 28px !important; }
          .tb-citat-arrow { width: 42px; height: 42px; }
          .tb-citat-arrow-left { left: 4px; }
          .tb-citat-arrow-right { right: 4px; }
        }
      `}</style>
    </section>
  );
}
