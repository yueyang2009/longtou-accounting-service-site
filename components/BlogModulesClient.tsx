"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, Search, X, ChevronRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { CATEGORY_ORDER } from "@/lib/categories";

export function BlogModulesClient({
  posts,
  categories,
}: {
  posts: PostMeta[];
  categories: { name: string; count: number }[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

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

  const groups = categories
    .map((c) => ({
      ...c,
      items: filtered.filter((p) => (p.category || "未分类") === c.name),
    }))
    .filter((g) => g.items.length > 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveCategory((prev) => { const n = decodeURIComponent(id.replace("cat-", "")); return prev === null ? n : prev; });
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );
    for (const ref of Object.values(sectionRefs.current)) {
      if (ref) observer.observe(ref);
    }
    return () => observer.disconnect();
  }, [groups]);

  const toggleCategory = (name: string) => {
    setActiveCategory((prev) => (prev === name ? null : name));
    scrollToSection(name);
  };

  const scrollToSection = (name: string) => {
    const el = sectionRefs.current[name];
    if (el) {
      el.scrollIntoView({ behavior: "instant", block: "start" });
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <nav aria-label="文章分类目录">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
            博文目录
          </h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => toggleCategory("all")}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  activeCategory === "all" || !activeCategory
                    ? "bg-[#1a2420] font-medium text-[#e9d9bc]"
                    : "text-brand-muted hover:bg-brand-soft hover:text-brand-ink"
                }`}
              >
                全部文章
                <span className="ml-2 text-xs text-brand-muted/60">{posts.length}</span>
              </button>
            </li>
            {categories.map((c) => (
              <li key={c.name}>
                {/*
                  Find matching group items for this category
                */}
                {(() => {
                  const items = groups.find((g) => g.name === c.name)?.items ?? filtered.filter((p) => (p.category || "未分类") === c.name);
                  return (
                    <>
                      <button
                        onClick={() => toggleCategory(c.name)}
                        className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                          activeCategory === c.name
                            ? "bg-[#1a2420] font-medium text-[#e9d9bc]"
                            : "text-brand-muted hover:bg-brand-soft hover:text-brand-ink"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <ChevronRight
                            className={`h-3 w-3 shrink-0 transition ${
                              activeCategory === c.name ? "rotate-90 text-[#d9c7a5]" : "text-brand-muted/40"
                            }`}
                          />
                          {c.name}
                        </span>
                        <span className="ml-auto text-xs text-brand-muted/60">{c.count}</span>
                      </button>
                      {activeCategory === c.name && items.length > 0 && (
                        <ul className="ml-4 mt-1 space-y-0.5 border-l border-brand-line/30 pl-3">
                          {items.map((post) => (
                            <li key={post.slug}>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="block rounded px-2 py-1.5 text-xs text-brand-muted/80 transition hover:text-[#e9d9bc] hover:bg-[#1a2420]/60"
                              >
                                {post.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  );
                })()}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div>
        <div className="mb-10 flex justify-end">
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

        <div id="all" className="space-y-14">
          {groups.map((g) => (
            <section
              key={g.name}
              id={`cat-${encodeURIComponent(g.name)}`}
              ref={(el) => { sectionRefs.current[g.name] = el; }}
              className="scroll-mt-28"
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
      </div>
    </div>
  );
}

function ArticleCard({ post }: { post: PostMeta }) {
  const featured = CATEGORY_ORDER.includes(post.category);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-card border border-brand-line bg-brand-card p-6 shadow-card transition hover:shadow-card-hover md:p-8"
    >
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

      <h3
        className={
          featured
            ? "blog-title-featured inline-block rounded-lg text-xl font-bold leading-snug tracking-tight md:text-2xl"
            : "text-xl font-semibold leading-snug tracking-tight text-brand-ink transition group-hover:text-brand-emerald md:text-2xl"
        }
      >
        {post.title}
      </h3>

      {post.excerpt && (
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-brand-muted">
          {post.excerpt}
        </p>
      )}

      <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-emerald opacity-0 transition group-hover:opacity-100">
        阅读全文 <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}
