"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, Search, X } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function coverSrc(cover: string) {
  return cover ? `${BASE}${cover}` : "";
}

function Cover({ post, className }: { post: PostMeta; className?: string }) {
  const src = coverSrc(post.cover);
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-[#0c1310] ${className ?? ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1210]/55 via-transparent to-transparent" />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-b border-brand-line bg-[#ece7dc] ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/images/longtou-group-logo.webp`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-9 w-auto opacity-80"
      />
    </div>
  );
}

export function BlogModulesClient({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: { name: string; count: number }[];
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = posts;
    if (active) list = list.filter((p) => (p.category || "未分类") === active);
    if (q) {
      list = list.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.excerpt?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.category?.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, active, posts]);

  const isDefaultView = !query.trim() && !active;
  const featured = isDefaultView ? filtered[0] : undefined;
  const gridPosts = featured ? filtered.slice(1) : filtered;

  return (
    <div>
      {/* ── 工具栏：分类 + 搜索 ── */}
      <div className="sticky top-[72px] z-30 -mx-6 mb-10 border-b border-brand-line bg-brand-paper/92 px-6 py-4 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <Chip
              label="全部文章"
              count={posts.length}
              active={!active}
              onClick={() => setActive(null)}
            />
            {categories.map((c) => (
              <Chip
                key={c.name}
                label={c.name}
                count={c.count}
                active={active === c.name}
                onClick={() => setActive((prev) => (prev === c.name ? null : c.name))}
              />
            ))}
          </div>

          <div className="relative w-full lg:w-64 lg:shrink-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索文章…"
              className="w-full rounded-full border border-brand-line bg-[#141d19] py-2 pl-10 pr-10 text-sm text-brand-ink outline-none placeholder:text-brand-muted transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/40"
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
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-brand-muted">
          没有找到相关文章，试试其他关键词？
        </p>
      ) : (
        <div className="space-y-12">
          {/* ── 头条 ── */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}/`}
              className="group grid overflow-hidden rounded-card-lg border border-brand-line bg-brand-card shadow-card transition hover:shadow-card-hover lg:grid-cols-2"
            >
              <Cover post={featured} className="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[360px]" />
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 font-medium text-brand-gold">
                    最新文章
                  </span>
                  <span className="text-brand-muted">{featured.category}</span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-brand-ink md:text-3xl">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="mt-4 line-clamp-3 text-sm leading-8 text-brand-muted md:text-base">
                    {featured.excerpt}
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-brand-muted">
                  {featured.date && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {featured.date}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    约 {featured.readingTime} 分钟
                  </span>
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold">
                  阅读全文 <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          )}

          {/* ── 卡片网格 ── */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-brand-gold bg-brand-gold text-[#0f1513] font-semibold"
          : "border-brand-line text-brand-muted hover:border-brand-gold/50 hover:text-brand-ink"
      }`}
    >
      {label}
      <span className={`text-xs ${active ? "text-[#0f1513]/70" : "text-brand-muted/70"}`}>
        {count}
      </span>
    </button>
  );
}

function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col overflow-hidden rounded-card border border-brand-line bg-brand-card shadow-card transition hover:shadow-card-hover"
    >
      <Cover post={post} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-brand-muted">
          <span className="font-medium text-brand-gold">{post.category}</span>
          {post.date && <span>· {post.date}</span>}
        </div>
        <h3 className="mt-3 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-tight text-brand-ink transition group-hover:text-brand-gold">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-brand-muted">
            {post.excerpt}
          </p>
        )}
        <div className="mt-5 flex items-center gap-1.5 text-xs text-brand-muted">
          <Clock className="h-3.5 w-3.5" />
          约 {post.readingTime} 分钟
        </div>
      </div>
    </Link>
  );
}
