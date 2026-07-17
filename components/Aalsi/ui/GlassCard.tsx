"use client";

import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        `
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-violet-500/40
      `,
        className
      )}
    >
      <div
        className="
        absolute
        -right-20
        -top-20
        h-44
        w-44
        rounded-full
        bg-violet-500/10
        blur-3xl
        transition-all
        duration-700

        group-hover:scale-150
      "
      />

      <div className="relative">{children}</div>
    </div>
  );
}