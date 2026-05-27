"use client";
import Navbar from "@/components/layout/Navbar";
import { useDocumentStore } from "@/store/documentStore";

export default function ResultsPage() {
  const {
  extractedText,
  fileName,
  summary,
} = useDocumentStore();
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

        <p className="mt4 text-gray-400">
          {fileName}
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

          <h2 className="text-2xl font-semibold">
            AI Generated Summary
          </h2>

        <div className="mt-6 rounded-2xl bg-purple-500/10 p-6">
          <p className="leading-8 text-gray-300">
            {summary || "Generating AI summary..."}
          </p>
        </div>
        
        <div className="mt-6 rounded-2xl bg-black/30 p-6">
          <p className="max-h-100 overflow-y-auto leading-8 text-gray-300">
            {extractedText || "No extracted text available."}
          </p>
        </div>

        </div>

      </div>

    </main>
  );
}