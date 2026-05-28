import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PT PONCO MUNARO UTAMA | Kontraktor Listrik & Infrastruktur Terpercaya",
  description: "PT PONCO MUNARO UTAMA adalah perusahaan kontraktor listrik dan infrastruktur terpercaya di Indonesia. Spesialis instalasi listrik, PDAM, gardu trafo, dan panel listrik.",
  alternates: {
    canonical: 'https://www.ptponcoutama.com', // ganti dengan domain kamu
  },
  openGraph: {
    title: "PT PONCO MUNARO UTAMA | Kontraktor Listrik & Infrastruktur Terpercaya",
    description: "Perusahaan kontraktor listrik dan infrastruktur terpercaya di Indonesia.",
    url: 'https://www.ptponcoutama.com',
    siteName: 'PT PONCO MUNARO UTAMA',
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
