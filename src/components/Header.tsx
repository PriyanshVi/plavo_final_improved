import React from 'react';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" stroke="#1dbfa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.87 5.093 2.36 7.09L4 29l7.18-2.31A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" stroke="#25d366" strokeWidth="2" fill="none"/>
    <path d="M22.2 19.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.18 4.42.72.28 1.28.45 1.72.58.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" fill="#25d366"/>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
        <span>Plavo India Pvt Ltd</span>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="contact-info" style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
        <a className="card-btn" href="tel:8076727357" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1rem', padding: '0.3rem 0.9rem' }}>
          <PhoneIcon />
          Call
        </a>
        <a className="whatsapp-btn" href="https://wa.me/918076727357" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1rem', padding: '0.3rem 0.9rem' }}>
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header; 