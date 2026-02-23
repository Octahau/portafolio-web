'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Calendar, Code2, Download } from 'lucide-react';

const personalInfo = {
    name: 'Octavio Haurigot Posse',
    location: 'Tucumán, Argentina',
    university: 'Universidad Tecnológica Nacional (UTN FRT)',
    degree: 'Ingeniería en Sistemas de Información',
    year: '4to año (en curso)',
    email: 'haurigotposseoctavio@gmail.com',
    phone: '+54 9 381 531-7795',
};

const stats = [
    {
        icon: MapPin,
        label: 'Ubicación',
        value: 'Tucumán, Argentina',
        color: 'text-blue-500',
        bg: 'bg-blue-50',
    },
    {
        icon: GraduationCap,
        label: 'Educación',
        value: 'UTN FRT - 4to Año',
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
    },
    {
        icon: Briefcase,
        label: 'Experiencia',
        value: '+2 Años (Albertus & Freelance)',
        color: 'text-violet-500',
        bg: 'bg-violet-50',
    },
    {
        icon: Calendar,
        label: 'Disponibilidad',
        value: 'Freelance & Part-time',
        color: 'text-amber-500',
        bg: 'bg-amber-50',
    },
];

const techStack = [
    'Next.js',
    'Laravel',
    'React',
    'TypeScript',
    'PostgreSQL',
    'n8n'
];

export default function About() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    return (
        <section id="about" className="py-24 px-6 bg-surface">
            <div className="max-w-6xl mx-auto">

                {/* ─── Título de la sección ─── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    {/* Badge superior */}
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        Sobre mí
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                        Conóceme un poco más
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Estudiante de ingeniería, desarrollador full-stack y emprendedor tecnológico.
                    </p>
                </motion.div>

                {/* ─── Grid principal: foto + texto ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                    {/* ═══════ COLUMNA IZQUIERDA: Foto (2 de 5 columnas) ═══════ */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="lg:col-span-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Fondo decorativo detrás de la foto */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />

                            {/* Contenedor de la foto con bordes redondeados */}
                            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-border shadow-xl">
                                <img
                                    src="/foto-perfil.jpeg"
                                    alt="Octavio Haurigot Posse"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Badge de experiencia flotante */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-4 -right-4 bg-surface border border-border rounded-2xl px-4 py-3 shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <Code2 size={18} className="text-primary" />
                                    <div>
                                        <p className="text-xs text-muted">Experiencia</p>
                                        <p className="text-sm font-semibold text-heading">+2 año</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ═══════ COLUMNA DERECHA: Texto + Stats (3 de 5 columnas) ═══════ */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Bio / Descripción personal */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <h3 className="text-2xl font-bold text-heading mb-4">
                                {personalInfo.name}
                            </h3>
                            <div className="space-y-4 text-body leading-relaxed">
                                <p>
                                    Soy estudiante avanzado de <strong className="text-heading">Ingeniería en Sistemas</strong> apasionado por la arquitectura de software.
                                    Mi enfoque combina la solidez de la ingeniería con la agilidad del desarrollo web moderno.
                                </p>
                                <p>
                                    Actualmente me desempeño como <strong className="text-heading">IT Support & Software Developer</strong> en Albertus, donde tengo el desafío único de
                                    mantener sistemas legacy en Delphi mientras migro procesos clave a soluciones web con <strong className="text-heading">Laravel y Next.js</strong>.
                                </p>
                                <p>
                                    También soy <strong className="text-heading">Co-Founder de DevSol</strong>, donde lidero el desarrollo de productos digitales como e-commerce y sistemas de gestión a medida,
                                    enfocándome en código limpio (SOLID) y arquitecturas escalables.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tarjetas de datos rápidos */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {stats.map(({ icon: Icon, label, value, color, bg }) => (
                                <motion.div
                                    key={label}
                                    variants={fadeInUp}
                                    className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300"
                                >
                                    {/* Icono con fondo de color */}
                                    <div className={`p-3 rounded-xl ${bg}`}>
                                        <Icon size={20} className={color} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                                        <p className="text-sm font-semibold text-heading">{value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Tech Stack Badges */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <p className="text-sm text-muted mb-3 uppercase tracking-wider">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-background border border-border text-sm font-medium text-heading rounded-full hover:border-primary/50 hover:text-primary transition-colors duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Botón de descarga del CV */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                        >
                            <a
                                href="/Octavio_Haurigot_Posse_CV.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                            >
                                <Download size={18} />
                                Descargar CV
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
