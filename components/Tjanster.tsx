"use client";

import Link from "next/link";

const items = [
  {
    label: "Föreläsare",
    body: "Skräddarsydda föreläsningar om landsbygd, urban norm, beredskap och platsutveckling.",
    href: "/forelasningar#forelasningar",
    // Ax / vetestrå — växande kunskap ur jorden
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16" y1="4" x2="16" y2="28" />
        {/* korn vänster */}
        <path d="M16 8 C13 8 11 9 10 11 C12 12 15 11 16 10" />
        <path d="M16 13 C13 13 11 14 10 16 C12 17 15 16 16 15" />
        <path d="M16 18 C13 18 11 19 10 21 C12 22 15 21 16 20" />
        {/* korn höger */}
        <path d="M16 6 C19 6 21 7 22 9 C20 10 17 9 16 8" />
        <path d="M16 11 C19 11 21 12 22 14 C20 15 17 14 16 13" />
        <path d="M16 16 C19 16 21 17 22 19 C20 20 17 19 16 18" />
      </svg>
    ),
  },
  {
    label: "Moderator",
    body: "Leder samtal med kunskap, engagemang och humor — skapar trygghet i rummet.",
    href: "/forelasningar#moderator",
    // Två samtalande blad — dialog i naturen
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* vänster blad */}
        <path d="M4 16 C4 10 8 6 14 6 C14 12 10 16 4 16 Z" />
        <path d="M4 16 C7 14 10 11 12 8" />
        {/* höger blad */}
        <path d="M28 22 C28 16 24 12 18 12 C18 18 22 22 28 22 Z" strokeOpacity="0.65" />
        <path d="M28 22 C25 20 22 17 20 14" strokeOpacity="0.65" />
      </svg>
    ),
  },
  {
    label: "Rådgivning",
    body: "Processledning, strategi och landsbygdssäkring — längre uppdrag där På Plats leder arbetet framåt.",
    href: "/radgivning",
    // Kompass — riktning och navigering
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <polygon points="16,8 19,16 16,24 13,16" fill="currentColor" fillOpacity="0.15" />
        <line x1="16" y1="4" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="28" />
        <line x1="4" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="28" y2="16" />
      </svg>
    ),
  },
];

export default function Tjanster() {
  return (
    <section style={{ background: "#F5EEE9", padding: "120px 80px", position: "relative", overflow: "hidden" }} className="tb-tjanster-section">
      {/* Subtil topografi-linje som backdrop */}
      <svg
        aria-hidden
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          width: "100%", height: 180,
          opacity: 0.35,
          pointerEvents: "none",
        }}
      >
        <path d="M0,220 C180,180 320,260 520,220 C720,180 880,260 1080,220 C1240,190 1360,240 1440,210 L1440,320 L0,320 Z" fill="#E8DDD4" />
        <path d="M0,260 C220,220 380,280 600,250 C820,220 980,290 1200,260 C1320,244 1400,270 1440,258 L1440,320 L0,320 Z" fill="#DFD1C4" />
      </svg>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(2rem, 3.6vw, 3.4rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#1C1410",
          margin: "0 0 72px",
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}>
          Vad kan du boka?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 28,
        }} className="tb-tjanster-grid">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="tb-tjanster-card"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
                borderRadius: 10,
                padding: "44px 36px 40px",
                textDecoration: "none",
                boxShadow: "0 1px 3px rgba(28,20,16,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
              }}
            >
              <span aria-hidden className="tb-tjanster-bar" style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: 4,
                background: "linear-gradient(to right, #882B8D, #F39AFA)",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.4s ease",
              }} />

              {/* subtil kulle-silhuett i botten av kortet */}
              <svg
                aria-hidden
                viewBox="0 0 300 40"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  width: "100%", height: 40,
                  opacity: 0.12,
                  pointerEvents: "none",
                }}
              >
                <path d="M0,28 C50,18 100,32 150,24 C200,16 240,30 300,22 L300,40 L0,40 Z" fill="#882B8D" />
                <path d="M0,34 C60,26 120,36 180,30 C230,24 270,34 300,30 L300,40 L0,40 Z" fill="#882B8D" opacity="0.6" />
              </svg>

              <div style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "rgba(136,43,141,0.1)",
                color: "#882B8D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 28,
                transition: "background 0.3s ease, transform 0.3s ease",
              }} className="tb-tjanster-icon">
                {item.icon}
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#1C1410",
                margin: "0 0 16px",
                letterSpacing: "-0.01em",
              }}>
                {item.label}
              </h3>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.65,
                color: "rgba(28,20,16,0.68)",
                margin: "0 0 32px",
                flexGrow: 1,
              }}>
                {item.body}
              </p>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 600,
                color: "#882B8D",
                letterSpacing: "0.02em",
              }} className="tb-tjanster-cta">
                Läs mer <span className="tb-tjanster-arrow" style={{ display: "inline-block", transition: "transform 0.25s ease" }}>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
          <Link href="/kontakt" className="tb-tjanster-btn" style={{
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
      </div>

      <style>{`
        .tb-tjanster-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -16px rgba(28,20,16,0.18);
        }
        .tb-tjanster-card:hover .tb-tjanster-bar { transform: scaleX(1); }
        .tb-tjanster-card:hover .tb-tjanster-icon {
          background: #882B8D !important;
          color: #ffffff !important;
          transform: scale(1.05);
        }
        .tb-tjanster-card:hover .tb-tjanster-arrow { transform: translateX(4px); }
        .tb-tjanster-btn:hover {
          background: #5A1D5F !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -14px rgba(136,43,141,0.9) !important;
        }
        @media (max-width: 860px) {
          .tb-tjanster-section { padding: 72px 24px !important; }
          .tb-tjanster-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
