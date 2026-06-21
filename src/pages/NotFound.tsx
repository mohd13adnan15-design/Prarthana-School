import { motion } from "framer-motion";
import { Compass, Home } from "lucide-react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="bg-gradient-mesh min-h-screen pt-24 pb-20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-10 md:p-16 border border-white max-w-xl text-center shadow-2xl flex flex-col items-center gap-6"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-spin-slow">
          <Compass className="w-8 h-8 text-primary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-black text-dark-navy">
          404 - Page Not Found
        </h1>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          The academic division or media directory you requested is unavailable or has been relocated during recent system updates.
        </p>

        <div className="mt-4 flex gap-4">
          <Button to="/" variant="primary">
            <Home className="w-4 h-4 mr-1.5 inline" /> Return to Home
          </Button>
          <Button onClick={() => window.history.back()} variant="secondary">
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
