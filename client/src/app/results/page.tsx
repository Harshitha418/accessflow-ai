import Navbar from "@/components/layout/Navbar";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="mx-auto max-w-5xl px-6 py-32">

        <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
          AI RESULTS
        </p>

        <h1 className="mt-6 text-5xl font-bold">
          Document Analysis
        </h1>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

          <h2 className="text-2xl font-semibold">
            AI Generated Summary
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Uploaded document summaries and accessibility-friendly
            explanations will appear here.
          </p>

        </div>

      </div>

    </main>
  );
}