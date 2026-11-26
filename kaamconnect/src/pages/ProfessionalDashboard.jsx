import { useState } from "react";
import { Link } from "react-router";
import "../App.css";

const initialJobs = [
  {
    id: "KC2001",
    customer: "Rahul Sharma",
    service: "Electrical Repair",
    location: "Raipur",
    date: "26 Nov 2026",
    time: "10:00 AM",
    price: 499,
    status: "Pending",
  },
  {
    id: "KC2002",
    customer: "Priya Verma",
    service: "Fan Installation",
    location: "Durg",
    date: "27 Nov 2026",
    time: "02:00 PM",
    price: 699,
    status: "Accepted",
  },
  {
    id: "KC2003",
    customer: "Aman Patel",
    service: "Switch Repair",
    location: "Bhilai",
    date: "24 Nov 2026",
    time: "11:30 AM",
    price: 299,
    status: "Completed",
  },
  {
    id: "KC2004",
    customer: "Neha Gupta",
    service: "Electrical Wiring",
    location: "Raipur",
    date: "28 Nov 2026",
    time: "04:00 PM",
    price: 899,
    status: "Pending",
  },
];

function ProfessionalDashboard() {
  const [jobs, setJobs] = useState(initialJobs);
  const [activeTab, setActiveTab] = useState("Overview");

  // Accept job
  const handleAccept = (jobId) => {
    setJobs((previousJobs) =>
      previousJobs.map((job) =>
        job.id === jobId ? { ...job, status: "Accepted" } : job
      )
    );
  };

  // Reject job
  const handleReject = (jobId) => {
    setJobs((previousJobs) =>
      previousJobs.filter((job) => job.id !== jobId)
    );
  };

  // Start job
  const handleStartJob = (jobId) => {
    setJobs((previousJobs) =>
      previousJobs.map((job) =>
        job.id === jobId ? { ...job, status: "In Progress" } : job
      )
    );
  };

  // Complete job
  const handleCompleteJob = (jobId) => {
    setJobs((previousJobs) =>
      previousJobs.map((job) =>
        job.id === jobId ? { ...job, status: "Completed" } : job
      )
    );
  };

  // Filter jobs
  const filteredJobs =
    activeTab === "Overview" || activeTab === "All Jobs"
      ? jobs
      : jobs.filter((job) => job.status === activeTab);

  // Statistics
  const pendingJobs = jobs.filter((job) => job.status === "Pending").length;
  const acceptedJobs = jobs.filter((job) => job.status === "Accepted").length;
  const inProgressJobs = jobs.filter((job) => job.status === "In Progress").length;
  const completedJobs = jobs.filter((job) => job.status === "Completed").length;

  const totalEarnings = jobs
    .filter((job) => job.status === "Completed")
    .reduce((total, job) => total + job.price, 0);

  return (
    <div className="professional-dashboard">
      {/* Header */}
      <header className="professional-dashboard-header">
  <div>
    <h1>Professional Dashboard</h1>
    <p>Welcome back, Rajesh 👋</p>
  </div>

  <div className="professional-header-actions">
    <Link to="/edit-profile" className="edit-profile-button">
      ✏️ Edit Profile
    </Link>

    <Link to="/worker-profile" className="professional-profile-button">
      👤 View Profile
    </Link>
  </div>
</header>

      {/* Statistics */}
      <section className="professional-stats-grid">
        <div className="professional-stat-card">
          <div className="stat-icon">📥</div>
          <h3>New Requests</h3>
          <h2>{pendingJobs}</h2>
          <span>Waiting for your response</span>
        </div>

        <div className="professional-stat-card">
          <div className="stat-icon">📅</div>
          <h3>Accepted Jobs</h3>
          <h2>{acceptedJobs}</h2>
          <span>Accepted bookings</span>
        </div>

        <div className="professional-stat-card">
          <div className="stat-icon">🔧</div>
          <h3>In Progress</h3>
          <h2>{inProgressJobs}</h2>
          <span>Currently working</span>
        </div>

        <div className="professional-stat-card">
          <div className="stat-icon">✅</div>
          <h3>Completed Jobs</h3>
          <h2>{completedJobs}</h2>
          <span>Successfully completed</span>
        </div>
      </section>

      {/* Earnings */}
      <section className="professional-earnings-card">
        <div>
          <span className="earnings-label">Total Earnings</span>
          <h2>₹{totalEarnings.toLocaleString("en-IN")}</h2>
          <p>Earnings from completed jobs</p>
        </div>

        <div className="earnings-right">
          <span>⭐ 4.8 Rating</span>
          <span>👥 35 Customers</span>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="professional-dashboard-content">
        {/* Sidebar */}
        <aside className="professional-sidebar">
          <h3>Menu</h3>

          {[
            "Overview",
            "All Jobs",
            "Pending",
            "Accepted",
            "In Progress",
            "Completed",
          ].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Overview" && "📊 "}
              {tab === "All Jobs" && "📋 "}
              {tab === "Pending" && "📥 "}
              {tab === "Accepted" && "📅 "}
              {tab === "In Progress" && "🔧 "}
              {tab === "Completed" && "✅ "}
              {tab}
            </button>
          ))}

          <Link to="/worker-profile" className="professional-sidebar-link">
            👤 My Profile
          </Link>

          <Link to="/" className="professional-sidebar-link">
            🏠 Back to Home
          </Link>
        </aside>

        {/* Jobs */}
        <main className="professional-jobs-section">
          <div className="professional-jobs-header">
            <h2>
              {activeTab === "Overview" ? "Recent Jobs" : activeTab}
            </h2>

            <span>{filteredJobs.length} Jobs</span>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="professional-jobs-list">
              {filteredJobs.map((job) => (
                <div className="professional-job-card" key={job.id}>
                  {/* Job Header */}
                  <div className="professional-job-top">
                    <div>
                      <h3>{job.service}</h3>
                      <p>Booking ID: {job.id}</p>
                    </div>

                    <span
                      className={`job-status ${job.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {job.status}
                    </span>
                  </div>

                  {/* Job Details */}
                  <div className="professional-job-details">
                    <p>👤 {job.customer}</p>
                    <p>📍 {job.location}</p>
                    <p>📅 {job.date}</p>
                    <p>🕒 {job.time}</p>
                  </div>

                  {/* Job Actions */}
                  <div className="professional-job-bottom">
                    <h3>₹{job.price}</h3>

                    <div className="job-actions">
                      {/* Pending */}
                      {job.status === "Pending" && (
                        <>
                          <button
                            className="accept-job-button"
                            onClick={() => handleAccept(job.id)}
                          >
                            Accept
                          </button>

                          <button
                            className="reject-job-button"
                            onClick={() => handleReject(job.id)}
                          >
                            Reject
                          </button>
                        </>
                      )}

                      {/* Accepted */}
                      {job.status === "Accepted" && (
                        <button
                          className="start-job-button"
                          onClick={() => handleStartJob(job.id)}
                        >
                          Start Job
                        </button>
                      )}

                      {/* In Progress */}
                      {job.status === "In Progress" && (
                        <button
                          className="accept-job-button"
                          onClick={() => handleCompleteJob(job.id)}
                        >
                          Complete Job
                        </button>
                      )}

                      {/* Completed */}
                      {job.status === "Completed" && (
                        <span className="completed-label">
                          ✔ Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="professional-empty-state">
              <h3>No jobs found</h3>
              <p>There are no jobs in this category right now.</p>
            </div>
          )}
        </main>
      </section>
    </div>
  );
}

export default ProfessionalDashboard;