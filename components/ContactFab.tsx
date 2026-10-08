"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { brand } from "@/lib/data";

const phoneDisplay = brand.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1 $2 $3");

export function ContactFab() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.replace(/\/+$/, "") === "/contact") return null;

  return (
    <div className="contact-fab">
      {open ? (
        <div className="contact-fab-panel" role="dialog" aria-label="联系龙头会服">
          <p className="contact-fab-title">直接联系我们</p>
          <a href={`tel:${brand.phone}`} className="contact-fab-action">
            拨打电话 {phoneDisplay}
          </a>
          <div className="contact-fab-qr">
            <Image src={brand.wechatQr} alt="个人微信二维码" width={132} height={132} />
          </div>
        </div>
      ) : null}
      <button
        type="button"
        className="contact-fab-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "收起联系方式" : "展开在线咨询与联系方式"}
      >
        {open ? "收起" : "咨询"}
      </button>
    </div>
  );
}
