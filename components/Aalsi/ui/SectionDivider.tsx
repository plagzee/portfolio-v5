export default function SectionDivider() {
  return (
    <div className="relative mx-auto my-32 h-px w-full max-w-7xl overflow-hidden bg-white/10">

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-12
        w-48
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-violet-500/30
        blur-3xl
      "
      />

    </div>
  );
}