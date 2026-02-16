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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-center items-center px-6">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl"
      >
        {/* Large Heading */}
        <h1 className="text-[clamp(3rem,7vw,6rem)] font-semibold leading-tight tracking-tight mb-8">
          {greeting} <br />
          Mahipal
        </h1>

        {/* Subtext */}
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Your admin account connects all your portfolio management tools.
          Sign in to manage your dashboard securely.
        </p>

        {/* Microsoft Style Button */}
        <button
          onClick={() => navigate("/login")}
          className="
            px-6 py-2.5
            bg-blue-600
            hover:bg-blue-700
            text-white
            text-sm
            font-medium
            rounded
            transition
          "
        >
          Sign in
        </button>
      </motion.div>
    </div>
  );
};

export default Landing;
