import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import OfficeList from "@/components/contact/OfficeList";
import FAQ from "@/components/contact/FAQ";
import ContactBottomCTA from "@/components/contact/ContactBottomCTA";

export const metadata = {
    title: "Hubungi Kami - PropertyVista",
    description: "Hubungi tim PropertyVista untuk konsultasi properti gratis. Kami siap membantu Anda.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-emerald-500/30">
            <Navbar />
            <ContactHero />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-48 md:pt-40">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <div className="w-full lg:w-5/12 h-full">
                        <ContactForm />
                    </div>
                    <div className="w-full lg:w-7/12">
                        <OfficeList />
                    </div>
                </div>
            </section>

            <FAQ />
            <ContactBottomCTA />
            <Footer />
        </main>
    );
}
