
import MapSection from "../components/MapSection";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Trusted Local Professionals
        </div>

        <h1>
          Find the right person
          <br />
          for every <span>job.</span>
        </h1>

        <p className="hero-description">
          From home repairs to everyday help, connect with skilled
          local professionals you can trust.
        </p>

        {/* Map Section */}
        <div className="hero-map">
          <MapSection />
        </div>

        <div className="hero-bottom">
          <p>Popular:</p>
          <span>Electrician</span>
          <span>Plumber</span>
          <span>Carpenter</span>
          <span>Home Cleaning</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
