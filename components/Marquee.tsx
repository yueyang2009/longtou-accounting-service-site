"use client";

type MarqueeProps = {
  items: string[];
  /** 滚动一圈耗时（秒），越大越慢 */
  speed?: number;
};

/**
 * 无限横向缓动滚条，用于展示「已服务行业 / 核心能力」等 breadth 信息。
 * 列表复制一份后用 translateX(-50%) 实现无缝循环；尊重 reduced-motion。
 */
export function Marquee({ items, speed = 48 }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className="marquee-root">
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {row.map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
            <span className="marquee-dot" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
