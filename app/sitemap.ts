import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://yueyang2009.github.io";
const BASE_PATH = "/longtou-accounting-service-site";
const SITE = `${BASE}${BASE_PATH}`;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/why-annual-advisor", "/services", "/about", "/team", "/blog"].map(
    (route) => ({
      url: `${SITE}${route}/`,
      lastModified: new Date(),
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
