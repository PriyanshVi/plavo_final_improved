import React from 'react';

const fadeInUpKeyframes = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
`;

const PhoneIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: 'inline',
      verticalAlign: 'middle',
      filter: 'drop-shadow(0 2px 8px #1dbfa355)',
      background: 'linear-gradient(135deg, #e0f7fa 60%, #1dbfa3 100%)',
      borderRadius: '50%',
      padding: 2,
    }}
  >
    <path
      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
      stroke="#1dbfa3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: 'inline',
      verticalAlign: 'middle',
      filter: 'drop-shadow(0 2px 8px #25d36655)',
      background: 'linear-gradient(135deg, #e0f7fa 60%, #25d366 100%)',
      borderRadius: '50%',
      padding: 2,
    }}
  >
    <path
      d="M16 3C9.373 3 4 8.373 4 15c0 2.647.87 5.093 2.36 7.09L4 29l7.18-2.31A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
      stroke="#25d366"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M22.2 19.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.18 4.42.72.28 1.28.45 1.72.58.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"
      fill="#25d366"
    />
  </svg>
);

const Contact: React.FC = () => (
  <section
    className="contact"
    id="contact"
    style={{
      padding: '3rem 1.5rem',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #f8fffc 100%)',
      borderRadius: 32,
      boxShadow: '0 8px 32px rgba(29,191,163,0.13)',
      margin: '2.5rem auto',
      maxWidth: 480,
      textAlign: 'center',
      position: 'relative',
      animation: 'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1)',
      zIndex: 1,
    }}
  >
    {/* Inject animation keyframes directly */}
    <style>{fadeInUpKeyframes}</style>
    <h2
      className="section-title"
      style={{
        fontSize: '2.2rem',
        fontWeight: 900,
        color: '#1dbfa3',
        marginBottom: '1.1rem',
        letterSpacing: '1.2px',
        position: 'relative',
        display: 'inline-block',
        textShadow: '0 4px 16px rgba(29,191,163,0.10)',
      }}
    >
      Contact Us
      <span
        style={{
          display: 'block',
          width: 70,
          height: 4,
          background: 'linear-gradient(90deg, #1dbfa3 60%, #1de9b6 100%)',
          borderRadius: 2,
          margin: '0.7rem auto 0 auto',
        }}
      />
    </h2>
    <p
      style={{
        color: '#444',
        fontSize: '1.13rem',
        marginBottom: '2.1rem',
        fontWeight: 500,
        letterSpacing: '0.01em',
      }}
    >
      We are always ready to listen to you first. For business inquiries, reach out via:
    </p>
    <div
      className="contact-form"
      style={{
        maxWidth: 400,
        margin: '2rem auto 0 auto',
        textAlign: 'left',
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 18,
        boxShadow: '0 2px 12px rgba(29,191,163,0.07)',
        padding: '2rem 1.5rem',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div
        style={{
          marginBottom: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
        }}
      >
        <PhoneIcon />
        <a
          className="card-btn"
          href="tel:8076727357"
          style={{
            background: 'linear-gradient(90deg, #1dbfa3 60%, #1de9b6 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 22,
            padding: '0.5rem 1.3rem',
            fontSize: '1.05rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'background 0.2s, transform 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 2px 8px rgba(29,191,163,0.10)',
            textDecoration: 'none',
          }}
        >
          Call: 8076727357
        </a>
      </div>
      <div
        style={{
          marginBottom: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
        }}
      >
        <WhatsAppIcon />
        <a
          className="whatsapp-btn"
          href="https://wa.me/918076727357"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(90deg, #25d366 60%, #1dbfa3 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 22,
            padding: '0.5rem 1.3rem',
            fontSize: '1.05rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'background 0.2s, transform 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 2px 8px rgba(29,191,163,0.10)',
            textDecoration: 'none',
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
      <div
        style={{
          color: '#555',
          fontSize: '1rem',
          marginTop: '1.2rem',
          background: 'rgba(248,249,250,0.7)',
          borderRadius: 10,
          padding: '0.7rem 1rem',
          fontWeight: 500,
        }}
      >
        <strong>Address:</strong> South Ex, Kotla Mubarakpur, New Delhi
      </div>
    </div>
  </section>
);

export default Contact;
