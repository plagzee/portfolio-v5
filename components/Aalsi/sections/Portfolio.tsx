"use client";

import Image from "next/image";

import {
  GlassCard,
  GlowButton,
  Reveal,
  SectionHeading,
} from "../ui";

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "Web Experience",
    image: "https://picsum.photos/1600/900?random=1",
  },
  {
    id: 2,
    title: "Project Two",
    category: "Creative Development",
    image: "https://picsum.photos/1600/900?random=2",
  },
  {
    id: 3,
    title: "Project Three",
    category: "Motion Design",
    image: "https://picsum.photos/1600/900?random=3",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-transparent py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                FEATURED
                <br />
                PROJECTS
              </>
            }
            description="A glimpse into some of the digital experiences we design and develop."
          />
        </Reveal>

        <div className="mt-28 space-y-32">

          {projects.map((project, index) => (

            <Reveal
              key={project.id}
              delay={index * 0.15}
            >

              <div
                className={`
                  grid
                  items-center
                  gap-12

                  lg:grid-cols-2

                  ${
                    index % 2 !== 0
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >

                {/* Image */}

                <GlassCard className="overflow-hidden p-0">

                  <div className="group relative aspect-video overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="
                        object-cover
                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-6 top-6 rounded-full bg-transparent/50 px-4 py-2 text-xs font-bold tracking-[0.3em] backdrop-blur-xl">
                      0{project.id}
                    </div>

                  </div>

                </GlassCard>

                {/* Content */}

                <div>

                  <p className="uppercase tracking-[0.35em] text-zinc-500">
                    {project.category}
                  </p>

                  <h3
                    className="
                      mt-5
                      text-4xl
                      font-black

                      md:text-6xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-8
                      max-w-xl
                      text-lg
                      leading-8
                      text-zinc-400
                    "
                  >
                    Replace this with your project
                    description. Explain the problem,
                    your solution and the final result.
                  </p>

                  <div className="mt-10">

                    <GlowButton
                      variant="secondary"
                    >
                      View Case Study
                    </GlowButton>

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}