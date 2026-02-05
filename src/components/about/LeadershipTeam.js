"use client";
import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const team = [
    {
        name: "M. Saoma Gofur, S.Pd",
        role: "Direktur Utama ",
        image: "/gofur.jpeg"
    },
    {
        name: "Sarah Nadia, M.Kn",
        role: "Komisaris",
        image: "/Sarah1.png"
    },
    {
        name: "Alex Herius",
        role: "Direktur",
        image: "/Alex.jpeg"
    }
];

const LeadershipTeam = () => {
    return (
        <section id="about" className="py-24 bg-zinc-50 border-t border-zinc-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block font-mono">Organizational Structure</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 font-sans">
                        Board of Directors
                    </h2>
                    <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-8">
                    {team.map((member, index) => (
                        <div key={index} className="group bg-gradient-to-br from-white to-blue-50 p-6 border border-zinc-200 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 rounded-xl overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-lg shadow-inner bg-zinc-200">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-blue-950 mb-2 font-sans text-center group-hover:text-blue-700 transition-colors">{member.name}</h3>
                            <div className="text-red-600 font-bold uppercase tracking-wider text-xs mb-2 text-center bg-red-50 py-1 px-3 rounded-full mx-auto w-fit">{member.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipTeam;
