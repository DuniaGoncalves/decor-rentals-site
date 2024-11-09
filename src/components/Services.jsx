import React from 'react';

const services = [
  {
    id: 1,
    title: "Event Decoration",
    description: "Beautiful decorations tailored to your event’s theme and style.",
    icon: "🎉", // TODO: placeholder icon replace with an actual icon
  },
  {
    id: 2,
    title: "Rental Items",
    description: "High-quality furniture, decor, and more to complement your event.",
    icon: "🪑",
  },
  {
    id: 3,
    title: "Setup & Takedown",
    description: "Our team will handle all the setup and takedown so you can enjoy the day worry-free.",
    icon: "🛠️",
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-gallery">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;