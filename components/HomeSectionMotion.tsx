"use client";

import { useEffect } from "react";

export function HomeSectionMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".private-advisory-site main");
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>(":scope > section"));
    if (sections.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      sections.forEach((section) => section.classList.add("is-section-active"));
      return;
    }

    sections.forEach((section, index) => {
      section.classList.add("home-motion-section");
      section.style.setProperty("--section-index", String(index));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            section.classList.add("is-section-active");
            section.classList.remove("is-section-past");
          } else if (entry.boundingClientRect.top < 0) {
            section.classList.add("is-section-past");
            section.classList.remove("is-section-active");
          } else {
            section.classList.remove("is-section-active", "is-section-past");
          }
        });
      },
      {
        threshold: [0.18, 0.36, 0.58],
        rootMargin: "-18% 0px -22% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
