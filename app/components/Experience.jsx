'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const workExperience = [
    {
        title: "Co-Fundador & Ingeniero de Software",
        company: "DevSoul",
        location: "Tucumán, Argentina (Remoto)",
        period: "Jul 2025 - Presente",
        description: "Arquitectura y desarrollo Full-Stack de sistemas de gestión (ERP) a medida para el sector retail utilizando TypeScript, Next.js y NestJS. Centralización de logística, inventarios y flujos de ventas, e integración de plataformas de terceros (Brevo) para la automatización de correos y sincronización de datos.",
        tags: ["Next.js", "NestJS", "TypeScript", "ERP", "API Integrations"],
    },
    {
        title: "Desarrollador de Software",
        company: "Albertus S.A.S.",
        location: "Yerba Buena, Tucumán, Argentina",
        period: "Ago 2025 - Presente",
        description: "Modernización del sistema central de reportes de la empresa, migrando operaciones críticas desde un entorno legacy (Delphi) hacia arquitecturas web escalables (Laravel/React). Resolución de cuellos de botella mediante optimización de consultas SQL (MySQL) y diseño de APIs RESTful robustas.",
        tags: ["Laravel", "React", "MySQL", "Legacy Migration", "REST APIs"],
    },
    {
        title: "Desarrollador Full-Stack",
        company: "Freelance",
        location: "Remoto / Tucumán",
        period: "May 2025 - Presente",
        description: "Desarrollo del ciclo de vida completo de plataformas B2B y herramientas de gestión operativa. Construcción de motores financieros complejos con cálculo dinámico de cuotas (Cron Jobs) e integración de APIs externas, aplicando estrictamente Clean Code, Inyección de Dependencias y principios SOLID.",
        tags: ["Laravel", "Next.js", "PostgreSQL", "Cron Jobs", "SOLID"],
    }
];

const education = [
    {
        title: "Ingeniería en Sistemas de Información",
        institution: "Universidad Tecnológica Nacional (UTN - FRT)",
        location: "Tucumán, Argentina",
        period: "Mar 2022 - Presente",
        description: "Cursando 4to año (Cursado avanzado). Carrera de grado con enfoque principal en Arquitectura de Software, bases de datos, algoritmos, paradigmas de programación (OOP) y modelado de sistemas complejos.",
        tags: ["Software Architecture", "System Design", "OOP"],
    },
    {
        title: "Inglés - Nivel B2 (Upper Intermediate)",
        institution: "A.T.I.C.A.N.A.",
        location: "Tucumán, Argentina",
        period: "2023 - 2024",
        description: "Capacidad demostrada para la lectura fluida de documentación técnica, participación en Code Reviews, redacción profesional y comunicación oral en entornos de trabajo internacionales.",
        tags: ["English B2", "Technical Communication", "Bilingual"],
    }
];

const achievements = [
    {
        title: "AI-Powered Personal Finance Tracker",
        subtitle: "Proyecto Personal | Innovación & IA",
        location: "Remoto",
        period: "Oct 2025 - Presente",
        description: "Sistema automatizado de seguimiento financiero. Diseñé una arquitectura orientada a eventos con n8n para capturar datos e integré la API de Gemini (LLMs) para categorizar transacciones no estructuradas, sincronizando el flujo de datos en tiempo real.",
        tags: ["n8n", "Gemini API", "Automation", "LLM Integration"]
    },
    {
        title: "Participante Destacado - n8n Hackathon",
        subtitle: "Organizado por XETRO",
        location: "Tucumán, Argentina",
        period: "Ago 2025",
        description: "Diseño e implementación de flujos de trabajo asíncronos y automatización de procesos utilizando n8n. El enfoque del proyecto estuvo en resolver cuellos de botella operativos mediante la orquestación eficiente de APIs de múltiples plataformas.",
        tags: ["n8n", "API Integration", "Workflows", "Problem Solving"]
    }
];

const tabs = [
    { id: 'work', label: 'Experiencia', icon: Briefcase },
    { id: 'education', label: 'Educación', icon: GraduationCap },
    { id: 'achievements', label: 'Logros & IA', icon: Award }, // Le agregué "& IA" para que llame la atención
];

function TimelineItem({ title, subtitle, location, period, description, tags }) {
    return (
        <div className="relative pl-8 pb-12 last:pb-0">
            {/* Línea vertical */}
            <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-border" />
            {/* Punto/círculo */}
            <div className="absolute left-[-4px] top-2 w-3 h-3 rounded-full bg-heading border-2 border-background" />

            {/* Tarjeta */}
            <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                {/* Header: título + fecha */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                        <h3 className="text-lg font-bold text-heading">{title}</h3>
                        <p className="text-sm text-muted">{subtitle}</p>
                    </div>
                    <div className="sm:text-right text-sm text-muted shrink-0">
                        <p>{period}</p>
                        <p>{location}</p>
                    </div>
                </div>

                <p className="text-body text-sm mb-4">{description}</p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-heading text-white text-xs font-medium rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Experience() {
    const [activeTab, setActiveTab] = useState('work');

    return (
        <section id="experience" className="py-20 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Experience</h2>
                    <p className="text-gray-600">Un resumen de mi trayectoria técnica y proyectos de impacto.</p>
                </motion.div>
                <div className="flex bg-surface rounded-full p-1.5 border border-border mb-12">
                    {tabs.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
        ${activeTab === id
                                    ? 'bg-heading text-white shadow-md'
                                    : 'text-muted hover:text-heading'
                                }`}
                        >
                            <Icon size={16} />
                            {label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {activeTab === 'work' && (
                        <div>
                            {workExperience.map((exp) => (
                                <TimelineItem
                                    key={exp.title}
                                    title={exp.title}
                                    subtitle={exp.company}
                                    location={exp.location}
                                    period={exp.period}
                                    description={exp.description}
                                    tags={exp.tags}
                                />
                            ))}
                        </div>
                    )}
                    {activeTab === 'education' && (
                        <div>
                            {education.map((edu) => (
                                <TimelineItem
                                    key={edu.title}
                                    title={edu.title}
                                    subtitle={edu.institution}
                                    location={edu.location}
                                    period={edu.period}
                                    description={edu.description}
                                    tags={edu.tags}
                                />
                            ))}
                        </div>
                    )}
                    {activeTab === 'achievements' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {achievements.map((item) => (
                                <div key={item.title} className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                            {item.category}
                                        </span>
                                        <span className="text-sm text-muted">{item.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-heading mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted mb-3">{item.institution}</p>
                                    <p className="text-body text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}