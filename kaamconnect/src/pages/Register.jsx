import { Link } from "react-router";
function Register() {
return (
    <section className="register-section">
    <div className="register-container">

        <span className="section-label">JOIN KAAMCONNECT</span>

        <h1>How would you like to join?</h1>

        <p>
        Choose how you want to use KaamConnect and get started.
        </p>

        <div className="register-options">

          {/* Customer */}
        <div className="register-card">
            <div className="register-icon">🏠</div>

            <h2>Hire a Professional</h2>

            <p>
            Find skilled professionals for your home and everyday needs.
            </p>

            <Link to="/register-customer" className="register-option-btn">
  Find a Professional →
</Link>
        </div>

          {/* Professional */}
        <div className="register-card">
            <div className="register-icon">👷</div>

            <h2>Join as a Professional</h2>

            <p>
            Offer your services, connect with customers and grow your work.
            </p>

            <Link to="/register-worker" className="register-option-btn">
Register as a Worker →
</Link>
        </div>

        </div>
    </div>
    </section>
);
}

export default Register;