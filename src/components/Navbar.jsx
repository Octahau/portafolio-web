import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/*
  📌 NAVBAR — Barra de navegación principal
  
  ¿Qué hace este componente?
  - Se queda FIJO en la parte superior de la pantalla (fixed + top).
  - Tiene efecto "glassmorphism" (fondo semitransparente + blur).
  - Cambia su aspecto al hacer scroll (sombra + más opacidad).
  - En pantallas pequeñas muestra un menú hamburguesa.
  - Al hacer clic en un link, hace scroll suave hasta la sección correspondiente.
*/

// Lista de links de navegación. Cada uno tiene un label (lo que se muestra)
// y un href (el id de la sección a la que apunta).
const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  // 'scrolled' controla si el usuario ha hecho scroll hacia abajo.
  // Lo usamos para añadir sombra y más opacidad al navbar.
  const [scrolled, setScrolled] = useState(false);

  // 'mobileOpen' controla si el menú móvil está abierto o cerrado.
  const [mobileOpen, setMobileOpen] = useState(false);

  // 'activeSection' guarda qué sección está actualmente visible en pantalla.
  const [activeSection, setActiveSection] = useState('home');

  // ─── EFECTO: Escuchar el scroll ───
  // useEffect se ejecuta cuando el componente se "monta" (aparece en pantalla).
  // Añadimos un "listener" que detecta cada vez que el usuario hace scroll.
  useEffect(() => {
    const handleScroll = () => {
      // Si scrolleamos más de 20px, marcamos 'scrolled' como true
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: cuando el componente se desmonte, quitamos el listener
    // para evitar "memory leaks" (fugas de memoria).
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ─── EFECTO: Detectar qué sección está visible (scroll position) ───
  // Recorre todas las secciones y elige la que está más cerca del top del viewport.
  // Funciona mejor que IntersectionObserver para secciones al final de la página.
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Si estamos casi al fondo de la página, activamos la última sección
      if (scrollY + windowHeight >= docHeight - 50) {
        setActiveSection(navLinks[navLinks.length - 1].href);
        return;
      }

      // Buscamos qué sección está más cerca del top del viewport (con offset de 150px)
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
    handleActiveSection(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  // ─── FUNCIÓN: Scroll suave al hacer clic ───
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false); // Cerramos el menú móvil si estaba abierto
    }
  };

  return (
    <>
      {/* 
        El navbar usa "fixed" para quedarse siempre visible.
        w-full: ocupa todo el ancho.
        z-50: se pone por encima de otros elementos.
        Usamos un div interior con max-w y mx-auto para centrar el contenido.
      */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4">
        <motion.div
          // Animación de entrada: el navbar aparece bajando desde arriba
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
                  {/* 
                    Indicador activo: un punto debajo del link activo.
                    layoutId hace que la animación se mueva suavemente entre links.
                  */}
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
        {mobileOpen && (
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
