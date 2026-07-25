"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BrandLaunchScene } from "./brand-launch/BrandLaunchScene";
import { phaseFromProgress, useBrandLaunchProgress } from "./brand-launch/AnimationController";

export function BrandLaunchHero() {
  const { progress, target } = useBrandLaunchProgress(true);
  const [phase, setPhase] = useState("water");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setPhase(phaseFromProgress(target.current));
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <section data-header-theme="dark" className={`brand-launch brand-phase-${phase}`} aria-label="龙头会服品牌开场">
      <BrandLaunchScene progress={progress} target={target} />
      <div className="brand-launch-vignette" />
      <div className="brand-launch-oriental" aria-hidden="true" />
      <div className="brand-launch-copy">
        <p className="brand-launch-kicker">LONGTOU · CORPORATE SERVICE PLATFORM</p>
        <h1>龙头会服</h1>
        <p className="brand-launch-en">LONGTOU SERVICE</p>
        <div className="brand-launch-line" />
        <p className="brand-launch-subtitle">连接企业资源　陪伴企业成长</p>
      </div>
      <div className="brand-launch-ip" aria-label="龙头会服品牌IP龙灵">
        <Image src="/images/longling-brand-ip.png" alt="龙灵，龙头会服品牌IP" fill priority sizes="(max-width: 768px) 70vw, 390px" />
      </div>
      <p className="brand-launch-scroll">SCROLL TO AWAKEN <span>↓</span></p>
    </section>
  );
}
