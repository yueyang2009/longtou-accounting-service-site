"use client";

import { useState } from "react";

type Scenario = {
  title: string;
  desc: string; // 正面：能力简述
  intro: string; // 背面：业务简介（待替换为具体介绍）
  wide?: boolean; // 是否跨两列
};

// 背面 intro 暂用页面「重点业务说明」现有文案占位，待用户提供具体介绍后替换
const scenarios: Scenario[] = [
  {
    title: "审计支持",
    desc: "内部审计、年度审计与专项审计，围绕企业经营真实性进行判断",
    intro:
      "围绕企业经营真实性进行审计分析，包括内部审计、年度审计与专项审计，重点识别流程漏洞与经营风险。",
  },
  {
    title: "财务乱账重建",
    desc: "对历史账务混乱企业进行结构性梳理与体系重建",
    intro: "对历史账务混乱企业进行结构性梳理与财务体系重建。",
  },
  {
    title: "税务稽查应对",
    desc: "针对稽查、协查及预警事项提供风险分析与应对支持",
    intro: "针对税务稽查、协查及预警事项提供风险分析与应对支持。",
  },
  {
    title: "股权架构设计",
    desc: "控制权设计、股权分配、业务拆分及税务影响测算",
    intro: "包括控制权设计、股权分配、业务拆分及税务影响测算。",
  },
  {
    title: "高端合规账体系",
    desc: "构建同时满足合规要求与经营分析的财务体系",
    wide: true,
    intro:
      "代账只解决“报得出去”，解决不了老板看账时的一堆问号——成本准不准、利润真不真、库存对不对、钱到底在哪。我们帮企业建一套合规账，不只为应付税局，更让老板每个月能看清经营实况，决策有依据。",
  },
];

export function ServiceScenarioCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {scenarios.map((s, i) => {
        const isFlipped = flipped === i;
        return (
          <button
            key={s.title}
            type="button"
            onClick={() => setFlipped(isFlipped ? null : i)}
            aria-expanded={isFlipped}
            aria-label={`${s.title}：点击翻转查看业务简介`}
            className={`flip-card group w-full text-left ${s.wide ? "md:col-span-2" : ""} ${
              isFlipped ? "is-flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-face flip-card-front">
                <span className="flip-hint">点击翻转查看简介 ↻</span>
                <p className="text-base font-semibold text-brand-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{s.desc}</p>
              </div>
              <div className="flip-card-face flip-card-back">
                <span className="flip-hint flip-hint-gold">点击返回 ↺</span>
                <p className="text-base font-semibold text-brand-gold">{s.title}</p>
                <p className="mt-2 text-sm leading-6 text-brand-body">{s.intro}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
