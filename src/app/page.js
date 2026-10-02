import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectPortfolio from "@/components/ProjectPortfolio";
import LeadershipTeam from "@/components/about/LeadershipTeam";
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
      <ProjectPortfolio />
      <LeadershipTeam />
      <Footer />
    </main>
  );
}
