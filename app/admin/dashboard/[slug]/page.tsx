import Link from "next/link";
import { notFound } from "next/navigation";
import PostEditor from "../PostEditor";
import { getPost } from "@/app/_lib/posts";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export default async function EditPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

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
        margin: "24px 0 8px",
        lineHeight: 1.1,
      }}>
        Redigera inlägg
      </h1>
      <p style={{ fontSize: 13, color: "rgba(28,20,16,0.5)", margin: "0 0 32px" }}>
        Slug: <code>{post.slug}</code>
      </p>
      <PostEditor initial={post} />
    </div>
  );
}
