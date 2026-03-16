import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const user = authService.login(name, password); // ✅ using service now

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    authService.saveSession(user); // ✅ save session

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  }

  return (
    <>
      <div className="auth-left">
        <h2>Welcome Back</h2>
        <p>Login to access your portal dashboard.</p>
      </div>

      <div className="auth-right">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="auth-links">
          <a href="/register">Create an account</a>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </>
  );
}
