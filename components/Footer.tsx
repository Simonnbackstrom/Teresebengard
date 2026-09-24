"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#ffffff", color: "#1C1410", borderTop: "1px solid rgba(28,20,16,0.08)" }}>
      <div className="tb-footer-grid" style={{ padding: "80px 80px 60px", display: "grid", gap: 64, alignItems: "start" }}>
        <div>
          <Link href="/" style={{ display: "inline-block", marginBottom: 20 }}>
            <Image
              src="/logo-pa-plats.png"
              alt="På Plats – Terese Bengard"
              width={180}
              height={86}
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </Link>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: 15,
            color: "rgba(28,20,16,0.65)",
            margin: 0,
            lineHeight: 1.7,
            maxWidth: 280,
          }}>
            Föreläsare, författare och moderator med fokus på landsbygdsfrågor och platsperspektiv.
          </p>
        </div>

        <div>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: 11, letterSpacing: "0.3em",
            color: "#882B8D",
            textTransform: "uppercase",
            margin: "0 0 24px",
            fontWeight: 700,
          }}>
            Sidor
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "Om mig", href: "/om" },
              { label: "Föreläsningar & moderator", href: "/forelasningar" },
              { label: "Rådgivning", href: "/radgivning" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((link) => (
              <Link key={link.label} href={link.href} style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                color: "#1C1410",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#882B8D"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1C1410"; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: 11, letterSpacing: "0.3em",
            color: "#882B8D",
            textTransform: "uppercase",
            margin: "0 0 24px",
            fontWeight: 700,
          }}>
            Kontakt
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="mailto:terese@bengard.se" style={{
              fontFamily: "var(--font-display)",
              fontSize: 14,
              color: "#1C1410",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#882B8D"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1C1410"; }}
            >
              terese@bengard.se
            </a>
            <a href="tel:+46702952125" style={{
              fontFamily: "var(--font-display)",
              fontSize: 14,
              color: "#1C1410",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#882B8D"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1C1410"; }}
            >
              070-295 21 25
            </a>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <a href="https://linkedin.com/in/teresebengard" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "rgba(28,20,16,0.5)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0A66C2"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(28,20,16,0.5)"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://instagram.com/terese_bengard" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "rgba(28,20,16,0.5)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#E1306C"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(28,20,16,0.5)"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://facebook.com/terese.bengard" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: "rgba(28,20,16,0.5)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1877F2"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(28,20,16,0.5)"; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        padding: "22px 80px",
        borderTop: "1px solid rgba(28,20,16,0.08)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }} className="tb-footer-bottom">
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: 12,
          color: "rgba(28,20,16,0.5)",
        }}>© {year} På Plats AB · Terese Bengard</span>
        <a
          href="https://dinmedia.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-display)",
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 12, color: "rgba(28,20,16,0.5)", textDecoration: "none",
          }}
        >
          <span>Webbplats av</span>
          <Image
            src="/dinmedia-logo.png"
            alt="Dinmedia"
            width={72}
            height={20}
            style={{ objectFit: "contain", opacity: 0.75 }}
          />
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-footer-grid { padding: 60px 32px 40px !important; gap: 40px !important; }
          .tb-footer-bottom { padding: 20px 32px !important; flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
