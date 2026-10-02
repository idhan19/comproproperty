import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { company, navLinks, services, waLink } from '@/data/site';

const socialIcons = {
    Instagram: <Instagram size={20} aria-hidden="true" />,
    Facebook: <Facebook size={20} aria-hidden="true" />,
    TikTok: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
    ),
};

const Footer = () => {
    return (
        <footer id="kontak" className="bg-navy-950 pt-20 pb-10 text-navy-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1.5">
                                <Image src={company.logo} alt="" width={40} height={40} />
                            </span>
                            <span className="text-lg font-bold text-white">{company.name}</span>
                        </div>
                        <p className="mb-8 leading-relaxed">
                            Jasa konstruksi, mekanikal elektrikal, infrastruktur air bersih, telekomunikasi, pekerjaan tanah, serta tracking armada dan supplier material.
                        </p>
                        <div className="flex gap-3">
                            {company.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${item.name} ${company.name}`}
                                    className="rounded-lg bg-white/10 p-2.5 text-white transition-colors hover:bg-brand-600"
                                >
                                    {socialIcons[item.name]}
                                </a>
                            ))}
                        </div>
                    </div>

                    <nav aria-label="Navigasi footer" className="lg:col-span-2">
                        <h2 className="mb-5 font-bold text-white">Navigasi</h2>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="transition-colors hover:text-white">{link.label}</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/projects" className="transition-colors hover:text-white">Semua Proyek</Link>
                            </li>
                            <li>
                                <Link href="/profile" className="transition-colors hover:text-white">Company Profile</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="lg:col-span-3">
                        <h2 className="mb-5 font-bold text-white">Layanan</h2>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.slug}>
                                    <Link href={service.href ?? '/#services'} className="transition-colors hover:text-white">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h2 className="mb-5 font-bold text-white">Kontak</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 shrink-0 text-brand" size={18} aria-hidden="true" />
                                <span>{company.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-brand" size={18} aria-hidden="true" />
                                <a href={`tel:+62${company.phone.slice(1)}`} className="hover:text-white">{company.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-brand" size={18} aria-hidden="true" />
                                <a href={`mailto:${company.email}`} className="break-all hover:text-white">{company.email}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle className="shrink-0 text-brand" size={18} aria-hidden="true" />
                                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-navy-100/70">
                    <p>&copy; {new Date().getFullYear()} {company.name}. Hak cipta dilindungi.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
