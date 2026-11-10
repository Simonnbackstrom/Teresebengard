"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  initial?: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    body: string;
    cover?: string;
  };
};

export default function PostEditor({ initial }: Props) {
  const router = useRouter();
  const editing = !!initial;
  const [title, setTitle] = useState(initial?.title ?? "");
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [cover, setCover] = useState(initial?.cover ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingBody, setUploadingBody] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  async function uploadFile(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Uppladdningen misslyckades");
    return data.url as string;
  }

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError(null);
    setUploadingCover(true);
    try {
      setCover(await uploadFile(file));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploadingCover(false);
    }
  }

  async function handleBodyUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError(null);
    setUploadingBody(true);
    try {
      const url = await uploadFile(file);
      const snippet = `\n\n![${file.name.replace(/\.[^.]+$/, "")}](${url})\n\n`;
      const ta = bodyRef.current;
      if (ta) {
        const start = ta.selectionStart ?? body.length;
        const end = ta.selectionEnd ?? body.length;
        const next = body.slice(0, start) + snippet + body.slice(end);
        setBody(next);
        requestAnimationFrame(() => {
          ta.focus();
          const pos = start + snippet.length;
          ta.setSelectionRange(pos, pos);
        });
      } else {
        setBody(body + snippet);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploadingBody(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    const url = editing ? `/api/admin/posts/${initial!.slug}` : "/api/admin/posts";
    const method = editing ? "PUT" : "POST";
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, excerpt, cover, body }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Något gick fel");
        setSaving(false);
        return;
      }
      router.push("/admin/dashboard?published=1");
      router.refresh();
    } catch {
      setError("Något gick fel");
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!editing) return;
    if (!confirm(`Ta bort "${initial!.title}"? Det går inte att ångra.`)) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/posts/${initial!.slug}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Kunde inte ta bort");
        setDeleting(false);
        return;
      }
      router.push("/admin/dashboard?deleted=1");
      router.refresh();
    } catch {
      setError("Något gick fel");
      setDeleting(false);
    }
  }

  const label = {
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "rgba(28,20,16,0.55)",
    fontWeight: 600,
    margin: "0 0 8px",
    display: "block" as const,
  };

  return (
    <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div>
        <label style={label}>Titel</label>
        <input
          className="tb-input"
          placeholder="Rubrik på inlägget"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ fontSize: 18, fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600 }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={label}>Datum</label>
          <input
            className="tb-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label style={label}>Omslagsbild</label>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              className="tb-input"
              placeholder="Ladda upp eller klistra in URL"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              style={{ flex: 1 }}
            />
            <label style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "0 16px",
              fontSize: 13, fontWeight: 600,
              border: "1px solid rgba(28,20,16,0.15)",
              background: "#ffffff",
              color: "#1C1410",
              cursor: uploadingCover ? "default" : "pointer",
              borderRadius: 3,
              whiteSpace: "nowrap",
            }}>
              {uploadingCover ? "Laddar…" : "Ladda upp"}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleCoverUpload}
                disabled={uploadingCover}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>
      </div>

      <div>
        <label style={label}>Ingress</label>
        <textarea
          className="tb-input"
          placeholder="Kort sammanfattning som visas i listan och i delningar."
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          style={{ resize: "vertical", lineHeight: 1.6 }}
        />
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={label}>Brödtext (Markdown)</label>
          <label style={{
            display: "inline-flex", alignItems: "center",
            padding: "6px 12px",
            fontSize: 12, fontWeight: 600,
            border: "1px solid rgba(28,20,16,0.15)",
            background: "#ffffff",
            color: "#1C1410",
            cursor: uploadingBody ? "default" : "pointer",
            borderRadius: 3,
            marginBottom: 8,
          }}>
            {uploadingBody ? "Laddar bild…" : "+ Infoga bild"}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleBodyUpload}
              disabled={uploadingBody}
              style={{ display: "none" }}
            />
          </label>
        </div>
        <textarea
          ref={bodyRef}
          className="tb-input"
          placeholder={`Skriv här. Du kan använda:\n\n## Rubrik\n**fetstil**, *kursiv*, [länk](https://…)\n- punktlista\n> citat`}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={20}
          style={{ fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: 1.7, resize: "vertical" }}
        />
        <p style={{ fontSize: 12, color: "rgba(28,20,16,0.5)", margin: "8px 0 0" }}>
          Tomma rader skapar nya stycken. Rubriker börjar med <code>##</code>. Länkar: <code>[text](https://…)</code>. Bilder: använd knappen eller <code>![alt](url)</code>.
        </p>
      </div>

      {error && (
        <p style={{ color: "#A4507F", fontSize: 14, margin: 0 }}>{error}</p>
      )}

      <div style={{ display: "flex", gap: 12, justifyContent: "space-between", alignItems: "center", paddingTop: 8 }}>
        {editing ? (
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting || saving}
            style={{
              background: "none",
              border: "1px solid rgba(164,80,127,0.4)",
              color: "#A4507F",
              padding: "12px 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: deleting ? "default" : "pointer",
              borderRadius: 3,
            }}
          >
            {deleting ? "Tar bort…" : "Ta bort"}
          </button>
        ) : <span />}
        <button
          type="submit"
          disabled={saving || deleting}
          style={{
            background: "#882B8D",
            color: "#ffffff",
            border: "none",
            padding: "14px 28px",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.02em",
            cursor: saving ? "default" : "pointer",
            opacity: saving ? 0.6 : 1,
            borderRadius: 3,
          }}
        >
          {saving ? "Sparar…" : editing ? "Spara ändringar" : "Publicera"}
        </button>
      </div>
    </form>
  );
}
