"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    FaReact,
    FaMobileAlt,
    FaInstagram,
} from "react-icons/fa";

import {
    SiTypescript,
    SiNextdotjs,
    //   TbBrandAdobePremier,
    //   TbBrandAdobeAfterEffect,
    //   TbBrandAdobePhotoshop,
    SiTensorflow,
    SiPython,
} from "react-icons/si";

import {
    TbBrandAdobePremier,
    TbBrandAdobeAfterEffect,
    TbBrandAdobePhotoshop
} from "react-icons/tb";
import { FaX, FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        title: "Full Stack Development",
        description:
            "Modern websites and web applications built with performance and scalability in mind.",
        icons: [FaReact, SiTypescript, SiNextdotjs],
    },
    {
        title: "Machine Learning",
        description:
            "AI-powered experiences, automation, intelligent systems and model integration.",
        icons: [SiTensorflow, SiPython],
    },
    {
        title: "App Development",
        description:
            "Cross-platform mobile applications with smooth user experiences.",
        icons: [FaMobileAlt],
    },
    {
        title: "Video Editing",
        description:
            "Professional editing, motion graphics, transitions, storytelling and visual polish.",
        icons: [TbBrandAdobePremier, TbBrandAdobeAfterEffect],
    },
    {
        title: "Graphic Design",
        description:
            "Branding, posters, social media creatives and visual communication.",
        icons: [TbBrandAdobePhotoshop],
    },
    {
        title: "Social Media management",
        description:
            "Team of consistent people to manage your brand\'s internet presence in social media..",
        icons: [FaInstagram, FaXTwitter],
    },
];

export default function ExpertiseSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".expertise-heading", {
                opacity: 0,
                y: 60,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.fromTo(
                ".expertise-card",
                {
                    opacity: 0,
                    y: 60,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.to(".wave-hand", {
                rotate: 18,
                duration: 0.25,
                repeat: 5,
                yoyo: true,
                ease: "power2.inOut",
                delay: 0.5,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="expertise"
            className="relative overflow-hidden py-24 px-6"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

                <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-purple-500/20 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="expertise-heading mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                        <span
                            className="wave-hand inline-block cursor-pointer"
                            style={{ transformOrigin: "70% 70%" }}
                        >
                            👋
                        </span>{" "}
                        Experienced in building real-world websites,
                        applications, videos and graphic designs.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-base text-zinc-400 md:text-lg">
                        Great products are built through attention to detail.
                        I combine development, creativity and storytelling to
                        craft experiences people actually enjoy using.
                    </p>
                </div>

                {/* Cards */}
                <div
                    className="
            cards-grid
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
                >
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="
                expertise-card
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/30
                hover:shadow-[0_0_50px_rgba(34,211,238,0.18)]
              "
                        >
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
                            </div>

                            <div className="relative z-10">
                                <div className="mb-5 flex gap-3">
                                    {card.icons.map((Icon, idx) => (
                                        <Icon
                                            key={idx}
                                            className="
                        text-3xl
                        text-cyan-300
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                                        />
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {card.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="mt-16 text-center">
                    <p className="text-zinc-500">
                        Scroll to explore my skills ↓
                    </p>
                </div>
            </div>
        </section>
    );
}