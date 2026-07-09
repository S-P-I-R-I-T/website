"use client";

import Image from "next/image";
import { useSiteActions } from "@/components/site-actions";

type EmailCopyButtonProps = {
  className?: string;
  iconClassName?: string;
  label?: string;
};

const email = "rbs2kla2025@gmail.com";

export function EmailCopyButton({
  className = "",
  iconClassName = "",
  label = "Email",
}: EmailCopyButtonProps) {
  const { showAlert } = useSiteActions();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      showAlert("이메일이 복사되었습니다.");
    } catch {
      showAlert(`이메일 복사에 실패했습니다. ${email}`);
    }
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label={label}
      className={className}
    >
      <Image
        src="/images/Email.png"
        alt="email"
        width={64}
        height={64}
        className={iconClassName}
      />
    </button>
  );
}