import { redirect } from "next/navigation";
import Link from "next/link";
import { isLoggedIn } from "@/app/_lib/auth";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  if (!(await isLoggedIn())) redirect("/admin");

  return (
    <div style={{ minHeight: "100vh", background: "#FDFAF8" }}>
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid rgba(28,20,16,0.08)",
        background: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/admin/dashboard" style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 18,
            fontWeight: 700,
            color: "#1C1410",
            textDecoration: "none",
          }}>
            Blogg · admin
          </Link>
          <Link href="/blogg" style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "rgba(28,20,16,0.6)",
            textDecoration: "none",
          }}>
            Visa live-blogg →
          </Link>
        </div>
        <LogoutButton />
      </header>
      <div style={{ padding: "48px 40px 80px", maxWidth: 1000, margin: "0 auto" }}>
        {children}
      </div>
    </div>
  );
}
