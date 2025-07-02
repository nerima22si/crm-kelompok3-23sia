import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import jcoLogo from "../assets/jco.logo.png";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");

    // Cek hanya jika bukan di halaman login
    if (user && location.pathname === "/login") {
      const { role } = JSON.parse(user);
      if (role === "admin") navigate("/dashboard/admin");
      else if (role === "user") navigate("/dashboard/customer");
    }
  }, [navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = dataForm.email.toLowerCase();
    const password = dataForm.password;

    setTimeout(() => {
      if (email === "jco@admin" && password === "admin123") {
        localStorage.setItem("user", JSON.stringify({ email, role: "admin" }));
        navigate("/dashboard/admin");
      } else if (email === "rima@gmail.com" && password === "rima123") {
        localStorage.setItem("user", JSON.stringify({ email, role: "user" }));
        navigate("/dashboard/customer");
      } else {
        setError("Email atau password salah.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f3] px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 relative">
        <div className="flex flex-col items-center mb-6">
          <img src={jcoLogo} alt="JCO Logo" className="w-16 h-16 mb-2" />
          <h1 className="text-2xl font-bold text-[#6b3e26] tracking-wide">
            JCO CRM Login
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Please login to continue
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-100 text-red-700 text-sm p-3 rounded mb-4">
            <BsFillExclamationDiamondFill />
            {error}
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-2 text-[#6b3e26] text-sm p-3 mb-4 bg-orange-100 rounded">
            <ImSpinner2 className="animate-spin" />
            Mohon tunggu...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#d2691e] hover:bg-[#a24f16] text-white font-semibold py-2 rounded-lg transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-sm text-center mt-2">
            <a href="/forgot" className="text-orange-700 hover:underline mr-4">
              Forgot password?
            </a>
            <a href="/register" className="text-orange-700 hover:underline">
              Register
            </a>
          </div>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 JCO CRM. All rights reserved.
        </p>
      </div>
    </div>
  );
}
