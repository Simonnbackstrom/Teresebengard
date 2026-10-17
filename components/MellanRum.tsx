import Image from "next/image";

export default function MellanRum() {
  return (
    <section
      aria-label="Mellan två världar"
      className="tb-mellanrum"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(420px, 70vh, 640px)",
        overflow: "hidden",
        background: "#1a1310",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/terese-skor.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          style={{
            objectFit: "cover",
            objectPosition: "center 55%",
          }}
        />
      </div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(20,14,12,0.55) 0%, rgba(20,14,12,0.25) 45%, rgba(20,14,12,0) 75%)",
        }}
      />

      <div
        className="tb-mellanrum-inner"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F39AFA",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Sätter avtryck
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
              lineHeight: 1.2,
              color: "#ffffff",
              margin: "20px 0 0",
              textShadow:
                "0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.45)",
            }}
          >
            Klackarna som sätter spår i bygden.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-mellanrum { height: clamp(360px, 60vh, 480px) !important; }
          .tb-mellanrum-inner { padding: 0 28px !important; }
        }
      `}</style>
    </section>
  );
}
