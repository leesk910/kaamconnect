function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>
            Kaam<span>Connect.</span>
          </h2>

          <p>
            Connecting people with trusted local professionals.
            Making everyday work easier, one connection at a time.
          </p>

          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/workers">Find Professionals</a>
          <a href="/register-worker">Join as a Worker</a>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h3>Popular Services</h3>
          <a href="/services">Electrician</a>
          <a href="/services">Plumber</a>
          <a href="/services">Carpenter</a>
          <a href="/services">Home Cleaning</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>📍 Chhattisgarh, India</p>
          <p>✉️ hello@kaamconnect.com</p>
          <p>🤝 Let's connect and grow together.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KaamConnect. All rights reserved.</p>
        <p>Made with ❤️ to connect people.</p>
      </div>
    </footer>
  );
}

export default Footer;