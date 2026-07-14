import Image from "next/image";
import { SCHOOL } from "@/lib/constants";

const VARIANTS = {
  /** Shield crest on transparent background — works on light and dark surfaces */
  crest: { src: "/logo.png", width: 1024, height: 960 },
  /** Full horizontal lockup with school name and slogan — best on light surfaces */
  full: { src: "/logo-full.png", width: 1024, height: 425 },
} as const;

type LogoProps = {
  variant?: keyof typeof VARIANTS;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function Logo({
  variant = "crest",
  className = "",
  priority = false,
  sizes = "96px",
}: LogoProps) {
  const img = VARIANTS[variant];
  return (
    <Image
      src={img.src}
      alt={`${SCHOOL.name} logo`}
      width={img.width}
      height={img.height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
