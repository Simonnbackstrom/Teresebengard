"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Något gick fel");
        setLoading(false);
        return;
      }
      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Något gick fel");
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "120px 32px 60px",
      background: "#FDFAF8",
    }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#882B8D", fontWeight: 700, margin: "0 0 16px",
        }}>
          Admin
        </p>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "2.4rem",
          fontWeight: 700,
          color: "#1C1410",
          margin: "0 0 40px",
          lineHeight: 1.1,
        }}>
          Logga in för att skriva.
        </h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input
            type="password"
            className="tb-input"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && (
            <p style={{ color: "#A4507F", fontSize: 14, margin: 0 }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#882B8D",
              color: "#ffffff",
              border: "none",
              padding: "14px 24px",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.02em",
              cursor: loading ? "default" : "pointer",
              opacity: loading ? 0.6 : 1,
              borderRadius: 3,
            }}
          >
            {loading ? "Loggar in…" : "Logga in"}
          </button>
        </form>
      </div>
    </main>
  );
}
