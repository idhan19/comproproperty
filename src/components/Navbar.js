"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-950/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logo navbar.png" alt="Logo" className="w-12 h-12" />
                        <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-white' : 'text-blue-950 dark:text-blue-50'}`}>PT. PONCO MUNARO UTAMA</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : item === 'Contact' ? '#kontak' : `#${item.toLowerCase()}`}
                                className={`font-medium transition-colors ${isScrolled ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400'}`}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center">
                        <a
                            href={`https://wa.me/6281316807308?text=${encodeURIComponent("Halo PT. PONCO MUNARO UTAMA, saya tertarik untuk berkonsultasi mengenai layanan [Konstruksi/Sumur Bor/Listrik]. Mohon informasi lebih lanjut mengenai prosedur dan estimasi biayanya. Terima kasih.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
                        >
                            Contact Us
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-white' : 'text-zinc-600 dark:text-zinc-300'}`}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Home</Link>
                        <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Services</Link>
                        <Link href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Projects</Link>
                        <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">About</Link>
                        <Link href="#kontak" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800">Contact</Link>
                        <div className="pt-4 pb-2">
                            <a
                                href={`https://wa.me/6281316807308?text=${encodeURIComponent("Halo PT. PONCO MUNARO UTAMA, saya tertarik untuk berkonsultasi mengenai layanan [Konstruksi/Sumur Bor/Listrik]. Mohon informasi lebih lanjut mengenai prosedur dan estimasi biayanya. Terima kasih.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors block text-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
