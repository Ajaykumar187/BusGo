import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBusAlt } from "react-icons/fa";
import toast from "react-hot-toast";

import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await loginUser(formData);

      login(data.user, data.token);

      toast.success("Login successful!");

      navigate(data.user.role === "admin" ? "/admin" : "/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">

      <form
        onSubmit={handleSubmit}
        className="glass-light rounded-3xl shadow-2xl p-8 w-full max-w-md space-y-5"
      >

        <div className="flex flex-col items-center mb-2">
          <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-ember to-dusk text-white mb-4">
            <FaBusAlt size={24} />
          </span>

          <h1 className="font-display text-3xl font-bold text-ink">
            Welcome back
          </h1>
          <p className="text-ink/50 text-sm mt-1">
            Login to continue booking with BusGo
          </p>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-ink/15 bg-white/70 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-ember"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-ink/15 bg-white/70 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-ember"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="ember-glow w-full bg-gradient-to-r from-ember to-ember-light text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-ink/50">
          Don't have an account?{" "}
          <Link to="/register" className="text-ember font-semibold">
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;
