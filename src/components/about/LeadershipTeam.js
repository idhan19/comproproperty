"use client";
import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const team = [
    {
        name: "Alex Johnson",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Sarah Tan",
        role: "Chief Architect",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
        name: "Michael Chen",
        role: "Head of Construction",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
];

const LeadershipTeam = () => {
    return (
        <section className="py-24 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-emerald-950 dark:text-emerald-50 mb-3">
                        Tim <span className="text-amber-500">Kepemimpinan</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Wajah-wajah di balik visi dan dedikasi kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <div key={index} className="group text-center">
                            <div className="relative w-64 h-64 mx-auto mb-6 rounded-3xl overflow-hidden shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                                    <a href="#" className="p-2 bg-white rounded-full text-emerald-900 hover:bg-amber-400 transition-colors"><Linkedin size={20} /></a>
                                    <a href="#" className="p-2 bg-white rounded-full text-emerald-900 hover:bg-amber-400 transition-colors"><Mail size={20} /></a>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{member.name}</h3>
                            <p className="text-emerald-600 font-medium text-sm">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipTeam;
