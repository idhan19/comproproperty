import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import QualityStandards from "@/components/about/QualityStandards";
import ConstructionProcess from "@/components/about/ConstructionProcess";
import Partners from "@/components/about/Partners";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
    title: "Tentang Kami - PropertyVista",
    description: "Mengenal lebih dekat PropertyVista, visi kami, dan dedikasi untuk membangun hunian impian.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <AboutHero />
            <OurStory />
            <CompanyTimeline />
            <LeadershipTeam />
            <QualityStandards />
            <ConstructionProcess />
            <Partners />
            <AboutCTA />
            <Footer />
        </main>
    );
}
