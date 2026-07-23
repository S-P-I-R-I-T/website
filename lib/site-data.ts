export const navigationLinks = [
  { href: "/", label: "Home", short: "01" },
  { href: "/about", label: "About us", short: "02" },
  { href: "/awards", label: "Awards", short: "03" },
  { href: "/contact", label: "Contact", short: "04" },
  { href: "/apply", label: "Apply", short: "05" },
] as const;

export const socialLinks = [
  {
    href: "https://www.instagram.com/ftc_s.p.i.r.i.t/",
    alt: "Instagram",
    icon: "/images/Instagram_Glyph_Gradient.png",
    iconClassName: "h-8 w-8 object-contain",
  },
  {
    href: "https://ftc-events.firstinspires.org/2024/team/25324",
    alt: "FIRST",
    icon: "/images/FIRST_Vertical_RGB.png",
    iconClassName: "h-7 w-7 object-contain",
  },
  {
    href: "https://www.youtube.com/@team25324",
    alt: "YouTube",
    icon: "/images/youtube_social_icon_red.png",
    iconClassName: "h-7 w-7 object-contain",
  },
] as const;

export const teamSections = [
  {
    title: "코치 | 멘토",
    subtitle: "team support",
    members: [
      {
        nameKo: "최성원",
        nameEn: "S.W Choi",
        roleKo: "코치",
        roleEn: "coach",
        image: "/images/face/S.W Choi.png",
      },
    ],
  },
  {
    title: "S.P.I.R.I.T-25324",
    subtitle: "",
    members: [
      {
        nameKo: "박서우",
        nameEn: "S.W Park",
        roleKo: "소프트웨어",
        roleEn: "software",
        image: "/images/face/S.W Park.png",
      },
      {
        nameKo: "한은율",
        nameEn: "E.Y Han",
        roleKo: "하드웨어",
        roleEn: "hardware",
        image: "/images/face/E.Y Han.png",
      },
      {
        nameKo: "송하은",
        nameEn: "H.E Song",
        roleKo: "하드웨어",
        roleEn: "hardware",
        image: "/images/face/H.E Song.png",
      },
      {
        nameKo: "이태율",
        nameEn: "T.Y Lee",
        roleKo: "하드웨어",
        roleEn: "hardware",
        image: "/images/face/T.Y Lee.png",
      },
      {
        nameKo: "신소민",
        nameEn: "S.M Shin",
        roleKo: "매니저",
        roleEn: "manager",
        image: "/images/face/S.M Shin.png",
      },
    ],
  },
  {
    title: "S.P.I.R.I.T-25323",
    subtitle: "",
    members: [],
  },
] as const;

export const awardSections = [
  {
    year: 2023,
    season: "CENTERSTAGE",
    awards: [
      "South Korea Championship - Control Award",
      "South Korea Championship - Finalist Alliance - Captain",
    ],
    notes: [],
    images: [],
  },
  {
    year: 2024,
    season: "INTO THE DEEP",
    awards: [
      "South Korea Championship - 3rd Place Inspire Award",
      "South Korea Championship - Finalist Alliance - Captain",
      "FTC 2024-2025 INTO THE DEEP Qualification",
    ],
    notes: ["/notes/2024.pdf"],
    images: [
      "/images/awards/2024/design.png",
      "/images/awards/2024/robot.png",
    ],
  },
  {
    year: 2025,
    season: "DECODE",
    awards: ["South Korea Championship - Finalist Alliance - Captain"],
    notes: [],
    images: ["/images/awards/2025/design.png",
      "/images/awards/2025/robot.png"
    ],
  },
] as const;