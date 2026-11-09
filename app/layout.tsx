import type { Metadata } from "next";

import "./globals.css";
// 浅色主题覆盖层（2026-11-09）：只在 html[data-theme="slate"] 下生效，默认主题不受影响
import "./theme-slate.css";
import { brand } from "@/lib/data";
import { DimOnClick } from "@/components/DimOnClick";
import { BackToHomeBtn } from "@/components/BackToHomeBtn";
import { ContactFab } from "@/components/ContactFab";
import { FabAutoHide } from "@/components/FabAutoHide";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const SITE = "https://longtou.audit-report-check.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: `${brand.name}｜${brand.slogan}`,
    template: `%s｜${brand.name}`,
  },
  description:
    "龙头会服·高端财税服务团队（河南龙头会计服务有限公司），企业财税与经营参谋团队，专注中小企业财税规范与经营体系建设，由注册会计师、注册税务师提供财税体检、经营分析、架构设计与财务体系服务。",
  keywords: [
    "财税咨询",
    "税务合规筹划",
    "财务体系建设",
    "股权架构设计",
    "企业经营分析",
    "历史乱账清理",
    "内部控制",
    "税务稽查应对",
    "河南财税",
    "龙头会服",
    "河南龙头会计服务有限公司",
  ],
  openGraph: {
    images: [
      {
        url: `${SITE}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${brand.name}｜${brand.slogan}`,
      },
    ],
   type: "website",
   locale: "zh_CN",
   url: "/",
   siteName: "龙头会服·高端财税服务团队",
   title: `${brand.name}｜${brand.slogan}`,
   description: "企业财税与经营参谋团队，专注中小企业财税规范与经营体系建设。",
 },
 twitter: {
   card: "summary_large_image",
    images: `${SITE}/images/og-image.jpg`,
   title: `${brand.name}｜${brand.slogan}`,
   description: "企业财税与经营参谋团队，专注中小企业财税规范与经营体系建设。",
 },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "河南龙头会计服务有限公司",
      alternateName: ["龙头会服·高端财税服务团队", "龙头会服"],
      description:
        "企业财税与经营参谋团队，专注中小企业财税规范与经营体系建设，由注册会计师、注册税务师等资质顾问基于一线企业服务实践提供服务。",
      url: `${SITE}/`,
      areaServed: { "@type": "AdministrativeArea", name: "河南省" },
      knowsAbout: [
        "财税咨询",
        "税务合规筹划",
        "财务体系建设",
        "股权架构设计",
        "企业经营分析",
        "历史乱账清理",
        "内部控制",
        "税务稽查应对",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "龙头集团",
        description: "知识产权全产业链、全生命周期服务集团",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "CN",
        addressRegion: "河南省",
        addressLocality: "郑州市",
        streetAddress: "国际路60号国家知识产权大厦11层",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+86-132-7158-9698",
        contactType: "business",
        areaServed: "河南省",
      },
      sameAs: [`${SITE}/team/`],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "龙头会服·高端财税服务团队",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "zh-CN",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const fontBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={`${fontBase}/fonts/noto-serif-sc.woff2`}
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:"Noto Serif SC";font-style:normal;font-weight:400 700;font-display:swap;src:url("${fontBase}/fonts/noto-serif-sc.woff2") format("woff2");}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 主题防闪烁（2026-11-09）：在浏览器绘制第一帧前把 data-theme 写上。
            不放在 React 里是因为水合要等 JS 下载执行，浅色用户会先看到一帧墨绿。
            这段脚本要同步执行、且必须包 try（隐私模式读 localStorage 会抛错）。

            2026-11-09 晚：默认主题改为 warm（暖白纸感），老板定的口径是
            客户主要来读内容，米白底深字在手机上不累眼。
            所以这里「没存过就写 warm」，而不是像之前那样「没存过就摘属性」。
            存过 dark 的老访客仍然给他墨绿，不强行换。 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("lt_theme");if(t==="slate"||t==="warm"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}else{document.documentElement.setAttribute("data-theme","warm");}}catch(e){try{document.documentElement.setAttribute("data-theme","warm");}catch(e2){}}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <DimOnClick />
        <FabAutoHide />
        <BackToHomeBtn />
        <ContactFab />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
