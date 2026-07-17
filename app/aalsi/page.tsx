"use client";

import {
  Contact,
  FAQ,
  Hero,
  Marquee,
  Services,
  Process,
  Story,
  WhyAalsi,
} from "@/components/Aalsi/sections";

import Pricing from "@/components/Aalsi/sections/Pricing";
import Comparison from "@/components/Aalsi/sections/Comparison";

import FloatingCanvas from "@/components/Aalsi/FloatingCanvas";

export default function AalsiPage() {
  return (
    <main className="relative overflow-x-hidden bg-transparent text-white">

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Three.js Background */}
      <div
        className="
    fixed
    inset-0
    z-[-5]
    pointer-events-none
    bg-black/70
  "
      />
      <FloatingCanvas />

      {/* Content */}

      <Hero />

      <Story />

      {/* <Portfolio /> */}

      {/* If you made Services */}
      <Services />

      <Process />

      <Pricing />

      <Comparison />

      <WhyAalsi />

      <Marquee />

      {/* <Testimonials /> */}

      <FAQ />

      <Contact />

    </main>
  );
}