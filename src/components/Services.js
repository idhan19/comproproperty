import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Icon from '@/components/Icon';
import SectionHeading from '@/components/SectionHeading';
import { services, servicesIntro } from '@/data/site';

function ServiceCard({ service }) {
    const content = (
        <>
            <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={service.icon} size={24} />
                </div>
                {service.badge && (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy">{service.badge}</span>
                )}
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
            <p className="text-navy/70 leading-relaxed mb-6">{service.description}</p>
            <ul className="space-y-2.5 mt-auto">
                {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-navy/80">
                        <Check size={16} className="text-brand-600 mt-0.5 shrink-0" aria-hidden="true" />
                        {point}
                    </li>
                ))}
            </ul>
            {service.href && (
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Selengkapnya
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </span>
            )}
        </>
    );

    const className =
        'group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-xl hover:shadow-navy/5';

    return service.href ? (
        <Link href={service.href} className={className}>
            {content}
        </Link>
    ) : (
        <div className={className}>{content}</div>
    );
}

export default function Services() {
    return (
        <section id="services" className="pt-20 pb-20 md:pt-28 md:pb-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Layanan" title="Lini Layanan Kami" description={servicesIntro} />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
