import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import WithPlaceholders from '@/components/WithPlaceholders';
import { clients } from '@/data/site';

export default function Clients() {
    return (
        <section id="klien" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Klien dan Mitra"
                    title="Dipercaya oleh Pengembang dan Institusi"
                />
                <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                    {clients.map((client) => (
                        <li
                            key={client.name}
                            className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-navy-100 p-4 text-center text-sm sm:p-6 sm:text-base"
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
