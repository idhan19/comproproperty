/**
 * Dekorasi latar section: pola (grid/titik) dan cahaya warna yang di-blur.
 * Ditempatkan di dalam <section className="relative overflow-hidden ...">
 * dan konten section diberi `relative`.
 */
export default function SectionBackdrop({ pattern, glows = [] }) {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {pattern === 'grid' && (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#262a4510_1px,transparent_1px),linear-gradient(to_bottom,#262a4510_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_40%,transparent_100%)]" />
            )}
            {pattern === 'dots' && (
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff1f_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
            )}
            {glows.map((glow) => (
                <div key={glow} className={`absolute rounded-full blur-3xl ${glow}`} />
            ))}
        </div>
    );
}
