import { Link } from "react-router";
import { useState } from "react";


function ForgotPassword() {

const [email, setEmail] = useState("");
const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
setEmail("");
};
return (
    <section className="login-section">
    <div className="login-container">
        <span className="section-label">ACCOUNT RECOVERY</span>
        <div className="recovery-icon">
🔐
</div>

        <h1>Forgot Password?</h1>

        <p>
        Don't worry! Enter your email address and we'll help you reset your password.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
            <label htmlFor="recovery-email">Email Address</label>
            <input
            type="email"
            id="recovery-email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
<button
type="submit"
className="login-button"
disabled={submitted}
>
{submitted ? "Request Submitted ✓" : "Send Reset Link →"}
</button>
        </form>
{submitted && (
<div className="success-message">
    <h3>Check your inbox!</h3>
    <p>
    If an account exists with <strong>{email}</strong>, you'll receive a
    password reset link shortly.
    </p>
</div>
)}
        <div className="login-register-link">
        <p>
            Remember your password? <Link to="/login">Login</Link>
        </p>
        </div>
    </div>
    </section>
);
}

export default ForgotPassword;
