"use client";
import { useState } from "react";
import { Upload } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import DocumentCard from "@/components/ui/DocumentCard";

export default function UploadSection() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [documents, setDocuments] = useState<any[]>([]);


  const uploadDocument = async () => {
  if (!file) {
    setMessage("Please select a file first.");
    return;
  }
  setLoading(true);
  const formData = new FormData();
  formData.append("document", file);
  const response = await fetch(
    "http://localhost:5000/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  setLoading(false);
  setProcessing(true);
  setTimeout(() => {
    setMessage(`AI processed: ${data.fileName}`);
    setDocuments((prev) => [
      ...prev,
      {
        name: data.fileName,
        uploadedAt: data.uploadedAt,
        size: data.size,
      },
    ]);
    setProcessing(false);
  }, 2000);
};

  return (
    <section className="px-6 py-32">

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

        <label className="mt-8 cursor-pointer rounded-2xl border border-dashed border-white/20 px-6 py-10 transition hover:border-purple-400">

        <input
          type="file"
          className="hidden"
          onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <p className="text-gray-400">
        Click to select a document
      </p>

    </label>

    {file && (
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="font-medium">
          Selected File
        </p>
        <p className="mt-2 text-sm text-gray-400">
          {file.name}
        </p>
      </div>
    )}

        <button
          onClick={uploadDocument}
          disabled={loading}
          className="mt-8 rounded-2xl bg-white px-6 py-3 text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        > 

          {loading ? "Uploading..." : "Upload Document"}
        </button>

        {processing && (
          <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-purple-300">
            AI is analyzing your document...
          </div>
        )}


        {message && (
          <div className="mt-6 w-full max-w-2xl rounded-3xl border border-green-500/20 bg-green-500/10 p-6 text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-green-300">
              AI RESULT
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Document Processed Successfully
            </h3>
            <p className="mt-4 text-gray-300">
              {message}
            </p>
            <div className="mt-6 rounded-2xl bg-black/30 p-4">
              <p className="text-sm text-gray-400">
                Generated AI Summary
              </p>
              <p className="mt-2 text-gray-200">
                This document contains important public-service information.
                AI-generated accessibility summaries will appear here.
              </p>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}