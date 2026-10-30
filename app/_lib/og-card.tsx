import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

export function renderOg(eyebrow: string, title: string) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#3B1142",
          padding: "80px 100px",
          justifyContent: "space-between",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#F39AFA",
            fontWeight: 600,
            fontFamily: "sans-serif",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontStyle: "italic",
            color: "#FDFAF8",
            lineHeight: 1.08,
            fontWeight: 700,
            maxWidth: 1000,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", width: 48, height: 2, background: "#F39AFA" }} />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#F39AFA",
              fontWeight: 500,
              letterSpacing: "0.02em",
              fontFamily: "sans-serif",
            }}
          >
            Terese Bengard
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
