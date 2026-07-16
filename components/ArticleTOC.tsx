"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function ArticleTOC({ headings }: { headings: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <nav aria-label="文章目录">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
          本页目录
        </h3>
        <ul className="space-y-1.5 border-l border-brand-line/50 pl-4">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block text-sm transition py-1 ${
                  h.level === 3 ? "pl-4" : ""
                } ${
                  activeId === h.id
                    ? "font-medium text-[#d9c7a5] border-l-2 border-[#d9c7a5] -ml-[17px] pl-[15px]"
                    : "text-brand-muted hover:text-brand-ink"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
