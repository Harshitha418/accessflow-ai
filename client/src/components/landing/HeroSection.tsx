export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-black to-black" />

      <div className="relative z-10">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          AI-Powered Accessibility Platform
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Understand Public Documents Instantly
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Upload forms, PDFs, and documents to receive
          AI-generated summaries, translations,
          and accessibility-friendly explanations.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-2xl bg-white px-6 py-3 text-black transition hover:scale-105">
            Get Started
          </button>

          <button className="rounded-2xl border border-white/20 px-6 py-3 transition hover:bg-white hover:text-black">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}