"use client";
import { useEffect, useRef } from 'react';

/**
 * Angka yang menghitung naik saat terlihat. Nilai akhir sudah dirender di
 * server (aman untuk SEO dan tanpa JS). Awalan/akhiran (mis. "±2.000", "7+") dipertahankan;
 * nilai yang bukan angka ditampilkan apa adanya.
 */
export default function CountUp({ value, duration = 1400 }) {
    const ref = useRef(null);
    // Format yang didukung: "19", "7+", "±2.000" (awalan, angka dengan titik ribuan, akhiran).
    const match = /^(\D*)(\d{1,3}(?:\.\d{3})*|\d+)(\D*)$/.exec(value);
    const target = match ? Number(match[2].replace(/\./g, '')) : null;
    const prefix = match ? match[1] : '';
    const suffix = match ? match[3] : '';
    const format = (n) => prefix + n.toLocaleString('id-ID') + suffix;

    useEffect(() => {
        const node = ref.current;
        if (!node || target === null) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame;
        const run = () => {
            const start = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                node.textContent = format(Math.round(eased * target));
                if (progress < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        };

        node.textContent = format(0);
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                run();
                observer.disconnect();
            }
        });
        observer.observe(node);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
            node.textContent = format(target);
        };
    }, [target, prefix, suffix, duration]); // eslint-disable-line react-hooks/exhaustive-deps

    return <span ref={ref}>{value}</span>;
}
