import { Link } from "react-router";

const workers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    profession: "Electrician",
    city: "Durg",
    experience: "5 Years",
    rating: "4.8",
    reviews: 124,
    price: "₹299",
    icon: "⚡",
  },
  {
    id: 2,
    name: "Amit Sharma",
    profession: "Plumber",
    city: "Raipur",
    experience: "7 Years",
    rating: "4.7",
    reviews: 98,
    price: "₹349",
    icon: "🔧",
  },
  {
    id: 3,
    name: "Vikas Verma",
    profession: "Carpenter",
    city: "Bhilai",
    experience: "4 Years",
    rating: "4.9",
    reviews: 76,
    price: "₹399",
    icon: "🪚",
  },
];

function WorkerDetails() {
  return (
    <section className="worker-details-section">
      <div className="worker-details-container">

        <div className="worker-details-heading">
          <span className="section-label">OUR PROFESSIONALS</span>
          <h1>Find the Right Professional</h1>
          <p>Discover skilled professionals for your everyday needs.</p>
        </div>

        <div className="worker-details-grid">
          {workers.map((worker) => (
            <div className="worker-details-card" key={worker.id}>

              <div className="worker-details-top">
                <div className="worker-details-avatar">
                  {worker.icon}
                </div>

                <div>
                  <span className="worker-available">Available</span>
                  <h3>{worker.name}</h3>
                  <p>{worker.profession}</p>
                </div>
              </div>

              <div className="worker-details-rating">
                ⭐ {worker.rating}
                <span>({worker.reviews} reviews)</span>
              </div>

              <div className="worker-details-information">
                <div>📍 {worker.city}</div>
                <div>💼 {worker.experience} experience</div>
              </div>

              <div className="worker-details-price">
                <span>Starting from</span>
                <strong>{worker.price}</strong>
              </div>

              <Link
                to="/worker-profile"
                className="worker-details-profile-button"
              >
                View Profile
              </Link>

              <Link
                to="/booking"
                className="worker-details-book-button"
              >
                Hire Professional →
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkerDetails;