import fs from "node:fs/promises";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  cover?: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const POSTS_PATH_IN_REPO = "content/posts";
export const POSTS_TAG = "posts";

const shouldUseGitHub = () =>
  !!process.env.GITHUB_TOKEN &&
  !!process.env.GITHUB_REPO &&
  (process.env.VERCEL === "1" || process.env.GITHUB_FORCE === "1");

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: match[2] };
}

export function stringifyPost(post: Omit<Post, "slug">): string {
  const esc = (s: string) => s.replace(/"/g, '\\"');
  const lines = [
    "---",
    `title: "${esc(post.title)}"`,
    `date: "${post.date}"`,
    `excerpt: "${esc(post.excerpt)}"`,
  ];
  if (post.cover) lines.push(`cover: "${esc(post.cover)}"`);
  lines.push("---", "", post.body.trim(), "");
  return lines.join("\n");
}

function toPost(filename: string, raw: string): Post {
  const { data, body } = parseFrontmatter(raw);
  return {
    slug: filename.replace(/\.md$/, ""),
    title: data.title ?? "Utan titel",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    cover: data.cover || undefined,
    body,
  };
}

async function readLocalDir(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files.filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}

type GitHubEntry = { name: string; path: string; sha: string; download_url: string | null };

async function ghRead(url: string): Promise<Response> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    const res = await fetch(url, {
      headers: { ...headers, Authorization: `Bearer ${token}` },
      next: { tags: [POSTS_TAG], revalidate: 300 },
    });
    if (res.status !== 401 && res.status !== 403) return res;
  }
  return fetch(url, { headers, next: { tags: [POSTS_TAG], revalidate: 300 } });
}

async function githubListFiles(): Promise<GitHubEntry[]> {
  const repo = process.env.GITHUB_REPO!;
  const branch = process.env.GITHUB_BRANCH || "main";
  const url = `https://api.github.com/repos/${repo}/contents/${POSTS_PATH_IN_REPO}?ref=${encodeURIComponent(branch)}`;
  const res = await ghRead(url);
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub list ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as GitHubEntry[];
  if (!Array.isArray(data)) return [];
  return data.filter((f) => typeof f.name === "string" && f.name.endsWith(".md"));
}

async function githubReadRaw(downloadUrl: string): Promise<string> {
  const res = await ghRead(downloadUrl);
  if (!res.ok) throw new Error(`GitHub raw ${res.status}`);
  return res.text();
}

async function githubGetFile(slug: string): Promise<string | null> {
  const repo = process.env.GITHUB_REPO!;
  const branch = process.env.GITHUB_BRANCH || "main";
  const url = `https://api.github.com/repos/${repo}/contents/${POSTS_PATH_IN_REPO}/${encodeURIComponent(slug)}.md?ref=${encodeURIComponent(branch)}`;
  const res = await ghRead(url);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub get ${res.status}`);
  const data = (await res.json()) as { content: string; encoding?: string };
  return Buffer.from(data.content, (data.encoding as BufferEncoding) || "base64").toString("utf8");
}

export async function getAllPosts(): Promise<Post[]> {
  if (shouldUseGitHub()) {
    try {
      const files = await githubListFiles();
      const posts = await Promise.all(
        files.map(async (f) => {
          const raw = f.download_url ? await githubReadRaw(f.download_url) : "";
          return toPost(f.name, raw);
        }),
      );
      return posts.sort((a, b) => b.date.localeCompare(a.date));
    } catch (err) {
      console.error("getAllPosts via GitHub failed", err);
      return [];
    }
  }
  const files = await readLocalDir();
  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
      return toPost(file, raw);
    }),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post | null> {
  if (shouldUseGitHub()) {
    try {
      const raw = await githubGetFile(slug);
      if (raw === null) return null;
      return toPost(`${slug}.md`, raw);
    } catch {
      return null;
    }
  }
  try {
    const raw = await fs.readFile(path.join(POSTS_DIR, `${slug}.md`), "utf8");
    return toPost(`${slug}.md`, raw);
  } catch {
    return null;
  }
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" });
}
