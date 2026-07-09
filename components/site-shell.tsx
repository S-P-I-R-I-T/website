"use client";

import { useState, type ReactNode } from "react";
import { SiteActionsProvider } from "@/components/site-actions";
import { useSiteActions } from "@/components/site-actions";
import { usePathname } from "next/navigation";
import Link from "next/link";

function FooterEmailButton() {
  const { showAlert } = useSiteActions();

  const copyEmail = () => {
    const email = "rbs2kla2025@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => showAlert("이메일이 복사되었습니다."))
      .catch((error) => showAlert(`Failed to copy email address: ${error}`));
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="bg-white rounded-md mx-2.5 h-10 w-10 flex items-center justify-center transition-transform duration-100 ease-linear hover:scale-110 cursor-pointer"
    >
      <img src="/images/Email.png" alt="email" className="h-5 brightness-0" />
    </button>
  );
}

function FirstStackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinks = [
    {
      label: "4",
      href: "https://ftc-events.firstinspires.org/team/25324",
      ariaLabel: "FIRST team 25324",
    },
    {
      label: "3",
      href: "https://ftc-events.firstinspires.org/team/25323",
      ariaLabel: "FIRST team 25323",
    },
  ] as const;

  return (
    <div className="relative mx-2.5 h-10 w-10">
      <button
        type="button"
        aria-label="FIRST 버튼 열기"
        aria-expanded={isOpen}
        aria-controls="first-links"
        onClick={() => setIsOpen((current) => !current)}
        className="relative z-20 bg-white rounded-md h-10 w-10 flex items-center justify-center transition-transform duration-100 ease-linear hover:scale-110 cursor-pointer"
      >
        <img src="/images/FIRST_Vertical_RGB.png" alt="FTC" className="h-5 object-contain" />
      </button>

      <div
        id="first-links"
        className={`absolute bottom-full left-1/2 z-30 mb-2 flex -translate-x-1/2 flex-col items-center gap-2 transition-all duration-200 ease-out ${
          isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {firstLinks.map((firstLink) => (
          <a
            key={firstLink.label}
            href={firstLink.href}
            target="_blank"
            rel="noreferrer"
            aria-label={firstLink.ariaLabel}
            onClick={() => setIsOpen(false)}
            className="relative flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-lg transition-transform duration-100 ease-linear hover:scale-110"
          >
            <img src="/images/FIRST_Vertical_RGB.png" alt="" className="h-5 object-contain" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#1f2022] text-xs font-bold leading-none text-white ring-2 ring-white">
              {firstLink.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const showChrome = pathname !== "/apply";

  return (
    <SiteActionsProvider>
      <div className="m-0 flex flex-col min-h-screen bg-[#1f2022] text-white">
        {showChrome ? (
          <header className="w-screen h-20 sticky top-0 left-0 z-[100] flex items-center justify-between bg-[#1f2022] shadow-lg px-4">
            <Link href="/" className="flex items-center no-underline">
              <img src="/images/logo_spirit_mark.png" className="h-16" alt="mask" id="logo_mark" />
              <img src="/images/logo_spirit_text.png" className="h-10 -ml-5" alt="SPIRIT" id="logo_text" />
            </Link>

            <ul className="hidden md:flex flex-row list-none">
              <li className="mx-2.5"><Link href="/" className="text-2xl text-white hover:text-gray-300 transition-colors">Home</Link></li>
              <li className="mx-2.5"><Link href="/about" className="text-2xl text-white hover:text-gray-300 transition-colors">About us</Link></li>
              <li className="mx-2.5"><Link href="/awards" className="text-2xl text-white hover:text-gray-300 transition-colors">Awards</Link></li>
            </ul>

            <button
              id="hamburger"
              type="button"
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className={`hamburger md:hidden ${menuOpen ? "active" : ""}`}
            >
              <span />
              <span />
              <span />
            </button>
          </header>
        ) : null}

        {showChrome ? (
          <nav id="mobileMenu" className={`mobile-menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>About us</Link></li>
              <li><Link href="/awards" onClick={() => setMenuOpen(false)}>Awards</Link></li>
            </ul>
          </nav>
        ) : null}

        <main className="flex-1">{children}</main>

        {showChrome ? (
          <footer className="h-16 w-screen flex items-center justify-center bg-[#1f2022] relative z-10">
            <div className="flex">
              <FirstStackButton />
              <a href="https://www.instagram.com/ftc_s.p.i.r.i.t/" target="_blank" rel="noreferrer" className="bg-white rounded-md mx-2.5 h-10 w-10 flex items-center justify-center transition-transform duration-100 ease-linear hover:scale-110">
                <img src="/images/Instagram_Glyph_Gradient.png" alt="instagram" className="h-5" />
              </a>
              <a href="https://www.youtube.com/@team25324" target="_blank" rel="noreferrer" className="bg-white rounded-md mx-2.5 h-10 w-10 flex items-center justify-center transition-transform duration-100 ease-linear hover:scale-110">
                <img src="/images/youtube_social_icon_red.png" alt="youtube" className="h-5 object-contain" />
              </a>
              <FooterEmailButton />
            </div>
          </footer>
        ) : null}
      </div>
    </SiteActionsProvider>
  );
}
