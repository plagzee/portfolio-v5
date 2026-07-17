"use client";

import {
  SiTypescript,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

import {
  TbBrandAdobePremier,
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop
} from "react-icons/tb"

const skills = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    description:
      "Building scalable web applications with type-safe frontend and backend architectures.",
  },
  {
    name: "Python",
    icon: SiPython,
    description:
      "Automation, AI integrations, backend systems, scripting, and problem-solving.",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    description:
      "Strong foundation in DSA, competitive programming, and systems-level development.",
  },
  {
    name: "Premiere Pro",
    icon: TbBrandAdobePremier,
    description:
      "Professional video editing, content creation, storytelling, and cinematic workflows.",
  },
  {
    name: "After Effects",
    icon: TbBrandAdobeAfterEffect,
    description:
      "Motion graphics, VFX, transitions, and advanced visual design workflows.",
  },
  {
    name: "Photoshop",
    icon: TbBrandAdobePhotoshop,
    description: 
    "Proficient in graphic designing, creating beautiful and expressive designs."
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 md:px-10"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-purple-400">
            Expertise
          </p>
          <br />
          <br />
          <h2 className="text-4xl font-bold md:text-6xl">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[450px_1fr]">
          {/* Orbit Side */}
          <div className="flex justify-center">
            <div className="relative h-[280px] w-[280px] md:h-[420px] md:w-[420px]">
              {/* Center Glow */}
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/30 blur-2xl" />

              {/* Outer Ring */}
              <div className="absolute inset-0 animate-[spin_28s_linear_infinite] rounded-full border border-purple-500/30">
                {skills.map((skill, index) => {
                  const angle = (360 / skills.length) * index;
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `
                          rotate(${angle}deg)
                          translateY(-190px)
                          rotate(-${angle}deg)
                        `,
                      }}
                    >
                      <div className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                        <Icon className="text-2xl text-purple-300" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Inner Ring */}
              <div className="absolute inset-[18%] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-purple-400/20" />

              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-xl">
                <span className="text-center text-sm font-medium text-purple-200">
                  My
                  <br />
                  Skills
                </span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                    <Icon className="text-2xl text-purple-300" />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold">
                    {skill.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-neutral-400">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}