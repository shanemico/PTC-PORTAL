import { useNavigate } from "react-router-dom";
import RegistrationForm from "../../components/Forms/RegistrationForm";

export default function RegisterAuth() {
  const navigate = useNavigate();

  return (
    <div className="auth-card">
      <RegistrationForm onBackToLogin={() => navigate("/login")} />
    </div>
  );
}
