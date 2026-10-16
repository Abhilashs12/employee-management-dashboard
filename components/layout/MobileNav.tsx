"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, LayoutDashboard, Users } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/employees", label: "Employees", icon: Users },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#08090B] text-zinc-300 transition hover:border-[#C6FF00]/30 hover:text-[#C6FF00]"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <nav className="absolute left-0 top-14 z-50 w-60 rounded-2xl border border-white/10 bg-[#15171C] p-3 shadow-2xl shadow-black/50">
          {links.map((link) => {
            const Icon = link.icon;
            const active =
              link.href === "/dashboard"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${active ? "bg-[#C6FF00]/10 text-[#C6FF00]" : "text-zinc-400 hover:bg-white/5 hover:text-white"}`}
              >
                <Icon size={19} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
