"use client";
import React from 'react';
import { Instagram, Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { about, clients, company } from '@/data/site';

const socialIcons = {
    Instagram: <Instagram size={20} />,
    Facebook: <Facebook size={20} />,
    TikTok: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
    ),
};

const Footer = () => {
    return (
        <footer id="kontak" className="bg-blue-950 text-blue-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">PT. PONCO MUNARO UTAMA</span>
                        </div>
                        <p className="text-blue-200/80 mb-8 leading-relaxed">
                            &ldquo;{about.visi}&rdquo;
                        </p>
                        <div className="flex space-x-4">
                            {company.social.map((item) => (
                                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.name} className="bg-blue-900/50 p-2 rounded-lg hover:bg-blue-800 transition-colors">
                                    {socialIcons[item.name]}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Clients PT. Ponco Munaro Utama  :</h4>
                        <ul className="space-y-4 list-disc">
                            {clients.slice(0, 4).map((client) => (
                                <li key={client.name}>{client.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='md:mt-14'>
                        <h4 className="font-bold text-white text-lg mb-6">   </h4>
                        <ul className="space-y-4 list-disc">
                            {clients.slice(4).map((client) => (
                                <li key={client.name}>{client.name}</li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-red-500 mt-1 flex-shrink-0" size={18} />
                                <span>{company.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-red-500 flex-shrink-0" size={18} />
                                <span>{company.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-red-500 flex-shrink-0" size={18} />
                                <span>{company.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-900 pt-8 text-center text-sm text-blue-400/60">
                    <p>&copy; {new Date().getFullYear()} PT. Ponco Munaro Utama. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
