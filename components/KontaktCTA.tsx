"use client";

import { useState, FormEvent } from "react";

export default function KontaktCTA() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = new FormData(e.currentTarget);
    const payload = {
      namn: data.get("namn"),
      organisation: data.get("organisation"),
      epost: data.get("epost"),
      telefon: data.get("telefon"),
      meddelande: data.get("meddelande"),
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);
    if (res.ok) {
      setSent(true);
    } else {
      setError("Något gick fel. Försök igen eller maila terese@bengard.se direkt.");
    }
  }

  return (
    <section id="boka" style={{ background: "#FDFAF8" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "120px 80px" }} className="tb-form-wrap">
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#C4607A", fontWeight: 600, margin: "0 0 16px",
        }}>
          Kom i kontakt
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "clamp(1.8rem, 3vw, 3rem)",
          fontWeight: 700, lineHeight: 1.1,
          color: "#1C1410", margin: "0 0 12px",
        }}>
          Boka Terese.
        </h2>
        <p style={{ fontSize: 15, color: "rgba(28,20,16,0.6)", lineHeight: 1.8, margin: "0 0 40px" }}>
          Berätta om ert event och vad ni söker. Terese läser varje förfrågan själv och återkommer personligen.
        </p>

        {sent ? (
          <div style={{ padding: "48px 0" }}>
            <p style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-display)", fontStyle: "italic", color: "#1C1410", margin: "0 0 12px" }}>Tack!</p>
            <p style={{ fontSize: 14, color: "rgba(28,20,16,0.5)", lineHeight: 1.75 }}>
              Din förfrågan är skickad. Terese hör av sig inom 24 timmar.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="tb-form-row">
              <div>
                <label style={{ display: "block", fontSize: 12, color: "rgba(28,20,16,0.45)", marginBottom: 8, fontWeight: 500 }}>Namn</label>
                <input className="tb-input" name="namn" type="text" required placeholder="Ditt namn" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "rgba(28,20,16,0.45)", marginBottom: 8, fontWeight: 500 }}>Organisation</label>
                <input className="tb-input" name="organisation" type="text" required placeholder="Kommun / förening / företag" />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="tb-form-row">
              <div>
                <label style={{ display: "block", fontSize: 12, color: "rgba(28,20,16,0.45)", marginBottom: 8, fontWeight: 500 }}>E-post</label>
                <input className="tb-input" name="epost" type="email" required placeholder="din@epost.se" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, color: "rgba(28,20,16,0.45)", marginBottom: 8, fontWeight: 500 }}>Telefon</label>
                <input className="tb-input" name="telefon" type="tel" placeholder="07XX – XXX XXX" />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 12, color: "rgba(28,20,16,0.45)", marginBottom: 8, fontWeight: 500 }}>Meddelande</label>
              <textarea className="tb-input" name="meddelande" rows={5} required placeholder="Berätta om ert event och vad ni söker." style={{ resize: "none" }} />
            </div>
            {error && <p style={{ fontSize: 13, color: "#c0392b", margin: 0 }}>{error}</p>}
            <button type="submit" disabled={loading} style={{
              background: "#C4607A", color: "#ffffff", border: "none",
              padding: "16px", fontSize: 14, fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              borderRadius: 4, width: "100%",
              fontFamily: "var(--font-sans)", marginTop: 4,
            }}>
              {loading ? "Skickar..." : "Skicka bokningsförfrågan"}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tb-form-wrap { padding: 80px 32px !important; }
          .tb-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
