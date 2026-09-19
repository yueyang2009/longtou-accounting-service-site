import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "龙头会服·高端财税服务团队",
    short_name: "龙头会服",
    description:
      "企业财税与经营参谋团队，专注中小企业财税规范与经营体系建设。",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#0f1513",
    theme_color: "#111816",
    lang: "zh-CN",
    icons: [
      {
        src: `${basePath}/images/app-icon-192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${basePath}/images/app-icon-512.png`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: `${basePath}/images/app-icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
