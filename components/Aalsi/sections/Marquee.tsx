"use client";

import { Reveal, SectionHeading } from "../ui";

const top = [
  "NEXT.JS",
  "THREE.JS",
  "GSAP",
  "REACT",
  "NODE.JS",
  "MONGODB",
  "TAILWIND",
  "FIGMA",
  "PREMIERE PRO",
  "AFTER EFFECTS",
];

const bottom = [
  "FAST",
  "RESPONSIVE",
  "SEO",
  "3D",
  "CREATIVE",
  "INTERACTIVE",
  "FULL STACK",
  "UI / UX",
  "MOTION",
  "PERFORMANCE",
];

function Row({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden py-2">

      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

      <div
        className={`flex min-w-max gap-6 ${
          reverse
            ? "animate-marquee-reverse"
            : "animate-marquee"
        }`}
      >
        {[...items, ...items, ...items].map((item, index) => (

          <div
            key={`${item}-${index}`}
            className="
              group
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-8
              py-4
              backdrop-blur-xl
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-violet-500/40
              hover:bg-white/[0.06]
            "
          >

            <span
              className="
                text-lg
                font-black
                uppercase
                tracking-[0.25em]
                text-white

                md:text-2xl
                lg:text-3xl
              "
            >
              {item}
            </span>

          </div>

        ))}
      </div>

    </div>
  );
}

export default function Marquee() {
  return (
    <section
      id="marquee"
      className="relative overflow-hidden bg-transparent py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Our Toolbox"
            title={
              <>
                BUILT WITH
                <br />
                MODERN TOOLS
              </>
            }
            description="We use industry-standard technologies to create fast, beautiful and scalable digital experiences."
          />
        </Reveal>

        <div className="mt-20 space-y-8">

          <Reveal delay={0.15}>
            <Row items={top} />
          </Reveal>

          <Reveal delay={0.3}>
            <Row
              items={bottom}
              reverse
            />
          </Reveal>

        </div>

      </div>
    </section>
  );
}