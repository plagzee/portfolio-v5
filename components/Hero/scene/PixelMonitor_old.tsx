"use client";

import { Float } from "@react-three/drei";

type Props = {
  mobile: boolean;
};

export default function PixelMonitor({ mobile }: Props) {
  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={1}
    >
      <group
        position={mobile ? [0, 1.5, 0] : [2.5, 0, 0]}
        scale={mobile ? 0.7 : 1}
      >
        {/* Monitor Body */}
        <mesh>
          <boxGeometry args={[3, 2, 0.3]} />
          <meshStandardMaterial color="#18181b" />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0, 0.17]}>
          <boxGeometry args={[2.6, 1.6, 0.05]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#2563eb"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Stand */}
        <mesh position={[0, -1.4, 0]}>
          <boxGeometry args={[0.25, 1, 0.25]} />
          <meshStandardMaterial color="#27272a" />
        </mesh>

        {/* Base */}
        <mesh position={[0, -2, 0]}>
          <boxGeometry args={[1.5, 0.2, 1]} />
          <meshStandardMaterial color="#3f3f46" />
        </mesh>
      </group>
    </Float>
  );
}