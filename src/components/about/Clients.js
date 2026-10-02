import Image from 'next/image';
import SectionBackdrop from '@/components/SectionBackdrop';
import SectionHeading from '@/components/SectionHeading';
import WithPlaceholders from '@/components/WithPlaceholders';
import { clients } from '@/data/site';

export default function Clients() {
    return (
        <section
            id="klien"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#eef0f7_0%,#d9deee_60%,#ffe1e1_100%)] py-20 md:py-28"
        >
            <SectionBackdrop pattern="grid" glows={['-right-32 top-0 h-80 w-80 bg-brand/20']} />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Klien dan Mitra"
                    title="Dipercaya oleh Pengembang dan Institusi"
                />
                <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                    {clients.map((client) => (
                        <li
                            key={client.name}
                            className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-white bg-white/80 p-4 text-center shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md text-sm sm:p-6 sm:text-base"
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
            </div>
        </section>
    );
}
