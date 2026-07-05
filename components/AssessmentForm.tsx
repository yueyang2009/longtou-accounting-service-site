"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = ["制造业", "建筑业", "商贸", "服务业", "其他"];
const problems = [
  "利润看不清，账面与实际情况差距大",
  "税务风险不清楚，怕被稽查",
  "财务数据混乱，账实不符",
  "成本核算粗放，不知道哪个产品赚钱",
  "私户收款历史问题需要处理",
  "股权架构需要优化",
  "想规范财务体系，不知道从哪里入手"
];

export function AssessmentForm() {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const toggleProblem = (p: string) => {
    setSelectedProblems((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  return (
    <div className="border border-brand-line bg-white p-8">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
          企业经营尽调 · 申请
        </p>
        <p className="text-xs text-brand-muted">Step {step}/3</p>
      </div>

      {step === 1 && (
        <div>
          <p className="text-lg font-semibold text-brand-ink">企业所属行业</p>
          <p className="mt-2 text-sm text-brand-muted">选择企业所在行业，便于我们初步判断适配性。</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`border px-5 py-4 text-left text-sm font-medium transition ${
                  selectedIndustry === ind
                    ? "border-brand-ink bg-brand-ink text-white"
                    : "border-brand-line text-brand-muted hover:border-brand-ink"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => selectedIndustry && setStep(2)}
              disabled={!selectedIndustry}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-brand-ink px-5 text-sm font-medium text-white disabled:opacity-40"
            >
              下一步 <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-lg font-semibold text-brand-ink">当前面临的财税问题</p>
          <p className="mt-2 text-sm text-brand-muted">可多选，选择企业目前最关注的问题。</p>
          <div className="mt-6 space-y-3">
            {problems.map((p) => (
              <button
                key={p}
                onClick={() => toggleProblem(p)}
                className={`flex w-full items-center gap-3 border px-5 py-4 text-left text-sm transition ${
                  selectedProblems.includes(p)
                    ? "border-brand-ink bg-brand-soft"
                    : "border-brand-line text-brand-muted hover:border-brand-ink"
                }`}
              >
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center border text-xs ${
                  selectedProblems.includes(p)
                    ? "border-brand-ink bg-brand-ink text-white"
                    : "border-brand-line"
                }`}>
                  {selectedProblems.includes(p) ? "✓" : ""}
                </span>
                {p}
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button onClick={() => setStep(1)} className="text-sm text-brand-muted underline">返回</button>
            <button
              onClick={() => selectedProblems.length > 0 && setStep(3)}
              disabled={selectedProblems.length === 0}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-brand-ink px-5 text-sm font-medium text-white disabled:opacity-40"
            >
              下一步 <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="text-lg font-semibold text-brand-ink">企业基本信息</p>
          <p className="mt-2 text-sm text-brand-muted">提交后顾问会在一个工作日内与你联系。</p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-ink">联系人</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="你的姓名"
                className="mt-2 w-full border border-brand-line px-4 py-3 text-sm outline-none focus:border-brand-ink"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-ink">联系电话</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="手机号"
                className="mt-2 w-full border border-brand-line px-4 py-3 text-sm outline-none focus:border-brand-ink"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-ink">企业名称</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="公司全称"
                className="mt-2 w-full border border-brand-line px-4 py-3 text-sm outline-none focus:border-brand-ink"
              />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button onClick={() => setStep(2)} className="text-sm text-brand-muted underline">返回</button>
            <Link
              href={`/contact?industry=${selectedIndustry}&problems=${selectedProblems.join(",")}&name=${name}&phone=${phone}&company=${company}`}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-brand-ink px-5 text-sm font-medium text-white"
            >
              提交申请 <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-brand-muted">每月仅服务有限企业，需初步评估适配性</p>
        </div>
      )}
    </div>
  );
}
