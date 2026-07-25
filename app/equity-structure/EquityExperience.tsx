"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Check, ChevronRight, CircleAlert, Crosshair, Layers3, Sparkles } from "lucide-react";
import equityData from "./equityData.json";
import "./equity.css";

type Pointer = { x: number; y: number };

const suggestions = [
  ["01", "集团化架构设计", "优化企业控制路径", "以顶层控股平台统筹业务、投资与运营主体。"],
  ["02", "家族资产隔离", "降低经营风险传导", "建立经营资产与家族财富之间的风险防火墙。"],
  ["03", "资本规划设计", "支持融资、并购和退出", "围绕资本动作预留股权、税务与治理空间。"],
];

export function EquityExperience() {
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);
  const [scan, setScan] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setScan((v) => (v + 1) % 101), 70);
    return () => window.clearInterval(timer);
  }, []);

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    setPointer({ x: ((event.clientX - box.left) / box.width - 0.5) * 2, y: ((event.clientY - box.top) / box.height - 0.5) * 2 });
  };

  return <main className="equity-page" onMouseMove={onMove}>
    <div className="equity-noise" />
    <div className="equity-stars" />
    <header className="equity-header">
      <a className="equity-brand" href="/">LONGTOU <span>ADVISORY</span></a>
      <div className="equity-header-center"><span className="live-dot" />企业结构数字驾驶舱 <i>DEMO</i></div>
      <a className="equity-back" href="/">返回官网 <ChevronRight size={15} /></a>
    </header>

    <section className="equity-intro">
      <div><p className="eyebrow"><Sparkles size={14} /> EQUITY INTELLIGENCE SYSTEM</p><h1>企业控制画像</h1><p className="intro-copy">用穿透视角，看清集团控制力、资产边界与资本未来。</p></div>
      <div className="demo-badge"><span>模拟演示环境</span><small>本页面不连接工商数据，仅用于官网展示</small></div>
    </section>

    <section className="profile-grid">
      {equityData.profile.map((item, index) => <article className={`profile-card profile-${index}`} key={item.label}>
        <span>{item.label}</span><strong>{item.value}</strong><small>{item.detail}</small>
      </article>)}
    </section>

    <section className="cockpit-grid">
      <article className="constellation-panel panel">
        <div className="panel-top"><div><p className="eyebrow">CONTROL MAP / 01</p><h2>股权星图</h2></div><div className="map-key"><span className="key-dot" /> 控制关系实时演算</div></div>
        <div className="constellation" style={{ "--mx": `${pointer.x * 9}px`, "--my": `${pointer.y * 9}px` } as React.CSSProperties}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <svg className="connection-layer" viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">
            {equityData.nodes.map((node) => <g key={node.id}><line x1="500" y1="330" x2={node.x * 10} y2={node.y * 6.5} className="link-line" /><line x1="500" y1="330" x2={node.x * 10} y2={node.y * 6.5} className="link-pulse" /></g>)}
          </svg>
          <button className="center-node node-orb" aria-label="龙头控股集团" onClick={() => setExpanded(false)}><span className="node-ring" /><b>{equityData.company}</b><em>集团控制中心</em><strong>100%</strong></button>
          {equityData.nodes.map((node, i) => <button key={node.id} onClick={() => node.id === "technology" && setExpanded(!expanded)} className={`satellite node-orb ${node.tone} ${node.id === "technology" ? "is-clickable" : ""}`} style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: `${i * -1.1}s` }}><span className="node-core" /><b>{node.name}</b><em>{node.role}</em><strong>持股 {node.share}</strong>{node.id === "technology" && <small>点击穿透</small>}</button>)}
          <div className="map-corner tl">纬度：企业控制网络</div><div className="map-corner br">6 / 18 关键主体</div>
        </div>
        <p className="map-tip"><Crosshair size={14} /> 移动光标探索空间视角；点击「龙头科技有限公司」启动股权穿透。</p>
      </article>

      <aside className="scan-panel panel">
        <div className="panel-top"><div><p className="eyebrow">AI STRUCTURE SCAN / 02</p><h2>AI股权结构扫描</h2></div><span className="scan-status">SCANNING</span></div>
        <div className="scanner"><div className="scan-grid" /><div className="scan-line" style={{ top: `${scan}%` }} /><div className="scan-target"><span /><span /><span /><span /><b>{scan}%</b></div><p>正在模拟识别控制关系与风险边界</p></div>
        <div className="scan-result"><p className="result-label">结构判断 <span>已完成</span></p>{["控制权稳定", "股权集中度较高", "产业布局合理"].map(t => <div className="positive" key={t}><Check size={15} />{t}</div>)}</div>
        <div className="risk-result"><p className="result-label">优化提醒</p>{["存在多层持股", "资产隔离空间可优化", "家族资产规划需要完善"].map(t => <div className="risk" key={t}><CircleAlert size={15} />{t}</div>)}</div>
        <p className="scan-note">* 为模拟扫描结果，不构成真实诊断或意见。</p>
      </aside>
    </section>

    <section className={`penetration panel ${expanded ? "is-open" : ""}`}>
      <div className="penetration-title"><div><p className="eyebrow">EQUITY LOOK-THROUGH / 03</p><h2>股权穿透路径</h2></div><span>{expanded ? "数据链路已展开" : "等待节点指令"}</span></div>
      <div className="chain-wrap">{expanded ? equityData.technologyChain.map((item, index) => <div className="chain-item" key={item.name} style={{ animationDelay: `${index * 220}ms` }}><div className="chain-node"><Layers3 size={19}/><b>{item.name}</b><em>{item.caption}</em><strong>{item.share}</strong></div>{index < 2 && <ArrowDown className="chain-arrow" />}</div>) : <button className="open-chain" onClick={() => setExpanded(true)}>展开「龙头科技有限公司」穿透路径 <ChevronRight size={18} /></button>}</div>
    </section>

    <section className="strategy"><div className="strategy-heading"><p className="eyebrow">STRATEGY BLUEPRINT / 04</p><h2>顶层设计，从看见结构开始</h2></div><div className="strategy-grid">{suggestions.map(([num, title, subtitle, text]) => <article className="strategy-card" key={num}><span>{num}</span><h3>{title}</h3><b>{subtitle}</b><p>{text}</p><i>战略模块 <ChevronRight size={15}/></i></article>)}</div></section>
    <footer className="equity-footer"><span>龙头会服 · 高端财税团队</span><span>战略架构 / 财税合规 / 资本规划</span></footer>
  </main>;
}
