import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import About from "@/components/about/About";
import Legalitas from "@/components/about/Legalitas";
import Clients from "@/components/about/Clients";
import Footer from "@/components/Footer";
import { SITE_URL, seo } from "@/data/site";

export const metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProjects />
      <About />
      <Legalitas />
      <Clients />
      <Footer />
    </main>
  );
}
