import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const floatingIconStyles = `
.floating-icons {
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 9999;
}
.floating-icon-btn {
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 12px rgba(29,191,163,0.18);
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  font-size: 1.7rem;
  color: #fff;
}
.floating-icon-btn.phone {
  background: linear-gradient(135deg, #e0f7fa 60%, #1dbfa3 100%);
  color: #1dbfa3;
}
.floating-icon-btn.whatsapp {
  background: linear-gradient(135deg, #e0f7fa 60%, #25d366 100%);
  color: #25d366;
}
.floating-icon-btn:hover {
  box-shadow: 0 4px 24px rgba(29,191,163,0.25);
  transform: scale(1.08);
}
@media (max-width: 600px) {
  .floating-icons {
    right: 10px;
    gap: 0.7rem;
  }
  .floating-icon-btn {
    width: 44px;
    height: 44px;
    font-size: 1.3rem;
  }
}
`;

const phoneNumber = '8076727536';

const FloatingIcons: React.FC = () => (
  <>
    <style>{floatingIconStyles}</style>
    <div className="floating-icons">
      <a
        className="floating-icon-btn phone"
        href={`tel:${phoneNumber}`}
        title="Call"
      >
        <FiPhone />
      </a>
      <a
        className="floating-icon-btn whatsapp"
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp Chat"
      >
        <FaWhatsapp />
      </a>
    </div>
  </>
);

export default FloatingIcons;
