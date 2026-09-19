import type { Metadata } from "next";

import "./globals.css";
import { brand } from "@/lib/data";
import { DimOnClick } from "@/components/DimOnClick";
import { BackToHomeBtn } from "@/components/BackToHomeBtn";
import { ContactFab } from "@/components/ContactFab";

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
  alternates: {
    canonical: "/",
  },
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
        telephone: "+86-181-0383-5769",
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
      </head>
      <body>
        {children}
        <DimOnClick />
        <BackToHomeBtn />
        <ContactFab />
      </body>
    </html>
  );
}
