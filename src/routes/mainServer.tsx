import { Routes, Route } from "react-router-dom";
import Home from "../pages/auth/Index";
import LoginAuth from "../pages/auth/Login";
import RegisterAuth from "../pages/auth/Register";
import StudentDashboard from "../pages/student/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginAuth />} />
      <Route path="/register" element={<RegisterAuth />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
