import { NextResponse } from "next/server";
import { isLoggedIn } from "@/app/_lib/auth";
import { getPost, slugify } from "@/app/_lib/posts";
import { savePost } from "@/app/_lib/storage";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: "Ej inloggad" }, { status: 401 });
  }
  const body = (await req.json().catch(() => ({}))) as {
    title?: string;
    excerpt?: string;
    date?: string;
    body?: string;
    cover?: string;
  };
  const title = (body.title || "").trim();
  if (!title) return NextResponse.json({ error: "Titel krävs" }, { status: 400 });

  const baseSlug = slugify(title) || `inlagg-${Date.now()}`;
  let slug = baseSlug;
  let n = 2;
  while (await getPost(slug)) {
    slug = `${baseSlug}-${n++}`;
  }

  const date = body.date || new Date().toISOString().slice(0, 10);
  try {
    await savePost({
      slug,
      title,
      date,
      excerpt: (body.excerpt || "").trim(),
      body: body.body || "",
      cover: body.cover?.trim() || undefined,
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, slug });
}
