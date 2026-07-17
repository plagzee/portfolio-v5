"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function HeroContent() {

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

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
      <div
        className="
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center
            justify-center
            px-6
          "
      >

        <div
          className="
            mt-40
            max-w-2xl
            text-center

            lg:mt-0
            lg:text-left
          "
        >
          <p
            className="
            mb-4
            text-sm
            uppercase
            tracking-[0.4em]
            text-zinc-500
          "
          >
            Full Stack Developer / Video Editor / Graphic Designer
          </p>

          <h1
            className="
            font-black
            leading-none

            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
          "
            ref={titleRef}
          >
            AHIRAN AJOY
            <br />
            SAHU
          </h1>

          <p
            className="
            mt-6
            max-w-xl
            text-zinc-400


            font-bold
            text-sm
            sm:text-base
            md:text-lg
          "
            ref={subtitleRef}
          >
            Proficient in building <span className="text-white [text-shadow:_0_0_10px_#fff,_0_0_20px_#fff,_0_0_40px_#0ff]">experiences</span>, <br />
            Not just Products.
          </p>

          <div
            className="
            mt-8
            flex
            flex-col
            gap-4

            sm:flex-row
          "
            ref={buttonsRef}
          >
            <button
              className="
              rounded-xl
              bg-white
              px-6
              py-3
              font-medium
              text-black
              transition
              hover:scale-105
            "
            >
              View Projects
            </button>

            <button
              className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              backdrop-blur
              transition
              hover:bg-white/10
            "
            >
              Contact
            </button>
          </div>
        </div>

      </div>
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-xs
          uppercase
          tracking-[0.3em]
          text-zinc-500
        "
      >
        Scroll ↓
      </div>
    </div>
  );
}