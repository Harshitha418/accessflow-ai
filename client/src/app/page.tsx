import Navbar from "@/components/layout/Navbar";
import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <Footer />

    </main>
  );
}