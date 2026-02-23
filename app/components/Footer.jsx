'use client';

import { Github, Linkedin, Mail, Heart, MapPin, CalendarPlus } from 'lucide-react';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: Github, href: 'https://github.com/Octahau', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/haurigotoctavio', label: 'LinkedIn' },
    { icon: Mail, href: 'haurigotposseoctavio@gmail.com', label: 'Email' },
];

export default function Footer() {
    const scrollTo = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-heading text-white/80">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">Octavio Haurigot</h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-5">
                            Full Stack Developer apasionado por crear soluciones escalables y experiencias web modernas.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-primary transition-colors"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <nav className="grid grid-cols-2 gap-2">
                            {quickLinks.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={(e) => scrollTo(e, href)}
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
                        <div className="space-y-3 text-sm">
                            <p className="flex items-center gap-2 text-white/60">
                                <Mail size={14} /> haurigotposseoctavio@gmail.com
                            </p>
                            <p className="flex items-center gap-2 text-white/60"><MapPin size={14} /> Tucumán, Argentina</p>
                            <p className="flex items-center gap-2 text-white/60"><CalendarPlus size={14} /> Disponible para freelance & part-time</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} Octavio Haurigot Posse. All rights reserved.
                    </p>
                    <p className="text-sm text-white/40 flex items-center gap-1">
                    </p>
                </div>
            </div>
        </footer>
    );
}
