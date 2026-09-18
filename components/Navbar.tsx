"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useCart } from "@/store/cart-context";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#footer" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const { itemCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#home" className="text-xl font-semibold tracking-tight text-white">
          NovaMarket
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
              <span className="hidden rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 md:inline-flex">
                {session.user.name || session.user.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="hidden rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500/40 hover:bg-slate-800 md:inline-flex"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500/40 hover:bg-slate-800 md:inline-flex"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="hidden rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-500/40 hover:bg-slate-800 md:inline-flex"
              >
                Register
              </Link>
            </>
          )}
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            Cart
            {itemCount > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>
    </header>
  );
}
