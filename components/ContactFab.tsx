"use client";

import { useState } from "react";

import { brand } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const phoneDisplay = brand.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1 $2 $3");

export function ContactFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-fab">
      {open ? (
        <div className="contact-fab-panel" role="dialog" aria-label="联系龙头会服">
          <p className="contact-fab-title">直接联系我们</p>
          <a href={`tel:${brand.phone}`} className="contact-fab-action">
            拨打电话 {phoneDisplay}
          </a>
          <div className="contact-fab-qr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${base}/images/wechat-qr-v2.png`} alt="微信二维码" width={132} height={132} />
          </div>
          <p className="contact-fab-hint">微信扫码添加（同号 {phoneDisplay}）</p>
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
