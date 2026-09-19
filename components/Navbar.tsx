"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navLinks = [
    { label: "Om mig", href: "/om" },
    { label: "Föreläsningar", href: "/forelasningar" },
    { label: "Moderator", href: "/moderator" },
    { label: "Boken", href: "/boken" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: "rgba(253,250,248,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(28,20,16,0.08)" : "1px solid transparent",
        transition: "border-color 0.3s ease",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 60px",
          height: 68,
          maxWidth: 1400,
          margin: "0 auto",
        }} className="tb-nav-inner">
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo-pa-plats.png"
              alt="På Plats – Terese Bengard"
              width={110}
              height={52}
              style={{ objectFit: "contain", objectPosition: "left" }}
              priority
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 40 }} className="tb-desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontSize: 14,
                color: isActive(link.href) ? "#1C1410" : "rgba(28,20,16,0.5)",
                textDecoration: "none",
                fontWeight: isActive(link.href) ? 500 : 400,
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}>
                {link.label}
              </Link>
            ))}
            <Link href="/kontakt" style={{
              fontSize: 13,
              background: "#C4607A",
              color: "#ffffff",
              textDecoration: "none",
              padding: "9px 22px",
              fontWeight: 600,
              borderRadius: 3,
              letterSpacing: "0.02em",
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
        </div>
      </header>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 49,
          background: "#FDFAF8",
          borderBottom: "1px solid rgba(28,20,16,0.08)",
          padding: "28px 32px 36px",
          display: "flex", flexDirection: "column", gap: 20,
        }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{
              fontSize: 18,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "#1C1410",
              textDecoration: "none",
              fontWeight: 600,
            }}>
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" style={{
            marginTop: 8,
            display: "inline-flex",
            justifyContent: "center",
            fontSize: 13, fontWeight: 600,
            background: "#C4607A", color: "#ffffff",
            textDecoration: "none", padding: "14px 24px",
            borderRadius: 3,
          }}>
            Boka mig
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .tb-desktop-nav { display: none !important; }
          .tb-mobile-btn { display: flex !important; }
          .tb-nav-inner { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}
