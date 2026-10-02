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

    return (
        <>
            <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'px-2 pt-2' : 'px-3 pt-3 sm:px-4 sm:pt-4'}`}>
                <nav
                    aria-label="Navigasi utama"
                    className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 shadow-lg shadow-navy/5 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 sm:px-6 ${isScrolled ? 'h-14' : 'h-16 md:h-[4.5rem]'}`}
                >
                    <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={close}>
                        <Image
                            src={company.logo}
                            alt=""
                            width={44}
                            height={44}
                            priority
                            className={`shrink-0 transition-all duration-300 ${isScrolled ? 'h-9 w-9' : 'h-11 w-11'}`}
                        />
                        <span className="truncate text-sm font-bold text-navy sm:text-base">{company.name}</span>
                    </Link>

                    <ul className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="rounded-full px-4 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-navy"
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
                        className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 lg:inline-flex"
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
                        className="-mr-2 rounded-full p-2 text-navy transition-colors hover:bg-navy/5 lg:hidden"
                    >
                        <Menu size={24} aria-hidden="true" />
                    </button>
                </nav>
            </header>

            {/* Drawer mobile */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden ${isOpen ? 'visible' : 'invisible'}`}
                aria-hidden={!isOpen}
            >
                <div
                    onClick={close}
                    className={`absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                />
                <div
                    id="menu-mobile"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu"
                    className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-white/90 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="mb-8 flex items-center justify-between">
                        <span className="font-bold text-navy">Menu</span>
                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={close}
                            aria-label="Tutup menu"
                            className="rounded-full p-2 text-navy transition-colors hover:bg-navy/5"
                        >
                            <X size={24} aria-hidden="true" />
                        </button>
                    </div>
                    <ul className="space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={close}
                                    tabIndex={isOpen ? 0 : -1}
                                    className="block rounded-xl px-4 py-3 text-lg font-medium text-navy transition-colors hover:bg-navy/5"
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
                        className="mt-auto flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-700"
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
