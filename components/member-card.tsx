"use client";

import Image from "next/image";
import { useState } from "react";

type MemberCardProps = {
  nameKo: string;
  nameEn: string;
  roleKo: string;
  roleEn: string;
  image: string;
};

export function MemberCard({ nameKo, nameEn, roleKo, roleEn, image }: MemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      data-kor-name={nameKo}
      data-kor-role={roleKo}
      data-eng-name={nameEn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={image} alt={`${nameKo}-profile`} className="profile" width={140} height={200} />
      <div className="halo" />
      <span className="name">{isHovered ? nameEn : nameKo}</span>
      <span className="role">{isHovered ? roleEn : roleKo}</span>
    </div>
  );
}
