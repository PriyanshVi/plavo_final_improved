import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const aboutAnimations = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes gradientMove {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}
`;

const About: React.FC = () => (
  <section
    id="about"
    style={{
      position: 'relative',
      padding: '3.5rem 1.5rem 3rem 1.5rem',
      margin: '2.5rem auto',
      maxWidth: 820,
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
    <style>{aboutAnimations}</style>

    <span
      style={{
        position: 'absolute',
        top: 28,
        left: 38,
        opacity: 0.08,
        fontSize: 120,
        zIndex: 0,
        color: '#1dbfa3',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <FaLeaf />
    </span>

    <img
      src="/logo_plavo.png"
      alt="Plavo India Logo"
      style={{
        display: 'block',
        margin: '0 auto 1rem auto',
        height: 100,
        animation: 'fadeInUp 1.1s 0s cubic-bezier(0.23, 1, 0.32, 1) both',
      }}
    />

    <h2
      style={{
        fontSize: '2.5rem',
        fontWeight: 900,
        color: '#1dbfa3',
        marginBottom: '1.3rem',
        letterSpacing: '1.5px',
        position: 'relative',
        display: 'block',
        zIndex: 2,
        textShadow: '0 4px 16px rgba(29,191,163,0.10)',
        animation: 'fadeInUp 1.2s 0.1s cubic-bezier(0.23, 1, 0.32, 1) both',
      }}
    >
      About Us
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
        fontSize: '1.22rem',
        lineHeight: 1.8,
        maxWidth: 670,
        margin: '0 auto',
        fontWeight: 500,
        letterSpacing: '0.01em',
        zIndex: 2,
        position: 'relative',
        background: 'rgba(255,255,255,0.75)',
        borderRadius: 18,
        padding: '1.2rem 1.5rem',
        boxShadow: '0 2px 12px rgba(29,191,163,0.07)',
        backdropFilter: 'blur(2px)',
        animation: 'fadeInUp 1.3s 0.2s cubic-bezier(0.23, 1, 0.32, 1) both',
      }}
    >
      <span style={{ color: '#1dbfa3', fontWeight: 700 }}>Plavo India Pvt Ltd</span> is an emerging name for&nbsp;
      <span style={{ color: '#1dbfa3', fontWeight: 700 }}>innovation</span>,&nbsp;
      <span style={{ color: '#1dbfa3', fontWeight: 700 }}>creativity</span>,&nbsp;
      <span style={{ color: '#1dbfa3', fontWeight: 700 }}>quality</span>, and&nbsp;
      <span style={{ color: '#1dbfa3', fontWeight: 700 }}>services</span> in the fragrance industry.
      <br /><br />
      Established with a vision to become a pioneer in manufacturing eco-friendly aroma ingredients, we have grown to serve clients across the globe. Our expertise includes developing and manufacturing fragrances, aroma chemicals, and essential oils for a wide range of applications.
    </p>

    {/* --- NEW CODE ADDED HERE --- */}
    <a
      href="/plavo-brochure.pdf" // Make sure your PDF is named this in the /public folder
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        marginTop: '1.8rem',
        padding: '0.8rem 1.8rem',
        background: 'linear-gradient(90deg, #1dbfa3 60%, #1de9b6 100%)',
        color: '#ffffff',
        fontWeight: 700,
        textDecoration: 'none',
        borderRadius: 50,
        boxShadow: '0 4px 20px rgba(29, 191, 163, 0.25)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        animation: 'fadeInUp 1.4s 0.3s cubic-bezier(0.23, 1, 0.32, 1) both',
        zIndex: 2,
        position: 'relative',
      }}
    >
      Download Our Brochure
    </a>
    {/* --- END OF NEW CODE --- */}

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

export default About;