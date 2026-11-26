const professionals = [
{
    name: "Rahul Sharma",
    profession: "Electrician",
    rating: "4.9",
    reviews: 124,
    location: "Raipur, Chhattisgarh",
    price: "₹299",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
},
{
    name: "Amit Verma",
    profession: "Plumber",
    rating: "4.8",
    reviews: 98,
    location: "Raipur, Chhattisgarh",
    price: "₹399",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
},
{
    name: "Priya Sharma",
    profession: "Home Cleaner",
    rating: "4.9",
    reviews: 156,
    location: "Durg, Chhattisgarh",
    price: "₹499",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
},
];

function FeaturedProfessionals() {
return (
    <section className="professionals-section">
    <div className="professionals-container">

        <div className="professionals-header">
        <div>
            <span className="section-label">TOP PROFESSIONALS</span>

            <h2>
            Meet our <span>trusted experts.</span>
            </h2>

            <p>
            Skilled professionals ready to help you with your everyday needs.
            </p>
        </div>

        <a href="/workers" className="professionals-view-all">
            View All Professionals →
        </a>
        </div>

        <div className="professionals-grid">
        {professionals.map((professional) => (
            <div className="professional-card" key={professional.name}>

            <div className="professional-image-wrapper">
                <img
                src={professional.image}
                alt={professional.name}
                className="professional-image"
                />

                <span className="professional-badge">
                ✓ Verified
                </span>
            </div>

            <div className="professional-info">

                <span className="professional-category">
                {professional.profession}
                </span>

                <h3>{professional.name}</h3>

                <div className="professional-rating">
                ⭐ {professional.rating}
                <span>({professional.reviews} reviews)</span>
                </div>

                <p className="professional-location">
                📍 {professional.location}
                </p>

                <div className="professional-bottom">
                <div className="professional-price">
                    <span>Starting from</span>
                    <strong>{professional.price}</strong>
                </div>

                <a href="/workers" className="profile-button">
                    View Profile →
                </a>
                </div>

            </div>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}

export default FeaturedProfessionals;