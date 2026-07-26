"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const fragmentSeeds = Array.from({ length: 860 }, (_, index) => {
  const cols = 43;
  const rows = 20;
  const col = index % cols;
  const row = Math.floor(index / cols) % rows;
  const depth = index % 5;
  const targetX = -132 + col * 6.25 + ((row % 2) * 2.4);
  const targetY = -43 + row * 4.55 + ((col % 4) - 1.5) * 0.72;
  const angle = (index * 137.508 * Math.PI) / 180;
  const band = Math.sin(index * 0.29) * 10;
  const distance = 190 + depth * 44 + ((index * 53) % 310);
  const orbit = 31 + depth * 5.4 + (index % 13) * 2.1;
  const flowX = 120 + depth * 34 + ((index * 19) % 120);
  const flowY = -34 + ((index * 23) % 96) - depth * 5;
  const opacity = [0.26, 0.36, 0.52, 0.68, 0.44][depth];
  const blur = [0.9, 0.55, 0.2, 0, 0.35][depth];
  const size = [0.8, 1.05, 1.3, 1.68, 1.12][depth] + (index % 4) * 0.12;
  const color = depth === 3
    ? "rgba(238, 220, 184, 0.88)"
    : depth === 2
      ? "rgba(217, 199, 165, 0.76)"
      : "rgba(166, 154, 132, 0.58)";

  return {
    id: index,
    left: `${50 + Math.cos(angle) * orbit + band}%`,
    top: `${50 + Math.sin(angle) * (orbit * 0.58) + Math.cos(index * 0.17) * 8}%`,
    tx: `${targetX}px`,
    ty: `${targetY}px`,
    sx: `${Math.cos(angle) * distance - flowX}px`,
    sy: `${Math.sin(angle) * distance * 0.55 + flowY}px`,
    sxMid: `${(Math.cos(angle) * distance - flowX) * 0.58}px`,
    syMid: `${(Math.sin(angle) * distance * 0.55 + flowY) * 0.52}px`,
    txMid: `${targetX * 0.42}px`,
    tyMid: `${targetY * 0.42}px`,
    mx: `${flowX}px`,
    my: `${flowY}px`,
    delay: `${(index % 96) * 11}ms`,
    duration: `${4.9 + depth * 0.38 + (index % 7) * 0.06}s`,
    size: `${size}px`,
    opacity,
    blur: `${blur}px`,
    color,
    rotate: `${(index * 29) % 360}deg`,
  };
});

export function BrandLaunchHero() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [leaving, setLeaving] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setDismissed(true), 700);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  if (dismissed) return null;

  return (
    <section
      data-header-theme="dark"
      className={`brand-launch brand-launch-overlay ${leaving ? "is-leaving" : ""}`}
      aria-label="龙头会服品牌开场"
    >
      <div className="brand-launch-depth" aria-hidden="true" />
      <div className="brand-launch-noise" aria-hidden="true" />
      <div className="brand-launch-fragments" aria-hidden="true">
        {fragmentSeeds.map((fragment) => (
          <i
            key={fragment.id}
            style={{
              "--fragment-left": fragment.left,
              "--fragment-top": fragment.top,
              "--fragment-tx": fragment.tx,
              "--fragment-ty": fragment.ty,
              "--fragment-sx": fragment.sx,
              "--fragment-sy": fragment.sy,
              "--fragment-sx-mid": fragment.sxMid,
              "--fragment-sy-mid": fragment.syMid,
              "--fragment-tx-mid": fragment.txMid,
              "--fragment-ty-mid": fragment.tyMid,
              "--fragment-delay": fragment.delay,
              "--fragment-duration": fragment.duration,
              "--fragment-size": fragment.size,
              "--fragment-opacity": fragment.opacity,
              "--fragment-blur": fragment.blur,
              "--fragment-color": fragment.color,
              "--fragment-mx": fragment.mx,
              "--fragment-my": fragment.my,
              "--fragment-rotate": fragment.rotate,
            } as CSSProperties}
          />
        ))}
      </div>

      <div className="brand-launch-copy">
        <p className="brand-launch-kicker">LONGTOU · CORPORATE TAX ADVISORY</p>
        <div className="brand-launch-logo" aria-label="龙头集团">
          <Image
            src={`${assetBase}/images/longtou-group-logo.png`}
            alt="龙头集团"
            fill
            priority
            sizes="(max-width: 768px) 70vw, 360px"
          />
        </div>
        <p className="brand-launch-en">LONGTOU SERVICE</p>
        <p className="brand-launch-subtitle">把复杂、混乱和不确定，梳理为清晰、稳定、可执行的经营判断</p>
      </div>

      <button type="button" className="brand-launch-enter" onClick={() => setLeaving(true)}>
        进入龙头会服官网 <span>→</span>
      </button>
    </section>
  );
}
