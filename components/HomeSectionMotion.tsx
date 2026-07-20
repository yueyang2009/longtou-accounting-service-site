"use client";

import { useEffect } from "react";

type HomeSectionMotionProps = {
  rootSelector?: string;
  sectionSelector?: string;
};

export function HomeSectionMotion({
  rootSelector = ".private-advisory-site main",
  sectionSelector = ":scope > section",
}: HomeSectionMotionProps = {}) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>(sectionSelector));
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
    sections[0]?.classList.add("is-section-active");

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
  }, [rootSelector, sectionSelector]);

  return null;
}
