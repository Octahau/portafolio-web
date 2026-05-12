'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
    {
        title: 'Sistema de Gestión Inmobiliaria y Financiera',
        category: 'ERP & Automatización',
        description: 'Plataforma integral para administración de contratos y cobros. Automatiza el cálculo de cuotas mensuales integrando APIs externas (índices oficiales IPC/ICL) y genera boletas en PDF de forma dinámica.',
        tags: ['Next.js', 'Laravel', 'MySQL', 'API Integration'],
        github: null,
        live: null,
    },
    {
        title: 'AI Personal Finance Tracker',
        category: 'Automatización & IA',
        description: 'Sistema asíncrono de seguimiento financiero vía Telegram. Diseñado con n8n para orquestar eventos y la API de Gemini (LLMs) para analizar y categorizar transacciones no estructuradas en tiempo real.',
        tags: ['n8n', 'Gemini API', 'Workflows', 'Google Sheets'],
        github: null,
        live: null,
    },
    {
        title: 'CRM Retail & RRHH (Bronovios)',
        category: 'CRM',
        description: 'Sistema integral para la atención al cliente y gestión operativa. Integra módulos para la promoción de asesorías comerciales 1-a-1, seguimiento de perfiles mensuales y automatización de marketing con Brevo.',
        tags: ['Next.js', 'PostgreSQL', 'Brevo', 'CRM'],
        github: null,
        live: null,
    },
    {
        title: 'Symmetria - Gestión Kinesiológica',
        category: 'Web App & Analítica',
        description: 'Sistema para digitalizar la atención médica y administrativa. Incluye la gestión de agendas cruzadas y un dashboard analítico interactivo con métricas de ingresos y rendimiento del consultorio.',
        tags: ['React', 'Laravel', 'PostgreSQL', 'Data Analytics'],
        github: null,
        live: null,
    },
    {
        title: 'Autos VIP - Dashboard de Concesionaria',
        category: 'ERP / Web App',
        description: 'Plataforma administrativa para gestionar inventarios, consignaciones y flujos de ventas. Cuenta con un panel interactivo con métricas en tiempo real comparando ventas vs. gastos para potenciar la toma de decisiones.',
        tags: ['Laravel', 'React', 'SOLID', 'MySQL'],
        github: null,
        live: null,
    }
];
const DEFAULT_VISIBLE = 4;

export default function Projects() {
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? projects : projects.slice(0, DEFAULT_VISIBLE);

    return (
        <section id="projects" className="py-24 px-6 bg-surface">
            <div className="max-w-5xl mx-auto">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        Proyectos
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                        Mis Proyectos
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Una selección de los proyectos en los que he trabajado.
                    </p>
                </motion.div>

                {/* Grid de tarjetas — estricto 2 columnas en md+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence initial={false}>
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, delay: index >= DEFAULT_VISIBLE ? 0.1 : 0 }}
                                layout
                                className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                {/* Badge de categoría */}
                                <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                                    {project.category}
                                </span>
                                {/* Título y descripción */}
                                <h3 className="text-lg font-bold text-heading mb-2">{project.title}</h3>
                                <p className="text-body text-sm mb-4 flex-grow">{project.description}</p>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-surface text-xs text-muted rounded-md border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* Links (GitHub / Live) — solo si existen */}
                                <div className="flex gap-3 mt-auto">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors">
                                            <Github size={16} /> Código
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors">
                                            <ExternalLink size={16} /> Demo
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Botón Ver más / Ver menos — solo si hay más de 4 proyectos */}
                {projects.length > DEFAULT_VISIBLE && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-10"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                                border border-border text-body hover:text-heading hover:border-primary/30
                                transition-all duration-300 cursor-pointer group"
                        >
                            {showAll ? (
                                <>
                                    Ver menos <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                                </>
                            ) : (
                                <>
                                    Ver más proyectos <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
