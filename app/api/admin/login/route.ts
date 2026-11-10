import { NextResponse } from "next/server";
import { createSession, verifyPassword } from "@/app/_lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  if (!password || !verifyPassword(password)) {
    return NextResponse.json({ error: "Fel lösenord" }, { status: 401 });
  }
  await createSession();
  return NextResponse.json({ ok: true });
}
