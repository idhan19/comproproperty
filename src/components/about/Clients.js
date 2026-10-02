import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';
import WithPlaceholders from '@/components/WithPlaceholders';
import { clients } from '@/data/site';

function ClientList({ duplicate = false }) {
    return (
        <ul className={`flex shrink-0 ${duplicate ? 'marquee-duplicate' : ''}`} aria-hidden={duplicate || undefined}>
            {clients.map((client) => (
                <li
                    key={client.name}
                    className="mr-4 flex min-h-24 w-56 shrink-0 flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white p-5 text-center text-sm transition hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-md sm:w-64 sm:text-base"
                >
                    {client.logo ? (
                        <Image src={client.logo} alt={`Logo ${client.name}`} width={160} height={64} className="h-12 w-auto object-contain" />
                    ) : (
                        <span className="font-semibold text-navy">{client.name}</span>
                    )}
                    {client.note && (
                        <span className="mt-2">
                            <WithPlaceholders text={client.note} />
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default function Clients() {
    return (
        <section id="klien" className="bg-gradient-to-b from-white to-surface py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Klien dan Mitra" title="Dipercaya oleh Pengembang dan Institusi" />
            </div>
            {/* Marquee: daftar diulang dua kali agar berjalan tanpa jeda; berhenti saat di-hover. */}
            <Reveal
                animation="fade-up"
                className="marquee overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
            >
                <div className="marquee-track flex w-max">
                    <ClientList />
                    <ClientList duplicate />
                </div>
            </Reveal>
        </section>
    );
}
