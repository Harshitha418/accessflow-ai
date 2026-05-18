"use client";
import { useState } from "react";
import { Upload } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function UploadSection() {
  const [message, setMessage] = useState("");
  const testBackend = async () => {

  const response = await fetch("http://localhost:5000");

  const data = await response.json();

  setMessage(data.message);

};
  return (
    <section className="px-6 py-24">

      <SectionTitle
        title="Upload Any Public Document"
        subtitle="AI DOCUMENT ANALYSIS"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl border border-dashed border-white/20 bg-white/5 p-16 text-center backdrop-blur-md">

        <div className="rounded-full bg-purple-500/20 p-6">
          <Upload size={40} />
        </div>

        <h3 className="mt-8 text-3xl font-semibold">
          Drag & Drop Your Files
        </h3>

        <p className="mt-4 max-w-xl text-gray-400">
          Upload PDFs, government forms, or public-service documents
          to receive AI-generated summaries and explanations.
        </p>

        <button
          onClick={testBackend}
          className="mt-8 rounded-2xl bg-white px-6 py-3 text-black transition hover:scale-105"
        >
          Test Backend Connection
        </button>

        {message && (
          <p className="mt-6 text-green-400">
            {message}
          </p>
        )}

      </div>

    </section>
  );
}