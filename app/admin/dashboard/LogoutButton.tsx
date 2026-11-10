"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  async function handleClick() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  }
  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "1px solid rgba(28,20,16,0.15)",
        padding: "8px 16px",
        fontSize: 13,
        fontFamily: "var(--font-sans)",
        color: "#1C1410",
        cursor: "pointer",
        borderRadius: 3,
      }}
    >
      Logga ut
    </button>
  );
}
