const stats = [
{
    number: "300+",
    title: "Skilled Professionals",
    description: "Experienced workers ready to help",
    icon: "👷",
},
{
    number: "10+",
    title: "Service Categories",
    description: "Services for your everyday needs",
    icon: "🛠️",
},
{
    number: "1000+",
    title: "Happy Customers",
    description: "People who trust our services",
    icon: "😊",
},
{
    number: "20+",
    title: "Cities Covered",
    description: "Connecting services across locations",
    icon: "📍",
},
];

function TrustSection() {
return (
    <section className="trust-section">
    <div className="trust-container">
        <div className="trust-header">
        <span className="section-label">WHY KAAMCONNECT?</span>

        <h2>
            Help is just a <span>connection away.</span>
        </h2>

        <p>
            Bringing skilled professionals and people together
            to make everyday work easier.
        </p>
        </div>

        <div className="trust-grid">
        {stats.map((stat) => (
            <div className="trust-card" key={stat.title}>
            <div className="trust-icon">{stat.icon}</div>

            <h3>{stat.number}</h3>

            <h4>{stat.title}</h4>

            <p>{stat.description}</p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}

export default TrustSection;