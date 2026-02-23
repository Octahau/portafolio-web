'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Wrench } from 'lucide-react';

const skillData = {
    programming: [
        { name: 'JavaScript', category: 'Language', level: 85 },
        { name: 'TypeScript', category: 'Language', level: 75 },
        { name: 'PHP', category: 'Language', level: 85 },
        { name: 'SQL', category: 'Language', level: 80 },
        { name: 'Pascal (Delphi)', category: 'Language', level: 65 },
    ],
    frontend: [
        { name: 'React', category: 'Library', level: 85 },
        { name: 'Next.js', category: 'Framework', level: 80 },
        { name: 'HTML / CSS', category: 'Core', level: 90 },
        { name: 'Tailwind CSS', category: 'Styling', level: 60 },
        { name: 'Framer Motion', category: 'Animation', level: 50 },
    ],
    backend: [
        { name: 'Laravel', category: 'Framework', level: 70 },
        { name: 'PostgreSQL', category: 'Database', level: 70 },
        { name: 'MySQL', category: 'Database', level: 70 },
        { name: 'REST APIs', category: 'Architecture', level: 80 },
    ],
    tools: [
        { name: 'Git', category: 'Version Control', level: 85 },
        { name: 'n8n', category: 'Automation', level: 80 },
        { name: 'SOLID & Clean Code', category: 'Practices', level: 85 },
        { name: 'Composer / npm', category: 'Package Manager', level: 80 },
        { name: 'VS Code', category: 'Editor', level: 90 },
    ],
};

const tabs = [
    { id: 'programming', label: 'Programming', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'tools', label: 'Tools', icon: Wrench },
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState('programming');

    return (
        <section id="skills" className="py-24 px-6 bg-background">
            <div className="max-w-5xl mx-auto">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                        Skills
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Technical expertise and proficiency across different domains of software development.
                    </p>
                </motion.div>

                {/* Contenedor principal con borde */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-surface border border-border rounded-2xl p-6 sm:p-8"
                >
                    {/* Tabs */}
                    <div className="flex bg-background rounded-full p-1.5 border border-border mb-8">
                        {tabs.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                                    ${activeTab === id
                                        ? 'bg-heading text-white shadow-md'
                                        : 'text-muted hover:text-heading'
                                    }`}
                            >
                                <Icon size={16} />
                                <span className="hidden sm:inline">{label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Grid de skills con progress bars */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillData[activeTab].map(({ name, category, level }) => (
                            <div
                                key={name}
                                className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                            >
                                {/* Nombre + porcentaje */}
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-heading">{name}</h3>
                                    <span className="text-sm text-muted">{level}%</span>
                                </div>

                                {/* Badge de subcategoría */}
                                <span className="inline-block px-2 py-0.5 bg-surface text-xs text-muted rounded mb-3 border border-border">
                                    {category}
                                </span>

                                {/* Barra de progreso */}
                                <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-heading rounded-full transition-all duration-700"
                                        style={{ width: `${level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
