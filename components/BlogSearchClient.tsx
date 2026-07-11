"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Search, X } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

export function BlogSearchClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? posts.filter((post) => {
        const q = query.toLowerCase();
        return (
          post.title?.toLowerCase().includes(q) ||
          post.excerpt?.toLowerCase().includes(q) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : posts;

  return (
    <>
      {/* ── 搜索框 ── */}
      <div className="mb-8 flex justify-end">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索文章…"
            className="w-full rounded-full border border-brand-line/50 bg-[#1a2420] py-2 pl-10 pr-10 text-sm text-[#e9e3d5] outline-none placeholder:text-[#8a857a] transition focus:border-[#d9c7a5] focus:ring-1 focus:ring-[#d9c7a5]/40"
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

      {/* ── 搜索结果计数 ── */}
      {query.trim() && (
        <p className="mb-4 text-sm text-brand-muted">
          找到 {filtered.length} 篇与「{query}」相关的文章
        </p>
      )}

      {/* ── 文章列表 ── */}
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-brand-muted">
          没有找到相关文章，试试其他关键词？
        </p>
      ) : (
        <div className="space-y-8">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
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
      <h2 className="text-xl font-semibold leading-snug tracking-tight text-brand-ink transition group-hover:text-brand-emerald md:text-2xl">
        {post.title}
      </h2>

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
