export default function StatsSection() {
  return (
    <section className="grid gap-6 px-6 pb-24 md:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
        <h2 className="text-5xl font-bold text-purple-300">
          10K+
        </h2>

        <p className="mt-4 text-gray-400">
          Documents Simplified
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
        <h2 className="text-5xl font-bold text-pink-300">
          25+
        </h2>

        <p className="mt-4 text-gray-400">
          Supported Languages
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
        <h2 className="text-5xl font-bold text-cyan-300">
          99%
        </h2>

        <p className="mt-4 text-gray-400">
          Accessibility Accuracy
        </p>
      </div>

    </section>
  );
}