import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, MapPin, MessageSquare, User, AtSign } from 'lucide-react';

/*
  📬 CONTACT — Sección de contacto con formulario funcional.

  Para que los emails lleguen a tu correo, usamos Web3Forms (gratis, sin backend).
  
  SETUP (solo una vez):
  1. Andá a https://web3forms.com/
  2. Poné tu email (haurigotposseoctavio@gmail.com)
  3. Te van a mandar un Access Key por mail
  4. Reemplazá 'TU_ACCESS_KEY_AQUI' en la línea de abajo con ese key
*/
const WEB3FORMS_KEY = '34a5dfcc-6ef6-4dcc-b572-000bcf291463';

// Tus redes sociales para la columna izquierda
const socialLinks = [
    {
        icon: Linkedin,
        name: 'LinkedIn',
        handle: '@haurigotoctavio',
        description: 'Conectemos profesionalmente',
        href: 'https://linkedin.com/in/haurigotoctavio',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
    },
    {
        icon: Github,
        name: 'GitHub',
        handle: '@Octahau',
        description: 'Mirá mis proyectos y contribuciones',
        href: 'https://github.com/Octahau',
        color: 'text-gray-800',
        bg: 'bg-gray-100',
    },
    {
        icon: Mail,
        name: 'Email',
        handle: 'haurigotposseoctavio@gmail.com',
        description: 'Escribime directamente',
        href: 'mailto:haurigotposseoctavio@gmail.com',
        color: 'text-red-500',
        bg: 'bg-red-50',
    },
];

export default function Contact() {
    // Estado del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    // Actualizar campos del formulario
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Enviar formulario via Web3Forms
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    from_name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'Nuevo mensaje desde portafolio',
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-surface">
            <div className="max-w-6xl mx-auto">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        Contacto
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        ¿Tenés un proyecto en mente? Enviame un mensaje y te respondo lo antes posible.
                    </p>
                </motion.div>

                {/* Layout 2 columnas */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                    {/* ─── Columna izquierda: Social Links ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <MessageSquare size={20} className="text-heading" />
                            <h3 className="text-xl font-bold text-heading">Connect With Me</h3>
                        </div>
                        <p className="text-muted text-sm">
                            Seguime en redes para estar al tanto de mis proyectos e insights de desarrollo.
                        </p>

                        <div className="space-y-3">
                            {socialLinks.map(({ icon: Icon, name, handle, description, href, color, bg }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors group"
                                >
                                    <div className={`${bg} p-2.5 rounded-lg`}>
                                        <Icon size={20} className={color} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-heading group-hover:text-primary transition-colors">
                                            {name} <span className="font-normal text-muted text-sm">{handle}</span>
                                        </p>
                                        <p className="text-sm text-muted">{description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Info extra */}
                        <div className="flex items-center gap-2 text-sm text-muted pt-2">
                            <MapPin size={16} />
                            <span>Tucumán, Argentina</span>
                        </div>
                    </motion.div>

                    {/* ─── Columna derecha: Formulario ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-background border border-border rounded-2xl p-6 sm:p-8">
                            <div className="flex items-center gap-2 mb-2">
                                <Mail size={20} className="text-heading" />
                                <h3 className="text-xl font-bold text-heading">Send Me a Message</h3>
                            </div>
                            <p className="text-muted text-sm mb-6">
                                Contame sobre tu proyecto y te respondo lo antes posible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Nombre + Email en fila */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-heading mb-1.5">
                                            Name <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-lg text-heading text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-heading mb-1.5">
                                            Email <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <AtSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-lg text-heading text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-heading mb-1.5">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project collaboration, etc."
                                        className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-heading text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-heading mb-1.5">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project, requirements, timeline, and budget..."
                                        className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-heading text-sm placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-y"
                                    />
                                </div>

                                {/* Botón de envío */}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-heading text-white font-medium rounded-lg hover:bg-heading/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {status === 'sending' ? (
                                        <>Enviando...</>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {/* Mensajes de feedback */}
                                {status === 'success' && (
                                    <p className="text-center text-sm text-emerald-600 font-medium">
                                        ✅ ¡Mensaje enviado! Te respondo pronto.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-center text-sm text-red-500 font-medium">
                                        ❌ Error al enviar. Intentá de nuevo o escribime directo a mi email.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
