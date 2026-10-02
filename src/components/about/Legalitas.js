import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import WithPlaceholders from '@/components/WithPlaceholders';
import { publishedLegalitas } from '@/data/site';

export default function Legalitas() {
    if (publishedLegalitas.length === 0) return null;

    return (
        <section id="legalitas" className="py-20 md:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Legalitas" title="Legalitas dan Sertifikasi" />
                <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
                    {publishedLegalitas.map((item) => (
                        <article
                            key={item.title}
                            className="w-full rounded-2xl border border-navy-100 bg-white p-7 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                                <Icon name={item.icon} size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                            <p className="mb-4 text-sm font-semibold text-brand-600">{item.subtitle}</p>
                            <ul className="space-y-2 text-sm leading-relaxed text-navy/80">
                                {item.details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                ))}
                            </ul>
                            {item.note && (
                                <p className="mt-4">
                                    <WithPlaceholders text={item.note} />
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
