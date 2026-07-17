"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

import {
  FloatingBadge,
  GlowButton,
  Reveal,
} from "../ui";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Typography */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <h1
          className="
            select-none
            text-[26vw]
            font-black
            uppercase
            tracking-tighter
            text-white/[0.025]
          "
        >
          AALSI
        </h1>

      </div>

      {/* Gradient Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <Reveal>

          <Image
            src="/aalsi-logo.jpg"
            alt="Aalsi Works"
            width={100}
            height={100}
            priority
            className="mb-8 rounded-3xl shadow-2xl"
          />

        </Reveal>

        <Reveal delay={0.1}>

          <FloatingBadge>
            Creative Digital Studio
          </FloatingBadge>

        </Reveal>

        <Reveal delay={0.2}>

          <h1
            className="
              mt-10
              text-6xl
              font-black
              uppercase
              leading-[0.85]

              sm:text-7xl
              md:text-8xl
              lg:text-[9rem]
              xl:text-[10rem]
            "
          >
            AALSI
            <br />
            WORKS
          </h1>

        </Reveal>

        <Reveal delay={0.3}>

          <p
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-8
              text-zinc-400

              md:text-xl
            "
          >
            We craft immersive digital experiences,
            premium websites and modern brands that
            leave a lasting impression through
            creativity, motion and technology.
          </p>

        </Reveal>

        <Reveal delay={0.4}>

          <div
            className="
              mt-14
              flex
              flex-col
              gap-5

              sm:flex-row
            "
          >

            {/* <GlowButton href="#portfolio">
              View Projects
            </GlowButton> */}

            <GlowButton
              href="#contact"
              variant="secondary"
            >
              Let's Talk
            </GlowButton>

          </div>

        </Reveal>

        <Reveal delay={0.6}>

          <div className="mt-28 animate-bounce">

            <ArrowDown
              size={28}
              className="text-zinc-500"
            />

          </div>

        </Reveal>

      </div>

    </section>
  );
}