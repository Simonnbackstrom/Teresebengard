import { NextResponse } from "next/server";
import { isLoggedIn } from "@/app/_lib/auth";
import { getPost } from "@/app/_lib/posts";
import { savePost, deletePost } from "@/app/_lib/storage";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ slug: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: "Ej inloggad" }, { status: 401 });
  }
  const { slug } = await params;
  const existing = await getPost(slug);
  if (!existing) return NextResponse.json({ error: "Hittades inte" }, { status: 404 });

  const body = (await req.json().catch(() => ({}))) as {
    title?: string;
    excerpt?: string;
    date?: string;
    body?: string;
    cover?: string;
  };
  const title = (body.title || "").trim();
  if (!title) return NextResponse.json({ error: "Titel krävs" }, { status: 400 });

  try {
    await savePost({
      slug,
      title,
      date: body.date || existing.date,
      excerpt: (body.excerpt ?? existing.excerpt).trim(),
      body: body.body ?? existing.body,
      cover: body.cover?.trim() || undefined,
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, slug });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  if (!(await isLoggedIn())) {
    return NextResponse.json({ error: "Ej inloggad" }, { status: 401 });
  }
  const { slug } = await params;
  try {
    await deletePost(slug);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
