import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const headerStyles = `
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.92);
  padding: 1.2rem 2.5rem;
  box-shadow: 0 4px 24px rgba(29,191,163,0.10);
  border-bottom: 2px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  transition: background 0.3s, box-shadow 0.3s;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.logo-img {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #1dbfa3;
  background: #fff;
  box-shadow: 0 2px 8px rgba(29,191,163,0.10);
}
.logo-text {
  font-size: 2rem;
  font-weight: bold;
  color: #1dbfa3;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(29,191,163,0.10);
}
.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.nav a {
  text-decoration: none;
  color: #222;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.2s, border-bottom 0.2s;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
}
.nav a:hover {
  color: #1dbfa3;
  border-bottom: 2px solid #1dbfa3;
}
.contact-info {
  display: flex;
  gap: 0.7rem;
  align-items: center;
}
.card-btn, .whatsapp-btn {
  border: none;
  border-radius: 22px;
  padding: 0.5rem 1.3rem;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(29,191,163,0.10);
  text-decoration: none;
}
.card-btn {
  background: linear-gradient(90deg, #1dbfa3 60%, #1de9b6 100%);
  color: #fff;
}
.card-btn:hover {
  background: linear-gradient(90deg, #159e86 60%, #1de9b6 100%);
  transform: scale(1.05);
}
.whatsapp-btn {
  background: linear-gradient(90deg, #25d366 60%, #1dbfa3 100%);
  color: #fff;
}
.whatsapp-btn:hover {
  background: linear-gradient(90deg, #1ebe5d 60%, #1dbfa3 100%);
  transform: scale(1.05);
}
@media (max-width: 900px) {
  .header {
    flex-direction: column;
    gap: 1.2rem;
    padding: 1.2rem;
  }
  .nav {
    gap: 1rem;
    margin-top: 0.7rem;
  }
}
@media (max-width: 600px) {
  .header {
    padding: 0.8rem 0.5rem;
  }
  .nav {
    flex-direction: column;
    gap: 0.7rem;
    align-items: flex-start;
  }
}
`;

const Header: React.FC = () => {
  return (
    <>
      <style>{headerStyles}</style>
      <header className="header">
        {/* Logo Section */}
        <div className="logo">
          <img
            src="/logo.png"
            alt="Logo"
            className="logo-img"
          />
          <span className="logo-text">Plavo India Pvt Ltd</span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Contact Info */}
        <div className="contact-info">
          <a className="card-btn" href="tel:8076727357">
            <span style={{ display: 'inline', verticalAlign: 'middle' }}>
              <FiPhone size={18} color="#1dbfa3" />
            </span>
            Call
          </a>
          <a
            className="whatsapp-btn"
            href="https://wa.me/918076727357"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ display: 'inline', verticalAlign: 'middle' }}>
              <FaWhatsapp size={18} color="#25d366" />
            </span>
            WhatsApp
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
