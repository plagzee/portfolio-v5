"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub as Github } from "react-icons/fa";
import { FaInstagram as Instagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      {/* Gradient Blur */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">
              Ahiran Sahu
            </h3>

            <p className="mt-2 max-w-md text-sm text-neutral-400">
              Building digital experiences, products and creative solutions.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/plagzee"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              <Github className="h-5 w-5 text-neutral-300 transition group-hover:text-purple-300" />

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 transition group-hover:opacity-100" />
            </a>

            <a
              href="https://instagram.com/ahiranoveradad"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10"
            >
              <Instagram className="h-5 w-5 text-neutral-300 transition group-hover:text-pink-300" />

              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 transition group-hover:opacity-100" />
            </a>

            <a
              href="https://www.linkedin.com/in/ahiran-sahu-70999920a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10"
            >
              <FaLinkedin className="h-5 w-5 text-neutral-300 transition group-hover:text-pink-300" />

              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 opacity-0 transition group-hover:opacity-100" />
            </a>
          </div>

          {/* Contact CTA */}
          <Link
            href="#contact"
            className="group relative overflow-hidden rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-sm font-medium text-purple-200 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <span className="flex items-center gap-2">
              Let's Work Together
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row">
          {/* <p>
            © {new Date().getFullYear()} Ahiran Sahu. All rights reserved.
          </p> */}

          <p>
            Designed & Developed with ThreeJS, TailwindCSS and too much coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}