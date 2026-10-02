export default function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'light' }) {
    const centered = align === 'center';
    const dark = tone === 'dark';

    return (
        <div className={`mb-12 md:mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
            {eyebrow && (
                <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${dark ? 'text-accent' : 'text-brand-600'}`}>
                    {eyebrow}
                </p>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
            {description && (
                <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-navy-100' : 'text-navy/70'}`}>{description}</p>
            )}
        </div>
    );
}
