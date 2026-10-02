import Navbar from "@/components/Navbar";
import { SITE_URL, company, seo } from "@/data/site";

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: SITE_URL,
    siteName: company.name,
    type: 'website',
  },
};
import Hero from "@/components/Hero";
import TechnicalCapabilities from "@/components/TechnicalCapabilities";
import ProjectPortfolio from "@/components/ProjectPortfolio";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-blue-600/30">
      <Navbar />
      <Hero />
      <TechnicalCapabilities />
      <ProjectPortfolio />
      <LeadershipTeam />
      <Footer />
    </main>
  );
}
