"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import FloatingCanvas from "./FloatingCanvas";
import Image from "next/image";

export default function AalsiHero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current || !subtitleRef.current) return;

      const split = new SplitType(titleRef.current, {
        types: "chars",
      });

      gsap.set(split.chars, {
        y: 120,
        opacity: 0,
        rotateX: 90,
      });

      gsap.timeline()
        .to(split.chars, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power4.out",
        })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          buttonsRef.current?.children ?? [],
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          scrollRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        );

      gsap.to(scrollRef.current, {
        y: 12,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-transparent text-white"
    >
      {/* Persistent Three.js Scene */}
      <FloatingCanvas />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-8 md:px-16">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/aalsi-logo.jpg"
              alt="Aalsi Works"
              width={48}
              height={48}
              priority
              className="rounded-xl"
            />

            <span className="text-sm uppercase tracking-[0.45em] text-zinc-400">
              Aalsi Works
            </span>
          </div>
          <span className="mb-6 text-sm uppercase tracking-[0.45em] text-zinc-400">
            Creative Studio
          </span>

          <h1
            ref={titleRef}
            className="max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl xl:text-[9rem]"
          >
            AALSI
            <br />
            WORKS
          </h1>

          <p
            ref={subtitleRef}
            className="mt-8 max-w-xl text-lg leading-8 text-zinc-300 md:text-xl"
          >
            We design immersive digital experiences that blend engineering,
            interaction, storytelling and visual craftsmanship into products
            people genuinely remember.
          </p>

          <div
            ref={buttonsRef}
            className="mt-12 flex flex-wrap gap-5"
          >
            <button
              className="
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]
              "
            >
              View Work
            </button>

            <button
              className="
                rounded-full
                border
                border-white/20
                bg-white/5
                px-8
                py-4
                font-semibold
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white
                hover:bg-white/10
              "
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 text-center"
      >
        <div className="mx-auto h-12 w-[1px] bg-white/30" />

        <p className="mt-3 text-xs uppercase tracking-[0.5em] text-zinc-500">
          Scroll
        </p>
      </div>
    </section>
  );
}