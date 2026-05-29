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

        <p className="mt-4 text-gray-400">
          {fileName}
        </p>

        <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
          <h3 className="mb-4 text-xl font-semibold">
            AI Generated Summary
          </h3>

          <div className="whitespace-pre-wrap leading-8 text-gray-300">
            {summary || "Generating summary..."}
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-black/30 p-6">
          <p className="max-h-100 overflow-y-auto leading-8 text-gray-300">
            {extractedText || "No extracted text available."}
          </p>
        </div>
      </div>
    </main>
  );
}