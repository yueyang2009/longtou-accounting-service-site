import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";

import { Layout } from "@/components/Layout";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: `联系我们｜${brand.name}`,
  description:
    "添加高端财税顾问微信，或直接致电。先聊清楚企业当下最需要被看见的问题，再判断是否适合年度顾问服务。",
};

const advisor = {
  name: "杜楠楠",
  title: "高端财税事业部 总经理",
  credential: "注册会计师 · 注册税务师 · 高级会计师",
  bio: "深耕财税一线 15 年，擅长税务合规筹划、股权架构设计、历史乱账清理与财务体系建设。先花十分钟听您讲清楚问题，再判断该从哪里入手。",
};

export default function ContactPage() {
  return (
    <Layout>
      {/* ── 页头 ── */}
      <section className="border-b border-brand-line">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
            联系我们
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-6xl">
            先聊清楚，再谈合作
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted md:text-lg">
            不用先填一堆表格，也不用先决定合作。加一个顾问的微信，把企业当下的情况讲清楚，我们先判断这件事值不值得现在做。
          </p>
        </div>
      </section>

      {/* ── 推荐联系 ── */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-2">
          {/* 人像 */}
          <div className="relative aspect-square overflow-hidden rounded-card-lg border border-brand-line bg-brand-card shadow-card lg:order-2 lg:aspect-auto">
            <Image
              src="/images/contact/du-nannan-contact.webp"
              alt={`${advisor.name} · ${advisor.title}`}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover object-left"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1210] via-[#0b1210]/72 to-transparent p-7 pt-24">
              <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
                推荐联系
              </span>
              <p className="mt-3 font-display text-2xl font-semibold text-brand-ink md:text-3xl">
                {advisor.name}
              </p>
              <p className="mt-1 text-sm text-brand-body">
                {advisor.title} · {advisor.credential}
              </p>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="flex flex-col rounded-card-lg border border-brand-line bg-brand-card p-7 shadow-card md:p-10 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
              推荐联系
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-ink md:text-3xl">
              直接用微信找到我们
            </h2>
            <p className="mt-4 text-sm leading-8 text-brand-muted">{advisor.bio}</p>

            <div className="mt-7 flex items-center gap-5 rounded-card border border-brand-line bg-brand-soft p-5">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-brand-line bg-white p-1.5">
                <Image
                  src={brand.wechatQr}
                  alt="高端财税顾问微信二维码"
                  width={525}
                  height={525}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-sm leading-7">
                <p className="font-semibold text-brand-ink">微信扫码，添加顾问</p>
                <p className="mt-1 text-brand-muted">
                  添加时备注「企业名称 + 想解决的问题」，我们会尽快回复。
                </p>
                <p className="mt-2 text-brand-muted">微信与电话同号</p>
              </div>
            </div>

            <dl className="mt-7 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <div>
                  <dt className="text-brand-muted">电话咨询</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`tel:${brand.phone}`}
                      className="font-medium text-brand-ink transition hover:text-brand-gold"
                    >
                      {brand.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <div>
                  <dt className="text-brand-muted">办公地址</dt>
                  <dd className="mt-0.5 text-brand-ink">{brand.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <div>
                  <dt className="text-brand-muted">服务时间</dt>
                  <dd className="mt-0.5 text-brand-ink">周一至周五 9:00 – 18:00</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${brand.phone}`}
                className="premium-button inline-flex h-12 items-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
              >
                <Phone className="h-4 w-4" />
                电话咨询
              </a>
              <Link
                href="/why-annual-advisor"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-brand-line px-7 text-sm font-medium text-brand-ink transition hover:border-brand-gold/50 hover:text-brand-gold"
              >
                了解年度顾问
                <ShieldCheck className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
