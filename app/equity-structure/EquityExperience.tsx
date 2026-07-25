"use client";

import { Check, ChevronRight, CircleAlert, Crosshair, Layers3, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import equityData from "./equityData.json";
import "./equity.css";

type StructureNode = { id: string; name: string; caption: string; share: string; kind?: "person" | "group" | "partnership"; active?: boolean };

const hierarchy: StructureNode[][] = [
  [{ id: "controller", name: "张三", caption: "实际控制人", share: "最终受益人", kind: "person" }],
  [
    { id: "family-lp", name: "龙腾家族持股合伙企业（有限合伙）", caption: "家族持股平台", share: "出资份额 90%", kind: "partnership" },
    { id: "group", name: "龙头控股集团", caption: "集团控股平台", share: "控制比例 100%", kind: "group" },
    { id: "incentive-lp", name: "领航企业管理合伙企业（有限合伙）", caption: "员工持股平台", share: "出资份额 10%", kind: "partnership" },
  ],
  [
    { id: "manufacturing", name: "龙头制造有限公司", caption: "制造板块", share: "持股 100%" },
    { id: "technology", name: "龙头科技有限公司", caption: "数字技术平台", share: "持股 80%", active: true },
    { id: "investment", name: "龙头投资有限公司", caption: "资本运作平台", share: "持股 100%" },
    { id: "wealth", name: "家族资产管理有限公司", caption: "财富管理平台", share: "持股 90%" },
  ],
  [
    { id: "supply", name: "龙头供应链有限公司", caption: "供应链枢纽", share: "持股 65%" },
    { id: "research", name: "技术研发中心有限公司", caption: "研发资产承载", share: "持股 100%" },
    { id: "industry-lp", name: "中原产业投资合伙企业（有限合伙）", caption: "项目投资载体", share: "持股 75%", kind: "partnership" },
    { id: "overseas", name: "海外子公司", caption: "国际贸易主体", share: "持股 70%" },
    { id: "family", name: "家族资产管理平台", caption: "家族财富平台", share: "持股 90%" },
  ],
];

const suggestions = [
  ["01", "集团化架构设计", "优化企业控制路径", "以顶层控股平台统筹业务、投资与运营主体。"],
  ["02", "家族资产隔离", "降低经营风险传导", "建立经营资产与家族财富之间的风险防火墙。"],
  ["03", "资本规划设计", "支持融资、并购和退出", "围绕资本动作预留股权、税务与治理空间。"],
];

const relationshipPaths = [
  "M500 78 V106 H300 V124", "M500 78 V124", "M500 106 H700 V124",
  "M300 186 V232 H500", "M500 186 V266", "M700 186 V232 H500",
  "M500 266 H180 V282", "M500 266 H393 V282", "M500 266 H607 V282", "M500 266 H820 V282",
  "M180 344 V410 H104 V453", "M180 410 H290 V453", "M393 344 V410 H430 V453",
  "M393 410 H600 V453", "M607 344 V410 H600", "M820 344 V410 H896 V453",
];

export function EquityExperience() {
  const [expanded, setExpanded] = useState(false);
  const [scan, setScan] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setScan((v) => (v + 1) % 101), 70); return () => window.clearInterval(timer); }, []);

  return <main className="equity-page">
    <div className="equity-noise" /><div className="equity-stars" />
    <header className="equity-header"><a className="equity-brand" href="https://yueyang2009.github.io/longtou-accounting-service-site/">LONGTOU <span>ADVISORY</span></a><div className="equity-header-center"><span className="live-dot" />企业结构数字驾驶舱 <i>DEMO</i></div><a className="equity-back" href="https://yueyang2009.github.io/longtou-accounting-service-site/">返回官网 <ChevronRight size={15} /></a></header>
    <section className="equity-intro"><div><p className="eyebrow"><Sparkles size={14} /> EQUITY INTELLIGENCE SYSTEM</p><h1>企业控制画像</h1><p className="intro-copy">用穿透视角，看清集团控制力、资产边界与资本未来。</p></div><div className="demo-badge"><span>模拟演示环境</span><small>本页面不连接工商数据，仅用于官网展示</small></div></section>
    <section className="profile-grid">{equityData.profile.map((item, index) => <article className={`profile-card profile-${index}`} key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.detail}</small></article>)}</section>
    <section className="cockpit-grid">
      <article className="constellation-panel panel">
        <div className="panel-top"><div><p className="eyebrow">CONTROL MAP / 01</p><h2>四级股权架构图</h2></div><div className="map-key"><span className="key-dot" /> 控制关系动态演算</div></div>
        <div className="hierarchy-map">
          <div className="hierarchy-glow" /><svg className="hierarchy-lines" viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">{relationshipPaths.map((path, index) => <g key={path}><path className="hierarchy-link" d={path} /><path className="hierarchy-pulse" d={path} style={{ animationDelay: `${index * -0.18}s` }} /></g>)}</svg>
          {hierarchy.map((level, levelIndex) => <div className={`hierarchy-level level-${levelIndex}`} key={levelIndex}>{level.map((node, index) => <button key={node.id} className={`structure-node ${node.kind ?? ""} ${node.active ? "is-active" : ""}`} onClick={() => node.id === "technology" && setExpanded(true)}><span className="structure-orb" /><b>{node.name}</b><em>{node.caption}</em><strong>{node.share}</strong>{node.active && <small>点击穿透</small>}</button>)}</div>)}
          <div className="level-label label-0">L1 / 控制主体</div><div className="level-label label-1">L2 / 控股平台</div><div className="level-label label-2">L3 / 业务与资本平台</div><div className="level-label label-3">L4 / 经营与资产主体</div>
        </div>
        <p className="map-tip"><Crosshair size={14} /> 结构按控制层级展开；点击「龙头科技有限公司」进入动态股权穿透视图。</p>
      </article>
      <aside className="scan-panel panel"><div className="panel-top"><div><p className="eyebrow">AI STRUCTURE SCAN / 02</p><h2>AI股权结构扫描</h2></div><span className="scan-status">SCANNING</span></div><div className="scanner"><div className="scan-grid" /><div className="scan-line" style={{ top: `${scan}%` }} /><div className="scan-target"><b>{scan}%</b></div><p>正在模拟识别控制关系与风险边界</p></div><div className="scan-result"><p className="result-label">结构判断 <span>已完成</span></p>{["控制权稳定", "股权集中度较高", "产业布局合理"].map(t => <div className="positive" key={t}><Check size={15} />{t}</div>)}</div><div className="risk-result"><p className="result-label">优化提醒</p>{["存在多层持股", "资产隔离空间可优化", "家族资产规划需要完善"].map(t => <div className="risk" key={t}><CircleAlert size={15} />{t}</div>)}</div><p className="scan-note">* 为模拟扫描结果，不构成真实诊断或意见。</p></aside>
    </section>
    <section className={`penetration panel ${expanded ? "is-open" : ""}`}><div className="penetration-title"><div><p className="eyebrow">EQUITY LOOK-THROUGH / 03</p><h2>动态股权穿透</h2></div><span>{expanded ? "穿透星图已启动" : "等待节点指令"}</span></div>{expanded ? <div className="penetration-galaxy">{equityData.technologyChain.map((item, index) => <div className={`penetration-orb depth-${index}`} key={item.name}><span className="penetration-ring" /><Layers3 size={17}/><b>{item.name}</b><em>{item.caption}</em><strong>{item.share}</strong></div>)}<svg viewBox="0 0 1000 250" preserveAspectRatio="none" aria-hidden="true"><path d="M190 125 C330 35 430 35 500 125 S700 215 810 125" className="penetration-link" /><path d="M190 125 C330 35 430 35 500 125 S700 215 810 125" className="penetration-flow" /></svg><p>持股路径数据流正在穿透：龙头科技有限公司 → 技术研发中心有限公司 → 核心资产公司</p></div> : <div className="chain-wrap"><button className="open-chain" onClick={() => setExpanded(true)}>启动「龙头科技有限公司」动态穿透 <ChevronRight size={18} /></button></div>}</section>
    <section className="strategy"><div className="strategy-heading"><p className="eyebrow">STRATEGY BLUEPRINT / 04</p><h2>顶层设计，从看见结构开始</h2></div><div className="strategy-grid">{suggestions.map(([num, title, subtitle, text]) => <article className="strategy-card" key={num}><span>{num}</span><h3>{title}</h3><b>{subtitle}</b><p>{text}</p><i>战略模块 <ChevronRight size={15}/></i></article>)}</div></section>
    <footer className="equity-footer"><span>龙头会服 · 高端财税团队</span><span>战略架构 / 财税合规 / 资本规划</span></footer>
  </main>;
}
