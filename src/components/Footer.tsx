import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const footerStyles = `
@keyframes gradientMove {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}
.footer {
  position: relative;
  background: linear-gradient(90deg, #f8fafc 0%, #e0f7fa 100%);
  color: #183c3c;
  text-align: center;
  padding: 2.2rem 1rem 1.2rem 1rem;
  margin-top: 2.5rem;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0 -4px 24px rgba(29,191,163,0.10);
  overflow: hidden;
}
.footer-leaf {
  position: absolute;
  top: 10px;
  left: 20px;
  opacity: 0.07;
  font-size: 100px;
  z-index: 0;
  color: #1dbfa3;
  pointer-events: none;
  user-select: none;
}
.footer-content {
  position: relative;
  z-index: 2;
  background: rgba(255,255,255,0.85);
  border-radius: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 1.1rem 2.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  backdrop-filter: blur(2px);
  min-width: 320px;
  max-width: 98vw;
}
.footer-section {
  flex: 1 1 220px;
  min-width: 220px;
  text-align: left;
  margin: 0.5rem 0;
}
.footer-section-title {
  font-size: 1.13rem;
  font-weight: 700;
  color: #1dbfa3;
  margin-bottom: 0.7rem;
  letter-spacing: 0.5px;
}
.footer-company {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #183c3c;
}
.footer-address {
  margin: 0.7rem 0 0 0;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #2e5e5e;
}
.footer-contacts {
  margin: 0.7rem 0 0 0;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #2e5e5e;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links li {
  margin-bottom: 0.4rem;
}
.footer-links a {
  color: #1dbfa3;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  background: rgba(29,191,163,0.08);
  border-radius: 6px;
  padding: 0.2rem 0.7rem;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.2s;
  display: inline-block;
}
.footer-links a:hover {
  color: #fff;
  background: linear-gradient(90deg, #1dbfa3 60%, #1de9b6 100%);
  box-shadow: 0 2px 8px rgba(29,191,163,0.13);
  transform: translateY(-2px) scale(1.06);
  text-decoration: none;
}
.footer-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, #1dbfa3 0%, #1de9b6 100%);
  opacity: 0.18;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  z-index: 1;
  animation: gradientMove 6s linear infinite alternate;
  background-size: 200% 100%;
}
@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.1rem 0.7rem;
  }
  .footer-section {
    min-width: unset;
    width: 100%;
  }
}
@media (max-width: 600px) {
  .footer-content {
    padding: 1rem 0.5rem;
    min-width: unset;
  }
  .footer-leaf {
    font-size: 60px;
    left: 8px;
    top: 8px;
  }
}
`;

const Footer: React.FC = () => (
  <>
    <style>{footerStyles}</style>
    <footer className="footer">
      <span className="footer-leaf">
        <FaLeaf />
      </span>
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <div className="footer-section-title">About Us</div>
          <div style={{ color: '#183c3c', fontSize: '1rem', lineHeight: 1.6 }}>
            Plavo India Pvt Ltd is a leading innovator in the fragrance industry, specializing in eco-friendly aroma ingredients, fragrances, aroma chemicals, and essential oils for a wide range of applications.
          </div>
        </div>
        {/* Quick Links Section */}
        <div className="footer-section">
          <div className="footer-section-title">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Company Info Section */}
        <div className="footer-section">
          <div className="footer-section-title">Company Info</div>
          <p className="footer-company">
            © 2025 Plavo India Pvt Ltd. All Rights Reserved.
          </p>
          <p className="footer-address">
            South Extension, Arjun Nagar, Kotla Mubarakpur, South Extension I, New Delhi, Delhi 110003, India
          </p>
          <div className="footer-contacts">
            <a href="tel:8076727536" style={{ color: '#2e5e5e', textDecoration: 'none', fontWeight: 500 }}>
              Call: 8076727536
            </a>
            <a href="tel:9773575251" style={{ color: '#2e5e5e', textDecoration: 'none', fontWeight: 500 }}>
              Call: 9773575251
            </a>
          </div>
          <p className="footer-address" style={{ marginTop: '0.7rem', color: '#1dbfa3', fontWeight: 700 }}>
            Designed by Plavo India Pvt Ltd
          </p>
        </div>
      </div>
      <div className="footer-bar" />
    </footer>
  </>
);

export default Footer;
