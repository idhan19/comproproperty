import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
