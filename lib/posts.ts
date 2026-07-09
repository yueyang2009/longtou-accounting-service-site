import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "posts");

/**
 * frontmatter 里裸写的日期（如 `date: 2026-03-24`）会被 YAML 解析成 Date 对象，
 * 直接渲染会触发 "Objects are not valid as a React child" 导致整站构建失败。
 * 这里统一转成 YYYY-MM-DD 字符串，保证页面渲染与排序稳定。
 */
function normalizeDate(d: unknown): string {
  if (d == null) return "";
  if (d instanceof Date) {
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  return String(d);
}

/** 模块（行业）展示顺序；未在此列出的分类会排在最后 */
export const CATEGORY_ORDER = ["医美行业", "加油站", "医疗器械"];

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
};

export type Post = PostMeta & {
  content: string;
};

/** 获取所有文章的元数据列表 */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        date: normalizeDate(data.date),
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        category: data.category || "未分类",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first

  return posts;
}

/** 根据 slug 获取单篇文章 */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    date: normalizeDate(data.date),
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    category: data.category || "未分类",
    content,
  };
}

/** 按 CATEGORY_ORDER 聚合出模块导航（含各模块文章数） */
export function getCategories(
  posts: PostMeta[]
): { name: string; count: number }[] {
  const counter = new Map<string, number>();
  for (const post of posts) {
    const cat = post.category || "未分类";
    counter.set(cat, (counter.get(cat) || 0) + 1);
  }
  const ordered = CATEGORY_ORDER.map((c) => ({
    name: c,
    count: counter.get(c) || 0,
  }));
  const rest = Array.from(counter.keys())
    .filter((c) => !CATEGORY_ORDER.includes(c))
    .map((c) => ({ name: c, count: counter.get(c)! }));
  return [...ordered, ...rest];
}
