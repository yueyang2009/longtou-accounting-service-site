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
      "报表上的数字老板都看得懂，但数字背后的真实性往往没人系统验证过——流程有没有漏洞、收入有没有虚增、成本结转合不合规，通常等到融资、并购或被稽查时才暴露。我们围绕“经营真实性”做审计分析：内部审计查流程漏洞，年度审计核报表公允，专项审计针对离任、并购、补贴等特定事项深挖。让老板在出事前就看清家底，关键时刻不掉链子。",
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
      "突然收到稽查通知或风险预警，进项、成本、个税哪块有雷自己心里没底，硬扛容易越描越黑。我们先做风险体检定位问题，再制定应对策略、准备好陈述申辩资料，并全程陪同与税务机关沟通。把不可控的“被查”变成有准备的“应对”，尽量降低补税、罚款和信用损失。",
  },
  {
    title: "股权架构设计",
    desc: "控制权设计、股权分配、业务拆分及税务影响测算",
    intro:
      "名下挂了几家公司，但架构怎么搭的自己都说不清；一到分红、转让或引入投资人，税负高不说，控制权还容易旁落。我们从控制权、税务和业务拆分多维度设计持股架构，测算不同方案的税负与风险。钱怎么分、税怎么交、控制权怎么保，提前定好，少交冤枉税也少留隐患。",
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
