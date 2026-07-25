"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Calculator, ChevronDown, CircleAlert, Factory, Gauge, Landmark, LockKeyhole, Target, TrendingDown, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

type Inputs = { price: number; material: number; other: number; fixed: number; capacity: number; volume: number; targetProfit: number };

const initial: Inputs = { price: 2900, material: 1850, other: 470, fixed: 9860, capacity: 30, volume: 24, targetProfit: 6000 };
const money = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 });
const decimal = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 1 });

function calc(i: Inputs) {
  const variable = i.material + i.other;
  const contribution = i.price - variable;
  const valid = contribution > 0;
  const breakEven = valid ? i.fixed / contribution : Infinity;
  const revenue = valid ? breakEven * i.price / 10000 : Infinity;
  const utilization = valid ? breakEven / i.capacity : Infinity;
  const margin = valid ? contribution / i.price : 0;
  const safety = valid ? (i.volume - breakEven) / i.volume : -Infinity;
  const profit = contribution * i.volume - i.fixed;
  const targetVolume = valid ? (i.fixed + i.targetProfit) / contribution : Infinity;
  return { variable, contribution, valid, breakEven, revenue, utilization, margin, safety, profit, targetVolume };
}

function Slider({ label, value, min, max, step, unit, onChange }: { label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (n: number) => void }) {
  return <label className="block border-b border-brand-line/70 py-4 last:border-b-0">
    <span className="flex items-baseline justify-between gap-3 text-sm text-brand-body"><span>{label}</span><b className="font-display text-base font-semibold text-brand-ink">{money.format(value)} <em className="not-italic text-xs font-normal text-brand-muted">{unit}</em></b></span>
    <input aria-label={label} className="be-slider mt-3 w-full" type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
  </label>;
}

function Kpi({ label, value, unit, tone = "normal", detail }: { label: string; value: string; unit?: string; tone?: "normal" | "gold" | "danger"; detail: string }) {
  const color = tone === "gold" ? "text-brand-gold" : tone === "danger" ? "text-[#e58f80]" : "text-brand-ink";
  return <div className="be-kpi border border-brand-line/80 p-5 md:p-6"><p className="text-xs tracking-[0.12em] text-brand-muted">{label}</p><p className={`mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl ${color}`}>{value}<span className="ml-1.5 font-sans text-xs font-normal text-brand-muted">{unit}</span></p><p className="mt-4 text-xs leading-5 text-brand-muted">{detail}</p></div>;
}

function MiniChart({ input, result }: { input: Inputs; result: ReturnType<typeof calc> }) {
  const maxX = Math.max(input.capacity, input.volume * 1.15, Number.isFinite(result.breakEven) ? result.breakEven * 1.25 : input.capacity) || 1;
  const maxY = Math.max(input.price * maxX, input.fixed * 10000 + result.variable * maxX) / 10000 * 1.12;
  const x = (v: number) => 56 + (v / maxX) * 620;
  const y = (v: number) => 278 - (v / maxY) * 226;
  const totalCost = (v: number) => (input.fixed * 10000 + result.variable * v) / 10000;
  const sales = (v: number) => input.price * v / 10000;
  return <div className="overflow-hidden border border-brand-line/80 bg-[#0b110f] p-4 sm:p-6">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-semibold text-brand-ink">盈亏平衡图</p><p className="mt-1 text-xs text-brand-muted">销售收入与总成本的交点，就是经营不能退让的底线。</p></div><div className="flex gap-4 text-xs text-brand-muted"><span className="flex items-center gap-2"><i className="h-0.5 w-5 bg-brand-gold" />销售收入</span><span className="flex items-center gap-2"><i className="h-0.5 w-5 bg-[#d78372]" />总成本</span></div></div>
    <svg viewBox="0 0 720 320" className="mt-3 h-auto w-full" role="img" aria-label="盈亏平衡图表">
      {[0, .25, .5, .75, 1].map((n) => <g key={n}><line x1="56" y1={y(maxY * n)} x2="676" y2={y(maxY * n)} stroke="rgba(255,255,255,.09)" /><text x="46" y={y(maxY * n) + 4} fill="#8c877c" fontSize="10" textAnchor="end">{(maxY * n).toFixed(1)}亿</text></g>)}
      <line x1="56" y1="278" x2="676" y2="278" stroke="rgba(255,255,255,.24)" /><line x1="56" y1="52" x2="56" y2="278" stroke="rgba(255,255,255,.24)" />
      <path d={`M ${x(0)} ${y(sales(0))} L ${x(maxX)} ${y(sales(maxX))}`} fill="none" stroke="#d9c7a5" strokeWidth="3" />
      <path d={`M ${x(0)} ${y(totalCost(0))} L ${x(maxX)} ${y(totalCost(maxX))}`} fill="none" stroke="#d78372" strokeWidth="3" />
      {result.valid && result.breakEven <= maxX ? <><line x1={x(result.breakEven)} y1="52" x2={x(result.breakEven)} y2="278" stroke="#d9c7a5" strokeDasharray="5 5" opacity=".75" /><circle cx={x(result.breakEven)} cy={y(sales(result.breakEven))} r="6" fill="#d9c7a5" /><text x={Math.min(x(result.breakEven) + 10, 560)} y={y(sales(result.breakEven)) - 12} fill="#ede9e0" fontSize="11">保本点 {decimal.format(result.breakEven)} 万吨</text></> : null}
      <line x1={x(Math.min(input.volume, maxX))} y1="52" x2={x(Math.min(input.volume, maxX))} y2="278" stroke="#779787" strokeDasharray="3 5" /><text x={x(Math.min(input.volume, maxX))} y="299" fill="#b8b2a6" fontSize="10" textAnchor="middle">当前 {input.volume} 万吨</text>
      <text x="366" y="316" fill="#8c877c" fontSize="10" textAnchor="middle">年产销量（万吨）</text>
    </svg>
  </div>;
}

export function BreakEvenStudio() {
  const [input, setInput] = useState(initial);
  const [priceDrop, setPriceDrop] = useState(5);
  const [materialRise, setMaterialRise] = useState(10);
  const result = useMemo(() => calc(input), [input]);
  const stress = useMemo(() => calc({ ...input, price: input.price * (1 - priceDrop / 100), material: input.material * (1 + materialRise / 100) }), [input, priceDrop, materialRise]);
  const set = <K extends keyof Inputs>(key: K) => (value: number) => setInput((current) => ({ ...current, [key]: value }));
  const indicator = !result.valid ? { icon: CircleAlert, title: "边际贡献为负，越生产亏损越多", text: "必须先提升售价、优化产品结构或压降单位变动成本；单纯追求上量无法解决问题。", cls: "border-[#9e5148] bg-[#2b1716]" } : result.utilization > 1 ? { icon: CircleAlert, title: "满产仍无法覆盖固定成本", text: "现有产能下的保本开工率已超过 100%，应立即复核固定成本、产能配置与产品组合。", cls: "border-[#9e5148] bg-[#2b1716]" } : result.safety < 0 ? { icon: TrendingDown, title: "当前销售计划尚未跨过保本线", text: `距离保本仍差 ${decimal.format(result.breakEven - input.volume)} 万吨；增长、提价、降本三条路径需要同时量化。`, cls: "border-[#a27f49] bg-[#2a2418]" } : { icon: TrendingUp, title: "已跨过保本线，但仍需守住安全边际", text: "模型把抽象的利润目标翻译成产销、价格、成本和开工率的可执行指标。", cls: "border-[#587b68] bg-[#13221b]" };
  const Icon = indicator.icon;
  const scenarios = [
    ["基准情景", input.price, input.material],
    ["售价下跌 3%", input.price * .97, input.material],
    [`售价下跌 ${priceDrop}%`, input.price * (1 - priceDrop / 100), input.material],
    ["玉米上涨 5%", input.price, input.material * 1.05],
    [`玉米上涨 ${materialRise}%`, input.price, input.material * (1 + materialRise / 100)],
    ["双重挤压", input.price * (1 - priceDrop / 100), input.material * (1 + materialRise / 100)],
  ].map(([name, price, material]) => ({ name: name as string, r: calc({ ...input, price: price as number, material: material as number }) }));

  return <main>
    <section data-header-theme="dark" className="relative overflow-hidden border-b border-brand-line bg-[#0c1310]">
      <div className="absolute inset-0 be-grid opacity-70" /><div className="absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full bg-[#d9c7a5]/[.06] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.18em] text-brand-gold">经营决策工具 · 玉米深加工专版</p>
        <div className="mt-7 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><h1 className="max-w-4xl text-4xl leading-[1.18] text-brand-ink md:text-6xl">看清企业的<br /><span className="text-brand-gold">保本线、风险线与增长线</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-brand-body md:text-lg">不止告诉您“赚不赚钱”，更把目标利润拆解为产销量、售价、原料与成本的联动关系，让老板、销售、采购与生产站在同一张经营地图上决策。</p></div><div className="border border-brand-gold/30 bg-brand-card p-6"><p className="text-xs tracking-[.14em] text-brand-muted">模型的核心问题</p><p className="mt-4 font-display text-2xl leading-relaxed text-brand-ink">“每多卖一吨，究竟为企业留下多少钱？”</p><p className="mt-4 text-sm leading-7 text-brand-muted">答案决定低价订单接不接、原粮锁不锁、技改扩不扩、年度目标怎么定。</p></div></div>
      </div>
    </section>

    <section className="border-b border-brand-line bg-brand-paper"><div className="mx-auto max-w-7xl px-6 py-14 md:py-20"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-semibold tracking-[.16em] text-brand-gold">实时测算</p><h2 className="mt-3 text-3xl text-brand-ink md:text-4xl">把经营假设，变成一组可讨论的数字</h2></div><button onClick={() => setInput(initial)} className="rounded-full border border-brand-line px-4 py-2 text-sm text-brand-body transition hover:border-brand-gold hover:text-brand-gold">恢复示例参数</button></div>
      <div className="mt-10 grid gap-6 xl:grid-cols-[390px_1fr]"><div className="border border-brand-line/80 bg-brand-soft px-6"><div className="py-5"><p className="font-semibold text-brand-ink">经营参数</p><p className="mt-1 text-xs text-brand-muted">拖动滑杆，所有指标与图形同步变化。</p></div><Slider label="出厂价格" value={input.price} min={2400} max={3400} step={10} unit="元 / 吨" onChange={set("price")} /><Slider label="玉米净耗" value={input.material} min={1400} max={2400} step={10} unit="元 / 吨" onChange={set("material")} /><Slider label="其他变动成本" value={input.other} min={300} max={700} step={5} unit="元 / 吨" onChange={set("other")} /><Slider label="年度固定成本" value={input.fixed} min={6000} max={15000} step={20} unit="万元" onChange={set("fixed")} /><Slider label="设计产能" value={input.capacity} min={15} max={50} step={1} unit="万吨 / 年" onChange={set("capacity")} /><Slider label="预计产销量" value={input.volume} min={5} max={40} step={.5} unit="万吨 / 年" onChange={set("volume")} /><Slider label="目标年度利润" value={input.targetProfit} min={0} max={15000} step={100} unit="万元" onChange={set("targetProfit")} /></div>
        <div className="space-y-6"><div className="grid gap-px overflow-hidden border border-brand-line/80 bg-brand-line/80 sm:grid-cols-2 xl:grid-cols-4"><Kpi label="保本产销量" value={result.valid ? decimal.format(result.breakEven) : "—"} unit="万吨 / 年" tone="gold" detail={result.valid ? `日均约 ${money.format(result.breakEven * 10000 / 330)} 吨` : "先修复单位贡献"} /><Kpi label="保本开工率" value={result.valid ? `${decimal.format(result.utilization * 100)}%` : "—"} detail={result.valid ? result.utilization > 1 ? "超过产能上限" : "产能覆盖底线" : "不可测算"} tone={result.utilization > 1 ? "danger" : "normal"} /><Kpi label="安全边际率" value={result.valid ? `${decimal.format(result.safety * 100)}%` : "—"} detail={result.safety >= 0 ? "销量可承受的下滑空间" : "预计销量低于保本线"} tone={result.safety < 0 ? "danger" : "normal"} /><Kpi label="预计年度利润" value={`${result.profit < 0 ? "−" : ""}${money.format(Math.abs(result.profit))}`} unit="万元" detail="按当前预计产销量" tone={result.profit < 0 ? "danger" : "gold"} /></div><div className={`flex gap-4 border p-5 ${indicator.cls}`}><Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" /><div><p className="font-semibold text-brand-ink">{indicator.title}</p><p className="mt-1 text-sm leading-6 text-brand-body">{indicator.text}</p></div></div><MiniChart input={input} result={result} /></div>
      </div></div>
    </section>

    <section className="border-b border-brand-line bg-brand-soft"><div className="mx-auto max-w-7xl px-6 py-16 md:py-24"><div className="max-w-3xl"><p className="text-xs font-semibold tracking-[.16em] text-brand-gold">风险压力测试</p><h2 className="mt-3 text-3xl text-brand-ink md:text-4xl">价格跌一分、原料涨一毛，保本线会移动多少？</h2><p className="mt-5 leading-8 text-brand-body">玉米深加工利润薄、波动快。价格与原粮成本两端挤压时，传统报表往往滞后；而模型可以提前显示经营“生死线”被推高了多少。</p></div><div className="mt-10 grid gap-6 lg:grid-cols-[330px_1fr]"><div className="border border-brand-line bg-[#0b110f] p-6"><Slider label="出厂价下跌" value={priceDrop} min={0} max={15} step={1} unit="%" onChange={setPriceDrop} /><Slider label="玉米原料上涨" value={materialRise} min={0} max={25} step={1} unit="%" onChange={setMaterialRise} /><p className="mt-6 border-l-2 border-brand-gold pl-4 text-sm leading-7 text-brand-muted">套保、锁价、长单并非单纯采购动作，而是在守住单位贡献与保本开工率。</p></div><div className="overflow-x-auto border border-brand-line"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-brand-card text-xs tracking-wide text-brand-muted"><tr><th className="p-4 font-medium">情景</th><th className="p-4 font-medium">单位贡献</th><th className="p-4 font-medium">保本产销量</th><th className="p-4 font-medium">保本开工率</th><th className="p-4 font-medium">按计划年利润</th></tr></thead><tbody>{scenarios.map(({ name, r }, index) => <tr key={name} className={`border-t border-brand-line ${index === scenarios.length - 1 ? "bg-[#1b2119]" : ""}`}><td className="p-4 font-medium text-brand-ink">{name}</td><td className={`p-4 ${r.contribution <= 0 ? "text-[#e58f80]" : "text-brand-body"}`}>{r.contribution <= 0 ? "已为负" : `${money.format(r.contribution)} 元 / 吨`}</td><td className="p-4 text-brand-body">{r.valid ? `${decimal.format(r.breakEven)} 万吨` : "无法保本"}</td><td className={`p-4 ${r.utilization > 1 ? "text-[#e58f80]" : "text-brand-body"}`}>{r.valid ? `${decimal.format(r.utilization * 100)}%` : "—"}</td><td className={`p-4 ${r.profit < 0 ? "text-[#e58f80]" : "text-[#9fbeaa]"}`}>{r.profit < 0 ? "−" : ""}{money.format(Math.abs(r.profit))} 万元</td></tr>)}</tbody></table></div></div><div className="mt-6 border border-brand-gold/30 bg-brand-card p-6"><p className="text-sm font-semibold text-brand-gold">本次压力测试结论</p><p className="mt-2 text-lg leading-8 text-brand-ink">在“售价下跌 {priceDrop}% + 玉米上涨 {materialRise}%”的组合压力下，{stress.valid ? <>保本线将升至 <b>{decimal.format(stress.breakEven)} 万吨</b>，较基准提高 <b>{decimal.format((stress.breakEven / result.breakEven - 1) * 100)}%</b>。</> : <>单位贡献已被击穿，开工越多，经营亏损越大。</>}</p></div></div></section>

    <section className="border-b border-brand-line bg-brand-paper"><div className="mx-auto max-w-7xl px-6 py-16 md:py-24"><p className="text-xs font-semibold tracking-[.16em] text-brand-gold">从模型到行动</p><h2 className="mt-3 max-w-3xl text-3xl text-brand-ink md:text-4xl">一张保本图，连接企业的六类关键决策</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[[Target,"年度经营目标倒推","把“多赚 6000 万”翻译为必须完成的产销量、开工率与日均发货量。"],[Gauge,"报价与接单底线","识别哪些订单能补贡献、哪些低价订单会把企业拖向亏损。"],[Factory,"扩产与技改临界点","测算新增设备、人员与折旧后，需要新增多少销量才能覆盖固定投入。"],[LockKeyhole,"原粮采购与套保策略","量化原粮价格波动的经营冲击，支持锁价比例、长单和套保决策。"],[BarChart3,"成本结构专项诊断","找出可压缩、可转化与应由产品线承担的成本，修复失真的利润结构。"],[Landmark,"融资与股东沟通材料","用保本开工率、安全边际和压力情景，呈现企业的经营韧性。"]].map(([Icon, title, text]) => { const FeatureIcon = Icon as typeof Target; return <div key={title as string} className="group border border-brand-line bg-brand-card p-6 transition hover:border-brand-gold/60"><FeatureIcon className="h-5 w-5 text-brand-gold" /><h3 className="mt-8 text-lg font-semibold text-brand-ink">{title as string}</h3><p className="mt-3 text-sm leading-7 text-brand-muted">{text as string}</p></div>})}</div></div></section>

    <section className="border-b border-brand-line bg-[#0c1310]"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_.9fr] md:py-24"><div><p className="text-xs font-semibold tracking-[.16em] text-brand-gold">顾问交付不是一张表</p><h2 className="mt-3 text-3xl leading-tight text-brand-ink md:text-4xl">让盈亏平衡模型<br />成为持续运行的经营系统</h2><p className="mt-6 max-w-xl leading-8 text-brand-body">在线模型用于快速看见问题；正式服务会进一步校准成本口径、产品结构、订单维度、现金流约束与税务边界，形成可由经营团队持续使用的决策机制。</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-[#111816] transition hover:bg-[#eadabd]">申请经营模型诊断 <ArrowRight className="h-4 w-4" /></Link></div><div className="border border-brand-line bg-brand-card p-6 md:p-8"><p className="text-sm font-semibold text-brand-ink">标准化顾问交付清单</p><div className="mt-5 space-y-0">{[["01","经营数据口径校准","收入、成本、销量与库存四方比对"],["02","产品与订单贡献拆解","识别盈利单元、低效订单与产能占用"],["03","多情景年度预算模型","价格、原粮、销量、产能、现金流联动"],["04","管理看板与复盘机制","把模型嵌入月度经营例会与预警机制"]].map(([no, title, desc]) => <div key={no} className="grid grid-cols-[48px_1fr] gap-3 border-t border-brand-line py-5 first:border-t-0 first:pt-0"><span className="font-display text-xl text-brand-gold">{no}</span><div><p className="font-medium text-brand-ink">{title}</p><p className="mt-1 text-sm text-brand-muted">{desc}</p></div></div>)}</div></div></div></section>
  </main>;
}
