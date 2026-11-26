import { useState } from "react";
import { Link } from "react-router";

function RegisterCustomer() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Customer registration successful!");

    console.log(formData);
  };

  return (
    <section className="customer-register-section">
      <div className="customer-register-container">
        <div className="customer-register-info">
          <span className="section-label">JOIN KAAMCONNECT</span>

          <h1>
            Find Trusted
            <span> Professionals.</span>
          </h1>

          <p>
            Find reliable professionals for your everyday needs.
            Book services and get your work done with ease.
          </p>

          <div className="customer-benefits">
            <div>✓ Find trusted service providers</div>
            <div>✓ Easy service booking</div>
            <div>✓ Save your favourite professionals</div>
            <div>✓ Manage all your bookings</div>
          </div>
        </div>

        <div className="customer-register-card">
          <div className="customer-register-header">
            <h2>Create Customer Account</h2>
            <p>Register to find and hire professionals.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="customer-form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="customer-form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="customer-form-group">
              <label>Mobile Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter 10 digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>

            <div className="customer-form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="customer-form-group">
              <label>Password *</label>

              <div className="customer-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={6}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="customer-register-button">
              Create Account →
            </button>
          </form>

          <div className="customer-login-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterCustomer;