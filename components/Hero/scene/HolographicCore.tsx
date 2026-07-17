"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HolographicCore({
  mobile,
}: {
  mobile: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y += 0.002;

    group.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <Float speed={2}>
      <group
        ref={group}
        position={mobile ? [0, 3, 0] : [3, 0, 0]}
        scale={mobile ? 0.45 : 1}
      >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={1}
          />
        </mesh>

        <mesh position={[2, 1, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={1}
          />
        </mesh>

        <mesh position={[-2, -1, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
    </Float>
  );
}