import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BokaCTA from "@/components/BokaCTA";
import { getPost, getAllPosts, formatDate } from "@/app/_lib/posts";
import { renderMarkdown } from "@/app/_lib/markdown";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Inlägget hittades inte" };
  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blogg/${post.slug}` },
    openGraph: {
      url: `/blogg/${post.slug}`,
      title: `${post.title} – Terese Bengard`,
      description: post.excerpt || undefined,
      type: "article",
      publishedTime: post.date || undefined,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const html = renderMarkdown(post.body);

  return (
    <main style={{ background: "#FDFAF8" }}>
      <article>
        <header style={{
          background: "#F2E7F3",
          padding: "160px 80px 80px",
          borderBottom: "1px solid rgba(28,20,16,0.08)",
        }} className="tb-post-header">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Link href="/blogg" style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#882B8D", fontWeight: 700, textDecoration: "none",
            }}>
              ← Tillbaka till bloggen
            </Link>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(28,20,16,0.5)", fontWeight: 600,
              margin: "48px 0 20px",
            }}>
              {formatDate(post.date)}
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(2.2rem, 4vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#1C1410",
              margin: "0 0 24px",
            }}>
              {post.title}
            </h1>
            {post.excerpt && (
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: 19, lineHeight: 1.65,
                color: "rgba(28,20,16,0.65)",
                margin: 0,
              }}>
                {post.excerpt}
              </p>
            )}
          </div>
        </header>

        {post.cover && (
          <div style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 80px 0",
          }} className="tb-post-cover-wrap">
            <div style={{
              position: "relative",
              aspectRatio: "16/9",
              overflow: "hidden",
              borderRadius: 2,
            }}>
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width: 900px) 100vw, 1024px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        )}

        <section style={{ padding: "80px 80px 120px" }} className="tb-post-body">
          <div
            className="tb-prose"
            style={{ maxWidth: 680, margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
      </article>

      {related.length > 0 && (
        <section style={{
          padding: "80px 80px",
          background: "#ffffff",
          borderTop: "1px solid rgba(28,20,16,0.08)",
        }} className="tb-related">
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase",
              color: "#882B8D", fontWeight: 600, margin: "0 0 32px",
            }}>
              Fler inlägg
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="tb-related-grid">
              {related.map((p) => (
                <Link key={p.slug} href={`/blogg/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
                    color: "#882B8D", fontWeight: 700, margin: "0 0 12px",
                  }}>
                    {formatDate(p.date)}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "#1C1410",
                    margin: 0,
                  }}>
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BokaCTA />

      <style>{`
        .tb-prose { font-family: var(--font-serif); color: #1C1410; }
        .tb-prose p { font-size: 18px; line-height: 1.85; margin: 0 0 24px; color: rgba(28,20,16,0.85); }
        .tb-prose h2 { font-family: var(--font-display); font-style: italic; font-weight: 700; font-size: clamp(1.6rem, 2.6vw, 2.1rem); margin: 56px 0 20px; line-height: 1.2; }
        .tb-prose h3 { font-family: var(--font-display); font-style: italic; font-weight: 700; font-size: clamp(1.3rem, 2vw, 1.6rem); margin: 40px 0 16px; line-height: 1.2; }
        .tb-prose a { color: #882B8D; text-decoration: underline; text-underline-offset: 3px; }
        .tb-prose strong { color: #1C1410; }
        .tb-prose em { font-style: italic; }
        .tb-prose blockquote { border-left: 3px solid #882B8D; padding: 4px 0 4px 24px; margin: 32px 0; }
        .tb-prose blockquote p { font-style: italic; color: rgba(28,20,16,0.75); font-size: 20px; }
        .tb-prose ul, .tb-prose ol { padding-left: 24px; margin: 0 0 24px; font-size: 18px; line-height: 1.85; }
        .tb-prose li { margin-bottom: 8px; color: rgba(28,20,16,0.85); }
        .tb-prose code { background: rgba(28,20,16,0.06); padding: 2px 6px; border-radius: 3px; font-size: 0.9em; }
        .tb-prose img { max-width: 100%; height: auto; display: block; margin: 32px 0; border-radius: 2px; }
        @media (max-width: 768px) {
          .tb-post-header { padding: 120px 32px 60px !important; }
          .tb-post-cover-wrap { padding: 32px 32px 0 !important; }
          .tb-post-body { padding: 60px 32px 80px !important; }
          .tb-related { padding: 60px 32px !important; }
          .tb-related-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .tb-prose p, .tb-prose ul, .tb-prose ol { font-size: 17px !important; }
        }
      `}</style>
    </main>
  );
}
