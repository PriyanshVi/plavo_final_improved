import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const headerStyles = `
/* ——— Custom Header ——— */
.custom-header {
  background: rgba(255,255,255,0.92) !important;
  padding: 1rem 2rem !important;
  box-shadow: 0 4px 24px rgba(29,191,163,0.10) !important;
  border-bottom: 1px solid #e0e0e0 !important;
  position: sticky !important;
  top: 0 !important;
  z-index: 100 !important;
  backdrop-filter: blur(8px) !important;
  transition: background 0.3s, box-shadow 0.3s !important;
}

/* --- NEW: Header Content Wrapper --- */
.header-content {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

/* ——— Custom Logo ——— */
.custom-logo {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 1rem !important;
}
.custom-logo-img {
  height: 70px !important;
  width: 70px !important;
  object-fit: contain;
  border-radius: 50% !important;
  border: 2px solid #1dbfa3 !important;
  background: #fff !important;
  box-shadow: 0 2px 8px rgba(29,191,163,0.10) !important;
}
.custom-logo-text {
  font-size: 1.5rem !important;
  font-weight: bold !important;
  color: #1dbfa3 !important;
  text-align: left !important;
  margin-top: 0 !important;
  line-height: 1.2;
}

/* ——— Navigation ——— */
.nav {
  display: flex !important;
  align-items: center !important;
  gap: 1.5rem !important;
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

/* ——— Contact buttons ——— */
.contact-info {
  display: flex;
  gap: 0.7rem;
  align-items: center;
}
.card-btn,
.whatsapp-btn {
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

/* ——— Responsive tweaks (unchanged) ——— */
@media (max-width: 900px) {
  .header-content { flex-direction: column; gap: 1.2rem; }
  .nav { gap: 1rem; margin-top: 0.7rem; }
}
@media (max-width: 600px) {
  .custom-header { padding: 0.8rem 0.5rem; }
  .nav { flex-direction: column; gap: 0.7rem; align-items: flex-start; }
}
`;

const Header: React.FC = () => (
  <>
    <style>{headerStyles}</style>

    <header className="custom-header">
      <div className="header-content">

        <div className="custom-logo">
          <img src="/logo_plavo.png" alt="Logo" className="custom-logo-img" />
          <span className="custom-logo-text">
            Plavo India <br /> Pvt Ltd
          </span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="contact-info">
          <a className="card-btn" href="tel:8076727357">
            <FiPhone size={18} /> Call
          </a>
          <a
            className="whatsapp-btn"
            href="https://wa.me/918076727357"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </div>
        
      </div>
    </header>
  </>
);

export default Header;