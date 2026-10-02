"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

/**
 * Galeri foto dengan lightbox.
 * items: [{ src, keterangan }] atau daftar path string (pakai `altPrefix`).
 */
export default function Gallery({ items, altPrefix = 'Dokumentasi', columns = 'sm:grid-cols-2 lg:grid-cols-3', showCaptions = true }) {
    const photos = items.map((item, index) =>
        typeof item === 'string'
            ? { src: item, keterangan: null, alt: `${altPrefix}, foto ${index + 1}` }
            : { ...item, alt: item.alt ?? item.keterangan ?? `${altPrefix}, foto ${index + 1}` },
    );
    const [open, setOpen] = useState(null);
    const closeRef = useRef(null);
    const lastTrigger = useRef(null);

    const close = useCallback(() => setOpen(null), []);
    const step = useCallback(
        (delta) => setOpen((current) => (current === null ? null : (current + delta + photos.length) % photos.length)),
        [photos.length],
    );

    useEffect(() => {
        if (open === null) return;
        const trigger = lastTrigger.current;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        const onKey = (event) => {
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowRight') step(1);
            if (event.key === 'ArrowLeft') step(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
            trigger?.focus();
        };
    }, [open, close, step]);

    const current = open === null ? null : photos[open];

    return (
        <>
            <ul className={`grid grid-cols-2 gap-3 sm:gap-5 ${columns}`}>
                {photos.map((photo, index) => (
                    <Reveal as="li" key={photo.src} animation="blur-in" delay={(index % 3) * 100}>
                        <figure className="h-full">
                            <button
                                type="button"
                                onClick={(event) => {
                                    lastTrigger.current = event.currentTarget;
                                    setOpen(index);
                                }}
                                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface"
                                aria-label={`Perbesar foto: ${photo.alt}`}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-navy opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                                    <Expand size={16} aria-hidden="true" />
                                </span>
                            </button>
                            {showCaptions && photo.keterangan && (
                                <figcaption className="mt-2 text-xs leading-snug text-navy/70 sm:text-sm">{photo.keterangan}</figcaption>
                            )}
                        </figure>
                    </Reveal>
                ))}
            </ul>

            {current && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Tampilan foto"
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
                    onClick={close}
                >
                    <figure className="relative flex max-h-full w-full max-w-5xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
                        <div className="relative h-[75vh] w-full">
                            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                        </div>
                        <figcaption className="mt-4 text-center text-sm text-white/85">
                            {current.keterangan && <span>{current.keterangan} · </span>}
                            {open + 1} / {photos.length}
                        </figcaption>
                    </figure>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={close}
                        aria-label="Tutup"
                        className="glass-dark absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white"
                    >
                        <X size={22} aria-hidden="true" />
                    </button>
                    {photos.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    step(-1);
                                }}
                                aria-label="Foto sebelumnya"
                                className="glass-dark absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white sm:left-6"
                            >
                                <ChevronLeft size={24} aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    step(1);
                                }}
                                aria-label="Foto berikutnya"
                                className="glass-dark absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white sm:right-6"
                            >
                                <ChevronRight size={24} aria-hidden="true" />
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
