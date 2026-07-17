"use client";

import {
    Clapperboard,
    Code2,
    Palette,
    Megaphone,
} from "lucide-react";

import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";
import { GlowButton } from "../ui";

const services = [
    {
        icon: Code2,
        title: "Web & App Development",
        description:
            "High-performance websites and web applications designed to convert visitors into customers.",
        features: [
            "Business Websites",
            "Landing Pages",
            "Web Apps",
            "UI / UX",
        ],
        footer: "Fast • Responsive • SEO Ready",
    },
    {
        icon: Clapperboard,
        title: "Video Editing",
        description:
            "Professional edits built for YouTube, Instagram and modern brands that want attention.",
        features: [
            "YouTube",
            "Reels",
            "Motion Graphics",
            "Color Grading",
        ],
        footer: "Cinematic • Engaging • Creative",
    },
    {
        icon: Palette,
        title: "Graphic Designing",
        description:
            "Visual identities, posters, thumbnails and creatives that people instantly remember.",
        features: [
            "Branding",
            "Posters",
            "Thumbnails",
            "Social Media",
        ],
        footer: "Creative • Consistent • Premium",
    },
    {
        icon: Megaphone,
        title: "Social Media Handling",
        description:
            "Content planning, publishing and growth strategies to keep your brand consistently active.",
        features: [
            "Content Planning",
            "Scheduling",
            "Growth",
            "Analytics",
        ],
        footer: "Plan • Publish • Grow",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-32 overflow-hidden">

            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">

                <Reveal>
                    <SectionHeading
                        eyebrow="WHAT WE DO"
                        title="Everything your business needs, under one creative studio."
                        description="From websites to videos, graphics to social media—we help businesses build a memorable digital presence."
                    />
                </Reveal>

                <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (

                            <Reveal key={service.title} delay={index * .12}>

                                <GlassCard className="group h-full p-10">

                                    <div className="flex items-start gap-6">

                                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 transition duration-500 group-hover:scale-110 group-hover:rotate-6">

                                            <Icon className="h-9 w-9 text-violet-300" />

                                        </div>

                                        <div className="flex-1">

                                            <h3 className="text-3xl font-bold text-white">

                                                {service.title}

                                            </h3>

                                            <p className="mt-4 leading-8 text-zinc-400">

                                                {service.description}

                                            </p>

                                        </div>

                                    </div>

                                    <div className="mt-10 flex flex-wrap gap-3">

                                        {service.features.map((item) => (

                                            <span
                                                key={item}
                                                className="
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-2
                                        text-sm
                                        text-zinc-300
                                        transition
                                        group-hover:border-violet-500/30
                                        "
                                            >

                                                {item}

                                            </span>

                                        ))}

                                    </div>

                                    <div className="mt-10 border-t border-white/10 pt-6">

                                        <p className="font-medium tracking-wide text-violet-300">

                                            {service.footer}

                                        </p>

                                    </div>

                                </GlassCard>

                            </Reveal>

                        )

                    })}

                </div>

                <Reveal>

                    <div className="mt-24 text-center">

                        <p className="text-zinc-500 uppercase tracking-[0.35em]">

                            NEED SOMETHING CUSTOM?

                        </p>

                        <h3 className="mt-6 text-4xl font-black uppercase">

                            Let's Build Something Amazing.

                        </h3>

                        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">

                            Every business is different. Tell us your vision and we'll create a solution tailored specifically for you.

                        </p>

                    </div>

                </Reveal>

            </div>

        </section>
    );
}