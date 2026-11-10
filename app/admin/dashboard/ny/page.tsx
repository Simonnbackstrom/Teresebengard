import Link from "next/link";
import PostEditor from "../PostEditor";

export const dynamic = "force-dynamic";

export default function NewPostPage() {
  return (
    <div>
      <Link href="/admin/dashboard" style={{
        fontFamily: "var(--font-sans)",
        fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#882B8D", fontWeight: 700, textDecoration: "none",
      }}>
        ← Tillbaka
      </Link>
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "2.4rem",
        fontWeight: 700,
        color: "#1C1410",
        margin: "24px 0 32px",
        lineHeight: 1.1,
      }}>
        Nytt inlägg
      </h1>
      <PostEditor />
    </div>
  );
}
