import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const gradientMoveKeyframes = `
@keyframes gradientMove {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}
`;

const Footer: React.FC = () => (
  <footer
    className="footer"
    style={{
      position: 'relative',
      background: 'linear-gradient(90deg, #1dbfa3 0%, #1de9b6 100%)',
      color: '#fff',
      textAlign: 'center',
      padding: '2.2rem 1rem 1.2rem 1rem',
      marginTop: '2.5rem',
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      boxShadow: '0 -4px 24px rgba(29,191,163,0.13)',
      overflow: 'hidden',
    }}
  >
    {/* Inject animation keyframes directly */}
    <style>{gradientMoveKeyframes}</style>

    {/* Decorative, subtle floating leaf icon */}
    <span
      style={{
        position: 'absolute',
        top: 10,
        left: 20,
        opacity: 0.08,
        fontSize: 100,
        zIndex: 0,
        color: '#fff',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <FaLeaf />
    </span>

    <div
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'rgba(255,255,255,0.11)',
        borderRadius: 18,
        display: 'inline-block',
        padding: '1.1rem 2.2rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        backdropFilter: 'blur(2px)',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 600,
          letterSpacing: '0.5px',
          color: '#fff',
          textShadow: '0 2px 8px rgba(29,191,163,0.10)',
        }}
      >
        © 2025 Plavo India Pvt Ltd. All Rights Reserved.
      </p>
      <p
        style={{
          margin: '0.7rem 0 0 0',
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: '0.5px',
          color: '#e0fff8',
        }}
      >
        Designed by <span style={{ color: '#e0fff8', fontWeight: 700 }}>Plavo India Pvt Ltd</span>
      </p>
    </div>

    {/* Animated gradient bar at the bottom */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 8,
        background: 'linear-gradient(90deg, #fff 0%, #1de9b6 100%)',
        opacity: 0.22,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        zIndex: 1,
        animation: 'gradientMove 6s linear infinite alternate',
        backgroundSize: '200% 100%',
      }}
    />
  </footer>
);

export default Footer;
