import { Download, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WithPlaceholders from '@/components/WithPlaceholders';
import {
    SITE_URL, about, clients, company, companyProfilePdf, directors, management, publishedLegalitas, seo, services, waLink,
} from '@/data/site';

const description =
    'Profil PT Ponco Munaro Utama: visi, misi, lini layanan, direksi, klien, dan kontak perusahaan jasa konstruksi di Kabupaten Bogor.';

export const metadata = {
    title: 'Company Profile',
    description,
    alternates: { canonical: `${SITE_URL}/profile` },
    openGraph: { title: `Company Profile ${company.name}`, description, url: `${SITE_URL}/profile` },
};

function Section({ title, children }) {
    return (
        <section className="py-10 border-t border-navy-100 first:border-t-0">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">{title}</h2>
            {children}
        </section>
    );
}

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <header className="bg-navy text-white pt-36 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">Company Profile</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{company.name}</h1>
                    <p className="text-lg text-navy-100 leading-relaxed mb-8">{seo.description}</p>
                    <a
                        href={companyProfilePdf}
                        download
                        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                        <Download size={18} aria-hidden="true" />
                        Unduh Company Profile (PDF)
                    </a>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Section title="Visi">
                    <p className="text-lg text-navy/80 leading-relaxed">{about.visi}</p>
                </Section>

                <Section title="Misi">
                    <ol className="space-y-3 list-decimal pl-5 text-lg text-navy/80 leading-relaxed">
                        {about.misi.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </Section>

                <Section title="Lini Layanan">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {services.map((service) => (
                            <div key={service.title}>
                                <h3 className="font-bold text-navy text-lg mb-2">{service.title}</h3>
                                <p className="text-navy/70 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Direksi dan Komisaris">
                    <ul className="grid gap-4 sm:grid-cols-3">
                        {directors.map((person) => (
                            <li key={person.name} className="rounded-2xl bg-surface p-5">
                                <p className="font-bold text-navy"><WithPlaceholders text={person.name} /></p>
                                <p className="text-sm text-brand-600 font-semibold mt-1">{person.role}</p>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Tim Manajemen">
                    <ul className="grid gap-4 sm:grid-cols-2">
                        {management.map((person) => (
                            <li key={person.name}>
                                <p className="font-bold text-navy">{person.name}</p>
                                <p className="text-sm text-navy/70">{person.role}</p>
                            </li>
                        ))}
                    </ul>
                </Section>

                {publishedLegalitas.length > 0 && (
                    <Section title="Legalitas dan Sertifikasi">
                        <div className="space-y-6">
                            {publishedLegalitas.map((item) => (
                                <div key={item.title}>
                                    <h3 className="font-bold text-navy text-lg">{item.title}: {item.subtitle}</h3>
                                    <ul className="mt-2 space-y-1 text-navy/80">
                                        {item.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                    {item.note && <p className="mt-2"><WithPlaceholders text={item.note} /></p>}
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                <Section title="Klien dan Mitra">
                    <ul className="grid gap-3 sm:grid-cols-2 text-navy/80">
                        {clients.map((client) => (
                            <li key={client.name}>
                                {client.name}
                                {client.note && <> <WithPlaceholders text={client.note} /></>}
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Kontak">
                    <ul className="space-y-4 text-navy/80">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-brand-600 mt-0.5 shrink-0" size={20} aria-hidden="true" />
                            <span>{company.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-brand-600 shrink-0" size={20} aria-hidden="true" />
                            <span>{company.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-brand-600 shrink-0" size={20} aria-hidden="true" />
                            <a href={`mailto:${company.email}`} className="hover:text-brand-600">{company.email}</a>
                        </li>
                    </ul>
                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 bg-navy hover:bg-navy-800 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                        <MessageCircle size={18} aria-hidden="true" />
                        Konsultasi via WhatsApp
                    </a>
                </Section>
            </div>

            <Footer />
        </main>
    );
}
