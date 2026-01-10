import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyFilter from "@/components/property/PropertyFilter";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyComparison from "@/components/property/PropertyComparison";
import PropertyCTA from "@/components/property/PropertyCTA";

export const metadata = {
    title: "Properti - PropertyVista",
    description: "Jelajahi koleksi properti terbaik untuk hunian dan investasi.",
};

export default function PropertyPage() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <PropertyHero />
            <PropertyFilter />
            <PropertyGrid />
            <PropertyComparison />
            <PropertyCTA />
            <Footer />
        </main>
    );
}
