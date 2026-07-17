import HeroContent from "./Hero/HeroContent";
import HeroScene from "./Hero/HeroScene";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden mt-36">
      <HeroScene />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />

      <HeroContent />
    </section>
  );
}