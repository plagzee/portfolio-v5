"use client";

import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

import {
  GlassCard,
  Reveal,
  SectionHeading,
} from "../ui";

const steps = [
  {
    icon: Search,
    title: "Discover",
    subtitle:
      "We understand your business, goals, audience and project requirements before writing a single line of code.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    subtitle:
      "Wireframes, UI design, branding and user experience are crafted to leave a lasting impression.",
  },
  {
    icon: Code2,
    title: "Develop",
    subtitle:
      "Modern technologies are used to build a fast, responsive and scalable digital experience.",
  },
  {
    icon: Rocket,
    title: "Launch",
    subtitle:
      "Deployment, testing, optimization and post-launch support ensure everything runs smoothly.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-transparent py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title={
              <>
                FROM IDEA
                <br />
                TO LAUNCH
              </>
            }
            description="A streamlined workflow focused on quality, transparency and fast delivery."
          />
        </Reveal>

        <div className="relative mt-24">

          {/* Timeline */}

          <div className="absolute left-8 top-0 hidden h-full w-px bg-white/10 lg:block" />

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.title}
                  delay={index * 0.12}
                >
                  <GlassCard className="p-8">

                    <div className="grid gap-8 lg:grid-cols-[90px_1fr]">

                      {/* Left */}

                      <div className="flex flex-col items-center">

                        <div
                          className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.05]
                          "
                        >
                          <Icon size={28} />
                        </div>

                        {index !== steps.length - 1 && (
                          <div className="mt-4 hidden h-full w-px bg-white/10 lg:block" />
                        )}

                      </div>

                      {/* Right */}

                      <div>

                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-4
                            py-2
                            text-xs
                            font-bold
                            tracking-[0.35em]
                            uppercase
                          "
                        >
                          Step {index + 1}
                        </span>

                        <h3
                          className="
                            mt-6
                            text-4xl
                            font-black
                            uppercase

                            md:text-5xl
                          "
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
                            mt-6
                            max-w-2xl
                            text-lg
                            leading-8
                            text-zinc-400
                          "
                        >
                          {step.subtitle}
                        </p>

                      </div>

                    </div>

                  </GlassCard>
                </Reveal>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}