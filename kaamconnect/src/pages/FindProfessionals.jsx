import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import "../App.css";

const professionals = [
  {
    id: 1,
    name: "Rajesh Kumar",
    profession: "Electrician",
    city: "Raipur",
    experience: 8,
    rating: 4.8,
    price: 499,
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 2,
    name: "Amit Sharma",
    profession: "Plumber",
    city: "Durg",
    experience: 5,
    rating: 4.6,
    price: 399,
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    id: 3,
    name: "Vikas Verma",
    profession: "Carpenter",
    city: "Bhilai",
    experience: 7,
    rating: 4.9,
    price: 599,
    image: "https://i.pravatar.cc/300?img=14",
  },
  {
    id: 4,
    name: "Sandeep Patel",
    profession: "Electrician",
    city: "Durg",
    experience: 4,
    rating: 4.5,
    price: 349,
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 5,
    name: "Mohit Yadav",
    profession: "Painter",
    city: "Raipur",
    experience: 6,
    rating: 4.7,
    price: 799,
    image: "https://i.pravatar.cc/300?img=16",
  },
  {
    id: 6,
    name: "Deepak Singh",
    profession: "AC Technician",
    city: "Bhilai",
    experience: 9,
    rating: 4.9,
    price: 699,
    image: "https://i.pravatar.cc/300?img=17",
  },
];

function FindProfessionals() {
  const [searchParams] = useSearchParams();

  const initialService = searchParams.get("service") || "";
  const initialLocation = searchParams.get("location") || "";

  const [search, setSearch] = useState(initialService);
  const [city, setCity] = useState(initialLocation);
  const [profession, setProfession] = useState("");
  const [minRating, setMinRating] = useState("");

  const filteredProfessionals = professionals.filter((worker) => {
    const searchMatch =
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.profession.toLowerCase().includes(search.toLowerCase());

    const cityMatch = city
      ? worker.city.toLowerCase().includes(city.toLowerCase())
      : true;

    const professionMatch = profession
      ? worker.profession === profession
      : true;

    const ratingMatch = minRating
      ? worker.rating >= Number(minRating)
      : true;

    return searchMatch && cityMatch && professionMatch && ratingMatch;
  });

  const clearFilters = () => {
    setSearch("");
    setCity("");
    setProfession("");
    setMinRating("");
  };

  return (
    <div className="find-professionals-page">
      <div className="find-professionals-container">

        {/* Header */}
        <div className="find-professionals-heading">
          <span className="find-professionals-tag">
            FIND YOUR EXPERT
          </span>

          <h1>
            Find the Right Professional <br />
            <span>For Your Needs</span>
          </h1>

          <p>
            Connect with trusted professionals for all your home service needs.
          </p>
        </div>

        {/* Search */}
        <div className="professional-search-box">
          <div className="search-field">
            <label>Search Professional</label>
            <input
              type="text"
              placeholder="Name or profession..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="search-field">
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="search-field">
            <label>Profession</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option value="">All Professions</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Painter">Painter</option>
              <option value="AC Technician">AC Technician</option>
            </select>
          </div>

          <div className="search-field">
            <label>Minimum Rating</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
            >
              <option value="">Any Rating</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
              <option value="4.8">4.8+ Stars</option>
            </select>
          </div>

          <button
            className="clear-filter-button"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>

        {/* Results */}
        <div className="professionals-results-header">
          <h2>Available Professionals</h2>
          <span>{filteredProfessionals.length} professionals found</span>
        </div>

        {/* Cards */}
        {filteredProfessionals.length > 0 ? (
          <div className="professionals-grid">
            {filteredProfessionals.map((worker) => (
              <div className="professional-card" key={worker.id}>
                <div className="professional-card-image">
                  <img src={worker.image} alt={worker.name} />

                  <span className="professional-rating">
                    ⭐ {worker.rating}
                  </span>
                </div>

                <div className="professional-card-content">
                  <h3>{worker.name}</h3>

                  <p className="professional-profession">
                    {worker.profession}
                  </p>

                  <div className="professional-info">
                    <span>📍 {worker.city}</span>
                    <span>💼 {worker.experience} Years Experience</span>
                  </div>

                  <div className="professional-card-bottom">
                    <div className="professional-price">
                      <strong>₹{worker.price}</strong>
                      <span>/visit</span>
                    </div>

                    <Link
                      to="/worker-profile"
                      className="view-professional-button"
                      state={{ worker }}
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="professional-search-empty">
            <h3>No professionals found 😕</h3>
            <p>Try changing your search or filters.</p>

            <button onClick={clearFilters}>
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FindProfessionals;
