
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

      <div className="absolute inset-0 bg-linear-to-b from-purple-500/20 via-black to-black" />
      <div className="absolute left-10 top-40 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

<div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >

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

          <Link href="/upload">
            <button className="rounded-2xl bg-white px-8 py-4 text-lg font-medium text-black transition hover:scale-105">
              Get Started
            </button>
          </Link>

          <button className="rounded-2xl border border-white/20 px-6 py-3 transition hover:bg-white hover:text-black">
            Learn More
          </button>

        </div>

      </motion.div>

    </section>
  );
}