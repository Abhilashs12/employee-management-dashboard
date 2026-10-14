
"use client";

import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";
import type { Employee } from "@/types/employee";

type EmployeeTableProps = {
  employees: Employee[];
};

export default function EmployeeTable({
  employees,
}: EmployeeTableProps) {
  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return employees;
    }

    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(query)
    );
  }, [employees, search]);

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            All Employees
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and view your employee directory.
          </p>
        </div>

        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Search employees by name</span>
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by employee name..."
            className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">
                Employee
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                Department
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                Role
              </th>
              <th scope="col" className="px-6 py-4 font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {filteredEmployees.map((employee) => (
              <tr
                key={employee.id}
                className="transition-colors hover:bg-gray-50/80"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-700">
                      {employee.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        {employee.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {employee.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {employee.department}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {employee.role}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                      employee.status === "Active"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        employee.status === "Active"
                          ? "bg-emerald-500"
                          : "bg-gray-400"
                      }`}
                    />
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-16 text-center">
                  <Users
                    size={28}
                    className="mx-auto mb-3 text-gray-400"
                  />
                  <p className="font-medium text-gray-900">
                    No employees found
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Try another employee name.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-2 border-t border-gray-100 px-6 py-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing{" "}
          <span className="font-medium text-gray-900">
            {filteredEmployees.length}
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-900">
            {employees.length}
          </span>{" "}
          employees
        </p>
        <p>Employee directory</p>
      </div>
    </section>
  );
}
