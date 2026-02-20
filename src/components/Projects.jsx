import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

/*
  📦 PROJECTS — Sección de proyectos

  ¿Qué hace este componente?
  - Muestra los proyectos destacados en una grilla 2×2 (escritorio).
  - Por defecto muestra 4 proyectos (2 filas × 2 columnas).
  - Tiene un botón "Ver más" que revela un 5to proyecto.
  - Cada tarjeta tiene categoría, título, descripción, tags y links opcionales.
*/

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
        description: 'Sistema integral de gestión de turnos e historias clínicas desarrollado a medida para el sector de kinesiología. Cuenta con una API RESTful escalable en Laravel y una interfaz interactiva en React, aplicando principios de Clean Code.',
        tags: ['Laravel', 'React', 'REST API', 'Clean Code'],
        github: null,
        live: null,
    },
    {
        title: 'Autos VIP Tucumán - Concesionaria',
        category: 'Web App',
        description: 'Plataforma administrativa a medida para el sector automotriz, enfocada en el control ágil del inventario de vehículos, gestión de clientes y seguimiento de ventas. Desarrollada integrando React y Laravel, con Arquitectura en Capas y principios SOLID para asegurar alta mantenibilidad.',
        tags: ['Laravel', 'React', 'SOLID', 'MySQL'],
        github: null,
        live: null,
    }
];

// Cantidad de proyectos que se muestran por defecto (2×2 grid).
const DEFAULT_VISIBLE = 4;

export default function Projects() {
    // 'showAll' controla si mostramos todos los proyectos o solo los primeros 4.
    const [showAll, setShowAll] = useState(false);

    // Proyectos visibles según el estado.
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
