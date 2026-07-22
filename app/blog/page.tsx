import Link from "next/link";

import { BlogModulesClient } from "@/components/BlogModulesClient";
import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { brand } from "@/lib/data";
import { getAllPosts, getCategories } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories(posts);

  return (
    <div className="min-h-screen bg-brand-paper">
      {/* ── Header ── */}
      <HomeHeader />

      <main>
        {/* ── 页头 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
              观点
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-6xl">
              文章
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted">
              按行业查看经营诊断与财税合规的实践思考。选您所在的行业，只看对您有用的内容。
            </p>
          </div>
        </section>

        {/* ── 模块分组 + 搜索 ── */}
        <section>
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            {posts.length === 0 ? (
              <p className="text-center text-brand-muted">暂无文章</p>
            ) : (
              <BlogModulesClient posts={posts} categories={categories} />
            )}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
