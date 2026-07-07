import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { BlogSearchClient } from "@/components/BlogSearchClient";
import { MobileNav } from "@/components/MobileNav";
import { brand, navItems } from "@/lib/data";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-brand-paper">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-line bg-[#111816]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center rounded-full bg-white px-2 py-1">
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

        {/* ── 文章列表（含搜索） ── */}
        <section>
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            {posts.length === 0 ? (
              <p className="text-center text-brand-muted">暂无文章</p>
            ) : (
              <BlogSearchClient posts={posts} />
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

