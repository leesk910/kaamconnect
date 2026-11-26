import { Link } from "react-router";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <span className="cta-label">LET'S GET STARTED</span>

          <h2>
            Your work deserves
            <br />
            the <span>right connection.</span>
          </h2>

          <p>
            Whether you need a helping hand or you're looking for work,
            KaamConnect brings people together.
          </p>
        </div>

        <div className="cta-actions">
          <div className="cta-box">
            <div className="cta-box-icon">🏠</div>

            <h3>Need a Service?</h3>

            <p>Find skilled people for your everyday needs.</p>

            <Link to="/services" className="cta-button cta-primary">
              Find a Service →
            </Link>
          </div>

          <div className="cta-box">
            <div className="cta-box-icon">👷</div>

            <h3>Looking for work?</h3>

            <p>Join our community and connect with customers.</p>

            <Link to="/register-worker" className="cta-button cta-secondary">
              Join as a Professional →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;