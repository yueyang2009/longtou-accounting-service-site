"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Activity, ArrowDownRight, ArrowUpRight, CalendarRange, ChevronRight, CircleDollarSign, Landmark, ShieldAlert, SlidersHorizontal, TrendingUp, WalletCards, type LucideIcon } from "lucide-react";

type ForecastRow = {
  month: string;
  revenue: number;
  cost: number;
  profit: number;
  cash: number;
  variance: number;
};

const horizons = [6, 12, 18] as const;
const money = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 });
const metricDefinitions: Array<{ label: string; key: "revenue" | "cost" | "profit" | "cash"; Icon: LucideIcon; note: string }> = [
  { label: "预测收入", key: "revenue", Icon: TrendingUp, note: "较基准" },
  { label: "预测支出", key: "cost", Icon: ArrowDownRight, note: "成本及费用" },
  { label: "经营利润", key: "profit", Icon: ArrowUpRight, note: "利润率" },
  { label: "期末现金", key: "cash", Icon: WalletCards, note: "现金余额" },
];
const fundingMetrics: Array<{ label: string; value: string; unit: string; Icon: LucideIcon }> = [
  { label: "当前可用资金", value: "5,645", unit: "万元", Icon: WalletCards },
  { label: "13周期末资金", value: "5,691", unit: "万元", Icon: Activity },
  { label: "未使用授信", value: "6,370", unit: "万元", Icon: Landmark },
  { label: "流动性余量", value: "8,561", unit: "万元", Icon: ShieldAlert },
];

function makeForecast(months: number, growth: number, costChange: number, collectionDays: number): ForecastRow[] {
  const current = new Date(2026, 6, 1);
  let closingCash = 428;

  return Array.from({ length: months }, (_, index) => {
    const date = new Date(current.getFullYear(), current.getMonth() + index, 1);
    const seasonality = [0.92, 0.96, 1.03, 1.08, 1.04, 1.1, 1.05, 1.02, 1.08, 1.14, 1.18, 1.26][date.getMonth()];
    const revenue = Math.round(286 * seasonality * (1 + growth / 100) ** (index / 3));
    const cost = Math.round((revenue * 0.56 + 73) * (1 + costChange / 100));
    const profit = revenue - cost;
    const collectionFactor = collectionDays <= 30 ? 0.94 : collectionDays <= 45 ? 0.84 : 0.72;
    const cashIn = revenue * collectionFactor + (index > 0 ? 286 * 0.16 : 41);
    const cashOut = cost * 0.9 + 28;
    const netCash = Math.round(cashIn - cashOut);
    closingCash += netCash;
    const baseline = 286 * seasonality * (1.04 ** (index / 3));

    return {
      month: `${date.getMonth() + 1}月`,
      revenue,
      cost,
      profit,
      cash: closingCash,
      variance: Math.round(((revenue - baseline) / baseline) * 100),
    };
  });
}

function Chart({ rows }: { rows: ForecastRow[] }) {
  const width = 760;
  const height = 270;
  const top = 22;
  const bottom = 42;
  const max = Math.max(...rows.flatMap((row) => [row.revenue, row.cost, row.profit]), 1) * 1.12;
  const x = (index: number) => 28 + (index * (width - 56)) / Math.max(rows.length - 1, 1);
  const y = (value: number) => top + (height - top - bottom) * (1 - value / max);
  const line = (key: "revenue" | "cost" | "profit") => rows.map((row, index) => `${index === 0 ? "M" : "L"}${x(index)},${y(row[key])}`).join(" ");
  const area = `${line("revenue")} L${x(rows.length - 1)},${height - bottom} L${x(0)},${height - bottom} Z`;

  return <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full overflow-visible" role="img" aria-label="收入、成本与经营利润滚动预测趋势图">
    <defs>
      <linearGradient id="budget-revenue" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#d9c7a5" stopOpacity=".36" /><stop offset="1" stopColor="#d9c7a5" stopOpacity="0" /></linearGradient>
      <filter id="budget-glow"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
    </defs>
    {[.25, .5, .75, 1].map((step) => <line key={step} x1="28" x2={width - 28} y1={y(max * step)} y2={y(max * step)} stroke="rgba(217,199,165,.14)" strokeDasharray="3 6" />)}
    <path d={area} fill="url(#budget-revenue)" />
    <path d={line("revenue")} fill="none" stroke="#d9c7a5" strokeWidth="3" filter="url(#budget-glow)" />
    <path d={line("cost")} fill="none" stroke="#6f9879" strokeWidth="2" strokeDasharray="7 5" />
    <path d={line("profit")} fill="none" stroke="#fffaf0" strokeWidth="2" />
    {rows.map((row, index) => <g key={row.month}><circle cx={x(index)} cy={y(row.revenue)} r="3.5" fill="#d9c7a5" /><text x={x(index)} y={height - 14} textAnchor="middle" fill="rgba(255,255,255,.54)" fontSize="11">{row.month}</text></g>)}
  </svg>;
}

export function ComprehensiveBudgetDashboard() {
  const base = process.env.NODE_ENV === "production" ? "/longtou-accounting-service-site" : "";
  const [months, setMonths] = useState<(typeof horizons)[number]>(12);
  const [growth, setGrowth] = useState(8);
  const [costChange, setCostChange] = useState(3);
  const [collectionDays, setCollectionDays] = useState(45);
  const rows = useMemo(() => makeForecast(months, growth, costChange, collectionDays), [months, growth, costChange, collectionDays]);
  const totals = useMemo(() => ({ revenue: rows.reduce((sum, row) => sum + row.revenue, 0), cost: rows.reduce((sum, row) => sum + row.cost, 0), profit: rows.reduce((sum, row) => sum + row.profit, 0), cash: rows.at(-1)?.cash ?? 0 }), [rows]);
  const visibleRows = rows.slice(0, 6);

  return <section className="border-y border-white/10 bg-[#0d1510] py-9 md:py-14">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="text-sm font-semibold tracking-[.18em] text-[#d9c7a5]">全面预算看板</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">滚动预测，把经营假设变成可讨论的结果</h2></div>
        <p className="max-w-lg text-sm leading-7 text-white/55">演示数据按调整后的增长、成本和回款节奏即时推演，适用于客户沟通中的经营场景模拟。</p>
      </div>

      <div className="grid overflow-hidden border border-white/12 lg:grid-cols-[272px_1fr]">
        <aside className="border-b border-white/12 bg-[#111d16] p-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2 text-sm font-semibold text-white"><SlidersHorizontal className="h-4 w-4 text-[#d9c7a5]" />推演参数</div>
          <div className="mt-7">
            <p className="text-xs font-medium text-white/48">预测周期</p><div className="mt-3 grid grid-cols-3 gap-2">{horizons.map((item) => <button key={item} onClick={() => setMonths(item)} className={`border px-2 py-2 text-sm transition ${months === item ? "border-[#d9c7a5] bg-[#d9c7a5] font-bold text-[#111816]" : "border-white/14 text-white/60 hover:border-white/40"}`}>{item}个月</button>)}</div>
          </div>
          <label className="mt-7 block"><div className="flex justify-between text-xs"><span className="text-white/48">收入增长幅度</span><b className="text-[#d9c7a5]">{growth}%</b></div><input aria-label="收入增长幅度" className="budget-range mt-3 w-full" type="range" min="-10" max="30" value={growth} onChange={(event) => setGrowth(Number(event.target.value))} /></label>
          <label className="mt-7 block"><div className="flex justify-between text-xs"><span className="text-white/48">成本变动幅度</span><b className="text-[#d9c7a5]">{costChange > 0 ? "+" : ""}{costChange}%</b></div><input aria-label="成本变动幅度" className="budget-range mt-3 w-full" type="range" min="-10" max="20" value={costChange} onChange={(event) => setCostChange(Number(event.target.value))} /></label>
          <div className="mt-7"><p className="text-xs text-white/48">平均回款周期</p><div className="mt-3 grid grid-cols-3 gap-2">{[30, 45, 60].map((item) => <button key={item} onClick={() => setCollectionDays(item)} className={`border py-2 text-sm transition ${collectionDays === item ? "border-[#d9c7a5] text-[#d9c7a5]" : "border-white/14 text-white/60 hover:border-white/40"}`}>{item}天</button>)}</div></div>
          <div className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-white/42"><p className="font-semibold text-white/66">口径说明</p><p className="mt-2">单位：万元。预测为演示模型，正式预算需基于企业真实订单、成本、回款和资金安排校准。</p></div>
        </aside>

        <div className="p-5 md:p-7">
          <div className="grid grid-cols-2 border border-white/10 md:grid-cols-4">{metricDefinitions.map(({ label, key, Icon, note }) => <div key={label} className="border-b border-r border-white/10 bg-[#101913] p-5 last:border-r-0 md:border-b-0"><div className="flex items-center justify-between text-xs text-white/48"><span>{label}</span><Icon className="h-4 w-4 text-[#d9c7a5]" /></div><p className="mt-4 text-2xl font-semibold text-white">¥{money.format(totals[key])}<span className="ml-1 text-xs font-normal text-white/45">万</span></p><p className="mt-2 text-xs text-[#d9c7a5]">{note}{key === "profit" ? ` ${((totals.profit / totals.revenue) * 100).toFixed(1)}%` : ""}</p></div>)}
          </div>

          <div className="mt-6 border border-white/10 bg-[linear-gradient(135deg,#101b14,#18271c)] p-5 md:p-7"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="font-semibold text-white">收入、成本与利润滚动预测</p><p className="mt-1 text-xs text-white/45">滚动窗口：未来 {months} 个月</p></div><div className="flex flex-wrap gap-4 text-xs text-white/60"><span className="flex items-center gap-2"><i className="h-0.5 w-4 bg-[#d9c7a5]" />收入</span><span className="flex items-center gap-2"><i className="h-0.5 w-4 border-t-2 border-dashed border-[#6f9879]" />成本</span><span className="flex items-center gap-2"><i className="h-0.5 w-4 bg-white" />利润</span></div></div><div className="mt-5"><Chart rows={rows} /></div></div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_.95fr]">
            <div className="border border-white/10 bg-[#101913] p-5"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">现金流滚动推演</p><p className="mt-1 text-xs text-white/45">回款周期 {collectionDays} 天，现金余额实时联动</p></div><CircleDollarSign className="h-5 w-5 text-[#d9c7a5]" /></div><div className="mt-7 flex h-28 items-end gap-2">{rows.slice(0, 12).map((row) => <div key={row.month} className="group flex h-full flex-1 flex-col justify-end"><span className="mb-2 text-center text-[10px] text-white/45 opacity-0 transition group-hover:opacity-100">{row.cash}</span><div className="min-h-2 bg-gradient-to-t from-[#4f7f5b] to-[#d9c7a5] transition-all duration-500" style={{ height: `${Math.max(10, (row.cash / Math.max(...rows.map((item) => item.cash))) * 100)}%` }} /><span className="mt-2 text-center text-[10px] text-white/42">{row.month}</span></div>)}</div></div>
            <div className="border border-white/10 bg-[#101913] p-5"><div className="flex items-center justify-between"><div><p className="font-semibold text-white">预算执行关注点</p><p className="mt-1 text-xs text-white/45">在客户沟通中优先讨论的经营变量</p></div><CalendarRange className="h-5 w-5 text-[#d9c7a5]" /></div><div className="mt-4 divide-y divide-white/10">{visibleRows.slice(0, 4).map((row, index) => <div key={row.month} className="flex items-center gap-3 py-3"><span className="w-7 text-xs text-[#d9c7a5]">0{index + 1}</span><div className="min-w-0 flex-1"><p className="text-sm text-white">{row.month} 收入预算偏差</p><p className="mt-1 text-xs text-white/45">预测收入 ¥{money.format(row.revenue)} 万 · 经营利润 ¥{money.format(row.profit)} 万</p></div><span className={`text-sm font-semibold ${row.variance >= 0 ? "text-[#9ccca7]" : "text-[#e7988e]"}`}>{row.variance >= 0 ? "+" : ""}{row.variance}%</span></div>)}</div></div>
          </div>
        </div>
      </div>

      <section className="mt-7 overflow-hidden border border-[#d9c7a5]/35 bg-[linear-gradient(125deg,#111b15,#172a1d_55%,#102218)]">
        <div className="grid gap-8 p-7 md:p-9 xl:grid-cols-[1.05fr_.95fr] xl:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[.16em] text-[#d9c7a5]">资金滚动预测</p>
            <h3 className="mt-3 text-3xl font-bold leading-tight text-white">把资金安全线前置到<br />未来 13 周与 12 个月</h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">参照资金滚动预测模型，资金驾驶舱以银行可用资金为起点，将经营、投资、融资计划按日期滚动推演，并按照情景系数、回款概率与最低安全资金线形成预警。</p>
            <div className="mt-7 flex flex-wrap gap-3"><a href={`${base}/cash-flow-forecast.html`} className="inline-flex items-center gap-2 bg-[#d9c7a5] px-5 py-3 text-sm font-bold text-[#111816] transition hover:bg-[#eadabd]">启动资金管理驾驶舱 <ChevronRight className="h-4 w-4" /></a><Link href="/contact" className="inline-flex items-center gap-2 border border-white/18 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-[#d9c7a5] hover:text-[#d9c7a5]">申请资金体系诊断</Link></div>
          </div>
          <div className="grid border border-white/12 sm:grid-cols-2">
            {fundingMetrics.map(({ label, value, unit, Icon }) => <div key={label} className="border-b border-r border-white/12 bg-[#0d1711]/65 p-5 even:border-r-0 last:border-b-0 sm:nth-[3]:border-b-0"><div className="flex items-center justify-between text-xs text-white/50"><span>{label}</span><Icon className="h-4 w-4 text-[#d9c7a5]" /></div><p className="mt-4 text-2xl font-semibold text-white">{value}<span className="ml-1 text-xs font-normal text-white/45">{unit}</span></p></div>)}
          </div>
        </div>
        <div className="grid border-t border-white/10 bg-black/10 md:grid-cols-4">{[
          ['01','账户资金','银行余额、受限资金、多币种折算与账户时效'],['02','收支计划','按日期、概率、状态、优先级与责任人滚动维护'],['03','融资安排','授信占用、提款、还本、付息与到期续签预警'],['04','风险闭环','安全资金线、缺口、4周覆盖率与模型勾稽校验'],
        ].map(([no, title, desc]) => <div key={no} className="border-b border-r border-white/10 p-5 last:border-r-0 md:border-b-0"><p className="text-xs font-semibold text-[#d9c7a5]">{no}</p><p className="mt-5 font-semibold text-white">{title}</p><p className="mt-2 text-xs leading-6 text-white/48">{desc}</p></div>)}
        </div>
      </section>
    </div>
  </section>;
}
