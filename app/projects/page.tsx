"use client";

import { useState } from "react";

import BootScreen from "./components/BootScreen";
import WorkshopHero from "./components/WorkshopHero";

export default function ProjectsPage() {
  const [bootFinished, setBootFinished] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {!bootFinished ? (
        <BootScreen onComplete={() => setBootFinished(true)} />
      ) : (
        <WorkshopHero />
      )}
    </main>
  );
}