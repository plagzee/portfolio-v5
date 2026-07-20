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
    <div className="absolute inset-0 z-10">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6">
        <div className="mt-40 max-w-2xl text-center lg:mt-0 lg:text-left">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Full Stack Developer / Video Editor / Graphic Designer
          </p>

          <h1
            ref={titleRef}
            className="text-4xl font-black leading-none sm:text-5xl md:text-7xl lg:text-8xl"
          >
            AHIRAN AJOY
            <br />
            SAHU
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 max-w-xl text-sm font-bold text-zinc-400 sm:text-base md:text-lg"
          >
            Proficient in building{" "}
            <span className="text-white [text-shadow:_0_0_10px_#fff,_0_0_20px_#fff,_0_0_40px_#0ff]">
              experiences
            </span>
            ,
            <br />
            Not just Products.
          </p>

          <div
            ref={buttonsRef}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="rounded-xl bg-white px-6 py-3 text-center font-medium text-black transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              href="/aalsi#contact"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center backdrop-blur transition-all duration-300 hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-zinc-500">
        Scroll ↓
      </div>
    </div>
  );
}