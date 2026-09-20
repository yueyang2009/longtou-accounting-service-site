import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = "https://longtou.audit-report-check.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 静态页不输出 lastmod：避免每次构建都把全部 URL 标成"刚更新"，降低抓取噪音；
  // 博文仍使用真实发布日期
  const staticRoutes = ["", "/why-annual-advisor", "/services", "/digital-dashboard", "/equity-structure", "/break-even", "/risk-heatmap", "/budget-management", "/dashboard-demo", "/cases", "/faq", "/about", "/team", "/blog"].map(
    (route) => ({
      url: `${SITE}${route}/`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const posts = getAllPosts();
  const postRoutes = posts.map((post) => ({
    url: `${SITE}/blog/${post.slug}/`,
    lastModified: post.date ? new Date(`${post.date}T00:00:00+08:00`) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
