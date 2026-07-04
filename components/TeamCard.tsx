import type { Expert } from "@/lib/data";

export function TeamCard({ expert }: { expert: Expert }) {
  return (
    <div className="border border-brand-line bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-ink text-base font-semibold text-white">
        {expert.name.slice(0, 1)}
      </div>
      <h3 className="mt-5 text-xl font-semibold">{expert.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-gold">{expert.title}</p>
      <p className="mt-4 text-sm leading-6 text-brand-muted">{expert.focus}</p>
      <p className="mt-5 border-t border-brand-line pt-4 text-sm text-brand-muted">{expert.credential}</p>
    </div>
  );
}

