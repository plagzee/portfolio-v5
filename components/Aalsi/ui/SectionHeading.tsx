"use client";

import clsx from "clsx";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={clsx(
        align === "center"
          ? "text-center"
          : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="uppercase tracking-[0.45em] text-zinc-500">
          {eyebrow}
        </p>
      )}

      <h2
        className="
          mt-6
          text-5xl
          font-black
          uppercase
          leading-[0.9]

          md:text-7xl
        "
      >
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}