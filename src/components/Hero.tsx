import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section relative h-full w-full overflow-hidden">
      <div className="hero-bg absolute inset-0 z-0 select-none pointer-events-none" aria-hidden="true">
        <img
          src="/assets/School image.jpeg"
          alt=""
          className="hero-bg-image"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-overlay" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-inner relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <span className="hero-badge">Admissions Open 2026 – 2027</span>

          <h1 className="hero-title">
            Prarthana English{" "}
            <span className="hero-title-accent">Medium School</span>
          </h1>

          <p className="hero-tagline">A Destiny for Your Bright Future</p>

          <p className="hero-description">
            A premier English-medium campus in Hanur where academic rigor meets
            character, creativity, and care.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="hero-btn hero-btn-primary">
              Explore Our Story
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link to="/admissions" className="hero-btn hero-btn-secondary">
              Apply Now
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span>Scroll to turn the page</span>
      </div>
    </section>
  );
}
