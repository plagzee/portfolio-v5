// app/projects/page.tsx

import Link from "next/link";
import { Code2, Clapperboard } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
            My Work
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Choose A Category
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Explore my work across software development,
            creative editing, and digital production.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Programming */}
          <Link
            href="/projects/programming"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.05]"
          >
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-purple-600/20 blur-3xl transition-all duration-300 group-hover:bg-purple-600/30" />

            <Code2
              size={52}
              className="mb-6 text-purple-400"
            />

            <h2 className="text-3xl font-bold">
              Programming
            </h2>

            <p className="mt-3 text-zinc-400">
              Full-stack applications, mobile,
              Robotics, APIs, and technical
              solutions.
            </p>

            <div className="mt-8 text-sm text-purple-400">
              View Projects →
            </div>
          </Link>

          {/* Video */}
          <Link
            href="/projects/video"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.05]"
          >
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-purple-600/20 blur-3xl transition-all duration-300 group-hover:bg-purple-600/30" />

            <Clapperboard
              size={52}
              className="mb-6 text-purple-400"
            />

            <h2 className="text-3xl font-bold">
              Video Editing
            </h2>

            <p className="mt-3 text-zinc-400">
              Motion graphics, cinematic edits,
              social media content, promotional videos,
              and creative storytelling.
            </p>

            <div className="mt-8 text-sm text-purple-400">
              View Projects →
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}