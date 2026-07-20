"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function HeroContent() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    tl.from(
      subtitleRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.5"
    );

    tl.from(
      buttonsRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4"
    );
  }, []);

  return (
    <div className="absolute inset-0 z-10 flex items-center">
      <div className="mx-auto flex w-full max-w-7xl justify-center px-6">

        <div className="w-full max-w-3xl text-center">

          <p
            className="
          mb-8
          text-[11px]
          uppercase
          tracking-[0.45em]
          text-zinc-500
          sm:text-xs
        "
          >
            FULL STACK DEVELOPER • VIDEO EDITOR • GRAPHIC DESIGNER
          </p>

          <h1
            ref={titleRef}
            className="
          font-black
          leading-[0.88]
          tracking-tight
          text-white
          text-[clamp(3.3rem,11vw,8rem)]
        "
          >
            AHIRAN
            <br />
            AJOY SAHU
          </h1>

          <p
            ref={subtitleRef}
            className="
          mx-auto
          mt-8
          max-w-xl
          text-base
          leading-relaxed
          text-zinc-400
          md:text-lg
        "
          >
            Building
            <span className="mx-2 font-semibold text-white">
              experiences
            </span>
            that feel effortless—
            not just products that work.
          </p>

          <div
            ref={buttonsRef}
            className="
          mt-10
          flex
          flex-col
          items-center
          gap-4
          sm:flex-row
          sm:justify-center
        "
          >
            <Link
              href="/projects"
              className="
            w-full
            max-w-xs
            rounded-2xl
            bg-white
            px-8
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_15px_50px_rgba(255,255,255,0.25)]
            sm:w-auto
          "
            >
              View Projects →
            </Link>

            <Link
              href="/aalsi"
              className="
            w-full
            max-w-xs
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            font-medium
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-white/10
            sm:w-auto
          "
            >
              Aalsi
            </Link>
          </div>

        </div>
      </div>

      <div
        className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      animate-bounce
      text-xs
      uppercase
      tracking-[0.35em]
      text-zinc-500
    "
      >
        Scroll ↓
      </div>
    </div>
  );
}