"use client";

import { AlertTriangle, ArrowDownUp, Factory, Layers3, Target } from "lucide-react";
import { useMemo, useState } from "react";

type ProductKey = "A" | "B" | "C" | "D";
type Shares = Record<ProductKey, number>;

const products = {
  A: { name: "A 类 · 标准批量产品", cmr: 0.32, revenue: 480, hours: 3300, unitPrice: 400, unitCost: 272, tone: "#9fbeaa" },
  B: { name: "B 类 · 小批量定制产品", cmr: 0.3, revenue: 260, hours: 2200, unitPrice: 520, unitCost: 364, tone: "#93b3b0" },
  C: { name: "C 类 · 高价值核心产品", cmr: 0.42, revenue: 220, hours: 1700, unitPrice: 1100, unitCost: 638, tone: "#d9c7a5" },
  D: { name: "D 类 · 低价竞争产品", cmr: 0.14, revenue: 340, hours: 2300, unitPrice: 170, unitCost: 146.2, tone: "#e58f80" },
} as const;
const scenarios: Record<"healthy" | "current" | "pressure", Shares> = {
  healthy: { A: 35, B: 20, C: 30, D: 15 },
  current: { A: 36.9, B: 20, C: 16.9, D: 26.2 },
  pressure: { A: 25, B: 15, C: 10, D: 50 },
};
const nf = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 1 });
const keys = Object.keys(products) as ProductKey[];

export function MultiProductStudio() {
  const [shares, setShares] = useState<Shares>(scenarios.current);
  const [selected, setSelected] = useState("current");
  const [revenue, setRevenue] = useState(1300);
  const [fixed, setFixed] = useState(320);
  const [quote, setQuote] = useState(160);
  const [quantity, setQuantity] = useState(8000);
  const [capacityFull, setCapacityFull] = useState(false);
  const data = useMemo(() => {
    const rows = keys.map((key) => {
      const p = products[key], rev = revenue * shares[key] / 100, contribution = rev * p.cmr, hours = rev / p.revenue * p.hours;
      return { key, ...p, share: shares[key], rev, contribution, hours, hourly: p.revenue * p.cmr * 10000 / p.hours };
    });
    const contribution = rows.reduce((sum, row) => sum + row.contribution, 0);
    const hours = rows.reduce((sum, row) => sum + row.hours, 0);
    const share = rows.reduce((sum, row) => sum + row.share, 0);
    const cmr = contribution / revenue;
    return { rows, contribution, hours, share, cmr, profit: contribution - fixed, breakEven: fixed / cmr };
  }, [shares, revenue, fixed]);
  const highest = Math.max(...data.rows.filter((row) => row.key !== "D").map((row) => row.hourly));
  const d = products.D, hoursPerPiece = d.hours / (d.revenue * 10000 / d.unitPrice), opportunity = capacityFull ? highest * hoursPerPiece : 0;
  const unitContribution = quote - d.unitCost - opportunity, orderProfit = unitContribution * quantity / 10000, minQuote = d.unitCost + opportunity;
  const setScenario = (value: "healthy" | "current" | "pressure") => { setSelected(value); setShares(scenarios[value]); };
  const updateShare = (key: ProductKey, value: number) => { setSelected("custom"); setShares((now) => ({ ...now, [key]: Math.max(0, value) })); };

  return <main>
    <section data-header-theme="dark" className="relative overflow-hidden border-b border-brand-line bg-[#0b110f]"><div className="absolute inset-0 be-grid opacity-70" /><div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28"><p className="text-xs font-semibold tracking-[.18em] text-brand-gold">经营决策工具 · 多品种制造企业</p><h1 className="mt-6 max-w-4xl text-4xl leading-[1.18] text-brand-ink md:text-6xl">同样的收入&nbsp;&nbsp;&nbsp;<span className="text-brand-gold">为什么利润会完全不同？</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-brand-body md:text-lg">产品结构不断变化时，企业没有一个永久固定的保本收入。模型动态连接产品贡献、瓶颈产能、低价订单与目标利润，让销售目标不再只剩“冲收入”。</p></div></section>
    <section className="border-b border-brand-line"><div className="mx-auto max-w-7xl px-6 py-14 md:py-20"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-semibold tracking-[.16em] text-brand-gold">动态产品结构</p><h2 className="mt-3 text-3xl text-brand-ink md:text-4xl">收入结构变化，保本线实时变化</h2></div><div className="flex gap-2">{(["healthy", "current", "pressure"] as const).map((key) => <button key={key} onClick={() => setScenario(key)} className={`be-scene ${selected === key ? "be-scene-active" : ""}`}>{({ healthy: "健康结构", current: "当前结构", pressure: "压力结构" })[key]}</button>)}</div></div>
      <div className="mt-8 grid gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2 xl:grid-cols-4"><Metric label="综合边际贡献率" value={`${nf.format(data.cmr * 100)}%`} detail="产品结构加权得出" gold /><Metric label="动态保本收入" value={`${nf.format(data.breakEven)} 万`} detail="覆盖当期固定成本" /><Metric label="预计经营利润" value={`${data.profit < 0 ? "−" : ""}${nf.format(Math.abs(data.profit))} 万`} detail="边际贡献减固定成本" danger={data.profit < 0} /><Metric label="瓶颈产能利用率" value={`${nf.format(data.hours / 10000 * 100)}%`} detail={data.hours > 10000 ? "已超过 10,000 小时上限" : "精加工设备工时"} danger={data.hours > 10000} /></div>
      <div className="mt-7 grid gap-6 xl:grid-cols-[350px_1fr]"><div className="border border-brand-line bg-brand-soft p-6"><p className="font-semibold text-brand-ink">基础经营假设</p><Range label="月度预计收入" value={revenue} min={800} max={2200} step={10} unit="万元" onChange={setRevenue} /><Range label="月度固定成本" value={fixed} min={200} max={600} step={5} unit="万元" onChange={setFixed} /><p className="mt-7 border-l-2 border-brand-gold pl-4 text-sm leading-7 text-brand-muted">保本收入随结构变化而变化。只给销售收入目标、不管理产品组合，往往会造成“收入完成、利润未完成”。</p></div><div className="overflow-x-auto border border-brand-line"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-brand-card text-xs text-brand-muted"><tr><th className="p-4 font-medium">产品族</th><th className="p-4 font-medium">收入占比</th><th className="p-4 font-medium">边际贡献率</th><th className="p-4 font-medium">预计收入</th><th className="p-4 font-medium">边际贡献</th><th className="p-4 font-medium">瓶颈工时</th><th className="p-4 font-medium">单位工时贡献</th></tr></thead><tbody>{data.rows.map((row) => <tr key={row.key} className="border-t border-brand-line"><td className="p-4 font-semibold text-brand-ink">{row.name}</td><td className="p-4"><input aria-label={`${row.key}类收入占比`} className="be-share" type="number" value={row.share} min="0" max="100" onChange={(e) => updateShare(row.key, Number(e.target.value))} /> %</td><td className="p-4 text-brand-body">{nf.format(row.cmr * 100)}%</td><td className="p-4 text-brand-body">{nf.format(row.rev)} 万</td><td className="p-4 text-[#9fbeaa]">{nf.format(row.contribution)} 万</td><td className="p-4 text-brand-body">{nf.format(row.hours)} h</td><td className="p-4 text-brand-gold">{nf.format(row.hourly)} 元/h</td></tr>)}</tbody><tfoot><tr className="border-t border-brand-gold/30 bg-brand-card"><td className="p-4 font-semibold text-brand-ink">合计 / 加权</td><td className={`p-4 ${Math.abs(data.share - 100) > .1 ? "text-[#e58f80]" : "text-brand-body"}`}>{nf.format(data.share)}%</td><td className="p-4 text-brand-gold">{nf.format(data.cmr * 100)}%</td><td className="p-4 text-brand-body">{nf.format(revenue)} 万</td><td className="p-4 text-[#9fbeaa]">{nf.format(data.contribution)} 万</td><td className={`p-4 ${data.hours > 10000 ? "text-[#e58f80]" : "text-brand-body"}`}>{nf.format(data.hours)} h</td><td className="p-4">—</td></tr></tfoot></table></div></div>
      {Math.abs(data.share - 100) > .1 ? <div className="mt-5 flex gap-3 border border-[#a27f49] bg-[#2a2418] p-4 text-sm text-brand-body"><AlertTriangle className="h-5 w-5 shrink-0 text-brand-gold" />产品占比当前合计为 {nf.format(data.share)}%，请调整至 100% 后再用于正式判断。</div> : <div className={`mt-5 flex gap-3 border p-4 text-sm ${data.profit < 0 || data.hours > 10000 ? "border-[#9e5148] bg-[#2b1716]" : "border-[#587b68] bg-[#13221b]"}`}><Layers3 className="h-5 w-5 shrink-0 text-brand-gold" /><span>{data.profit < 0 ? "当前产品结构下，收入尚不能覆盖固定成本；需要提升高边际产品占比、报价或总收入。" : data.hours > 10000 ? "当前结构的瓶颈工时已超出上限，必须按单位工时贡献重新分配订单。" : `当前结构下，企业超过保本收入 ${nf.format(revenue - data.breakEven)} 万元；请重点守住高边际产品占比。`}</span></div>}</div></section>
    <section className="border-b border-brand-line bg-brand-soft"><div className="mx-auto max-w-7xl px-6 py-16 md:py-24"><div className="max-w-3xl"><p className="text-xs font-semibold tracking-[.16em] text-brand-gold">订单报价决策</p><h2 className="mt-3 text-3xl text-brand-ink md:text-4xl">低价订单接不接，取决于产能状态</h2><p className="mt-5 leading-8 text-brand-body">案例中的 D 类订单，在设备闲置时可贡献利润；当瓶颈产能饱和时，则必须把被挤占的高价值产品贡献计入机会成本。</p></div><div className="mt-9 grid gap-6 lg:grid-cols-[.85fr_1.15fr]"><div className="border border-brand-line bg-[#0b110f] p-6"><p className="font-semibold text-brand-ink">D 类订单参数</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><NumberField label="订单数量（件）" value={quantity} onChange={setQuantity} /><NumberField label="客户报价（元 / 件）" value={quote} onChange={setQuote} /></div><label className="mt-5 flex cursor-pointer items-center justify-between border-t border-brand-line pt-5 text-sm text-brand-body"><span>瓶颈产能已饱和</span><input type="checkbox" checked={capacityFull} onChange={(e) => setCapacityFull(e.target.checked)} className="h-4 w-4 accent-[#d9c7a5]" /></label></div><div className={`border p-6 ${orderProfit >= 0 ? "border-[#587b68] bg-[#13221b]" : "border-[#9e5148] bg-[#2b1716]"}`}><p className="text-sm text-brand-gold">报价经济性结论</p><h3 className={`mt-3 text-2xl ${orderProfit >= 0 ? "text-[#9fbeaa]" : "text-[#e58f80]"}`}>{orderProfit >= 0 ? "建议承接（经济上可行）" : "建议拒绝或重新报价"}</h3><p className="mt-4 leading-7 text-brand-body">D 类单位变动成本为 {nf.format(d.unitCost)} 元。{capacityFull ? <>产能饱和时，每件还应承担 {nf.format(opportunity)} 元机会成本；最低经济报价为 <b className="text-brand-gold">{nf.format(minQuote)} 元 / 件</b>。</> : <>在闲置产能下，只要单位贡献为正，订单即可帮助覆盖固定成本。</>}</p><p className="mt-4 border-t border-brand-line pt-4 text-sm text-brand-body">该订单将占用 {nf.format(quantity * hoursPerPiece)} 小时瓶颈工时，整单经济贡献为 <b className={orderProfit >= 0 ? "text-[#9fbeaa]" : "text-[#e58f80]"}>{orderProfit < 0 ? "−" : ""}{nf.format(Math.abs(orderProfit))} 万元</b>。</p></div></div></div></section>
    <section className="border-b border-brand-line"><div className="mx-auto max-w-7xl px-6 py-16 md:py-24"><p className="text-xs font-semibold tracking-[.16em] text-brand-gold">管理动作</p><h2 className="mt-3 text-3xl text-brand-ink md:text-4xl">多产品企业真正要管理的五个变量</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[[Target,"收入规模","收入目标不低于某个数字，但不能独立作为经营好坏的判断。"],[Layers3,"产品结构","高边际产品占比、低边际产品上限与综合贡献率底线。"],[ArrowDownUp,"边际贡献","以订单真实贡献而非表面毛利，连接销售、物流、返利和售后。"],[Factory,"瓶颈资源效率","产能紧张时按单位瓶颈工时贡献排产，而不是按收入排序。"]].map(([Icon, title, copy]) => { const Feature = Icon as typeof Target; return <div key={title as string} className="border border-brand-line bg-brand-card p-6"><Feature className="h-5 w-5 text-brand-gold" /><h3 className="mt-7 text-lg font-semibold text-brand-ink">{title as string}</h3><p className="mt-3 text-sm leading-7 text-brand-muted">{copy as string}</p></div>})}</div></div></section>
  </main>;
}

function Metric({ label, value, detail, gold, danger }: { label: string; value: string; detail: string; gold?: boolean; danger?: boolean }) { return <div className="be-kpi p-5 md:p-6"><p className="text-xs tracking-[.12em] text-brand-muted">{label}</p><p className={`mt-4 font-display text-3xl md:text-4xl ${danger ? "text-[#e58f80]" : gold ? "text-brand-gold" : "text-brand-ink"}`}>{value}</p><p className="mt-4 text-xs text-brand-muted">{detail}</p></div>; }
function Range({ label, value, min, max, step, unit, onChange }: { label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (value: number) => void }) { return <label className="block border-b border-brand-line py-5 last:border-0"><span className="flex justify-between text-sm text-brand-body"><span>{label}</span><b className="text-brand-ink">{nf.format(value)} <em className="not-italic text-xs font-normal text-brand-muted">{unit}</em></b></span><input className="be-slider mt-3 w-full" type="range" value={value} min={min} max={max} step={step} onChange={(e) => onChange(Number(e.target.value))} /></label>; }
function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) { return <label className="text-sm text-brand-muted">{label}<input className="mt-2 w-full border border-brand-line bg-brand-soft p-2 text-brand-ink" type="number" value={value} min="0" onChange={(e) => onChange(Number(e.target.value))} /></label>; }
