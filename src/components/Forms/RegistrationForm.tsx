import React, { useState } from "react";

type Props = {
  onBackToLogin: () => void; // ✅ renamed from setShowRegister
};

export default function RegistrationForm({ onBackToLogin }: Props) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    verifyPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.email || !formData.username || !formData.password) {
      setError("Please fill all fields");
      return;
    }

    if (formData.password !== formData.verifyPassword) {
      setError("Passwords do not match!");
      setFormData({ ...formData, password: "", verifyPassword: "" });
      return;
    }

    setError("");
    console.log("Registering user...", formData);
    // TODO: call authService.register() here later
    onBackToLogin(); // go back to login after successful register
  }

  return (
    <>
      <div className="auth-left">
        <h2>Create Account</h2>
        <p>Join us today and start your journey with us!</p>
      </div>

      <div className="auth-right">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Verify Password</label>
            <input
              type="password"
              name="verifyPassword"
              placeholder="••••••••"
              value={formData.verifyPassword}
              onChange={handleChange}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit">Register</button>
        </form>

        <div className="auth-links">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBackToLogin();
            }}
          >
            Back to Login
          </a>
        </div>
      </div>
    </>
  );
}
