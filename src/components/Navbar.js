"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MessageCircle, X } from 'lucide-react';
import { company, navLinks, waLink } from '@/data/site';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const closeButtonRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Drawer mobile: kunci scroll halaman, tutup dengan Escape, kelola fokus.
    useEffect(() => {
        if (!isOpen) return;
        const menuButton = menuButtonRef.current;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
            menuButton?.focus();
        };
    }, [isOpen]);

    const close = () => setIsOpen(false);


    // Di atas header gelap (semua halaman diawali hero/header navy) kaca gelap
    // dengan teks putih; setelah scroll kaca terang dengan teks navy.
    const glass = isScrolled ? 'glass-light' : 'glass-dark';
    const text = isScrolled ? 'text-navy' : 'text-white';
    const linkClass = isScrolled
        ? 'text-navy/75 hover:text-navy hover:bg-white/80 hover:shadow-[inset_0_1px_0_rgb(255_255_255),0_1px_3px_rgb(38_42_69/0.12)]'
        : 'text-white/80 hover:text-white hover:bg-white/15 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.3)]';

    return (
        <>
            <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
                {/* Kapsul kaca: menyempit dan mengecil saat scroll, mirip Dynamic Island. */}
                <nav
                    aria-label="Navigasi utama"
                    className={`${glass} pointer-events-auto mx-auto flex items-center justify-between gap-3 rounded-full pl-2 pr-2 sm:pl-2.5 ${
                        isScrolled ? 'h-14 max-w-5xl' : 'h-16 max-w-7xl md:h-[4.25rem]'
                    }`}
                >
                    <Link href="/" className="flex min-w-0 items-center gap-2.5 rounded-full pr-2" onClick={close}>
                        {/* Logo di "ikon aplikasi" putih agar merah logo tetap kontras di atas kaca gelap. */}
                        <span
                            className={`flex shrink-0 items-center justify-center rounded-full bg-white shadow-[inset_0_-1px_0_rgb(38_42_69/0.08),0_1px_3px_rgb(0_0_0/0.15)] transition-all duration-300 ${
                                isScrolled ? 'h-10 w-10' : 'h-11 w-11 md:h-12 md:w-12'
                            }`}
                        >
                            <Image src={company.logo} alt="" width={36} height={36} priority className="h-[70%] w-[70%] object-contain" />
                        </span>
                        <span className={`truncate text-sm font-semibold tracking-tight transition-colors duration-300 sm:text-base ${text}`}>
                            {company.name}
                        </span>
                    </Link>

                    <ul className="hidden items-center gap-0.5 lg:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${linkClass}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.3),0_6px_16px_-6px_rgb(168_0_0/0.6)] transition hover:bg-brand-700 lg:inline-flex"
                    >
                        <MessageCircle size={16} aria-hidden="true" />
                        Konsultasi
                    </a>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="Buka menu"
                        aria-expanded={isOpen}
                        aria-controls="menu-mobile"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors lg:hidden ${
                            isScrolled ? 'text-navy hover:bg-white/80' : 'text-white hover:bg-white/15'
                        }`}
                    >
                        <Menu size={22} aria-hidden="true" />
                    </button>
                </nav>
            </header>

            {/* Menu mobile: panel kaca melayang seperti sheet iOS. */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden ${isOpen ? 'visible' : 'invisible'}`}
                aria-hidden={!isOpen}
            >
                <div
                    onClick={close}
                    className={`absolute inset-0 bg-navy-950/30 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                />
                <div
                    id="menu-mobile"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu"
                    className={`glass-light absolute inset-x-3 top-3 flex origin-top-right flex-col rounded-[2rem] p-3 transition-all duration-300 ${
                        isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
                    }`}
                >
                    <div className="mb-2 flex items-center justify-between pl-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-navy/60">Menu</span>
                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={close}
                            aria-label="Tutup menu"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-navy shadow-[inset_0_1px_0_rgb(255_255_255)] transition-colors hover:bg-white"
                        >
                            <X size={20} aria-hidden="true" />
                        </button>
                    </div>
                    <ul className="space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={close}
                                    tabIndex={isOpen ? 0 : -1}
                                    className="block rounded-2xl px-4 py-3 text-lg font-medium text-navy transition-colors hover:bg-white/80"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isOpen ? 0 : -1}
                        className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.3)] transition-colors hover:bg-brand-700"
                    >
                        <MessageCircle size={18} aria-hidden="true" />
                        Konsultasi via WhatsApp
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
