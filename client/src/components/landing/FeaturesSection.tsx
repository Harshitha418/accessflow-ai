import FeatureCard from "@/components/ui/FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="grid gap-6 px-6 pb-20 md:grid-cols-3">

      <FeatureCard
        title="AI Summaries"
        description="Simplify difficult public-service documents instantly."
      />

      <FeatureCard
        title="Translation"
        description="Translate forms and PDFs into multiple languages."
      />

      <FeatureCard
        title="Voice Assistance"
        description="Accessibility-friendly voice explanations for everyone."
      />

    </section>
  );
}