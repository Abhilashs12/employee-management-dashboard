import { Users, UserCheck, UserX, ArrowUpRight, Clock3 } from "lucide-react";
import Link from "next/link";
import StatCard from "@/components/dashboard/StatCard";
import { employees } from "@/data/employees";

export default function DashboardPage() {
  const total = employees.length;

  const active = employees.filter(
    (employee) => employee.status === "Active",
  ).length;

  const inactive = employees.filter(
    (employee) => employee.status === "Inactive",
  ).length;

  const stats = [
    {
      title: "Total Employees",
      value: total,
      description: "Employees in the directory",
      icon: Users,
      iconClassName: "border-lime-400/20 bg-lime-400/10 text-[#C6FF00]",
    },
    {
      title: "Active Employees",
      value: active,
      description: "Currently active",
      icon: UserCheck,
      iconClassName: "border-pink-400/20 bg-pink-400/10 text-[#FF3CAC]",
    },
    {
      title: "Inactive Employees",
      value: inactive,
      description: "Currently inactive",
      icon: UserX,
      iconClassName: "border-cyan-400/20 bg-cyan-400/10 text-[#00E5FF]",
    },
  ];

  const recentEmployees = employees.slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl space-y-8 text-white">
      {/* Dashboard heading */}
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6FF00]">
            Overview / 01
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Dashboard<span className="text-[#C6FF00]">.</span>
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            An overview of your employee directory and workforce.
          </p>
        </div>

        <Link
          href="/dashboard/employees"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C6FF00]/30 bg-[#C6FF00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#D8FF4D] hover:shadow-lg hover:shadow-lime-400/10"
        >
          View employees
          <ArrowUpRight size={17} />
        </Link>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      {/* Recent employees */}
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#08090B]">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00E5FF]">
              Workforce
            </p>

            <h2 className="mt-2 text-lg font-semibold text-white">
              Recent Employees
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              A quick look at your latest directory entries.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/10 text-[#FF6B35]">
            <Clock3 size={20} />
          </div>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {recentEmployees.map((employee, index) => {
            const avatarColors = [
              "bg-lime-400/10 text-[#C6FF00] border-lime-400/20",
              "bg-pink-400/10 text-[#FF3CAC] border-pink-400/20",
              "bg-cyan-400/10 text-[#00E5FF] border-cyan-400/20",
              "bg-orange-400/10 text-[#FF6B35] border-orange-400/20",
              "bg-fuchsia-400/10 text-[#E879F9] border-fuchsia-400/20",
            ];

            return (
              <div
                key={employee.id}
                className="group flex items-center justify-between gap-3 px-5 py-4 transition-colors hover:bg-white/[0.025] sm:px-6"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${avatarColors[index % avatarColors.length]}`}
                  >
                    {employee.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-zinc-100 transition-colors group-hover:text-white">
                      {employee.name}
                    </p>

                    <p className="mt-1 truncate text-xs text-zinc-500">
                      {employee.department}
                      <span className="mx-2 text-zinc-700">/</span>
                      {employee.role}
                    </p>
                  </div>
                </div>

                <span
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    employee.status === "Active"
                      ? "border-lime-400/20 bg-lime-400/[0.08] text-[#C6FF00]"
                      : "border-pink-400/20 bg-pink-400/[0.08] text-[#FF3CAC]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      employee.status === "Active"
                        ? "bg-[#C6FF00]"
                        : "bg-[#FF3CAC]"
                    }`}
                  />
                  {employee.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-4 sm:px-6">
          <p className="text-xs text-zinc-500">
            Showing {recentEmployees.length} of {total} employees
          </p>

          <Link
            href="/dashboard/employees"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] transition hover:text-white"
          >
            View all
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
