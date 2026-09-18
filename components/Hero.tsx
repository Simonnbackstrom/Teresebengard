"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (mobile) {
    return (
      <section style={{
        minHeight: "100svh",
        background: "#F5EEE9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "120px 32px 80px",
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#C4607A",
          fontWeight: 600,
          margin: "0 0 24px",
        }}>
          Föreläsare · Författare · Moderator
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(2.8rem, 9vw, 4rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          color: "#1C1410",
          margin: "0 0 24px",
        }}>
          Förändrar synen på landsbygden.
        </h1>
        <p style={{
          fontSize: 16,
          lineHeight: 1.8,
          color: "rgba(28,20,16,0.65)",
          margin: "0 0 40px",
        }}>
          Föreläsningar, moderering och boksamtal om landsbygd, plats och människorna som bor där.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Link href="/kontakt" className="tb-btn" style={{
            display: "flex", justifyContent: "center",
            fontSize: 13, letterSpacing: "0.05em", fontWeight: 700,
            background: "#C4607A", color: "#ffffff",
            textDecoration: "none", padding: "15px 32px", borderRadius: 4,
          }}>
            Boka mig
          </Link>
          <Link href="/forelasningar" style={{
            display: "flex", justifyContent: "center",
            fontSize: 13, color: "rgba(28,20,16,0.5)",
            textDecoration: "none", fontWeight: 500,
            borderBottom: "1px solid rgba(28,20,16,0.2)",
            paddingBottom: 2, alignSelf: "center",
          }}>
            Se mina föreläsningar →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{
      width: "100%",
      minHeight: "100svh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    }}>
      {/* Vänster: text */}
      <div style={{
        background: "#F5EEE9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "140px 80px 120px",
        gap: 0,
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#C4607A",
          fontWeight: 600,
          margin: "0 0 32px",
        }}>
          Föreläsare · Författare · Moderator
        </p>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(3rem, 4.5vw, 5.5rem)",
          fontWeight: 700,
          lineHeight: 1.0,
          color: "#1C1410",
          margin: "0 0 32px",
          letterSpacing: "-0.01em",
        }}>
          Förändrar synen på landsbygden.
        </h1>

        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 17,
          lineHeight: 1.8,
          color: "rgba(28,20,16,0.65)",
          margin: "0 0 48px",
          maxWidth: 420,
        }}>
          Föreläsningar, moderering och boksamtal om landsbygd, plats och människorna som bor där.
        </p>

        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <Link href="/kontakt" className="tb-btn" style={{
            display: "inline-flex", alignItems: "center",
            fontSize: 13, letterSpacing: "0.05em", fontWeight: 700,
            background: "#C4607A", color: "#ffffff",
            textDecoration: "none", padding: "15px 36px", borderRadius: 4,
            whiteSpace: "nowrap",
          }}>
            Boka mig
          </Link>
          <Link href="/forelasningar" style={{
            fontSize: 13, color: "rgba(28,20,16,0.5)",
            textDecoration: "none", fontWeight: 500,
            borderBottom: "1px solid rgba(28,20,16,0.2)",
            paddingBottom: 2, whiteSpace: "nowrap",
          }}>
            Se mina föreläsningar →
          </Link>
        </div>
      </div>

      {/* Höger: bild-placeholder */}
      <div style={{
        background: "#E8D5D9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ textAlign: "center", padding: 40 }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
            color: "rgba(28,20,16,0.35)",
            margin: 0,
          }}>
            Foto av Terese Bengard
          </p>
        </div>
      </div>
    </section>
  );
}
