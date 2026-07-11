"use client";

import { useState } from "react";

type Scenario = {
  title: string;
  desc: string; // 正面：能力简述
  intro: string; // 背面：业务简介
  key?: boolean; // 是否重点业务（金边强调，尺寸仍一致）
};

// 背面 intro 暂用页面「重点业务说明」现有文案占位，待用户提供具体介绍后替换
const scenarios: Scenario[] = [
  {
    title: "审计支持（年审/专项/内审）",
    desc: "内部审计、年度审计与专项审计，围绕企业经营真实性进行判断",
    intro:
      "年审怕查出问题、专项审计不会配合、想摸清家底没人手。我们不只出报告——审前扫雷、审中配合沟通、审后跟进整改，让审计从“被查”变成“帮您看清问题”，不被动、不怕查。",
  },
  {
    title: "财务乱账重建",
    desc: "对历史账务混乱企业进行结构性梳理与体系重建",
    intro:
      "历史账目混乱、两套账、银行流水没入账、往来挂账几年不清。我们把乱账拆开理清，重建一套能对上银行、对上税局、对上经营实际的账。",
  },
  {
    title: "税务稽查应对",
    desc: "针对稽查、协查及预警事项提供风险分析与应对支持",
    intro:
      "被税局约谈、来函或上门了。我们帮企业梳理事实、评估风险额度、准备情况说明材料，不扩大、不隐瞒，把影响控制在合理范围。",
  },
  {
    title: "股权架构设计",
    desc: "控制权设计、股权分配、业务拆分及税务影响测算",
    intro:
      "合伙没约定、股权平均分、自然人直接持股、钱投了但退出路径不清。我们帮企业把股权结构理清楚，兼顾控制权、激励效果和税负成本。",
  },
  {
    title: "高端合规账体系",
    desc: "构建同时满足合规要求与经营分析的财务体系",
    key: true,
    intro:
      "代账只解决“报得出去”，解决不了老板看账时的一堆问号——成本准不准、利润真不真、库存对不对、钱到底在哪。我们帮企业建一套合规账，不只为应付税局，更让老板每个月能看清经营实况，决策有依据。",
  },
];

export function ServiceScenarioCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {scenarios.map((s, i) => {
        const isFlipped = flipped === i;
        return (
          <button
            key={s.title}
            type="button"
            onClick={() => setFlipped(isFlipped ? null : i)}
            aria-expanded={isFlipped}
            aria-label={`${s.title}：点击翻转查看业务简介`}
            className={`flip-card group w-full text-left ${s.key ? "is-key" : ""} ${
              isFlipped ? "is-flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-face flip-card-front">
                <p className="text-base font-semibold text-brand-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{s.desc}</p>
              </div>
              <div className="flip-card-face flip-card-back">
                <p className="text-base font-semibold text-brand-gold">{s.title}</p>
                <p className="mt-2 text-[13px] leading-[1.55] text-brand-body">{s.intro}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
