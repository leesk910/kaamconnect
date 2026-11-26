import { useState } from "react";
import { Link, useLocation } from "react-router";

function Booking() {
const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    address: "",
    description: "",
});
const location = useLocation();

const worker = location.state?.worker || {
name: "Rajesh Kumar",
profession: "Electrician",
city: "Durg",
rating: 4.8,
price: 299,
};

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <section className="booking-section">
        <div className="booking-confirmation">
          <div className="booking-success-icon">✓</div>
          <h1>Booking Request Submitted!</h1>
          <p>
            Your service request has been submitted successfully.
            You can track your booking from your dashboard.
          </p>

          <Link to="/customer-dashboard" className="booking-submit-btn">
            Go to Dashboard →
          </Link>

          <button
            className="booking-back-btn"
            onClick={() => setBookingConfirmed(false)}
          >
            Book Another Service
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-heading">
          <span className="section-label">BOOK A SERVICE</span>
          <h1>Let's Get Your Work Done</h1>
          <p>Fill in your details to request a professional service.</p>
        </div>

        <div className="booking-card">
        <div className="booking-professional">
<div className="booking-avatar">👨‍🔧</div>
<div>
    <h3>{worker.name}</h3>
    <p>
    {worker.profession} · ⭐ {worker.rating} Rating
    </p>
</div>
</div>
        <form onSubmit={handleSubmit}>
            <div className="booking-form-group">
              <label>Select Service *</label>
            <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
            >
                <option value="">Choose a service</option>
                <option value="Electrical Repair">Electrical Repair</option>
                <option value="Wiring">Wiring</option>
                <option value="Fan Installation">Fan Installation</option>
                <option value="Light Installation">Light Installation</option>
                <option value="Other">Other</option>
            </select>
            </div>

            <div className="booking-form-row">
            <div className="booking-form-group">
                <label>Preferred Date *</label>
                <input
                type="date"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={handleChange}
                required
                />
            </div>

            <div className="booking-form-group">
                <label>Preferred Time *</label>
                <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                </select>
            </div>
            </div>

            <div className="booking-form-group">
              <label>Service Address *</label>
            <textarea
                name="address"
                placeholder="Enter your complete address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
            />
            </div>

            <div className="booking-form-group">
            <label>Describe Your Problem</label>
            <textarea
                name="description"
                placeholder="Tell us what service you need..."
                rows="4"
                value={formData.description}
                onChange={handleChange}
            />
            </div>

        <div className="booking-price-info">
<span>Estimated starting price</span>
<strong>₹{worker.price}</strong>
</div>

            <button type="submit" className="booking-submit-btn">
            Confirm Booking Request →
            </button>
        </form>
        </div>
    </div>
    </section>
);
}

export default Booking;