"use client";

import { useEffect } from "react";

/**
 * 底部悬浮控件「阅读时收起」（2026-11-09）
 *
 * 为什么做这个：
 * 左下「咨询」和右下「返回主页」是 position:fixed，滚动时必然浮在内容上面。
 * 390×844 的手机上实测，滚动到案例中部时，这两个按钮正好压住一到两整行正文，
 * 客户反馈「挤」「压住字」。把按钮藏掉不行——那是联系方式，客户随时要能点。
 *
 * 所以改成：向下看内容时自动收起，想看联系方式时往上一拨就回来。
 *
 * 规则（只在手机断点生效，桌面不加这个类）：
 *   1. 向下滚超过 12px 且已经滚过 220px  → 收起
 *   2. 向上滚超过 12px                    → 展开
 *   3. 回到顶部 220px 以内                 → 展开（首屏一定要看到联系方式）
 *
 * 收敛方式：只往 <html> 上加/去一个类，具体动画全交给 CSS，
 * 这样不碰按钮自己的布局，出问题把这一类删掉就回到原样。
 */
export function FabAutoHide() {
  useEffect(() => {
    const html = document.documentElement;
    let lastY = window.scrollY;
    let hidden = false;

    const setHidden = (v: boolean) => {
      if (v === hidden) return;
      hidden = v;
      html.classList.toggle("fab-collapsed", v);
    };

    const onScroll = () => {
      // 桌面端不参与：宽屏上按钮本来就小，屏宽足够，藏起来反而不方便
      if (window.innerWidth > 700) {
        setHidden(false);
        lastY = window.scrollY;
        return;
      }
      const y = window.scrollY;
      const dy = y - lastY;

      if (y < 220) {
        setHidden(false);
      } else if (dy > 12) {
        setHidden(true);
      } else if (dy < -12) {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      html.classList.remove("fab-collapsed");
    };
  }, []);

  return null;
}
