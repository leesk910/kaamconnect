
import { useState } from "react";
import { Link } from "react-router";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="login-section">
      <div className="login-container">
        <span className="section-label">WELCOME BACK</span>

        <h1>Login to KaamConnect</h1>

        <p>Welcome back! Please login to your account.</p>

        <form className="login-form">
          {/* Email Field */}
          <div className="login-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
         <div className="login-field">
  <label>Password</label>

  <div className="password-input-wrapper">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
    />

    <button
      type="button"
      className="password-toggle"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>
</div>
<div className="forgot-password">
  <Link to="/forgot-password">Forgot password?</Link>
</div>
          {/* Login Button */}
          <button type="submit" className="login-button">
            Login →
          </button>
        </form>

        {/* Register Link */}
        <div className="login-register-link">
          <p>
            Don't have an account?{" "}
            <Link to="/register">Register now</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
