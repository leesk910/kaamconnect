import { Link } from "react-router";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Kaam<span>Connect</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/workers">Find Workers</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Buttons */}
        <div className="nav-actions">

          {/* Dark Mode Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Notifications */}
          <Link to="/notifications" className="notification-btn">
            🔔
            <span className="notification-badge">3</span>
          </Link>

          {/* Login */}
          <Link to="/login" className="login-btn">
            Login
          </Link>

          {/* Register */}
          <Link to="/register" className="register-btn">
            Join Now
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;