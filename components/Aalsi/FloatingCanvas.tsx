"use client";

import { useEffect, useRef } from "react";

import { SceneManager } from "./three/SceneManager";
import { Experience } from "./experience/Experience";

let sceneManager: SceneManager | null = null;
let experience: Experience | null = null;

export default function FloatingCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    let mounted = true;

    const init = async () => {
      sceneManager = new SceneManager(container);

      await sceneManager.init();

      if (!mounted) return;

      experience = new Experience(sceneManager);

      experience.init();
    };

    void init();

    return () => {
      mounted = false;

      experience?.destroy();
      experience = null;

      sceneManager?.destroy();
      sceneManager = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    />
  );
}