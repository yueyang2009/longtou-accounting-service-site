"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BackToHomeBtn() {
  const pathname = usePathname();
  // 首页不显示
  if (pathname === "/" || pathname === "") return null;

  return (
    <Link
      href="/"
      className="back-home-btn"
      aria-label="返回主页"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="15"
        height="15"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.4-.2c-1.2 .1-2.4 .2-3.6 .2H56c-22.1 0-40-17.9-40-40V287.6H16c-17 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      </svg>
      <span>返回主页</span>
    </Link>
  );
}
