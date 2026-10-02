"use client";
import { useEffect, useRef } from 'react';

/** Lapisan yang bergerak lebih lambat dari scroll (efek parallax). */
export default function Parallax({ speed = 0.3, className = '', children }) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame = 0;
        const update = () => {
            frame = 0;
            const offset = Math.min(window.scrollY, window.innerHeight * 1.5) * speed;
            node.style.transform = `translate3d(0, ${offset}px, 0)`;
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frame);
        };
    }, [speed]);

    return (
        <div ref={ref} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
}
