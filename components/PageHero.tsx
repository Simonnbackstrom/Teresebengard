interface PageHeroProps {
  title: string;
  subtitle?: string;
  bg?: string;
}

export default function PageHero({ title, subtitle, bg = "#F5EEE9" }: PageHeroProps) {
  return (
    <section style={{
      background: bg,
      padding: "160px 80px 96px",
      borderBottom: "1px solid rgba(28,20,16,0.08)",
    }} className="tb-page-hero">
      <div style={{ maxWidth: 760 }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(2.4rem, 4vw, 4.5rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          color: "#1C1410",
          margin: "0 0 24px",
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: 17,
            lineHeight: 1.8,
            color: "rgba(28,20,16,0.6)",
            margin: 0,
            maxWidth: 560,
          }}>
            {subtitle}
          </p>
        )}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .tb-page-hero { padding: 120px 32px 64px !important; }
        }
      `}</style>
    </section>
  );
}
