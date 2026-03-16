import { useNavigate } from "react-router-dom";
import logo from "../../assets/ptclogo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-card">
        <div className="logo">
          <img src={logo} alt="PTC Logo" />
        </div>
        <h1>Welcome to PTC Portal</h1>
        <p>
          Access your student dashboard, announcements, and academic records.
        </p>
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="btn btn-success"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
