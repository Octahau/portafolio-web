import Navbar from './components/Navbar';
import Hero from './components/Hero';

/*
  📦 APP — Componente raíz de la aplicación

  ¿Qué hace?
  - Renderiza el Navbar (siempre visible).
  - Renderiza cada sección del portafolio.
  - Las secciones que aún no están construidas usan placeholders.
  - Cada sección tiene un id que coincide con los links del Navbar.
*/

// Secciones que todavía no hemos construido (PASOS futuros)
const placeholderSections = [
  { id: 'about', title: 'About', emoji: '👤' },
  { id: 'experience', title: 'Experience', emoji: '💼' },
  { id: 'projects', title: 'Projects', emoji: '🚀' },
  { id: 'skills', title: 'Skills', emoji: '⚡' },
  { id: 'contact', title: 'Contact', emoji: '📬' },
];

function App() {
  return (
    <>
      {/* Navbar fijo en la parte superior */}
      <Navbar />

      {/* PASO 2: Hero Section (ya construida) */}
      <Hero />

      {/* Secciones placeholder — las iremos reemplazando en pasos futuros */}
      {placeholderSections.map(({ id, title, emoji }, index) => (
        <section
          key={id}
          id={id}
          className={`
            min-h-screen flex flex-col items-center justify-center
            px-6
            ${index % 2 === 0 ? 'bg-background' : 'bg-surface'}
          `}
        >
          <span className="text-6xl mb-4">{emoji}</span>
          <h2 className="text-4xl font-bold text-heading mb-2">{title}</h2>
          <p className="text-muted text-lg">
            Sección {title} — se construirá en un paso futuro
          </p>
        </section>
      ))}
    </>
  );
}

export default App;
