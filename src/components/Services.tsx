import React, { useState } from 'react';

const services = [
  'Fine Fragrances',
  'Personal Care',
  'Household Care',
  'Soap',
  'Cream & Cosmetics',
  'Air Fragrances',
  'Essential Oil',
  'Hair Care',
];

// Map service names to image filenames (update filenames as needed)
const serviceImages: { [key: string]: string } = {
  'Fine Fragrances': '/fine-fragrances.jpg',
  'Personal Care': '/personal-care.jpg',
  'Household Care': '/household-care.png',
  'Soap': '/soap.webp',
  'Cream & Cosmetics': '/cream-cosmetics.jpg',
  'Air Fragrances': '/air-fragrances.jpg',
  'Essential Oil': '/essential-oil.jpg',
  'Hair Care': '/hair-care.jpg',
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const backgroundImage = selectedService ? `url(${serviceImages[selectedService]})` : 'none';

  return (
    <section
      className="services"
      id="services"
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s',
        minHeight: '400px', // adjust as needed
      }}
    >
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div
            className={`service-card${selectedService === service ? ' selected' : ''}`}
            key={service}
            onClick={() => setSelectedService(service)}
            style={{
              cursor: 'pointer',
              border: selectedService === service ? '2px solid #007bff' : '1px solid #ccc',
              background: selectedService === service ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.6)',
              transition: 'border 0.3s, background 0.3s',
            }}
          >
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 