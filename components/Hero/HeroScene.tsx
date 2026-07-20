"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import HolographicCore from "./scene/HolographicCore";
import Lighting from "./scene/Lighting";
import { useMobile } from "@/hooks/useMobile";
import { useEffect, useState } from "react";

export default function HeroScene() {
  const mobile = useMobile();

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x:
          (e.clientX / window.innerWidth - 0.5) *
          2,
        y:
          (e.clientY / window.innerHeight - 0.5) *
          2,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: mobile ? [0, 0, 15] : [0, 0, 8],
          fov: mobile ? 55 : 50,
        }}
      >
        <Lighting mobile={mobile} />

        <Stars
          radius={80}
          depth={50}
          count={mobile ? 1500 : 5000}
          factor={4}
          saturation={0}
          fade
        />

        <group
          position={[
            mouse.x * (mobile ? 0.15 : 0.4),
            -mouse.y * (mobile ? 0.15 : 0.4),
            0,
          ]}
        >
          <HolographicCore mobile={mobile} />
        </group>
      </Canvas>
    </div>
  );
}