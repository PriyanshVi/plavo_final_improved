import React from 'react';

const galleryAnimations = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes gradientMove {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}
`;

const Gallery: React.FC = () => (
  <section
    className="gallery"
    id="gallery"
    style={{
      position: 'relative',
      padding: '3.5rem 1.5rem 3rem 1.5rem',
      margin: '2.5rem auto',
      maxWidth: 900,
      borderRadius: 32,
      background: 'linear-gradient(135deg, #e0f7fa 0%, #f8fffc 100%)',
      boxShadow: '0 8px 32px rgba(29,191,163,0.13)',
      overflow: 'hidden',
      textAlign: 'center',
      zIndex: 1,
      animation: 'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1)',
      backdropFilter: 'blur(4px)',
    }}
  >
    {/* Inject animation keyframes directly */}
    <style>{galleryAnimations}</style>

    <h2
      style={{
        fontSize: '2.2rem',
        fontWeight: 900,
        color: '#1dbfa3',
        marginBottom: '1.1rem',
        letterSpacing: '1.2px',
        position: 'relative',
        display: 'inline-block',
        zIndex: 2,
        textShadow: '0 4px 16px rgba(29,191,163,0.10)',
        animation: 'fadeInUp 1.2s 0.1s cubic-bezier(0.23, 1, 0.32, 1) both',
      }}
    >
      Gallery
      <span
        style={{
          display: 'block',
          width: 80,
          height: 5,
          background: 'linear-gradient(90deg, #1dbfa3 60%, #1de9b6 100%)',
          borderRadius: 3,
          margin: '0.7rem auto 0 auto',
        }}
      />
    </h2>

    <p
      style={{
        color: '#222',
        fontSize: '1.18rem',
        lineHeight: 1.7,
        maxWidth: 650,
        margin: '0 auto',
        fontWeight: 500,
        letterSpacing: '0.01em',
        background: 'rgba(255,255,255,0.75)',
        borderRadius: 18,
        padding: '1.2rem 1.5rem',
        boxShadow: '0 2px 12px rgba(29,191,163,0.07)',
        backdropFilter: 'blur(2px)',
        zIndex: 2,
        position: 'relative',
        animation: 'fadeInUp 1.3s 0.2s cubic-bezier(0.23, 1, 0.32, 1) both',
      }}
    >
      Gallery coming soon.
    </p>

    {/* Subtle animated gradient accent at the bottom */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 20,
        background: 'linear-gradient(90deg, #1dbfa3 0%, #1de9b6 100%)',
        opacity: 0.18,
        borderRadius: '0 0 32px 32px',
        zIndex: 1,
        animation: 'gradientMove 6s linear infinite alternate',
        backgroundSize: '200% 100%',
      }}
    />
  </section>
);

export default Gallery;
