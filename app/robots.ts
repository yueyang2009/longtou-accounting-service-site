import type { MetadataRoute } from "next";

const BASE = "https://yueyang2009.github.io";
const BASE_PATH = "/longtou-accounting-service-site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}${BASE_PATH}/sitemap.xml`,
    host: BASE,
  };
}
