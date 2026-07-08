import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "posts");

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
        date: data.date || "",
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
    date: data.date || "",
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
