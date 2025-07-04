import React, { useState } from 'react';

// Define the service names as a tuple for strong typing
const services = [
  'Fine Fragrances',
  'Personal Care',
  'Household Care',
  'Soap',
  'Cream & Cosmetics',
  'Air Fragrances',
  'Essential Oil',
  'Hair Care',
] as const;

type ServiceName = typeof services[number];

// Map service names to image filenames
const serviceImages: Record<ServiceName, string> = {
  'Fine Fragrances': '/fine-fragrances.jpg',
  'Personal Care': '/personal-care.jpg',
  'Household Care': '/household-care.png',
  'Soap': '/soap.webp',
  'Cream & Cosmetics': '/cream-cosmetics.jpg',
  'Air Fragrances': '/air-fragrances.jpg',
  'Essential Oil': '/essential-oil.jpg',
  'Hair Care': '/hair-care.jpg',
};

const fadeInUpKeyframes = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
`;

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceName | null>(null);

  const backgroundImage = selectedService
    ? `linear-gradient(rgba(29,191,163,0.13), rgba(255,255,255,0.85)), url(${serviceImages[selectedService]})`
    : 'linear-gradient(135deg, #e0f7fa 0%, #f8fffc 100%)';

  return (
    <section
      className="services"
      id="services"
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        minHeight: 480,
        borderRadius: 32,
        boxShadow: '0 8px 32px rgba(29,191,163,0.13)',
        margin: '2.5rem auto',
        maxWidth: 1100,
        padding: '3rem 1.5rem 3.5rem 1.5rem',
        position: 'relative',
        zIndex: 1,
        animation: 'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {/* Inject animation keyframes directly */}
      <style>{fadeInUpKeyframes}</style>
      <h2
        style={{
          fontSize: '2.3rem',
          fontWeight: 900,
          color: '#1dbfa3',
          marginBottom: '1.2rem',
          letterSpacing: '1.2px',
          position: 'relative',
          display: 'inline-block',
          textShadow: '0 4px 16px rgba(29,191,163,0.10)',
        }}
      >
        Our Services
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
      <div
        className="services-list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2.2rem',
          marginTop: '2.5rem',
        }}
      >
        {services.map((service) => (
          <div
            className={`service-card${selectedService === service ? ' selected' : ''}`}
            key={service}
            onClick={() => setSelectedService(service)}
            style={{
              cursor: 'pointer',
              border: selectedService === service ? '2.5px solid #1dbfa3' : '1.5px solid #e0e0e0',
              background: selectedService === service
                ? 'rgba(255,255,255,0.92)'
                : 'rgba(255,255,255,0.75)',
              transition: 'border 0.3s, background 0.3s, box-shadow 0.3s, transform 0.2s',
              borderRadius: 20,
              minWidth: 210,
              maxWidth: 260,
              textAlign: 'center',
              boxShadow: selectedService === service
                ? '0 8px 32px rgba(29,191,163,0.18)'
                : '0 4px 16px rgba(29,191,163,0.10)',
              fontWeight: 600,
              color: '#222',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative',
              overflow: 'hidden',
              padding: '1.7rem 1.2rem',
              transform: selectedService === service ? 'scale(1.04)' : 'scale(1)',
              animation: 'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                margin: '0 auto 1rem auto',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(29,191,163,0.10)',
                background: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: selectedService === service
                  ? '2px solid #1dbfa3'
                  : '1.5px solid #e0e0e0',
                transition: 'border 0.3s',
              }}
            >
              <img
                src={serviceImages[service]}
                alt={service}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  filter: selectedService === service
                    ? 'none'
                    : 'grayscale(30%) brightness(0.95)',
                  transition: 'filter 0.3s',
                }}
              />
            </div>
            <h3
              style={{
                color: selectedService === service ? '#1dbfa3' : '#222',
                fontSize: '1.18rem',
                fontWeight: 800,
                marginBottom: 0,
                letterSpacing: '0.5px',
                transition: 'color 0.3s',
              }}
            >
              {service}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
