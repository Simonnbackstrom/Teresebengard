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
      <div className="tb-hero-photo" style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/terese-fjall.jpg"
          alt="Terese Bengard"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center 22%",
            transform: "scale(1.35)",
            transformOrigin: "center 30%",
            transition: "transform 1.4s ease",
          }}
          sizes="100vw"
        />
      </div>

      <div className="tb-hero-gradient" style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to left, rgba(20,14,12,0.7) 0%, rgba(20,14,12,0.35) 40%, transparent 65%)",
      }} />

      <div style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 64px 96px",
        display: "flex",
        justifyContent: "flex-end",
      }} className="tb-hero-content">
        <div style={{ maxWidth: 460 }} className="tb-hero-inner">
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(2.4rem, 4.6vw, 4.8rem)",
            fontWeight: 700,
            lineHeight: 1.02,
            color: "#ffffff",
            margin: "0 0 36px",
            letterSpacing: "-0.02em",
          }}>
            Förändrar synen på landsbygden.
          </h1>

          <div style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            <Link href="/kontakt" className="tb-btn-primary" style={{
              fontSize: 13,
              letterSpacing: "0.05em",
              fontWeight: 700,
              background: "#C4607A",
              color: "#ffffff",
              textDecoration: "none",
              padding: "15px 40px",
              borderRadius: 3,
              whiteSpace: "nowrap",
              transition: "background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              boxShadow: "0 8px 22px -14px rgba(196,96,122,0.9)",
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
          from { transform: scale(1.5); }
          to   { transform: scale(1.32); }
        }
        .tb-btn-primary:hover { background: #B3546E !important; transform: translateY(-2px); box-shadow: 0 14px 28px -14px rgba(196,96,122,0.9) !important; }
        .tb-btn-primary:active { transform: translateY(0); }
        .tb-hero-link { border-bottom: 1px solid rgba(255,255,255,0.35); transition: border-color 0.25s ease, color 0.25s ease; }
        .tb-hero-link:hover { color: #ffffff; border-bottom-color: #ffffff; }
        .tb-hero-link:hover .tb-hero-arrow { transform: translateX(4px); }
        @media (max-width: 900px) {
          .tb-hero-gradient {
            background: linear-gradient(to top, rgba(20,14,12,0.78) 0%, rgba(20,14,12,0.35) 45%, transparent 75%) !important;
          }
          .tb-hero-content { justify-content: flex-start !important; padding: 0 28px 72px !important; }
          .tb-hero-inner { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
