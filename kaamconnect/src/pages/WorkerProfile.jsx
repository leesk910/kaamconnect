import { Link, useLocation } from "react-router";

function WorkerProfile() {
  const location = useLocation();

  const worker = location.state?.worker || {
    name: "Rajesh Kumar",
    profession: "Electrician",
    city: "Durg",
    experience: 5,
    rating: 4.8,
    price: 499,
    reviews: 124,
  };

  return (
    <section className="worker-profile-section">
      <div className="worker-profile-container">

        <div className="worker-profile-header">
          <div className="worker-profile-avatar">👨‍🔧</div>

          <div>
            <span className="worker-profile-badge">Professional Profile</span>
            <h1>{worker.name}</h1>
            <p>{worker.profession} · {worker.city}, Chhattisgarh</p>

            <div className="worker-profile-rating">
              ⭐ {worker.rating} <span>({worker.reviews || 124} Reviews)</span>
            </div>
          </div>
        </div>

        <div className="worker-profile-grid">

          <div className="worker-profile-main">

            <div className="worker-profile-card">
              <h2>About Me</h2>
              <p>
                Experienced {worker.profession.toLowerCase()} providing reliable,
                professional and quality services. I focus on customer satisfaction,
                quality work and timely service.
              </p>
            </div>

            <div className="worker-profile-card">
              <h2>Services I Offer</h2>

              <div className="worker-service-tags">
                <span>{worker.profession}</span>
                <span>Repair</span>
                <span>Installation</span>
                <span>Maintenance</span>
              </div>
            </div>

            <div className="worker-profile-card">
              <h2>Work Experience</h2>
              <p>{worker.experience}+ Years of Experience</p>
            </div>
    <div className="worker-profile-card">
  <h2>Customer Reviews</h2>

  <div className="worker-reviews-summary">
    <div className="worker-reviews-average">
      <h3>{worker.rating}</h3>
      <div>⭐⭐⭐⭐⭐</div>
      <p>{worker.reviews || 124} Reviews</p>
    </div>

    <div className="worker-review">
      <strong>⭐⭐⭐⭐⭐ Rahul Sharma</strong>
      <p>
        Very professional and completed the work on time.
        Highly recommended!
      </p>
      <span>2 days ago</span>
    </div>

    <div className="worker-review">
      <strong>⭐⭐⭐⭐⭐ Amit Verma</strong>
      <p>
        Good service, polite behaviour and reasonable pricing.
      </p>
      <span>1 week ago</span>
    </div>

    <div className="worker-review">
      <strong>⭐⭐⭐⭐☆ Priya Singh</strong>
      <p>
        Overall good experience. Work was completed properly.
      </p>
      <span>2 weeks ago</span>
    </div>
  </div>
</div>
            

          </div>

          <div className="worker-profile-sidebar">
            <div className="worker-contact-card">
              <h2>Hire This Professional</h2>

              <div className="worker-contact-detail">
                <span>📍</span>
                <p>{worker.city}, Chhattisgarh</p>
              </div>

              <div className="worker-contact-detail">
                <span>💼</span>
                <p>{worker.experience}+ Years Experience</p>
              </div>

              <div className="worker-contact-detail">
                <span>⭐</span>
                <p>{worker.rating} Rating</p>
              </div>

              <div className="worker-contact-detail">
                <span>💰</span>
                <p>₹{worker.price} / visit</p>
              </div>

              <Link
                to="/booking"
                state={{ worker }}
                className="worker-hire-button"
              >
                Book Now →
              </Link>

              <Link to="/workers" className="worker-back-link">
                ← Find Other Professionals
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WorkerProfile;