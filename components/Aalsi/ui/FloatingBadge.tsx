"use client";

import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function FloatingBadge({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        `
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/5
        px-5
        py-2
        text-sm
        uppercase
        tracking-[0.3em]
        backdrop-blur-xl
      `,
        className
      )}
    >
      {children}
    </div>
  );
}