import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Landing = () => {
  const navigate = useNavigate();

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white dark:bg-white text-black dark:text-black flex flex-col justify-center items-center px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse"></div>

      <div className="relative text-center max-w-4xl z-10">
        <h1 className="text-[clamp(3rem,7vw,5rem)] font-bold leading-tight mb-6">
          {greeting},{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mahipal
          </span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Welcome to your admin dashboard. Manage projects, content,
          and portfolio updates securely.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/login")}
          className="px-8 py-3 rounded-full font-semibold text-white 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          shadow-lg shadow-purple-500/30
          hover:shadow-xl hover:shadow-pink-500/40
          transition-all duration-300"
        >
          Sign In
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Landing;
