import { useState } from "react";
import { Link } from "react-router";
import "../App.css";

function EditProfile() {
  const [profile, setProfile] = useState({
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "9876543210",
    profession: "Electrician",
    city: "Durg",
    experience: "5",
    address: "Durg, Chhattisgarh",
    about:
      "Experienced electrician providing reliable repair, installation and maintenance services.",
    photo: "",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

    setSaved(false);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfile({
        ...profile,
        photo: URL.createObjectURL(file),
      });

      setSaved(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <section className="edit-profile-section">
      <div className="edit-profile-container">
        <div className="edit-profile-heading">
          <span>PROFESSIONAL ACCOUNT</span>
          <h1>Edit Your Profile</h1>
          <p>Update your information to help customers know you better.</p>
        </div>

        <div className="edit-profile-card">
          <form onSubmit={handleSubmit}>
            {/* Profile Photo */}
            <div className="edit-profile-photo">
              <div className="edit-profile-avatar">
                {profile.photo ? (
                  <img src={profile.photo} alt="Profile" />
                ) : (
                  "👨‍🔧"
                )}
              </div>

              <div>
                <h3>Profile Photo</h3>
                <label className="upload-photo-button">
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    hidden
                  />
                </label>
              </div>
            </div>

            {/* Personal Details */}
            <div className="edit-profile-form-grid">
              <div className="edit-profile-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="edit-profile-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="edit-profile-field">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="edit-profile-field">
                <label>Profession</label>
                <select
                  name="profession"
                  value={profile.profession}
                  onChange={handleChange}
                  required
                >
                  <option value="Electrician">Electrician</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Painter">Painter</option>
                  <option value="AC Technician">AC Technician</option>
                  <option value="Mechanic">Mechanic</option>
                  <option value="Cleaner">Cleaner</option>
                </select>
              </div>

              <div className="edit-profile-field">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="edit-profile-field">
                <label>Experience (Years)</label>
                <input
                  type="number"
                  name="experience"
                  min="0"
                  value={profile.experience}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="edit-profile-field full-width">
                <label>Address</label>
                <textarea
                  name="address"
                  rows="3"
                  value={profile.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="edit-profile-field full-width">
                <label>About Me</label>
                <textarea
                  name="about"
                  rows="5"
                  value={profile.about}
                  onChange={handleChange}
                  placeholder="Describe your experience and services..."
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="edit-profile-actions">
              <Link to="/professional-dashboard" className="cancel-edit-button">
                Cancel
              </Link>

              <button type="submit" className="save-profile-button">
                💾 Save Changes
              </button>
            </div>

            {saved && (
              <div className="profile-saved-message">
                ✅ Profile updated successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;