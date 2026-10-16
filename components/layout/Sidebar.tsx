"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Employees", href: "/dashboard/employees", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/[0.08] bg-[#101115] text-zinc-100">
      <div className="flex h-20 items-center gap-3 border-b border-white/[0.08] px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C6FF00] text-lg font-black text-[#101115] shadow-lg shadow-lime-400/10">
          E
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white">
            Employify
          </h1>
          <p className="text-xs text-zinc-500">Management Portal</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6">
        <p className="mb-4 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          Workspace
        </p>
        {navigation.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-sm font-medium transition-all ${active ? "border-lime-400/20 bg-[#C6FF00]/[0.09] text-[#C6FF00]" : "border-transparent text-zinc-400 hover:bg-white/[0.04] hover:text-white"}`}
            >
              <Icon size={19} strokeWidth={1.8} />
              {item.label}
              {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#C6FF00]" />
              )}
            </Link>
          );
        })}

        <div className="pt-8">
          <p className="mb-4 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            Preferences
          </p>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
          >
            <Settings size={19} strokeWidth={1.8} />
            Settings
          </button>
        </div>
      </nav>

      <div className="border-t border-white/[0.08] p-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl p-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#48CAE4]/20 bg-[#48CAE4]/10 text-sm font-bold text-[#48CAE4]">
            AD
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-zinc-100">
              Admin User
            </p>
            <p className="truncate text-xs text-zinc-500">admin@example.com</p>
          </div>
          <Sparkles size={15} className="text-[#E9C46A]" />
        </div>
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-[#FF4D6D]/10 hover:text-[#FF4D6D]"
        >
          <LogOut size={18} strokeWidth={1.8} />
          Sign out
        </Link>
      </div>
    </aside>
  );
}
