"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaReact,
  FaMobileAlt,
  FaInstagram,
} from "react-icons/fa";

import {
  FaXTwitter,
} from "react-icons/fa6";

import {
  SiTypescript,
  SiNextdotjs,
  SiTensorflow,
  SiPython,
} from "react-icons/si";

import {
  TbBrandAdobePremier,
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop,
} from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Full Stack Development",
    description:
      "Modern websites and scalable web applications built with performance, accessibility and long-term maintainability in mind.",
    icons: [FaReact, SiTypescript, SiNextdotjs],
    glow: "from-cyan-500/20",
  },
  {
    title: "Machine Learning",
    description:
      "AI integrations, automation, intelligent systems and production-ready model deployment.",
    icons: [SiTensorflow, SiPython],
    glow: "from-violet-500/20",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile experiences focused on smooth performance and polished interactions.",
    icons: [FaMobileAlt],
    glow: "from-sky-500/20",
  },
  {
    title: "Video Editing",
    description:
      "Cinematic edits, motion graphics and storytelling that elevate content beyond simple cuts.",
    icons: [TbBrandAdobePremier, TbBrandAdobeAfterEffect],
    glow: "from-red-500/20",
  },
  {
    title: "Graphic Design",
    description:
      "Brand identities, marketing creatives and visuals that communicate with clarity.",
    icons: [TbBrandAdobePhotoshop],
    glow: "from-blue-500/20",
  },
  {
    title: "Social Media",
    description:
      "Building and managing a consistent online presence across modern social platforms.",
    icons: [FaInstagram, FaXTwitter],
    glow: "from-pink-500/20",
  },
];

export default function ExpertiseSection() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
        },
      });

      gsap.from(".exp-card", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-grid",
          start: "top 82%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="expertise"
      className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]" />

      </div>

      <div className="mx-auto max-w-7xl">

        <div className="exp-heading mx-auto max-w-4xl text-center">

          <p className="mb-4 uppercase tracking-[0.4em] text-cyan-300 text-xs">
            WHAT I DO
          </p>

          <h2 className="text-[clamp(2.8rem,6vw,5.6rem)] font-black leading-[0.95] tracking-tight">

            Building digital experiences
            <br />

            that people remember.

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-zinc-400 leading-8 text-base md:text-lg">

            Combining development, creativity and storytelling to craft products
            that are fast, beautiful and enjoyable to use.

          </p>

        </div>

        <div className="cards-grid mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => (

            <div
              key={card.title}
              className="exp-card group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_20px_70px_rgba(34,211,238,0.15)]"
            >

              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.glow} to-transparent opacity-0 transition duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10">

                <div className="mb-8 flex gap-3">

                  {card.icons.map((Icon, i) => (

                    <div
                      key={i}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-500/10 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/30"
                    >

                      <Icon className="text-2xl text-cyan-300" />

                    </div>

                  ))}

                </div>

                <h3 className="text-2xl font-semibold">

                  {card.title}

                </h3>

                <p className="mt-4 leading-7 text-[15px] text-zinc-400">

                  {card.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}