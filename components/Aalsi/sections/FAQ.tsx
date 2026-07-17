"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  GlassCard,
  Reveal,
  SectionHeading,
} from "../ui";

const faqs = [
  {
    question: "What services does Aalsi offer?",
    answer:
      "Aalsi is a full-service digital agency specializing in Web Development, App Development, Video Editing, and Graphic Design. We help businesses, startups, and creators build impactful digital experiences from concept to launch.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Timelines vary depending on the project. Most websites are completed within 1–3 weeks, mobile apps typically take 3–8 weeks, while video editing and graphic design projects are often delivered within a few business days.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Every package includes a set number of revisions to ensure you're happy with the final result. If additional changes are needed beyond the included revisions, we can accommodate them at a reasonable cost.",
  },
  {
    question: "Do you provide hosting, deployment, and maintenance?",
    answer:
      "Yes. We can take care of everything from domain registration and hosting to deployment, SSL configuration, performance optimization, and ongoing maintenance for your website or application.",
  },
  {
    question: "Can you work with my existing website, app, or brand?",
    answer:
      "Absolutely. Whether you need improvements to an existing website, updates to an app, fresh branding, or professional editing of your existing content, we're happy to build on what you already have.",
  },
  {
    question: "Can I request a custom quote?",
    answer:
      "Of course. Every project has unique requirements, and we're happy to create a tailored solution that fits your goals, timeline, and budget.",
  },
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-transparent py-36"
    >
      <div className="mx-auto max-w-5xl px-6">

        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                FREQUENTLY
                <br />
                ASKED QUESTIONS
              </>
            }
            description="Everything you need to know before starting your project."
          />
        </Reveal>

        <div className="mt-20 space-y-6">

          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <Reveal
                key={faq.question}
                delay={index * 0.08}
              >
                <GlassCard className="overflow-hidden">

                  <button
                    onClick={() =>
                      setOpen(active ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      p-7
                      text-left
                    "
                  >
                    <span className="text-lg font-semibold md:text-xl">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={22}
                      className={`
                        transition-transform
                        duration-300
                        ${active
                          ? "rotate-180"
                          : ""
                        }
                      `}
                    />
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-500

                      ${active
                        ? "max-h-64"
                        : "max-h-0"
                      }
                    `}
                  >
                    <p
                      className="
                        px-7
                        pb-7
                        leading-8
                        text-zinc-400
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>

                </GlassCard>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}