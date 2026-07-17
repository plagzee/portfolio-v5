"use client";

import { Quote, Star } from "lucide-react";

import {
  GlassCard,
  Reveal,
  SectionHeading,
} from "../ui";

const testimonials = [
  {
    name: "Restaurant Owner",
    company: "Placeholder Company",
    review:
      "Working with Aalsi Works was effortless. The final website exceeded our expectations in both performance and design.",
  },
  {
    name: "Startup Founder",
    company: "Placeholder Startup",
    review:
      "The animations, branding and attention to detail completely transformed our online presence.",
  },
  {
    name: "Content Creator",
    company: "Placeholder Brand",
    review:
      "Fast communication, beautiful design and smooth development. Couldn't ask for more.",
  },
  {
    name: "Business Owner",
    company: "Placeholder Business",
    review:
      "Everything was delivered on time and the website feels premium on every device.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-transparent py-40"
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                PEOPLE LOVE
                <br />
                WORKING WITH US
              </>
            }
            description="Real stories from businesses and creators we've worked with."
          />

        </Reveal>

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {testimonials.map((testimonial, index) => (

            <Reveal
              key={testimonial.name}
              delay={index * 0.1}
            >

              <GlassCard className="h-full p-8">

                <Quote
                  size={42}
                  className="text-violet-400"
                />

                <div className="mt-6 flex gap-1">

                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}

                </div>

                <p
                  className="
                    mt-8
                    text-lg
                    leading-8
                    text-zinc-300
                  "
                >
                  "{testimonial.review}"
                </p>

                <div className="mt-10 flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-500/20
                      text-lg
                      font-bold
                    "
                  >
                    {testimonial.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div>

                    <h3 className="text-lg font-bold">
                      {testimonial.name}
                    </h3>

                    <p className="text-zinc-500">
                      {testimonial.company}
                    </p>

                  </div>

                </div>

              </GlassCard>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}