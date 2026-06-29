"use client";

import Link from "next/link";
import { Compass } from "lucide-react";

const navItems = [
  { label: "How it works", href: "#how" },
  { label: "Earn", href: "#earn" },
  { label: "Partners", href: "#partners" },
  { label: "Pilot", href: "#pilot" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zephyr-navy/10 bg-zephyr-ivory/95 backdrop-blur-xl">
      <div className="zephyr-container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zephyr-navy text-zephyr-gold shadow-gold">
            <Compass size={20} />
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-zephyr-navy">
              Zephyr
            </div>
            <div className="-mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-zephyr-blue">
              Card
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-zephyr-navy/80 transition hover:text-zephyr-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/partner"
          className="rounded-full bg-zephyr-navy px-5 py-3 text-sm font-bold text-white shadow-zephyr transition hover:-translate-y-0.5 hover:bg-zephyr-blue"
        >
          Partner with us
        </Link>
      </div>
    </header>
  );
}
