'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

function useTypingAnimation(texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
}

// ─── COMPONENTE HERO ───
export default function Hero() {
    const roles = [
        'Full Stack Developer',
        'Next.js & Laravel Expert',
        'Backend Architect',
        'Software Engineer',
    ];
    const typedText = useTypingAnimation(roles);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Cada hijo aparece 0.15s después del anterior
                delayChildren: 0.3,     // Esperamos 0.3s antes de empezar
            },
        },
    };

    // Cada "hijo" aparece subiendo desde abajo con un fade-in.
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    // Animación de la foto: aparece escalando desde 0
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 },
        },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-background relative overflow-hidden"
        >

            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            {/* ─── Contenedor principal con 2 columnas ─── */}
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* ═══════════ COLUMNA IZQUIERDA: Texto ═══════════ */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center lg:text-left order-2 lg:order-1"
                >
                    {/* Saludo */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            👋 ¡Hola! Bienvenido a mi portafolio
                        </span>
                    </motion.div>

                    {/* Nombre */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-4"
                    >
                        Soy{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Octavio Haurigot Posse
                        </span>
                    </motion.h1>

                    {/* Typing animation — El texto que se escribe solo */}
                    <motion.div variants={itemVariants} className="mb-6 h-10">
                        <span className="text-xl sm:text-2xl text-body font-medium">
                            {typedText}
                        </span>
                        {/* Cursor parpadeante — simula el cursor de una terminal */}
                        <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
                    </motion.div>

                    {/* Descripción breve */}
                    <motion.p
                        variants={itemVariants}
                        className="text-body text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                    >
                        Ingeniero en Sistemas en formación y Co-Founder de DevSol.
                        Especializado en crear soluciones escalables uniendo sistemas legacy
                        con tecnologías modernas como Laravel y Next.js.
                    </motion.p>

                    {/* Botones CTA (Call to Action) */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-border hover:border-primary text-heading font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Contáctame
                        </a>
                    </motion.div>

                    {/* Links a Redes Sociales */}
                    <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
                        {[
                            { icon: Github, href: 'https://github.com/Octahau', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://linkedin.com/in/haurigotoctavio', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:haurigotposseoctavio@gmail.com', label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full border border-border text-muted hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                                aria-label={label}
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ═══════════ COLUMNA DERECHA: Foto ═══════════ */}
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center order-1 lg:order-2"
                >
                    <div className="relative">
                        {/* Anillo decorativo detrás de la foto */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 scale-110" />

                        {/* Contenedor de la foto con borde gradient */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-surface shadow-2xl">
                            <img
                                src="/foto-perfil.jpeg"
                                alt="Foto de Octavio"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Badge decorativo flotante — da dinamismo */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-2 -right-2 bg-surface border border-border rounded-2xl px-4 py-2 shadow-lg"
                        >
                            <span className="text-sm font-medium text-heading">
                                💻 Disponible para trabajar
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* ─── Flecha "scroll down" ─── */}
            <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors"
                aria-label="Scroll to about section"
            >
                <ChevronDown size={28} />
            </motion.a>
        </section>
    );
}
