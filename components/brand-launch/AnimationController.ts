"use client";

import { useEffect, useRef } from "react";

export type BrandPhase = "water" | "dragon" | "reveal" | "brand";

export function phaseFromProgress(progress: number): BrandPhase {
  if (progress < 0.25) return "water";
  if (progress < 0.57) return "dragon";
  if (progress < 0.8) return "reveal";
  return "brand";
}

/** Normalises the first viewport of scrolling into the four launch chapters. */
export function useBrandLaunchProgress(enabled: boolean) {
  const progress = useRef(0);
  const target = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const updateTarget = () => {
      const scrollRange = Math.max(window.innerHeight * 1.35, 1);
      target.current = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
    };
    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    return () => window.removeEventListener("scroll", updateTarget);
  }, [enabled]);

  return { progress, target };
}
