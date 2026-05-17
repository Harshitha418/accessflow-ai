import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import UploadSection from "@/components/landing/UploadSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <StatsSection />

    </main>
  );
}