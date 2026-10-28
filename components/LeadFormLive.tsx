"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Phone } from "lucide-react";

import { brand } from "@/lib/data";

/**
 * 真实可用的留资表单。
 *
 * 落地通道有两种，按优先级：
 * 1) 环境变量 NEXT_PUBLIC_LEAD_ENDPOINT 配了地址（飞书多维表格机器人 / Formspree 等），
 *    就真 POST 出去，提交成功才显示「已收到」。
 * 2) 没配（或提交失败），绝不谎称已收到，而是把填写内容整理成一段文字，
 *    让客户一键复制发微信 / 一键拨号。这条兜底不依赖任何服务器，永远有效。
 */

const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "";

type Status = "idle" | "sending" | "sent" | "manual" | "error";

const phoneDigits = brand.phone;

export function LeadFormLive() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [touched, setTouched] = useState(false);

  const phoneValid = /^1[3-9]\d{9}$/.test(phone.trim());
  const canSubmit = useMemo(
    () => company.trim().length >= 2 && name.trim().length >= 1 && phoneValid,
    [company, name, phoneValid]
  );

  const summary = [
    `企业名称：${company.trim()}`,
    `称呼：${name.trim()}`,
    `手机号：${phone.trim()}`,
    issue.trim() ? `想解决的问题：${issue.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const submit = async () => {
    setTouched(true);
    if (!canSubmit) return;

    if (!ENDPOINT) {
      setStatus("manual");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: company.trim(),
          name: name.trim(),
          phone: phone.trim(),
          issue: issue.trim(),
          source: typeof window !== "undefined" ? window.location.pathname : "",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      // 后端挂了也不能让客户白填：退回手动通道
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-card border border-brand-line bg-brand-card p-7 shadow-card md:p-9">
        <p className="font-display text-xl font-semibold text-brand-ink">已经收到了</p>
        <p className="mt-3 text-sm leading-7 text-brand-muted">
          工作时间 2 小时内会有人用 {phone.trim()} 打给你。如果急，可以直接拨 {brand.phone}。
        </p>
        <a
          href={`tel:${phoneDigits}`}
          className="premium-button mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
        >
          <Phone className="h-4 w-4" /> 直接打电话
        </a>
      </div>
    );
  }

  if (status === "manual" || status === "error") {
    return (
      <div className="rounded-card border border-brand-line bg-brand-card p-7 shadow-card md:p-9">
        <p className="font-display text-xl font-semibold text-brand-ink">
          {status === "error" ? "网络没送出去，别白填" : "还差最后一步"}
        </p>
        <p className="mt-3 text-sm leading-7 text-brand-muted">
          复制下面这段，直接发到顾问微信（同一分钟就能回）；或者点下面的按钮直接打电话。
        </p>
        <pre className="mt-5 whitespace-pre-wrap break-words rounded-lg border border-brand-line bg-brand-soft p-4 text-sm leading-7 text-brand-ink">
          {summary}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyText}
            className="premium-button inline-flex h-12 items-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "已复制，去微信粘贴" : "复制这段内容"}
          </button>
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-brand-line px-7 text-sm font-medium text-brand-ink transition hover:border-brand-gold/50 hover:text-brand-gold"
          >
            <Phone className="h-4 w-4" /> 直接打 {brand.phone}
          </a>
        </div>
        <p className="mt-4 text-xs leading-6 text-brand-muted">
          微信与电话同号：{brand.phone}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-brand-line bg-brand-card p-7 shadow-card md:p-9">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="font-display text-xl font-semibold text-brand-ink">留个电话，顾问打给你</p>
        <p className="text-xs text-brand-muted">只用于这一次联系，不群发</p>
      </div>
      <p className="mt-2 text-sm leading-7 text-brand-muted">
        三行就够。我们先用十分钟听你说，判断这件事现在值不值得做，不合适会直说。
      </p>

      <div className="mt-6 grid gap-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-brand-ink">公司名称</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="如：郑州某某机械有限公司"
            className="h-12 w-full rounded-lg border border-brand-line bg-brand-soft px-4 text-base text-brand-ink outline-none focus:border-brand-gold"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-ink">怎么称呼你</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="如：王总"
              className="h-12 w-full rounded-lg border border-brand-line bg-brand-soft px-4 text-base text-brand-ink outline-none focus:border-brand-gold"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-ink">手机号</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, "").slice(0, 11))}
              inputMode="numeric"
              placeholder="11 位手机号"
              className={`h-12 w-full rounded-lg border bg-brand-soft px-4 text-base text-brand-ink outline-none focus:border-brand-gold ${
                touched && !phoneValid ? "border-red-400" : "border-brand-line"
              }`}
            />
            {touched && !phoneValid ? (
              <span className="mt-1.5 block text-xs text-red-500">手机号看着不太对，再核对一下</span>
            ) : null}
          </label>
        </div>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-brand-ink">
            现在最想解决的一件事 <span className="text-brand-muted">（可以不填）</span>
          </span>
          <textarea
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            rows={3}
            placeholder="如：账上利润和实际现金对不上"
            className="w-full rounded-lg border border-brand-line bg-brand-soft px-4 py-3 text-base leading-7 text-brand-ink outline-none focus:border-brand-gold"
          />
        </label>
      </div>

      <button
        type="button"
        disabled={status === "sending"}
        onClick={submit}
        className="premium-button mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "正在送…" : "让顾问联系我"}
      </button>

      <p className="mt-4 text-xs leading-6 text-brand-muted">
        不想留电话也行，直接打 {brand.phone} 或加微信（同号），一样有人接。
      </p>
    </div>
  );
}
