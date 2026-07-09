import Link from "next/link";
import { socialLinks } from "@/lib/site-data";
import { EmailCopyButton } from "@/components/email-copy-button";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0b0d10]/90">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/95 p-2 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <img src={link.icon} alt={link.alt} className={link.iconClassName} />
            </Link>
          ))}

          <EmailCopyButton
            label="이메일 복사"
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/95 p-2 transition-transform duration-200 hover:-translate-y-0.5"
            iconClassName="h-6 w-6 object-contain brightness-0"
          />
        </div>

      </div>
    </footer>
  );
}