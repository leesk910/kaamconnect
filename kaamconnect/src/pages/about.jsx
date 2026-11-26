function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <span className="section-label">ABOUT KAAMCONNECT</span>

        <h1>
          Connecting People with
          <span> Trusted Professionals</span>
        </h1>

        <p className="about-description">
          KaamConnect is a platform designed to connect people with
          trusted local professionals. Whether you need an electrician,
          plumber, carpenter or any other service professional,
          we make finding the right help easier and more convenient.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="about-icon">🤝</div>
            <h3>Our Mission</h3>
            <p>
              To make professional services easily accessible and
              connect customers with reliable local workers.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">⭐</div>
            <h3>Our Vision</h3>
            <p>
              To build a trusted platform where every customer can
              find the right professional and every worker can
              discover new opportunities.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">💡</div>
            <h3>Why KaamConnect?</h3>
            <p>
              Simple booking, local professionals, convenient services
              and a better way to get everyday work done.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;