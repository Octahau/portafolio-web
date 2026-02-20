import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

/*
  📦 APP — Componente raíz de la aplicación

  Renderiza el Navbar (siempre visible) y cada sección del portafolio.
  Cada sección tiene un id que coincide con los links del Navbar.
*/

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
