import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/** Header halaman dalam (latar navy) dengan breadcrumb. */
export default function PageHeader({ eyebrow, title, description, crumbs = [], children }) {
    return (
        <header className="relative overflow-hidden bg-navy pt-36 pb-16 text-white md:pb-20">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-brand" aria-hidden="true" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {crumbs.length > 0 && (
                    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-navy-100">
                        <ol className="flex flex-wrap items-center gap-1.5">
                            {crumbs.map((crumb, index) => (
                                <li key={crumb.label} className="flex items-center gap-1.5">
                                    {index > 0 && <ChevronRight size={14} aria-hidden="true" />}
                                    {crumb.href ? (
                                        <Link href={crumb.href} className="hover:text-white">{crumb.label}</Link>
                                    ) : (
                                        <span aria-current="page" className="text-white">{crumb.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                )}
                {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>}
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h1>
                {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">{description}</p>}
                {children}
            </div>
        </header>
    );
}
