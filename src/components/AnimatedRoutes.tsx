import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import ChapterNav from "./ChapterNav";
import Home from "../pages/Home";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Facilities from "../pages/Facilities";
import Activities from "../pages/Activities";
import Gallery from "../pages/Gallery";
import Admissions from "../pages/Admissions";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Subtle "magazine page-turn": fade + scale + a soft perspective tilt. Only
// transform/opacity are animated so the motion stays GPU-accelerated and smooth.
const pageVariants: Variants = {
  initial: { opacity: 0, scale: 0.985, rotateY: 4 },
  enter: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    rotateY: -4,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

const reducedVariants: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export default function AnimatedRoutes() {
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  return (
    <div style={{ perspective: 1600 }}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        <motion.div
          key={location.pathname}
          variants={prefersReduced ? reducedVariants : pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform, opacity",
          }}
          className="bg-[#fcfdfd]"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChapterNav />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
