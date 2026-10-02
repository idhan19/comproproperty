"use client";
import { useEffect, useRef } from 'react';

/**
 * Menampilkan elemen dengan animasi saat masuk layar.
 * animation: fade-up | fade-right | flip-in-y | blur-in | zoom-in (lihat globals.css).
 * delay (ms) dipakai untuk efek bergiliran pada grid.
 */
export default function Reveal({ as: Tag = 'div', animation = 'fade-up', delay = 0, className = '', style, children, ...rest }) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if (!('IntersectionObserver' in window)) {
            node.dataset.visible = '';
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.dataset.visible = '';
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            data-reveal={animation}
            className={className}
            style={{ '--reveal-delay': `${delay}ms`, ...style }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
