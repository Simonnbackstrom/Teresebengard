import { NextResponse } from "next/server";
import { isLoggedIn } from "@/app/_lib/auth";
import { uploadImage } from "@/app/_lib/storage";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function POST(req: Request) {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: "Ej inloggad" }, { status: 401 });
  }
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Ingen fil mottagen" }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json({ error: "Endast JPG, PNG, WEBP eller GIF" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Bilden är större än 8 MB" }, { status: 400 });
  }
  const buf = Buffer.from(await file.arrayBuffer());
  try {
    const url = await uploadImage(file.name || "bild", buf);
    return NextResponse.json({ ok: true, url });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
