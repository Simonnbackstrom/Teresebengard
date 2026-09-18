"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#2A1F1A", color: "#FDFAF8" }}>
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(253,250,248,0.1), transparent)" }} />

      <div className="tb-footer-grid" style={{ padding: "100px 80px 80px", display: "grid", gap: 64, alignItems: "start" }}>
        {/* Brand */}
        <div>
          <Link href="/" style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 22, fontWeight: 700,
            color: "#FDFAF8", textDecoration: "none",
            display: "block", marginBottom: 16,
          }}>
            Terese Bengard
          </Link>
          <p style={{ fontSize: 13, color: "rgba(253,250,248,0.55)", margin: "0 0 24px", lineHeight: 1.85, maxWidth: 240 }}>
            Föreläsare, författare och moderator med fokus på landsbygdsfrågor och platsperspektiv.
          </p>
        </div>

        {/* Sidor */}
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(253,250,248,0.4)", textTransform: "uppercase", margin: "0 0 24px", fontWeight: 600 }}>Sidor</p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "Om mig", href: "/om" },
              { label: "Föreläsningar", href: "/forelasningar" },
              { label: "Moderator", href: "/moderator" },
              { label: "Boken", href: "/boken" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((link) => (
              <Link key={link.label} href={link.href} style={{
                fontSize: 14, color: "rgba(253,250,248,0.65)", textDecoration: "none",
              }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Kontakt */}
        <div>
          <p style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(253,250,248,0.4)", textTransform: "uppercase", margin: "0 0 24px", fontWeight: 600 }}>Kontakt</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="mailto:terese@bengard.se" style={{ fontSize: 14, color: "rgba(253,250,248,0.65)", textDecoration: "none" }}>
              terese@bengard.se
            </a>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <a href="https://linkedin.com/in/teresebengard" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(253,250,248,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0A66C2"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(253,250,248,0.5)"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://instagram.com/teresebengard" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(253,250,248,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#E1306C"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(253,250,248,0.5)"; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        padding: "20px 80px",
        borderTop: "1px solid rgba(253,250,248,0.05)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }} className="tb-footer-bottom">
        <span style={{ fontSize: 12, color: "rgba(253,250,248,0.3)" }}>© {year} Terese Bengard</span>
        <span style={{ fontSize: 12, color: "rgba(253,250,248,0.3)" }}>Webbplats av Dinmedia</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-footer-bottom { padding: 20px 32px !important; }
        }
      `}</style>
    </footer>
  );
}
