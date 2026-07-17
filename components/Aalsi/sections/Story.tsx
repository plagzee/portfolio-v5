"use client";

import {
  Reveal,
  SectionHeading,
} from "../ui";

export default function Story() {
  return (
    <section
      id="story"
      className="relative min-h-[250vh] overflow-hidden bg-transparent"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* Background Typography */}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

          <h1
            className="
              select-none
              text-[24vw]
              font-black
              uppercase
              tracking-tighter
              text-white/[0.03]
            "
          >
            AALSI
          </h1>

        </div>

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

        {/* Content */}

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

          <Reveal>

            <SectionHeading
              eyebrow="Our Philosophy"
              title={
                <>
                  WE DON'T JUST
                  <br />
                  BUILD WEBSITES.
                </>
              }
              description="We craft immersive digital experiences that blend storytelling, motion, technology and design into something people genuinely remember."
            />

          </Reveal>

          <Reveal delay={0.2}>

            <p
              className="
                mx-auto
                mt-12
                max-w-3xl
                text-xl
                leading-9
                text-zinc-400
              "
            >
              Every interaction should feel intentional.
              Every animation should have purpose.
              Every project should leave a lasting
              impression long after the visitor leaves
              the website.
            </p>

          </Reveal>

          <Reveal delay={0.4}>

            <div
              className="
                mt-20
                inline-flex
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.45em]
                text-zinc-300
                backdrop-blur-xl
              "
            >
              Design • Motion • Development
            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}