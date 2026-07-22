import Link from "next/link";

import { brand, siteNavLinks } from "@/lib/data";
import { CountUp } from "@/components/CountUp";

const services = [
  { label: "财税健康体检", href: "/services" },
  { label: "企业经营分析", href: "/services" },
  { label: "股权架构设计", href: "/services" },
  { label: "财务体系建设", href: "/services" },
  { label: "历史乱账清理", href: "/services" },
  { label: "税务稽查应对", href: "/services" },
];

const credentials = [
  { value: 12, suffix: "", label: "注册会计师" },
  { value: 4, suffix: "", label: "注册税务师" },
  { value: 2, suffix: "", label: "高级会计师" },
  { value: 10000, suffix: "+", label: "累计服务企业" },
];

export function Footer() {
  const base = process.env.NODE_ENV === "production" ? "/longtou-accounting-service-site" : "";
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#d9c7a5]/14 bg-[#0a0f0d] text-white">
      {/* ── 资质细带 ── */}
      <div className="border-b border-white/8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/8 md:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="bg-[#0a0f0d] px-6 py-7 text-center">
              <p className="text-3xl font-semibold tracking-tight text-[#e9d9bc]">
                <CountUp value={c.value} suffix={c.suffix} />
              </p>
              <p className="mt-1.5 text-xs text-white/55">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 主体四栏 ── */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        {/* 品牌 */}
        <div>
          <p className="text-xl font-semibold tracking-tight text-white">{brand.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">{brand.slogan}</p>
          <p className="mt-3 max-w-xs text-sm leading-7 text-white/45">
            {brand.positioning} · 河南郑州
          </p>
          <p className="mt-2 max-w-xs text-sm leading-7 text-white/35">
            专注成长型企业的财税规范与经营体系建设
          </p>
          <Link
            href="/contact"
            className="premium-button mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[#d9c7a5] px-6 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
          >
            申请企业财税风险诊断
          </Link>
        </div>

        {/* 导航 */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9c7a5]/80">导航</p>
          <ul className="mt-5 space-y-3">
            {siteNavLinks.map((l) => (
              <li key={l.href}>
                {l.href.endsWith(".html") ? (
                  <a href={`${base}${l.href}`} className="text-sm text-white/65 transition hover:text-white">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="text-sm text-white/65 transition hover:text-white">
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 核心服务 */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9c7a5]/80">核心服务</p>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-white/65 transition hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 联系 */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9c7a5]/80">联系</p>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li>电话：{brand.phone}</li>
            <li>微信：{brand.phone}（同号）</li>
            <li>邮箱：service@longtou.com</li>
            <li>地址：河南省郑州市</li>
          </ul>
        </div>
      </div>

      {/* ── 版权与免责 ── */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs leading-6 text-white/40 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {year} 河南龙头会计服务有限公司 · 财税建议仅供参考，不构成具体承诺，以实际服务协议为准。</p>
          <p>豫ICP备 · 网站由龙头会服建设</p>
        </div>
      </div>
    </footer>
  );
}
