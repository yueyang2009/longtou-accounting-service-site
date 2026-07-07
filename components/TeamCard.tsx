import type { Expert } from "@/lib/data";

export function TeamCard({ expert }: { expert: Expert }) {
  return (
    <div className="group border border-white/10 bg-white/[0.04] p-6 rounded-card transition duration-300 hover:-translate-y-1 hover:border-[#d9c7a5]/40 hover:bg-white/[0.06]">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#d9c7a5] text-base font-semibold text-[#111816]">
        {expert.name.slice(0, 1)}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{expert.name}</h3>
      <p className="mt-1 text-sm font-medium text-[#e9d9bc]">{expert.title}</p>
      <p className="mt-4 text-sm leading-6 text-white/60">{expert.focus}</p>
      <p className="mt-5 border-t border-white/10 pt-4 text-sm text-white/45">{expert.credential}</p>
    </div>
  );
}
