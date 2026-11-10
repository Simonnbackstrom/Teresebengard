import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import BokaCTA from "@/components/BokaCTA";
import { getAllPosts, formatDate } from "@/app/_lib/posts";

export const metadata: Metadata = {
  title: "Blogg",
  description:
    "Terese Bengard skriver om landsbygdsfrågor, platsperspektiv, kommunikation och kommunpolitik.",
  alternates: { canonical: "/blogg" },
  openGraph: {
    url: "/blogg",
    title: "Blogg – Terese Bengard",
    description:
      "Terese Bengard skriver om landsbygdsfrågor, platsperspektiv, kommunikation och kommunpolitik.",
  },
};

export const dynamic = "force-dynamic";

export default async function BloggPage() {
  const posts = await getAllPosts();

  return (
    <main style={{ background: "#FDFAF8" }}>
      <PageHero
        title="Tankar om landsbygd, plats och människor."
        subtitle="Krönikor, reflektioner och artiklar av Terese Bengard."
      />

      <section style={{ padding: "100px 80px 120px" }} className="tb-blogg-list">
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {posts.length === 0 ? (
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17, lineHeight: 1.8, color: "rgba(28,20,16,0.6)",
              textAlign: "center", margin: 0,
            }}>
              Inga inlägg publicerade ännu. Kom tillbaka snart.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogg/${post.slug}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: post.cover ? "260px 1fr" : "1fr",
                    gap: 40,
                    alignItems: "start",
                    padding: "48px 0",
                    borderTop: "1px solid rgba(28,20,16,0.08)",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  className="tb-blogg-row"
                >
                  {post.cover && (
                    <div style={{
                      position: "relative",
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      borderRadius: 2,
                      background: "#F2E7F3",
                    }}>
                      <Image
                        src={post.cover}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 260px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
                      color: "#882B8D", fontWeight: 700, margin: "0 0 16px",
                    }}>
                      {formatDate(post.date)}
                    </p>
                    <h2 style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)",
                      fontWeight: 700,
                      lineHeight: 1.15,
                      color: "#1C1410",
                      margin: "0 0 16px",
                    }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 16, lineHeight: 1.75,
                        color: "rgba(28,20,16,0.65)",
                        margin: 0,
                        maxWidth: 620,
                      }}>
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <BokaCTA />

      <style>{`
        .tb-blogg-row:hover h2 { color: #882B8D !important; }
        @media (max-width: 768px) {
          .tb-blogg-list { padding: 60px 32px 80px !important; }
          .tb-blogg-row { grid-template-columns: 1fr !important; gap: 20px !important; padding: 32px 0 !important; }
        }
      `}</style>
    </main>
  );
}
