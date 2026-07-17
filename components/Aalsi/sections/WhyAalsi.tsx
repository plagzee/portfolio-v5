"use client";

import {
  Clock3,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import {
  AnimatedCounter,
  GlassCard,
  Reveal,
  SectionHeading,
} from "../ui";

const stats = [
  {
    icon: Sparkles,
    value: 99,
    suffix: "%",
    title: "Client Satisfaction",
    description:
      "We focus on quality, communication and long-term partnerships.",
  },
  {
    icon: Clock3,
    value: 14,
    prefix: "< ",
    title: "Average Delivery (Days)",
    description:
      "Fast turnaround without sacrificing quality or creativity.",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    title: "Responsive Design",
    description:
      "Every website is optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: Zap,
    text: "24/7",
    title: "Support",
    description:
      "Need updates, fixes or advice? We're always here to help.",
  },
];

export default function WhyAalsi() {
  return (
    <section
      id="why-aalsi"
      className="relative overflow-hidden bg-transparent py-36"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionHeading
            eyebrow="Why Choose Aalsi?"
            title={
              <>
                BUILT TO
                <br />
                IMPRESS
              </>
            }
            description="Beautiful design is only half the story. We combine creativity, engineering and performance to build experiences people remember."
          />

        </Reveal>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 0.12}
              >

                <GlassCard className="h-full p-8">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/5
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3
                    className="
                      mt-8
                      text-5xl
                      font-black
                    "
                  >
                    {item.text ? (
                      item.text
                    ) : (
                      <AnimatedCounter
                        end={item.value!}
                        prefix={item.prefix}
                        suffix={item.suffix}
                      />
                    )}
                  </h3>

                  <h4
                    className="
                      mt-4
                      text-2xl
                      font-bold
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-6
                      leading-8
                      text-zinc-400
                    "
                  >
                    {item.description}
                  </p>

                </GlassCard>

              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}