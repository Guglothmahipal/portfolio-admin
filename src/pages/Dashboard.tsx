import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center"
    >
      <h1 className="text-4xl font-bold">
        Welcome to Admin Dashboard 🚀
      </h1>
    </motion.div>
  );
};

export default Dashboard;
