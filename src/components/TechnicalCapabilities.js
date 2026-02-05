"use client";
import React from 'react';
import { Zap, Factory, Settings, Radio, PenTool, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
    {
        icon: <Zap className="w-10 h-10 text-red-600" />,
        title: "Mechanical & Electrical",
        description: "Specialized in high-voltage installations, transformer setups (up to 1MW), and industrial panel configurations. Ensuring power stability for critical infrastructures.",
        features: ["High Voltage Installation", "Transformer Integration", "Industrial Panel Wiring"]
    },
    {
        icon: <Factory className="w-10 h-10 text-blue-800" />,
        title: "Industrial Construction",
        description: "End-to-end industrial building construction designed for heavy-duty operations. From reinforced foundations to steel structure assembly.",
        features: ["Steel Structure Assembly", "Factory Foundation", "Warehouse Systems"]
    },
    {
        icon: <Radio className="w-10 h-10 text-blue-800" />,
        title: "Telecommunications",
        description: "Expert construction of BTS Towers (SST-42 to SST-62). delivering robust connectivity infrastructure across Java.",
        features: ["BTS Tower Construction", "Site Acquisition", "Maintenance Services"]
    },
    {
        icon: <Settings className="w-10 h-10 text-red-600" />,
        title: "Civil Engineering",
        description: "Comprehensive civil works aimed at public and private sector development, ensuring longevity and safety compliance.",
        features: ["Public Infrastructure", "Roads & Bridges", "Drainage Systems"]
    }
];

const TechnicalCapabilities = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block font-mono">Core Competencies</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 font-sans">
                        Technical Capabilities
                    </h2>
                    <dgvddiv className="w-24 h-1 bg-red-600 mx-auto"></div>
                    <p className="mt-6 text-zinc-600 max-w-2xl mx-auto leading-relaxed text-lg">
                        Delivering precision engineering and robust construction solutions for Government and Corporate sectors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-zinc-50 border border-zinc-200 p-8 hover:border-blue-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5"
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-zinc-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-start gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="shrink-0 p-4 bg-white border border-zinc-100 shadow-sm rounded-sm group-hover:bg-blue-50 transition-colors"
                                >
                                    {cap.icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-800 transition-colors">{cap.title}</h3>
                                    <p className="text-zinc-600 mb-6 leading-relaxed">
                                        {cap.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {cap.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm font-medium text-zinc-500">
                                                <div className="w-1.5 h-1.5 bg-red-500 mr-3 rounded-full"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalCapabilities;
