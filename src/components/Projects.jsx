import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Sistema de Gestión Inmobiliaria',
        category: 'Web App',
        description: 'Sistema de gestión para administración de alquileres con contratos, cuotas y propiedades. Frontend en Next.js y backend en Laravel con MySQL.',
        tags: ['Laravel', 'Next.js', 'MySQL', 'REST API'],
        github: null,
        live: null,
    },
    {
        title: 'Bronovios',
        category: 'E-commerce',
        description: 'Plataforma e-commerce para productos digitales con integración de pasarelas de pago y Brevo para email marketing automatizado.',
        tags: ['Next.js', 'PostgreSQL', 'Payments', 'Brevo'],
        github: null,
        live: null,
    },
    {
        title: 'AI Finance Tracker',
        category: 'Automation',
        description: 'Sistema de seguimiento de gastos vía Telegram usando n8n y Gemini AI para categorizar transacciones automáticamente.',
        tags: ['n8n', 'Gemini AI', 'Telegram', 'Google Sheets'],
        github: null,
        live: null,
    },
    {
        title: 'Symmetria - Gestión Kinesiológica',
        category: 'Web App',
        description: 'Sistema integral de gestión de turnos e historias clínicas desarrollado a medida para el sector de kinesiología. Cuenta con una API RESTful escalable  en Laravel y una interfaz interactiva en React, aplicando principios de Clean Code.',
        tags: ['Laravel', 'React', 'REST API', 'Clean Code'],
        github: null,
        live: null,
    },
    {
        title: 'Autos VIP Tucumán - Concesionaria',
        category: 'Web App',
        description: 'Plataforma administrativa a medida para el sector automotriz, enfocada en el control ágil del inventario de vehículos, gestión de clientes y seguimiento de ventas. Desarrollada integrando React y Laravel , con Arquitectura en Capas y principios SOLID para asegurar alta mantenibilidad.',
        tags: ['Laravel', 'React', 'SOLID', 'MySQL'],
        github: null,
        live: null,
    }
];
const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'Web App', label: 'Web App' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Automation', label: 'Automation' },
];
export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-6 bg-surface">
            <div className="max-w-6xl mx-auto">
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
                {/* Tabs de categorías */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setActiveCategory(id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                ${activeCategory === id
                                    ? 'bg-heading text-white shadow-md'
                                    : 'bg-background border border-border text-muted hover:text-heading'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Grid de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            {/* Badge de categoría + fecha */}
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
                </div>

            </div>
        </section>
    );
}