import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const workExperience = [
    {
        title: "IT Support & Software Developer",
        company: "Albertus",
        location: "Yerba Buena, Tucumán, Argentina",
        period: "Jun 2025 - Presente",
        description: "Desarrollo de soluciones web full-stack modernas para optimizar procesos internos usando Laravel y Next.js. Administración proactiva de infraestructura IT y bases de datos MySQL para el sistema legacy central en Delphi 7.",
        tags: ["Laravel", "Next.js", "MySQL", "Delphi 7", "IT Support"],
    },
    {
        title: "Co-Founder & Software Engineer",
        company: "DevSol",
        location: "Tucumán, Argentina",
        period: "Jul 2025 - Presente",
        description: "Co-fundador de agencia de software enfocada en productos digitales. Desarrollo de la plataforma e-commerce 'Bronovios' integrando pasarelas de pago y Brevo, y arquitectura de un sistema ERP personalizado para el sector de joyería enfocado en optimización de ventas.",
        tags: ["Next.js", "PostgreSQL", "Full Stack", "ERP", "E-commerce"],
    },
    {
        title: "Full Stack Software Developer",
        company: "Freelance",
        location: "Remoto / Tucumán",
        period: "Jul 2025 - Presente",
        description: "Desarrollo de sistemas de gestión personalizados para clientes en rubros como kinesiología, automotriz e inmobiliaria. Arquitectura de APIs RESTful escalables aplicando Arquitectura en Capas, Inyección de Dependencias y principios SOLID para asegurar alto rendimiento.",
        tags: ["Laravel", "React", "Next.js", "PostgreSQL", "SOLID"],
    }
];

const education = [
    {
        title: "Ingeniería en Sistemas de Información",
        institution: "Universidad Tecnológica Nacional (UTN FRT)",
        location: "Tucumán, Argentina",
        period: "Cursando 4to año",
        description: "Carrera de grado de 5 años con enfoque principal en Arquitectura Backend y Desarrollo de Software.",
        tags: ["Backend Architecture", "Software Development"],
    },
    {
        title: "Inglés - Nivel B2 (Upper Intermediate)",
        institution: "A.T.I.C.A.N.A.",
        location: "Tucumán, Argentina",
        period: "2023 - 2024",
        description: "Desarrollo de competencias bilingües avanzadas. Capacidad demostrada para la lectura fluida de documentación técnica, redacción profesional y comunicación oral en entornos de trabajo internacionales.",
        tags: ["English B2", "Upper Intermediate", "Technical Reading"],
    }
];

const achievements = [
    {
        category: "Proyecto Destacado",
        title: "AI-Powered Personal Finance Tracker",
        institution: "Proyecto Personal",
        location: "Remoto",
        date: "Oct 2025 - Presente",
        description: "Sistema automatizado de seguimiento de gastos vía Telegram. Diseñé un flujo con n8n para capturar gastos e integré la API de Gemini para categorizar datos de transacciones no estructuradas y sincronizarlos en tiempo real con Google Sheets.",
    },
    {
        category: "Hackathon",
        title: "Participante - n8n Hackathon",
        institution: "Xetro",
        location: "Tucuman",
        date: "17 de Agosto 2025",
        description: "Participación en hackathon enfocado en automatización. Diseñé e implementé flujos de trabajo eficientes utilizando n8n para resolver problemas de automatización. La consigna era simple, desarrollar una automatizacion que facilite y tenga gran impacto en algun proceso de la empresa.",
    }
];

const tabs = [
    { id: 'work', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Award },
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
                {/* Header: título + fecha (en fila en desktop, en columna en móvil) */}
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
                    <p className="text-gray-600">A summary of my professional journey and accomplishments.</p>
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