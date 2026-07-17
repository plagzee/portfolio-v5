"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface GlowButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: boolean;
  onClick?: () => void;
}

export default function GlowButton({
  href,
  children,
  className,
  variant = "primary",
  icon = true,
  onClick,
}: GlowButtonProps) {
  const classes = clsx(
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300",

    variant === "primary"
      ? "bg-white text-black hover:scale-105"
      : "border border-white/15 bg-white/[0.03] text-white backdrop-blur-xl hover:border-violet-500/50",

    className
  );

  const content = (
    <>
      <span
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-violet-500/20
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <span>{children}</span>

      {icon && (
        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}