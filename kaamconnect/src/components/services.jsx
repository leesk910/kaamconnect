const services = [
  {
    icon: "⚡",
    name: "Electrician",
    description: "Electrical repairs & installation",
  },
  {
    icon: "🔧",
    name: "Plumber",
    description: "Pipes, taps & water repairs",
  },
  {
    icon: "🪚",
    name: "Carpenter",
    description: "Furniture & woodwork",
  },
  {
    icon: "🧹",
    name: "Home Cleaning",
    description: "Clean & fresh home",
  },
  {
    icon: "🎨",
    name: "Painter",
    description: "Wall painting & finishing",
  },
  {
    icon: "❄️",
    name: "AC Technician",
    description: "AC repair & servicing",
  },
  {
    icon: "👨‍🍳",
    name: "Cook",
    description: "Daily cooking services",
  },
  {
    icon: "🚗",
    name: "Driver",
    description: "Personal & local driving",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
  <div className="services-header">
  <div>
    <span className="section-label">OUR SERVICES</span>

    <h2>
      What help do you <span>need today?</span>
    </h2>

    <p>
      Find trusted professionals for all your everyday needs.
    </p>
  </div>
</div>

  <a href="/services" className="view-all-services mobile-view-all">
    View All →
  </a>
</div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href="/workers" className="service-link">
                Find a professional →
              </a>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <a href="/services" className="view-all-services">
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;