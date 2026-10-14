import type { LucideIcon } from "lucide-react";

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
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            {value}
          </p>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
        >
          <Icon size={21} strokeWidth={1.8} />
        </div>
      </div>
    </article>
  );
}
