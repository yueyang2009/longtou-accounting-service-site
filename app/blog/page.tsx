import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import { brand, navItems } from "@/lib/data";
import { getAllPosts, type PostMeta } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-brand-paper">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${
                  item.href === "/blog"
                    ? "font-medium text-brand-ink"
                    : "text-brand-muted hover:text-brand-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileNav
            links={[
              ...navItems,
              { href: "/contact", label: "申请财税诊断" },
            ]}
          />
          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-brand-emerald px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
          >
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>
        {/* ── 页头 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
              观点
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              文章
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted">
              围绕企业经营诊断、财税合规、数字化改造和 AI 应用的实践思考。
            </p>
          </div>
        </section>

        {/* ── 文章列表 ── */}
        <section>
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            {posts.length === 0 ? (
              <p className="text-center text-brand-muted">暂无文章</p>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-brand-emerald text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">
            {brand.name} · {brand.positioning}
          </p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
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
