import Link from "next/link";
import { getAllPosts, formatDate } from "@/app/_lib/posts";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ published?: string; deleted?: string }>;

export default async function DashboardPage({ searchParams }: { searchParams: SearchParams }) {
  const posts = await getAllPosts();
  const sp = await searchParams;
  const flash = sp.published === "1"
    ? "Publicerat och live på bengard.se."
    : sp.deleted === "1"
      ? "Inlägget borttaget från bengard.se."
      : null;
  return (
    <div>
      {flash && (
        <div style={{
          background: "#F3E7F4",
          border: "1px solid #D9B8DC",
          color: "#5C1E60",
          padding: "14px 20px",
          borderRadius: 4,
          marginBottom: 32,
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 500,
        }}>
          {flash}
        </div>
      )}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 40,
        flexWrap: "wrap",
        gap: 16,
      }}>
        <div>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#882B8D", fontWeight: 700, margin: "0 0 8px",
          }}>
            Inlägg
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "2.4rem",
            fontWeight: 700,
            color: "#1C1410",
            margin: 0,
            lineHeight: 1.1,
          }}>
            Dina blogginlägg
          </h1>
        </div>
        <Link href="/admin/dashboard/ny" style={{
          background: "#882B8D",
          color: "#ffffff",
          padding: "12px 22px",
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          borderRadius: 3,
        }}>
          + Nytt inlägg
        </Link>
      </div>

      {posts.length === 0 ? (
        <div style={{
          padding: "60px 40px",
          background: "#ffffff",
          border: "1px solid rgba(28,20,16,0.08)",
          borderRadius: 4,
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: 17, color: "rgba(28,20,16,0.6)",
            margin: 0,
          }}>
            Inga inlägg ännu. Skapa ditt första!
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 0, background: "#ffffff", borderRadius: 4, border: "1px solid rgba(28,20,16,0.08)" }}>
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/admin/dashboard/${post.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr auto",
                gap: 24,
                alignItems: "center",
                padding: "20px 24px",
                borderTop: i === 0 ? "none" : "1px solid rgba(28,20,16,0.06)",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                color: "rgba(28,20,16,0.55)",
              }}>
                {formatDate(post.date)}
              </span>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: 0,
                  color: "#1C1410",
                }}>
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p style={{
                    fontSize: 13, color: "rgba(28,20,16,0.55)",
                    margin: "4px 0 0",
                    maxWidth: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {post.excerpt}
                  </p>
                )}
              </div>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                color: "#882B8D",
                fontWeight: 600,
              }}>
                Redigera →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
