"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const words = ["landsbygderna.", "platsen.", "bygden.", "livet på landet."];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIdx((i) => (i + 1) % words.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="tb-hero" style={{
      position: "relative",
      minHeight: "100svh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "#1a1310",
    }}>
      <div className="tb-hero-photo" style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/terese-hero.jpg"
          alt="Terese Bengard"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            transform: "scale(1.15) translateY(8%)",
            transformOrigin: "center center",
            transition: "transform 1.4s ease",
          }}
          sizes="100vw"
          quality={95}
        />
      </div>

      <div className="tb-hero-gradient" style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 65% 55%, rgba(20,14,12,0.55) 0%, rgba(20,14,12,0.35) 40%, rgba(20,14,12,0.55) 100%)",
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 64px",
        display: "flex",
        justifyContent: "center",
      }} className="tb-hero-content">
        <div style={{ maxWidth: 820, textAlign: "center" }} className="tb-hero-inner">
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 4.8vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#ffffff",
            margin: "0 0 36px",
            letterSpacing: "-0.01em",
            textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.4)",
          }}>
            Förändrar synen på{" "}
            <span style={{
              display: "inline-block",
              position: "relative",
              minWidth: "1em",
              verticalAlign: "baseline",
            }} className="tb-hero-rotator">
              {words.map((w, i) => (
                <span
                  key={w}
                  aria-hidden={i !== wordIdx}
                  style={{
                    display: i === wordIdx ? "inline-block" : "none",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    color: "#F39AFA",
                    animation: "tb-word-in 0.55s ease both",
                    whiteSpace: "nowrap",
                  }}
                >
                  {w}
                </span>
              ))}
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
            lineHeight: 1.5,
            color: "#ffffff",
            margin: "0 auto 40px",
            maxWidth: 580,
            fontWeight: 500,
            textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.45)",
          }}>
            Boka Terese som föreläsare, moderator eller processledare.
          </p>

          <div style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <Link href="/kontakt" className="tb-btn-primary" style={{
              fontSize: 13,
              letterSpacing: "0.05em",
              fontWeight: 700,
              background: "#882B8D",
              color: "#ffffff",
              textDecoration: "none",
              padding: "15px 40px",
              borderRadius: 3,
              whiteSpace: "nowrap",
              transition: "background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              boxShadow: "0 8px 22px -14px rgba(136,43,141,0.9)",
            }}>
              Boka mig
            </Link>
            <Link href="/forelasningar" className="tb-hero-link" style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontWeight: 500,
              paddingBottom: 4,
              whiteSpace: "nowrap",
              position: "relative",
            }}>
              Mina föreläsningar
              <span aria-hidden className="tb-hero-arrow" style={{ display: "inline-block", marginLeft: 6, transition: "transform 0.25s ease" }}>→</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .tb-hero-photo img { animation: tb-hero-zoom 14s ease-out forwards; }
        @keyframes tb-hero-zoom {
          from { transform: scale(1.22) translateY(8%); }
          to   { transform: scale(1.15) translateY(8%); }
        }
        @keyframes tb-word-in {
          from { opacity: 0; transform: translateY(14px); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
        }
        .tb-btn-primary:hover { background: #5A1D5F !important; transform: translateY(-2px); box-shadow: 0 14px 28px -14px rgba(136,43,141,0.9) !important; }
        .tb-btn-primary:active { transform: translateY(0); }
        .tb-hero-link { border-bottom: 1px solid rgba(255,255,255,0.35); transition: border-color 0.25s ease, color 0.25s ease; }
        .tb-hero-link:hover { color: #ffffff; border-bottom-color: #ffffff; }
        .tb-hero-link:hover .tb-hero-arrow { transform: translateX(4px); }
        @media (max-width: 900px) {
          .tb-hero-gradient {
            background: linear-gradient(to top, rgba(20,14,12,0.78) 0%, rgba(20,14,12,0.35) 45%, transparent 75%) !important;
          }
          .tb-hero-content { padding: 0 28px !important; }
          .tb-hero-inner { max-width: 100% !important; }
        }
        @media (max-width: 768px) {
          .tb-hero-photo {
            top: 90px !important;
          }
          .tb-hero-photo img {
            animation: none !important;
            transform: none !important;
            object-position: 30% center !important;
          }
        }
      `}</style>
    </section>
  );
}
