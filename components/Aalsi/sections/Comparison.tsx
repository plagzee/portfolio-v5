"use client";

import { Check, X } from "lucide-react";
import { comparisonTable } from "../data/pricing";
import {
  GlassCard,
  Reveal,
  SectionHeading,
} from "../ui";

const plans = [
  {
    title: "Starter",
    key: "starter",
  },
  {
    title: "Business",
    key: "business",
  },
  {
    title: "Growth",
    key: "growth",
  },
] as const;

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="relative overflow-hidden bg-transparent py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Compare Packages"
            title={
              <>
                FIND THE
                <br />
                PERFECT FIT
              </>
            }
            description="Compare our website development packages side by side to choose the one that best matches your business needs."
          />
        </Reveal>

        {/* Desktop */}

        <Reveal delay={0.2}>
          <GlassCard className="mt-20 hidden overflow-hidden p-0 lg:block">
            <table className="w-full">

              <thead className="bg-white/[0.03]">
                <tr>

                  <th className="p-8 text-left text-xl font-semibold">
                    Feature
                  </th>

                  {plans.map((plan) => (
                    <th
                      key={plan.key}
                      className="p-8 text-center text-lg font-bold"
                    >
                      {plan.title}
                    </th>
                  ))}

                </tr>
              </thead>

              <tbody>

                {comparisonTable.map((item) => (
                  <tr
                    key={item.feature}
                    className="
                      border-t
                      border-white/5
                      transition-all
                      duration-300
                      hover:bg-white/[0.03]
                    "
                  >

                    <td className="p-7 text-zinc-300">
                      {item.feature}
                    </td>

                    {plans.map((plan) => (

                      <td
                        key={plan.key}
                        className="p-7 text-center"
                      >

                        {item[plan.key] ? (
                          <Check
                            size={22}
                            className="mx-auto text-emerald-400"
                          />
                        ) : (
                          <X
                            size={22}
                            className="mx-auto text-red-400"
                          />
                        )}

                      </td>

                    ))}

                  </tr>
                ))}

              </tbody>

            </table>
          </GlassCard>
        </Reveal>

        {/* Mobile */}

        <div className="mt-16 space-y-8 lg:hidden">

          {plans.map((plan, index) => (

            <Reveal
              key={plan.key}
              delay={index * 0.15}
            >

              <GlassCard className="p-7">

                <h3 className="text-3xl font-black">
                  {plan.title}
                </h3>

                <div className="mt-8 space-y-5">

                  {comparisonTable.map((item) => (

                    <div
                      key={item.feature}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/5
                        pb-4
                      "
                    >

                      <span className="text-sm text-zinc-400">
                        {item.feature}
                      </span>

                      {item[plan.key] ? (
                        <Check
                          size={20}
                          className="text-emerald-400"
                        />
                      ) : (
                        <X
                          size={20}
                          className="text-red-400"
                        />
                      )}

                    </div>

                  ))}

                </div>

              </GlassCard>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}