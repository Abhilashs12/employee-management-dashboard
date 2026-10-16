"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, Eye, EyeOff, ArrowUpRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      setError("Enter your email address and password.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08090B] px-4 py-10 text-zinc-100">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#C6FF00]/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#48CAE4]/[0.05] blur-[110px]" />
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#111318] p-7 shadow-2xl shadow-black/40 sm:p-9">
        <div className="mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6FF00] text-[#08090B] shadow-lg shadow-lime-400/10">
            <Users size={27} />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#C6FF00]">
            Employee portal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Welcome to Employify<span className="text-[#C6FF00]">.</span>
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Sign in to access your employee dashboard.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#08090B] px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#C6FF00]/50 focus:ring-2 focus:ring-[#C6FF00]/10"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-white/10 bg-[#08090B] px-3 pr-11 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#C6FF00]/50 focus:ring-2 focus:ring-[#C6FF00]/10"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && (
            <p role="alert" className="text-sm text-[#FF4D6D]">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#C6FF00] text-sm font-bold text-[#08090B] transition hover:bg-[#D8FF4D]"
          >
            Sign in <ArrowUpRight size={17} />
          </button>
        </form>
        <p className="mt-6 text-center text-xs leading-5 text-zinc-600">
          Demo interface only. No real authentication is configured.
        </p>
      </div>
    </main>
  );
}
