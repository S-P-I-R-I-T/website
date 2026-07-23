"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/site-data";

type SiteHeaderProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

export function SiteHeader({
  menuOpen,
  onMenuToggle,
  onMenuClose,
}: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d10]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={onMenuClose}>
          <Image
            src="/images/spiritnewlogo.png"
            alt="SPIRIT mark"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
          <Image
            src="/images/logo_spirit_text.png"
            alt="SPIRIT"
            width={128}
            height={40}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navigationLinks.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-slate-950"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={onMenuToggle}
          aria-expanded={menuOpen}
          aria-label="메뉴 열기"
          className="relative flex h-12 w-12 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition duration-300 ${
              menuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`my-1 block h-0.5 w-5 bg-white transition duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition duration-300 ${
              menuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onMenuClose}
        aria-hidden="true"
      />

      <nav
        className={`fixed right-0 top-20 z-50 w-[min(20rem,100vw)] border-l border-white/10 bg-[#11151b]/95 shadow-2xl shadow-black/40 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-3">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onMenuClose}
                className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-semibold transition ${
                  pathname === link.href
                    ? "bg-white text-slate-950"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs uppercase tracking-[0.35em] text-current/50">
                  {link.short}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}