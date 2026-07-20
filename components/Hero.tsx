import HeroContent from "./Hero/HeroContent";
import HeroScene from "./Hero/HeroScene";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <HeroScene />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" />

      {/* Extra glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <HeroContent />
    </section>
  );
}