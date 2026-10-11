import { BlogModulesClient } from "@/components/BlogModulesClient";
import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { getAllPosts, getCategories } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories(posts);
  const latest = posts[0]?.date ?? "";
  const industryCount = categories.filter((c) => c.count > 0).length;

  return (
    <div className="min-h-screen bg-brand-paper">
      {/* ── Header ── */}
      <HomeHeader />

      <main>
        {/* ── 页头 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
              观点 · 经营参考
            </p>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-6xl">
                  文章
                </h1>
                <p className="mt-6 text-base leading-8 text-brand-muted md:text-lg">
                  按行业查看经营诊断与财税合规的实践思考。政策解读、稽查案例、培训要点，随写随更，选您所在的行业，只看对您有用的内容。
                </p>
              </div>
              <dl className="flex flex-wrap gap-x-10 gap-y-6 lg:shrink-0">
                <Stat label="文章总数" value={String(posts.length)} suffix="篇" />
                <Stat label="覆盖行业" value={String(industryCount)} suffix="个" />
                <Stat label="最近更新" value={latest || "—"} />
              </dl>
            </div>
          </div>
        </section>

        {/* ── 筛选 + 文章 ── */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
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

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.1em] text-brand-muted">{label}</dt>
      <dd className="mt-2 font-display text-2xl font-semibold text-brand-ink md:text-3xl">
        {value}
        {suffix && <span className="ml-1 text-sm font-normal text-brand-muted">{suffix}</span>}
      </dd>
    </div>
  );
}
