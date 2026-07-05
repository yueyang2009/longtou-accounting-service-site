"use client";

import { useMemo, useState } from "react";

import { formPainOptions, revenueRanges, scoreLead, type Lead } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState = Omit<Lead, "score">;

const initialState: FormState = {
  company: "",
  industry: "",
  revenueRange: revenueRanges[1],
  painPoints: [],
  hasFinanceTeam: true,
  auditHistory: false
};

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [result, setResult] = useState<Lead | null>(null);

  const canGoNext = useMemo(() => {
    if (step === 1) {
      return form.company.trim() && form.industry.trim() && form.revenueRange;
    }
    if (step === 2) {
      return form.painPoints.length > 0;
    }
    return true;
  }, [form, step]);

  const togglePain = (pain: string) => {
    setForm((current) => ({
      ...current,
      painPoints: current.painPoints.includes(pain)
        ? current.painPoints.filter((item) => item !== pain)
        : [...current.painPoints, pain]
    }));
  };

  const submit = () => {
    setResult(scoreLead(form));
  };

  return (
    <div className="border border-brand-line bg-white p-6 shadow-consult">
      <div className="mb-6 flex items-center justify-between border-b border-brand-line pb-4">
        <div>
          <p className="text-sm font-semibold text-brand-muted">经营诊断申请</p>
          <h3 className="mt-1 text-2xl font-semibold">申请企业经营尽调（限量开放）</h3>
        </div>
        <span className="rounded-md bg-brand-soft px-3 py-1 text-sm text-brand-muted">Step {step}/3</span>
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <div>
            <Label htmlFor="company">企业名称</Label>
            <Input
              id="company"
              className="mt-2"
              value={form.company}
              onChange={(event) => setForm({ ...form, company: event.target.value })}
              placeholder="请输入企业名称"
            />
          </div>
          <div>
            <Label htmlFor="industry">行业</Label>
            <Input
              id="industry"
              className="mt-2"
              value={form.industry}
              onChange={(event) => setForm({ ...form, industry: event.target.value })}
              placeholder="如：制造业 / 建筑工程 / 商贸"
            />
          </div>
          <div>
            <Label htmlFor="revenue">企业阶段</Label>
            <select
              id="revenue"
              className="mt-2 h-11 w-full rounded-md border border-brand-line bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-ink/20"
              value={form.revenueRange}
              onChange={(event) => setForm({ ...form, revenueRange: event.target.value })}
            >
              {revenueRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div>
          <Label>目前最关注的问题</Label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {formPainOptions.map((pain) => (
              <label key={pain} className="flex cursor-pointer items-center gap-3 border border-brand-line p-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.painPoints.includes(pain)}
                  onChange={() => togglePain(pain)}
                  className="h-4 w-4 accent-brand-ink"
                />
                {pain}
              </label>
            ))}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5">
          <div>
            <Label>是否有专职财务人员</Label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[true, false].map((value) => (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => setForm({ ...form, hasFinanceTeam: value })}
                  className={`border p-3 text-sm ${
                    form.hasFinanceTeam === value ? "border-brand-ink bg-brand-ink text-white" : "border-brand-line bg-white"
                  }`}
                >
                  {value ? "有" : "没有"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label>是否做过审计</Label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[true, false].map((value) => (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => setForm({ ...form, auditHistory: value })}
                  className={`border p-3 text-sm ${
                    form.auditHistory === value ? "border-brand-ink bg-brand-ink text-white" : "border-brand-line bg-white"
                  }`}
                >
                  {value ? "做过" : "没有"}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-7 flex gap-3">
        {step > 1 ? (
          <Button type="button" variant="secondary" onClick={() => setStep(step - 1)}>
            上一步
          </Button>
        ) : null}
        {step < 3 ? (
          <Button type="button" disabled={!canGoNext} onClick={() => setStep(step + 1)}>
            下一步
          </Button>
        ) : (
          <Button type="button" onClick={submit}>
            申请企业经营尽调（限量开放）
          </Button>
        )}
      </div>

      {result ? (
        <div className="mt-6 border border-brand-line bg-brand-soft p-4">
          <p className="text-sm font-semibold text-brand-ink">信息已记录</p>
          <p className="mt-2 text-sm leading-6 text-brand-muted">
            后续交流会围绕企业阶段、财务团队、审计经历和当前问题展开，不急于给出标准化方案。
          </p>
        </div>
      ) : null}
    </div>
  );
}
