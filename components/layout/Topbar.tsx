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
    <header className="relative flex min-h-20 flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] bg-[#101115] px-4 py-4 text-white sm:px-8">
      <div className="flex items-center gap-3">
        <MobileNav />
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            {pageTitle}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">Welcome back, Admin</p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <label className="relative hidden md:block">
          <span className="sr-only">Search dashboard</span>
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="search"
            placeholder="Search..."
            className="h-10 w-48 rounded-xl border border-white/10 bg-[#08090B] pl-10 pr-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 transition focus:border-[#48CAE4]/50 focus:ring-2 focus:ring-[#48CAE4]/10 lg:w-64"
          />
        </label>
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#08090B] text-zinc-400 transition hover:border-[#E9C46A]/30 hover:text-[#E9C46A]"
        >
          <Bell size={19} strokeWidth={1.8} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF4D6D] ring-2 ring-[#101115]" />
        </button>
        <div className="flex items-center gap-3 border-l border-white/10 pl-3 sm:pl-5">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-zinc-100">Admin User</p>
            <p className="text-xs text-zinc-500">Administrator</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF4D6D]/20 bg-[#FF4D6D]/10 text-sm font-bold text-[#FF4D6D]">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}
