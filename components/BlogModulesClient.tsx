"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Search, X } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

export function BlogModulesClient({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: { name: string; count: number }[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title?.toLowerCase().includes(q) ||
        p.excerpt?.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q)) ||
        p.category?.toLowerCase().includes(q)
    );
  }, [query, posts]);

  // 按模块顺序分组；搜索时仍按模块展示匹配项，空模块自动隐藏
  const groups = categories
    .map((c) => ({
      ...c,
      items: filtered.filter((p) => (p.category || "未分类") === c.name),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      {/* ── 行业模块快捷导航 ── */}
      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href="#all"
          className="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-medium text-brand-ink transition hover:border-brand-emerald hover:text-brand-emerald"
        >
          全部文章
        </a>
        {categories.map((c) => (
          <a
            key={c.name}
            href={`#cat-${encodeURIComponent(c.name)}`}
            className="rounded-full border border-brand-line bg-white px-4 py-2 text-sm text-brand-muted transition hover:border-brand-emerald hover:text-brand-emerald"
          >
            {c.name}
            <span className="ml-1 text-xs text-brand-muted/70">{c.count}</span>
          </a>
        ))}
      </div>

      {/* ── 搜索框（辅助） ── */}
      <div className="mb-10 flex justify-end">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索文章…"
            className="w-full rounded-full border border-brand-line bg-white py-2 pl-10 pr-10 text-sm text-brand-ink outline-none transition focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted transition hover:text-brand-ink"
              aria-label="清除搜索"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* ── 分组平铺 ── */}
      <div id="all" className="space-y-14">
        {groups.map((g) => (
          <section
            key={g.name}
            id={`cat-${encodeURIComponent(g.name)}`}
            className="scroll-mt-24"
          >
            <div className="mb-6 flex items-baseline gap-3 border-b border-brand-line pb-3">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
                {g.name}
              </h2>
              <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs text-brand-muted">
                {g.items.length} 篇
              </span>
            </div>
            <div className="space-y-6">
              {g.items.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ))}

        {groups.length === 0 && (
          <p className="py-12 text-center text-brand-muted">
            没有找到相关文章，试试其他关键词？
          </p>
        )}
      </div>
    </>
  );
}

function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-card border border-brand-line bg-brand-card p-6 shadow-card transition hover:shadow-card-hover md:p-8"
    >
      {/* 日期 + 标签 */}
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-brand-muted">
        {post.date && (
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
        )}
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full border border-brand-line bg-brand-soft px-2.5 py-0.5 text-xs text-brand-muted"
          >
            <Tag className="h-3 w-3" />
            {tag}
          </span>
        ))}
      </div>

      {/* 标题 */}
      <h3 className="text-xl font-semibold leading-snug tracking-tight text-brand-ink transition group-hover:text-brand-emerald md:text-2xl">
        {post.title}
      </h3>

      {/* 摘要 */}
      {post.excerpt && (
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-brand-muted">
          {post.excerpt}
        </p>
      )}

      {/* 阅读更多 */}
      <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-emerald opacity-0 transition group-hover:opacity-100">
        阅读全文 <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}
