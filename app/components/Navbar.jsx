'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Experience', href: 'experience' },
    { label: 'Projects', href: 'projects' },
    { label: 'Skills', href: 'skills' },
    { label: 'Contact', href: 'contact' },
];


const SCROLL_THRESHOLD = 10;

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const [hidden, setHidden] = useState(false);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const lastScrollY = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            setScrolled(currentY > 20);

            if (currentY > lastScrollY.current + SCROLL_THRESHOLD) {
                setHidden(true);
                setMobileOpen(false);
            } else if (currentY < lastScrollY.current - SCROLL_THRESHOLD) {
                setHidden(false);
            }

            if (currentY <= 10) {
                setHidden(false);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const handleActiveSection = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollY + windowHeight >= docHeight - 50) {
                setActiveSection(navLinks[navLinks.length - 1].href);
                return;
            }
            let current = 'home';
            for (const { href } of navLinks) {
                const el = document.getElementById(href);
                if (el) {
                    const top = el.offsetTop - 150;
                    if (scrollY >= top) {
                        current = href;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleActiveSection);
        handleActiveSection();

        return () => window.removeEventListener('scroll', handleActiveSection);
    }, []);
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <>
            <nav
                className={`
          fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4
          transition-transform duration-300 ease-in-out
          ${hidden ? '-translate-y-full' : 'translate-y-0'}
        `}
            >
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`
            w-full max-w-4xl px-6 py-3 rounded-full
            flex items-center justify-between
            border border-border
            transition-all duration-300
            ${scrolled
                            ? 'bg-surface/90 backdrop-blur-xl shadow-lg shadow-black/5'
                            : 'bg-surface/70 backdrop-blur-md'
                        }
          `}
                >
                    {/* ─── LOGO ─── */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-xl font-bold text-heading tracking-tight cursor-pointer"
                    >
                        {'<'}
                        <span className="text-primary">O</span>
                        {'/>'}
                    </button>

                    {/* ─── LINKS DE ESCRITORIO (hidden en móvil, flex en md+) ─── */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => (
                            <li key={href}>
                                <button
                                    onClick={() => scrollToSection(href)}
                                    className={`
                    relative px-4 py-2 text-sm font-medium rounded-full
                    transition-colors duration-200 cursor-pointer
                    ${activeSection === href
                                            ? 'text-primary'
                                            : 'text-body hover:text-heading'
                                        }
                  `}
                                >
                                    {label}

                                    {activeSection === href && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* ─── BOTÓN HAMBURGUESA (visible solo en móvil) ─── */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-full text-body hover:text-heading hover:bg-background transition-colors cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {/* Si el menú está abierto muestra X, si no muestra ☰ */}
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>
            </nav>

            {/* ─── MENÚ MÓVIL (aparece debajo del navbar) ─── */}
            <AnimatePresence>
                {mobileOpen && !hidden && (
                    <motion.div
                        // Animaciones de entrada y salida del menú móvil
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-4 right-4 z-40 bg-surface/95 backdrop-blur-xl rounded-2xl border border-border shadow-xl p-4 md:hidden"
                    >
                        <ul className="flex flex-col gap-1">
                            {navLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <button
                                        onClick={() => scrollToSection(href)}
                                        className={`
                      w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      transition-colors duration-200 cursor-pointer
                      ${activeSection === href
                                                ? 'text-primary bg-primary/10'
                                                : 'text-body hover:text-heading hover:bg-background'
                                            }
                    `}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
