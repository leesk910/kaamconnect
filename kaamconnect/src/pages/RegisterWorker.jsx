import { useState } from "react";
import { Link } from "react-router";
import "../App.css";

function RegisterWorker() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    experience: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Professional registration form submitted successfully!");

    console.log("Registration Data:", formData);
  };

  return (
    <section className="worker-register-section">
      <div className="worker-register-container">

        {/* LEFT SIDE */}
        <div className="worker-register-info">
          <span className="section-label">JOIN KAAMCONNECT</span>

          <h1>
            Turn Your Skills
            <span> Into Opportunities.</span>
          </h1>

          <p>
            Join KaamConnect and connect with people looking for
            skilled professionals like you.
          </p>

          <div className="worker-benefits">

            <div className="worker-benefit">
              <span>✓</span>
              Find new customers
            </div>

            <div className="worker-benefit">
              <span>✓</span>
              Showcase your skills
            </div>

            <div className="worker-benefit">
              <span>✓</span>
              Grow your career
            </div>

            <div className="worker-benefit">
              <span>✓</span>
              Get more work opportunities
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="worker-register-card">

          <div className="worker-register-header">
            <h2>Create Professional Account</h2>

            <p>Fill in your details to get started.</p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* PROFILE IMAGE */}
            <div className="worker-image-upload">

              <div className="worker-image-preview">

                {profileImage ? (
                  <img src={profileImage} alt="Profile Preview" />
                ) : (
                  <span>👤</span>
                )}

              </div>

              <div className="worker-image-details">

                <label htmlFor="profileImage">
                  Upload Profile Photo
                </label>

                <p>JPG or PNG image</p>

                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

              </div>

            </div>

            {/* FULL NAME */}
            <div className="worker-form-group">

              <label>Full Name *</label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

            </div>

            {/* EMAIL */}
            <div className="worker-form-group">

              <label>Email Address *</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* PHONE */}
            <div className="worker-form-group">

              <label>Mobile Number *</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />

            </div>

            {/* PROFESSION */}
            <div className="worker-form-group">

              <label>Select Your Profession *</label>

              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
              >

                <option value="">Choose your profession</option>
                <option value="Electrician">Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Painter">Painter</option>
                <option value="Mechanic">Mechanic</option>
                <option value="Cleaner">Cleaner</option>
                <option value="Construction Worker">Construction Worker</option>
                <option value="Gardener">Gardener</option>
                <option value="AC Technician">AC Technician</option>
                <option value="Other">Other</option>

              </select>

            </div>

            {/* EXPERIENCE */}
            <div className="worker-form-group">

              <label>Work Experience *</label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >

                <option value="">Select your experience</option>
                <option value="Fresher">Fresher</option>
                <option value="1-2 Years">1–2 Years</option>
                <option value="3-5 Years">3–5 Years</option>
                <option value="5-10 Years">5–10 Years</option>
                <option value="10+ Years">10+ Years</option>

              </select>

            </div>

            {/* CITY */}
            <div className="worker-form-group">

              <label>City *</label>

              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />

            </div>

            {/* ADDRESS */}
            <div className="worker-form-group">

              <label>Full Address *</label>

              <textarea
                name="address"
                placeholder="Enter your full address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="worker-form-group">

              <label>Password *</label>

              <div className="worker-password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="6"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="worker-form-group">

              <label>Confirm Password *</label>

              <div className="worker-password-wrapper">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="worker-register-submit"
            >
              Create Professional Account →
            </button>

          </form>

          <div className="worker-register-login">

            <p>
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default RegisterWorker;