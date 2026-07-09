"use client";

"use client";

import Link from "next/link";
import Image from "next/image";
import { useSiteActions } from "@/components/site-actions";
import { socialLinks } from "@/lib/site-data";

function EmailButton() {
  const { showAlert } = useSiteActions();

  const copyEmail = () => {
    const email = "rbs2kla2025@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => showAlert("이메일이 복사되었습니다."))
      .catch((error) => showAlert(`Failed to copy email address: ${error}`));
  };

  return (
    <a
      href="#"
      onClick={(event) => {
        event.preventDefault();
        copyEmail();
      }}
      className="w-48 h-48 bg-white m-5 flex justify-center items-center rounded-2xl transition-all duration-200 ease-out hover:scale-110 hover:!opacity-100 group-hover:opacity-80 shadow-lg cursor-pointer"
    >
      <Image src="/images/Email.png" alt="email" className="w-40 brightness-0" width={160} height={160} />
    </a>
  );
}

export default function ContactPage() {
  return (
    <div id="contents" className="flex-1 w-screen flex flex-col items-center justify-around">
      <h1 className="text-8xl mt-0 -mb-12 font-light text-white text-center leading-tight">
        Contact us
      </h1>

      <div id="as" className="w-full flex flex-row flex-wrap items-center justify-around px-5 group">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="w-48 h-48 bg-white m-5 flex justify-center items-center rounded-2xl transition-all duration-200 ease-out hover:scale-110 hover:!opacity-100 group-hover:opacity-80 shadow-lg"
          >
            <Image src={link.icon} alt={link.alt} className="w-40 object-contain" width={160} height={160} />
          </Link>
        ))}

        <EmailButton />
      </div>
    </div>
  );
}