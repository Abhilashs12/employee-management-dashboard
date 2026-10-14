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
      iconClassName: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Active Employees",
      value: active,
      description: "Currently active",
      icon: UserCheck,
      iconClassName: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Inactive Employees",
      value: inactive,
      description: "Currently inactive",
      icon: UserX,
      iconClassName: "bg-amber-50 text-amber-600",
    },
  ];

  const recentEmployees = employees.slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-indigo-600">OVERVIEW</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Here is an overview of your employee directory.
          </p>
        </div>

        <Link
          href="/dashboard/employees"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          View employees <ArrowUpRight size={16} />
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Employees
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              A quick look at your employee directory.
            </p>
          </div>
          <Clock3 size={20} className="text-gray-400" />
        </div>

        <div className="divide-y divide-gray-100">
          {recentEmployees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700">
                  {employee.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {employee.name}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {employee.department}
                  </p>
                </div>
              </div>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                  employee.status === "Active"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {employee.status}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 px-5 py-4 sm:px-6">
          <Link
            href="/dashboard/employees"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all employees →
          </Link>
        </div>
      </section>
    </div>
  );
}
