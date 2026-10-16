"use client";

import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";
import type { Employee } from "@/types/employee";

type EmployeeTableProps = { employees: Employee[] };
const avatarStyles = [
  "border-lime-400/20 bg-lime-400/10 text-[#C6FF00]",
  "border-[#FF4D6D]/20 bg-[#FF4D6D]/10 text-[#FF4D6D]",
  "border-[#48CAE4]/20 bg-[#48CAE4]/10 text-[#48CAE4]",
  "border-[#E9C46A]/20 bg-[#E9C46A]/10 text-[#E9C46A]",
  "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300",
];

export default function EmployeeTable({ employees }: EmployeeTableProps) {
  const [search, setSearch] = useState("");
  const filteredEmployees = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return employees;
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(query),
    );
  }, [employees, search]);

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-2xl shadow-black/20">
      <div className="flex flex-col gap-4 border-b border-white/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6FF00]">
            Directory
          </p>
          <h2 className="mt-2 text-lg font-semibold text-white">
            All Employees
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Manage and view your employee directory.
          </p>
        </div>
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Search employees by name</span>
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by employee name..."
            className="h-11 w-full rounded-xl border border-white/10 bg-[#08090B] pl-10 pr-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 transition focus:border-[#48CAE4]/50 focus:ring-2 focus:ring-[#48CAE4]/10"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-white/[0.025] text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold">
                Employee
              </th>
              <th scope="col" className="px-6 py-4 font-bold">
                Department
              </th>
              <th scope="col" className="px-6 py-4 font-bold">
                Role
              </th>
              <th scope="col" className="px-6 py-4 font-bold">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {filteredEmployees.map((employee, index) => (
              <tr
                key={employee.id}
                className="transition-colors hover:bg-white/[0.025]"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${avatarStyles[index % avatarStyles.length]}`}
                    >
                      {employee.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-100">
                        {employee.name}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {employee.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-zinc-400">
                  {employee.department}
                </td>
                <td className="px-6 py-4 text-zinc-400">{employee.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${employee.status === "Active" ? "border-lime-400/20 bg-lime-400/[0.08] text-[#C6FF00]" : "border-[#FF4D6D]/20 bg-[#FF4D6D]/[0.08] text-[#FF4D6D]"}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${employee.status === "Active" ? "bg-[#C6FF00]" : "bg-[#FF4D6D]"}`}
                    />
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-16 text-center">
                  <Users size={28} className="mx-auto mb-3 text-zinc-600" />
                  <p className="font-medium text-zinc-200">
                    No employees found
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Try another employee name.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 border-t border-white/[0.08] px-6 py-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing{" "}
          <span className="font-semibold text-zinc-200">
            {filteredEmployees.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-zinc-200">
            {employees.length}
          </span>{" "}
          employees
        </p>
        <p>Employee directory</p>
      </div>
    </section>
  );
}
