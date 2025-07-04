import React from 'react';

const heroAnimations = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
`;

const Hero: React.FC = () => (
  <section
    className="hero"
    id="home"
    style={{
      position: 'relative',
      padding: '4rem 1.5rem 3.5rem 1.5rem',
      margin: '2.5rem auto 0 auto',
      maxWidth: 900,
      borderRadius: 40,
      background: 'linear-gradient(135deg, #e0f7fa 0%, #f8fffc 100%)',
      boxShadow: '0 8px 32px rgba(29,191,163,0.13)',
      textAlign: 'center',
      zIndex: 1,
      animation: 'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1)',
      backdropFilter: 'blur(4px)',
      overflow: 'hidden',
    }}
  >
    {/* Inject animation keyframes directly */}
    <style>{heroAnimations}</style>

    <h1
      style={{
        fontSize: '3rem',
        fontWeight: 900,
        color: '#1dbfa3',
        marginBottom: '1.3rem',
        letterSpacing: '1.5px',
        textShadow: '0 4px 16px rgba(29,191,163,0.13)',
        position: 'relative',
        display: 'inline-block',
        zIndex: 2,
        background: 'rgba(255,255,255,0.7)',
        borderRadius: 16,
        padding: '0.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(29,191,163,0.07)',
      }}
    >
      Welcome to Plavo
      <span
        style={{
          display: 'block',
          width: 100,
          height: 5,
          background: 'linear-gradient(90deg, #1dbfa3 60%, #1de9b6 100%)',
          borderRadius: 3,
          margin: '0.7rem auto 0 auto',
        }}
      />
    </h1>
    <p
      style={{
        color: '#222',
        fontSize: '1.35rem',
        lineHeight: 1.7,
        maxWidth: 600,
        margin: '1.5rem auto 0 auto',
        fontWeight: 500,
        letterSpacing: '0.01em',
        background: 'rgba(255,255,255,0.75)',
        borderRadius: 14,
        padding: '1.2rem 1.5rem',
        boxShadow: '0 2px 12px rgba(29,191,163,0.07)',
        zIndex: 2,
        position: 'relative',
      }}
    >
      Innovation, Creativity, Quality &amp; Services in Fragrances, Aroma Chemicals &amp; Essential Oils
    </p>

    {/* Subtle animated gradient accent at the bottom */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 24,
        background: 'linear-gradient(90deg, #1dbfa3 0%, #1de9b6 100%)',
        opacity: 0.18,
        borderRadius: '0 0 40px 40px',
        zIndex: 1,
        animation: 'gradientMove 6s linear infinite alternate',
        backgroundSize: '200% 100%',
      }}
    />
    {/* Inject gradientMove animation keyframes directly */}
    <style>{`
      @keyframes gradientMove {
        from { background-position: 0% 50%; }
        to { background-position: 100% 50%; }
      }
    `}</style>
  </section>
);

export default Hero;
