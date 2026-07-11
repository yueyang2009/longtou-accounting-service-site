"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  /** 附加类名，用于 entrance 动画等 */
  className?: string;
  style?: CSSProperties;
}

/**
 * 通用点击翻转卡。
 * - 复用 services / team 页的 .flip-card 3D 翻转基础设施（perspective + rotateY(180deg) + backface-visibility）。
 * - 默认挂 .flip-card--auto：高度由内容撑开，避免长文卡片被固定 220px 裁切。
 * - 正面 flip-card-face、背面 flip-card-back 均为绝对重叠的双面，只播一次翻转。
 */
export function FlipCard({ front, back, className = "", style }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip-card flip-card--auto group ${flipped ? "is-flipped" : ""} ${className}`}
      style={style}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-face">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
}
