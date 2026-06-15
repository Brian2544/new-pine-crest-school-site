import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-amber-500 text-green-950 hover:bg-amber-400 focus-visible:ring-amber-400 shadow-lg shadow-amber-500/20",
  secondary:
    "bg-green-800 text-white hover:bg-green-700 focus-visible:ring-green-600 shadow-lg shadow-green-900/20",
  outline:
    "border-2 border-white/80 text-white hover:bg-white/10 focus-visible:ring-white/50",
  ghost: "text-green-800 hover:bg-green-50 focus-visible:ring-green-600",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  prefetch?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  prefetch = true,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} prefetch={prefetch} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
