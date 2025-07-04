import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      {/* Inject app fade-in animation keyframes */}
      <style>{appAnimations}</style>

      {/* Wrap Header to preserve original layout */}
      <div style={{ width: '100%', position: 'sticky', top: 0, zIndex: 100 }}>
        <Header />
      </div>

      {/* Spacing between sections */}
      <div style={{ height: 16 }} />
      <Hero />
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
    </div>
  );
}

export default App;
