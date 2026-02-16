import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      if (email === "admin@gmail.com" && password === "admin123") {
        localStorage.setItem("admin_token", "sample_token");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -120 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white bg-white text-black dark:text-white flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse"></div>

      <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md z-10 border border-gray-200 dark:border-gray-800">
        
        <h2 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-500 bg-red-100/40 dark:bg-red-900/40 p-3 rounded-xl">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="mt-4 py-3 rounded-full font-semibold text-white 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            shadow-lg shadow-purple-500/30
            hover:shadow-xl hover:shadow-pink-500/40
            transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
