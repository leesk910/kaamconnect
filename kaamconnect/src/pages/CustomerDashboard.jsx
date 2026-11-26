import { useState } from "react";
import { Link } from "react-router";

function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const bookings = [
    {
      id: "#KC1001",
      professional: "Rajesh Kumar",
      service: "Electrical Repair",
      date: "28 Nov 2026",
      status: "Pending",
      price: "₹299",
      icon: "⚡",
    },
    {
      id: "#KC1002",
      professional: "Amit Sharma",
      service: "Plumbing",
      date: "25 Nov 2026",
      status: "Completed",
      price: "₹499",
      icon: "🔧",
    },
    {
      id: "#KC1003",
      professional: "Vikas Verma",
      service: "Carpentry",
      date: "22 Nov 2026",
      status: "Cancelled",
      price: "₹399",
      icon: "🪚",
    },
  ];

  const filteredBookings =
    activeTab === "Overview"
      ? bookings
      : activeTab === "All Bookings"
      ? bookings
      : bookings.filter((booking) => booking.status === activeTab);

  return (
    <section className="customer-dashboard">
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <div>
            <span className="section-label">CUSTOMER DASHBOARD</span>
            <h1>Welcome back, Rahul 👋</h1>
            <p>Manage your services and bookings from one place.</p>
          </div>

          <Link to="/workers" className="dashboard-book-service-btn">
            + Book a Service
          </Link>
        </div>

        {/* STATS */}
        <div className="dashboard-stats-grid">

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon blue">📋</div>
            <div>
              <p>Total Bookings</p>
              <h2>3</h2>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon orange">⏳</div>
            <div>
              <p>Pending Bookings</p>
              <h2>1</h2>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon green">✓</div>
            <div>
              <p>Completed Services</p>
              <h2>1</h2>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon purple">❤️</div>
            <div>
              <p>Saved Professionals</p>
              <h2>2</h2>
            </div>
          </div>

        </div>

        {/* DASHBOARD CONTENT */}
        <div className="customer-dashboard-content">

          {/* SIDEBAR */}
          <aside className="dashboard-sidebar">

            <button
              className={activeTab === "Overview" ? "active" : ""}
              onClick={() => setActiveTab("Overview")}
            >
              🏠 Overview
            </button>

            <button
              className={activeTab === "All Bookings" ? "active" : ""}
              onClick={() => setActiveTab("All Bookings")}
            >
              📋 My Bookings
            </button>

            <button
              className={activeTab === "Pending" ? "active" : ""}
              onClick={() => setActiveTab("Pending")}
            >
              ⏳ Pending
            </button>

            <button
              className={activeTab === "Completed" ? "active" : ""}
              onClick={() => setActiveTab("Completed")}
            >
              ✓ Completed
            </button>

            <button
              className={activeTab === "Cancelled" ? "active" : ""}
              onClick={() => setActiveTab("Cancelled")}
            >
              ✕ Cancelled
            </button>

            <Link to="/worker-details">👷 Find Professionals</Link>

          </aside>

          {/* MAIN */}
          <div className="dashboard-main">

            <div className="dashboard-main-heading">
              <h2>{activeTab === "Overview" ? "Recent Bookings" : activeTab}</h2>
              <span>{filteredBookings.length} bookings</span>
            </div>

            {filteredBookings.length === 0 ? (
              <div className="dashboard-empty-state">
                <div>📭</div>
                <h3>No bookings found</h3>
                <p>Your bookings will appear here.</p>

                <Link to="/workers">Find a Professional</Link>
              </div>
            ) : (
              <div className="dashboard-bookings-list">
                {filteredBookings.map((booking) => (
                  <div className="dashboard-booking-card" key={booking.id}>

                    <div className="dashboard-booking-icon">
                      {booking.icon}
                    </div>

                    <div className="dashboard-booking-info">
                      <span className="booking-id">{booking.id}</span>
                      <h3>{booking.service}</h3>
                      <p>{booking.professional}</p>
                      <span className="booking-date">📅 {booking.date}</span>
                    </div>

                    <div className="dashboard-booking-right">
                      <span
                        className={`booking-status ${booking.status.toLowerCase()}`}
                      >
                        {booking.status}
                      </span>

                      <strong>{booking.price}</strong>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default CustomerDashboard;