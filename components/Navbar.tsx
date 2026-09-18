"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navLinks = [
    { label: "Om mig", href: "/om" },
    { label: "Föreläsningar", href: "/forelasningar" },
    { label: "Moderator", href: "/moderator" },
    { label: "Boken", href: "/boken" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => pathname === href;
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <>
      <header className="tb-header" style={{
        position: "fixed",
        top: 20,
        left: 120,
        right: 120,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        height: 60,
        background: solid ? "rgba(253,250,248,0.97)" : "rgba(253,250,248,0.80)",
        backdropFilter: "blur(16px)",
        borderRadius: 50,
        border: "1px solid rgba(28,20,16,0.08)",
        transition: "background 0.3s ease",
      }}>
        <Link href="/" style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: 20,
          fontWeight: 700,
          color: "#1C1410",
          textDecoration: "none",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
        }}>
          Terese Bengard
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="tb-desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize: 13,
              color: "#1C1410",
              textDecoration: "none",
              fontWeight: isActive(link.href) ? 600 : 400,
              letterSpacing: "0.01em",
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="tb-btn" style={{
            fontSize: 13,
            letterSpacing: "0.02em",
            background: "#C4607A",
            color: "#ffffff",
            textDecoration: "none",
            padding: "9px 22px",
            fontWeight: 600,
            borderRadius: 4,
            whiteSpace: "nowrap",
          }}>
            Boka mig
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, color: "#1C1410" }}
          className="tb-mobile-btn"
          aria-label="Meny"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </header>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 49,
          background: "rgba(253,250,248,0.99)", backdropFilter: "blur(16px)",
          padding: "24px 28px 32px", display: "flex", flexDirection: "column", gap: 16,
          borderBottom: "1px solid rgba(28,20,16,0.08)",
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize: 16, color: "#1C1410", textDecoration: "none",
              fontWeight: isActive(link.href) ? 700 : 500,
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" style={{
            fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase",
            background: "#C4607A", color: "#ffffff", textDecoration: "none",
            padding: "14px 24px", fontWeight: 700, textAlign: "center",
            marginTop: 8, borderRadius: 4,
          }}>
            Boka mig
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .tb-desktop-nav { display: none !important; }
          .tb-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
