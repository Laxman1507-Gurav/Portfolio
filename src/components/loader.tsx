import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-accent">
          Welcome
        </h1>

        <p className="mt-4 text-textSecondary tracking-[0.35em] uppercase">
          To My Portfolio Website
        </p>

        <motion.div
          className="w-40 h-1 bg-accent mx-auto mt-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;