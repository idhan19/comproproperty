"use client";
import { useEffect, useRef } from 'react';

/**
 * Angka yang menghitung naik saat terlihat. Nilai akhir sudah dirender di
 * server (aman untuk SEO dan tanpa JS). Akhiran non-angka (mis. "7+") dipertahankan;
 * nilai yang bukan angka ditampilkan apa adanya.
 */
export default function CountUp({ value, duration = 1400 }) {
    const ref = useRef(null);
    const match = /^(\d+)(\D*)$/.exec(value);
    const target = match ? Number(match[1]) : null;
    const suffix = match ? match[2] : '';

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
                node.textContent = String(Math.round(eased * target)) + suffix;
                if (progress < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        };

        node.textContent = '0' + suffix;
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
            node.textContent = String(target) + suffix;
        };
    }, [target, suffix, duration]);

    return <span ref={ref}>{value}</span>;
}
