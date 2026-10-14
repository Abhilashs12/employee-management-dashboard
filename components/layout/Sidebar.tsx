"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  Settings,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Employees",
    href: "/dashboard/employees",
    icon: Users,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-20 items-center gap-3 border-b border-gray-100 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
          E
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-gray-900">
            Employify
          </h1>
          <p className="text-xs text-gray-500">Management Portal</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
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
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon size={19} strokeWidth={1.8} />
              {item.label}
            </Link>
          );
        })}

        <div className="pt-8">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Preferences
          </p>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
          >
            <Settings size={19} strokeWidth={1.8} />
            Settings
          </button>
        </div>
      </nav>

      <div className="border-t border-gray-100 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-lg p-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
            AD
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900">
              Admin User
            </p>
            <p className="truncate text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>

        <Link
          href="/login"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <LogOut size={18} strokeWidth={1.8} />
          Sign out
        </Link>
      </div>
    </aside>
  );
}
