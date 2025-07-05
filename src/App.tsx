import React from 'react';
import { Header, HeroCarousel } from './components/Hero'; // Named exports
import Services from './components/Services';             // Default export
import About from './components/About';                   // Default export
import Gallery from './components/Gallery';               // Default export
import Contact from './components/Contact';               // Default export
import Footer from './components/Footer';                 // Default export
import FloatingIcons from './components/FloatingIcons';

const appAnimations = `
@keyframes appFadeIn {
  from { opacity: 0;}
  to { opacity: 1;}
}
`;

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(120deg, #e0f7fa 0%, #f8fffc 100%)',
        backgroundAttachment: 'fixed',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#222',
        position: 'relative',
        animation: 'appFadeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
        overflowX: 'hidden',
      }}
    >
      <style>{appAnimations}</style>

      <div style={{ width: '100%', position: 'sticky', top: 0, zIndex: 100 }}>
        <Header />
      </div>

      <div style={{ height: 16 }} />
      <HeroCarousel />
      <div style={{ height: 32 }} />
      <Services />
      <div style={{ height: 32 }} />
      <About />
      <div style={{ height: 32 }} />
      <Gallery />
      <div style={{ height: 32 }} />
      <Contact />
      <div style={{ height: 32 }} />
      <Footer />
      <FloatingIcons />
    </div>
  );
}

export default App;
