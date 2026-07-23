import type { ReactNode } from "react";
import { ParticleHeadline } from "@/components/ParticleHeadline";

/* ── 六个行业动画场景（纯 SVG + CSS，金色线条/暗底，克制不花哨）── */

function ManufacturingScene() {
  return (
    <svg viewBox="0 0 140 96" className="h-20 w-auto" fill="none" stroke="#d9c7a5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="0" y1="80" x2="140" y2="80" stroke="rgba(255,255,255,0.18)" />
      <path d="M18 80 V46 L42 32 V46 L66 32 V80 Z" />
      <line x1="30" y1="46" x2="30" y2="80" stroke="rgba(255,255,255,0.3)" />
      <line x1="54" y1="46" x2="54" y2="80" stroke="rgba(255,255,255,0.3)" />
      <rect x="74" y="34" width="8" height="46" />
      <rect x="90" y="22" width="8" height="58" />
      <circle className="scene-smoke" cx="78" cy="30" r="4" fill="#d9c7a5" stroke="none" style={{ animationDelay: "0s" }} />
      <circle className="scene-smoke" cx="94" cy="18" r="4" fill="#d9c7a5" stroke="none" style={{ animationDelay: "1.3s" }} />
      <g className="scene-rotate" style={{ transformOrigin: "118px 60px" }}>
        <circle cx="118" cy="60" r="12" />
        <circle cx="118" cy="60" r="4" stroke="rgba(255,255,255,0.5)" />
        <line x1="118" y1="44" x2="118" y2="76" stroke="rgba(255,255,255,0.5)" />
        <line x1="102" y1="60" x2="134" y2="60" stroke="rgba(255,255,255,0.5)" />
      </g>
    </svg>
  );
}

function TradeScene() {
  return (
    <svg viewBox="0 0 140 96" className="h-20 w-auto" fill="none" stroke="#d9c7a5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <g className="scene-bob">
        <path d="M28 58 L112 58 L102 80 L38 80 Z" />
        <rect x="44" y="46" width="16" height="12" />
        <rect x="64" y="46" width="16" height="12" />
        <rect x="84" y="46" width="16" height="12" />
      </g>
      <path className="scene-wave" d="M-40 88 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="rgba(255,255,255,0.28)" />
      <path className="scene-wave" d="M-40 94 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="rgba(217,199,165,0.4)" style={{ animationDuration: "7s", animationDirection: "reverse" }} />
    </svg>
  );
}

function AgricultureScene() {
  return (
    <svg viewBox="0 0 140 96" className="h-20 w-auto" fill="none" stroke="#d9c7a5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <g className="scene-rotate" style={{ transformOrigin: "114px 24px" }}>
        <circle cx="114" cy="24" r="9" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line key={a} x1="114" y1="24" x2={114 + 15 * Math.cos((a * Math.PI) / 180)} y2={24 + 15 * Math.sin((a * Math.PI) / 180)} stroke="rgba(255,255,255,0.4)" />
        ))}
      </g>
      <line x1="0" y1="82" x2="140" y2="82" stroke="rgba(255,255,255,0.18)" />
      <g className="scene-sway" style={{ transformOrigin: "40px 82px" }}>
        <line x1="40" y1="82" x2="40" y2="40" />
        <path d="M40 42 l-5 -8 M40 50 l-5 -7 M40 58 l-5 -7 M40 42 l5 -8 M40 50 l5 -7 M40 58 l5 -7" stroke="rgba(255,255,255,0.45)" />
      </g>
      <g className="scene-sway" style={{ transformOrigin: "72px 82px", animationDelay: "0.7s" }}>
        <line x1="72" y1="82" x2="72" y2="34" />
        <path d="M72 36 l-5 -8 M72 44 l-5 -7 M72 52 l-5 -7 M72 36 l5 -8 M72 44 l5 -7 M72 52 l5 -7" stroke="rgba(255,255,255,0.45)" />
      </g>
      <g className="scene-sway" style={{ transformOrigin: "104px 82px", animationDelay: "1.3s" }}>
        <line x1="104" y1="82" x2="104" y2="44" />
        <path d="M104 46 l-5 -8 M104 54 l-5 -7 M104 62 l-5 -7 M104 46 l5 -8 M104 54 l5 -7 M104 62 l5 -7" stroke="rgba(255,255,255,0.45)" />
      </g>
    </svg>
  );
}

function ConstructionScene() {
  return (
    <svg viewBox="0 0 140 96" className="h-20 w-auto" fill="none" stroke="#d9c7a5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="0" y1="84" x2="140" y2="84" stroke="rgba(255,255,255,0.18)" />
      <line x1="30" y1="18" x2="30" y2="84" />
      <line x1="30" y1="18" x2="98" y2="18" />
      <line x1="30" y1="18" x2="44" y2="6" />
      <line x1="30" y1="40" x2="98" y2="40" stroke="rgba(255,255,255,0.3)" />
      <g className="scene-lift">
        <line x1="82" y1="18" x2="82" y2="40" stroke="rgba(255,255,255,0.45)" />
        <rect x="68" y="40" width="28" height="11" rx="1" />
      </g>
      <rect x="104" y="58" width="30" height="26" stroke="rgba(255,255,255,0.35)" />
      <line x1="104" y1="71" x2="134" y2="71" stroke="rgba(255,255,255,0.2)" />
    </svg>
  );
}

function RetailScene() {
  return (
    <svg viewBox="0 0 140 96" className="h-20 w-auto" fill="none" stroke="#d9c7a5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 50 L70 38 L102 50 L70 62 Z" />
      <path d="M38 50 V78 L70 90 V62" />
      <path d="M102 50 V78 L70 90" />
      <line x1="70" y1="38" x2="70" y2="62" stroke="rgba(255,255,255,0.35)" />
      <g className="scene-float">
        <path d="M96 16 h20 l-3 18 h-14 z" />
        <path d="M101 16 a5 5 0 0 1 10 0" />
      </g>
      <circle className="scene-pulse" cx="70" cy="62" r="5" stroke="rgba(217,199,165,0.6)" fill="none" />
    </svg>
  );
}

function TechScene() {
  return (
    <svg viewBox="0 0 140 96" className="h-20 w-auto" fill="none" stroke="#d9c7a5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="32" y="22" width="74" height="56" rx="4" />
      <line x1="32" y1="40" x2="106" y2="40" stroke="rgba(255,255,255,0.3)" />
      <line x1="32" y1="58" x2="106" y2="58" stroke="rgba(255,255,255,0.3)" />
      <circle className="scene-blink" cx="44" cy="31" r="2.6" fill="#d9c7a5" stroke="none" />
      <circle className="scene-blink" cx="44" cy="49" r="2.6" fill="#d9c7a5" stroke="none" style={{ animationDelay: "0.5s" }} />
      <circle className="scene-blink" cx="44" cy="67" r="2.6" fill="#d9c7a5" stroke="none" style={{ animationDelay: "1s" }} />
      <circle cx="92" cy="50" r="15" stroke="rgba(255,255,255,0.2)" />
      <g>
        <line x1="92" y1="50" x2="92" y2="35" stroke="rgba(255,255,255,0.5)" />
        <circle cx="92" cy="35" r="3" fill="#d9c7a5" stroke="none" />
        <animateTransform attributeName="transform" type="rotate" from="0 92 50" to="360 92 50" dur="6s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

const industries: { name: string; note: string; scene: ReactNode }[] = [
  { name: "制造业", note: "成本核算到每台设备、每条产线", scene: <ManufacturingScene /> },
  { name: "外贸进出口", note: "出口退税、跨境结算与汇率", scene: <TradeScene /> },
  { name: "农产品加工", note: "收购凭证、免税备案与合规", scene: <AgricultureScene /> },
  { name: "建筑工程", note: "挂靠分包、进度款与发票", scene: <ConstructionScene /> },
  { name: "电商零售", note: "平台流水、刷单风险与进销存", scene: <RetailScene /> },
  { name: "技术服务", note: "研发加计、软著与高新资质", scene: <TechScene /> },
];

export function IndustryScenes() {
  return (
    <section className="section-reveal border-b border-brand-line bg-brand-paper">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">服务行业</p>
          <ParticleHeadline lines={[{ text: "每个行业" }, { text: "都有自己的财税命题", indent: 3 }]} color="#d9c7a5" />
          <p className="mt-6 max-w-md text-base font-medium leading-8 text-[#3a352c]">
            从制造业的产线成本，到外贸的出口退税、农产品的免税备案，不同行业的财税风险，藏在各自的经营细节里。我们服务过的，是一个个具体的现场。
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div key={item.name} className="private-panel interactive-card border border-brand-line bg-brand-card p-6 rounded-card">
              <div className="mb-5 flex h-24 items-center justify-center rounded-xl border border-white/8 bg-[#0a0f0d]">
                {item.scene}
              </div>
              <h3 className="text-lg font-bold tracking-tight text-[#d9c7a5]">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
