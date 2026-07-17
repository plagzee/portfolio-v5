"use client";

import { Check } from "lucide-react";

import { pricingPlans } from "../data/pricing";
import {
  GlassCard,
  GlowButton,
  Reveal,
  SectionHeading,
} from "../ui";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-transparent py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                SIMPLE &
                <br />
                TRANSPARENT
              </>
            }
            description="Choose a package that fits your business today. You can always upgrade as your business grows."
          />
        </Reveal>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {pricingPlans.map((plan, index) => (

            <Reveal
              key={plan.id}
              delay={index * 0.15}
            >

              <GlassCard className="h-full p-8">

                <div
                  className="mb-6 h-2 w-20 rounded-full"
                  style={{
                    background: plan.color,
                  }}
                />

                <h3 className="text-3xl font-black">
                  {plan.title}
                </h3>

                <p className="mt-5 text-5xl font-black">
                  {plan.price}
                </p>

                <p className="mt-6 leading-8 text-zinc-400">
                  {plan.description}
                </p>

                <div className="mt-10 space-y-5">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-4"
                    >

                      <Check
                        size={18}
                        className="text-emerald-400"
                      />

                      <span className="text-zinc-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <GlowButton
                  href="#contact"
                  className="mt-12 w-full"
                >
                  Get Started
                </GlowButton>

              </GlassCard>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}