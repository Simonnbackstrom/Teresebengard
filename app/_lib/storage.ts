import fs from "node:fs/promises";
import path from "node:path";
import { revalidateTag } from "next/cache";
import { POSTS_TAG, stringifyPost, type Post } from "./posts";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const shouldPublishViaGitHub = () =>
  process.env.VERCEL === "1" || !!process.env.GITHUB_FORCE || process.env.NODE_ENV === "production";

type GitHubConfig = { token: string; repo: string; branch: string };

function githubConfig(): GitHubConfig {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token || !repo) {
    throw new Error(
      "GitHub-publicering kräver GITHUB_TOKEN och GITHUB_REPO. Lägg till dem som env vars i Vercel.",
    );
  }
  return { token, repo, branch };
}

async function ghRequest(
  cfg: GitHubConfig,
  pathInRepo: string,
  init: RequestInit = {},
): Promise<Response> {
  const url = `https://api.github.com/repos/${cfg.repo}/contents/${pathInRepo}`;
  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
    cache: "no-store",
  });
}

async function getShaIfExists(cfg: GitHubConfig, pathInRepo: string): Promise<string | undefined> {
  const res = await ghRequest(cfg, `${pathInRepo}?ref=${encodeURIComponent(cfg.branch)}`);
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`GitHub GET ${pathInRepo} ${res.status}`);
  const data = (await res.json()) as { sha?: string };
  return data.sha;
}

async function writeViaGitHub(filename: string, contents: string, message: string): Promise<void> {
  const cfg = githubConfig();
  const pathInRepo = `content/posts/${filename}`;
  const sha = await getShaIfExists(cfg, pathInRepo);
  const res = await ghRequest(cfg, pathInRepo, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: Buffer.from(contents, "utf8").toString("base64"),
      branch: cfg.branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub PUT ${pathInRepo} ${res.status}: ${text}`);
  }
}

async function deleteViaGitHub(filename: string, message: string): Promise<void> {
  const cfg = githubConfig();
  const pathInRepo = `content/posts/${filename}`;
  const sha = await getShaIfExists(cfg, pathInRepo);
  if (!sha) return;
  const res = await ghRequest(cfg, pathInRepo, {
    method: "DELETE",
    body: JSON.stringify({ message, sha, branch: cfg.branch }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub DELETE ${pathInRepo} ${res.status}: ${text}`);
  }
}

async function writeLocal(filename: string, contents: string): Promise<void> {
  await fs.mkdir(POSTS_DIR, { recursive: true });
  await fs.writeFile(path.join(POSTS_DIR, filename), contents, "utf8");
}

async function deleteLocal(filename: string): Promise<void> {
  await fs.rm(path.join(POSTS_DIR, filename), { force: true });
}

export async function savePost(post: Post): Promise<void> {
  const filename = `${post.slug}.md`;
  const contents = stringifyPost(post);
  if (shouldPublishViaGitHub()) {
    await writeViaGitHub(filename, contents, `Blogg: ${post.title}`);
  } else {
    await writeLocal(filename, contents);
  }
  revalidateTag(POSTS_TAG);
}

export async function deletePost(slug: string): Promise<void> {
  const filename = `${slug}.md`;
  if (shouldPublishViaGitHub()) {
    await deleteViaGitHub(filename, `Blogg: ta bort ${slug}`);
  } else {
    await deleteLocal(filename);
  }
  revalidateTag(POSTS_TAG);
}

async function uploadViaGitHub(pathInRepo: string, data: Buffer, message: string): Promise<void> {
  const cfg = githubConfig();
  const res = await ghRequest(cfg, pathInRepo, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: data.toString("base64"),
      branch: cfg.branch,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub PUT ${pathInRepo} ${res.status}: ${text}`);
  }
}

async function uploadLocal(filename: string, data: Buffer): Promise<void> {
  const dir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, filename), data);
}

export async function uploadImage(originalName: string, data: Buffer): Promise<string> {
  const ext = (originalName.split(".").pop() || "").toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const base = originalName
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/å/g, "a").replace(/ä/g, "a").replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "bild";
  const filename = `${Date.now()}-${base}.${ext}`;
  if (shouldPublishViaGitHub()) {
    await uploadViaGitHub(`public/uploads/${filename}`, data, `Blogg: bild ${filename}`);
    const cfg = githubConfig();
    return `https://raw.githubusercontent.com/${cfg.repo}/${cfg.branch}/public/uploads/${filename}`;
  }
  await uploadLocal(filename, data);
  return `/uploads/${filename}`;
}
