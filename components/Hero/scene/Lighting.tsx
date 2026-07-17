type Props = {
  mobile: boolean;
};

export default function Lighting({ mobile }: Props) {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
      />

      <pointLight
        position={[0, 2, 2]}
        intensity={mobile ? 8 : 15}
        color="#8b5cf6"
      />
    </>
  );
}