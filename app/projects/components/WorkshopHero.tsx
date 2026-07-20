"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Hammer } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Checklist from "./Checklist";
import { messages } from "../data/messages";

import Terminal from "./Terminal";

gsap.registerPlugin(useGSAP);

export default function WorkshopHero() {
  const [message, setMessage] = useState(messages[0]);

  const sectionRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(sectionRef.current, {
      opacity: 1,
    });

    tl.from(robotRef.current, {
      y: -700,
      rotation: -20,
      duration: 1.2,
      ease: "bounce.out",
    });

    tl.from(
      headingRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
      },
      "-=0.5"
    );

    tl.from(
      bubbleRef.current,
      {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: "back.out(2)",
      },
      "-=0.2"
    );

    gsap.to(robotRef.current, {
      y: -12,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

    gsap.to(glowRef.current, {
      scale: 1.15,
      opacity: 0.45,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  function randomMessage() {
    const random =
      messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-white opacity-0"
    >
      {/* Background Glow */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]"
      />

      {/* Robot */}
      <div className="relative mb-10">
        {/* Speech Bubble */}
        <div className="absolute -top-16 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-3 text-sm text-zinc-200 shadow-xl backdrop-blur-xl" ref={bubbleRef} >
          {message}
        </div>

        <div ref={robotRef}>
          <Image
            src="/illustrations/workshop-bot.png"
            alt="Workshop Bot"
            width={300}
            height={300}
            priority
            onClick={randomMessage}
            className="cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95"
          />
        </div>
      </div>

      {/* Badge */}
      <div className="mb-4 flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
        <Hammer size={16} />
        MY WORKSHOP
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-center text-5xl font-bold leading-tight md:text-7xl" ref={headingRef}>
        Workshop
        <br />
        Under Construction
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-400">
        Looks like you've wandered into my little workshop.
        I'm carefully putting together project stories,
        screenshots, and a few hidden surprises before
        opening the doors.
      </p>


      { /** Terminal */}
      <Terminal />

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={18} />
          Return Home
        </Link>

        <Link
          href="/aalsi"
          className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/5"
        >
          Visit Aalsi Works
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}