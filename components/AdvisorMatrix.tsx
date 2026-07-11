"use client";

import { useState } from "react";

export type AdvisorMember = {
  name: string;
  title: string;
  credential: string;
  focus: string;
  avatar?: string;
};

export function AdvisorMatrix({ members }: { members: AdvisorMember[] }) {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {members.map((m, i) => {
        const isFlipped = flipped === i;
        return (
          <button
            key={m.name}
            type="button"
            onClick={() => setFlipped(isFlipped ? null : i)}
            aria-expanded={isFlipped}
            aria-label={`${m.name}：${isFlipped ? "点击返回" : "点击翻转查看大照片"}`}
            className={`flip-card advisor-flip-card group w-full text-left ${
              isFlipped ? "is-flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              {/* 正面：原名片信息 */}
              <div className="flip-card-face advisor-face-front">
                <div className="team-mini-card-top">
                  {m.avatar ? (
                    <img src={m.avatar} alt={m.name} className="team-mini-avatar" />
                  ) : (
                    <>
                      <span>{m.name.slice(0, 1)}</span>
                      <p>头像待补</p>
                    </>
                  )}
                </div>
                <h3>{m.name}</h3>
                <p className="team-mini-title">{m.title}</p>
                <p className="team-mini-credential">{m.credential}</p>
                <p className="team-mini-focus">{m.focus}</p>
                <p className="advisor-flip-hint">点击查看大照片 ›</p>
              </div>

              {/* 背面：大照片 + 名字 + 头衔 */}
              <div className="flip-card-face flip-card-back advisor-face-back">
                <div className="advisor-photo-wrap">
                  {m.avatar ? (
                    <img src={m.avatar} alt={m.name} className="advisor-photo" />
                  ) : (
                    <span className="advisor-photo-placeholder">
                      {m.name.slice(0, 1)}
                    </span>
                  )}
                </div>
                <h3 className="advisor-back-name">{m.name}</h3>
                <p className="advisor-back-title">{m.title}</p>
                <p className="advisor-back-hint">点击返回 ›</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
