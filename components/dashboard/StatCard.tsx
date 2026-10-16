import type { LucideIcon } from "lucide-react";
import AnimatedCount from "@/components/dashboard/AnimatedCount";

type StatCardProps = {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
};

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconClassName,
}: StatCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#08090B] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/[0.03] blur-3xl transition group-hover:bg-white/[0.07]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            {title}
          </p>

          <p className="mt-4 text-4xl font-semibold tracking-tight text-white">
            <AnimatedCount value={value} />
          </p>

          <p className="mt-2 text-sm text-zinc-500">{description}</p>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${iconClassName}`}
        >
          <Icon size={23} strokeWidth={1.8} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#C6FF00] transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}
