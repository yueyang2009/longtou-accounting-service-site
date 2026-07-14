import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { remark } from "remark";
import html from "remark-html";
import type { Metadata } from "next";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import { brand, navItems } from "@/lib/data";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

const SITE = "https://yueyang2009.github.io/longtou-accounting-service-site";

// ── 构建时生成所有文章路径 ──
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ── 每篇文章的元数据（canonical / OG / Twitter）──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date || undefined,
      tags: post.tags,
      siteName: "龙头会服·高端财税服务团队",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// ── markdown → html ──
async function markdownToHtml(md: string): Promise<string> {
  const result = await remark().use(html).process(md);
  // 文章正文经 dangerouslySetInnerHTML 注入，Next 的 basePath 不会自动重写，
  // 故在此手动为 /images/ 资源补齐 basePath（线上 GitHub Pages 子路径）。
  const basePath =
    process.env.GITHUB_PAGES === "true" ? "/longtou-accounting-service-site" : "";
  return result
    .toString()
    .replace(/src="\/images\//g, `src="${basePath}/images/`);
}

// ── 页面 ──
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await markdownToHtml(post.content);
  const postUrl = `${SITE}/blog/${post.slug}/`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    articleSection: post.category,
    keywords: post.tags?.join(", "),
    author: {
      "@type": "Organization",
      name: "龙头会服·高端财税服务团队",
      url: `${SITE}/team/`,
    },
    publisher: {
      "@type": "Organization",
      name: "河南龙头会计服务有限公司",
      parentOrganization: {
        "@type": "Organization",
        name: "龙头集团",
        description: "知识产权全产业链、全生命周期服务集团",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-brand-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
          <MobileNav links={navItems} />
          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-brand-emerald px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
          >
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>
        {/* ── 文章头部 ── */}
        <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          {/* 返回 */}
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-1 text-sm text-brand-muted transition hover:text-brand-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            返回文章列表
          </Link>

          {/* 标题区 */}
          <header className="mb-12">
            {/* 日期 + 标签 */}
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-brand-muted">
              {post.date && (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
              )}
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border border-brand-line bg-brand-soft px-3 py-0.5 text-xs"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-6xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-4 text-base leading-7 text-brand-muted">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* ── 正文 ── */}
          <div
            className="prose-caishui"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
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
