"use client";

import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/layout/MobileNav";
export default function Topbar() {
  const pathname = usePathname();

  const pageTitle =
    pathname === "/dashboard/employees"
      ? "Employees"
      : pathname === "/dashboard"
        ? "Dashboard"
        : "Employee Management";

  return (
    <header className="relative flex min-h-20 flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-white px-5 py-4 sm:px-8">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          {pageTitle}
        </h2>
        <p className="mt-1 text-sm text-gray-500">Welcome back, Admin</p>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <label className="relative hidden md:block">
          <span className="sr-only">Search dashboard</span>
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="search"
            placeholder="Search..."
            className="h-10 w-48 rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 lg:w-64"
          />
        </label>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50"
        >
          <Bell size={19} strokeWidth={1.8} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-3 border-l border-gray-200 pl-3 sm:pl-5">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}
