"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type OrbitMember = {
  name: string;
  title: string;
  avatar: string;
  summary: string;
  fullIntro: string;
  slug: string;
};

export function TeamOrbit({ members }: { members: OrbitMember[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number | null>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    const tick = () => {
      rotationRef.current = (rotationRef.current + (isHovering ? 0.42 : 1.32)) % 360;
      setRotation(rotationRef.current);
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [isHovering]);

  // 从 URL hash（如 /team#du-nannan）自动选中对应专家标签页
  useEffect(() => {
    const selectFromHash = () => {
      const target = window.location.hash.replace(/^#/, "");
      if (!target) return;
      const idx = members.findIndex((m) => m.slug === target);
      if (idx >= 0) setActiveIndex(idx);
    };

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, [members]);

  const activeMember = members[activeIndex] ?? members[0];

  const positionedMembers = useMemo(() => {
    return members.map((member, index) => {
      const baseAngle = (360 / members.length) * index;
      const angle = baseAngle + rotation;
      const rad = (angle * Math.PI) / 180;
      const depth = Math.cos(rad);
      const x = Math.sin(rad) * 360;
      const y = Math.sin(rad * 0.72) * 22 - 6;
      const z = depth * 210;
      const scale = 0.82 + ((depth + 1) / 2) * 0.22;
      const opacity = 0.48 + ((depth + 1) / 2) * 0.52;

      return {
        member,
        angle,
        depth,
        index,
        style: {
          transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
          opacity,
          zIndex: Math.round((depth + 1) * 100)
        }
      };
    });
  }, [members, rotation]);

  return (
    <section
      className="team-orbit-section"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="团队介绍"
    >
      <div className="team-orbit-copy">
        <p className="team-orbit-eyebrow">Partner Team</p>
        <h1>团队介绍</h1>
        <p>
          以财税专业为底座，以经营问题为入口。我们把企业的账、税、流程、股权和经营判断放到同一张桌面上讨论。
        </p>
      </div>

      <div className="team-orbit-layout">
        <div className="team-orbit-stage" aria-hidden="false">
          <div className="team-orbit-ring" />
          <div className="team-orbit-ring team-orbit-ring-secondary" />
          <div className="team-orbit-core">
            <span>LONGTOU</span>
            <strong>顾问席位</strong>
          </div>

          {positionedMembers.map(({ member, index, style }) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={member.name}
                type="button"
                className={`team-orbit-card ${isActive ? "is-active" : ""}`}
                style={isActive ? undefined : style}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={`查看${member.name}介绍`}
              >
                <img src={member.avatar} alt={member.name} />
                <span className="team-orbit-card-glow" />
                <span className="team-orbit-card-body">
                  <strong>{member.name}</strong>
                  <small>{member.title}</small>
                  <em>{member.summary}</em>
                </span>
              </button>
            );
          })}
        </div>

        <aside className="team-orbit-detail">
          <p>Selected Advisor</p>
          <h2>{activeMember.name}</h2>
          <h3>{activeMember.title}</h3>
          <div className="team-orbit-detail-line" />
          <p className="team-orbit-detail-summary">{activeMember.fullIntro}</p>
          <div className="team-orbit-detail-tags">
            {activeMember.summary.split("、").map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </aside>
      </div>

      <div className="team-orbit-caption">
        <p className="team-orbit-caption-eyebrow">Core Seats</p>
        <h2>核心顾问席位</h2>
      </div>
    </section>
  );
}
