import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

// Stagger variants for mobile navigation items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 300, damping: 25 } 
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close the mobile menu whenever the route changes (render-time reset).
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Facilities", path: "/facilities" },
    { name: "Activities", path: "/activities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-2 md:py-3 ${
          scrolled ? "top-1 md:top-2" : "top-0"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
            scrolled
              ? "glass-navbar py-1.5 px-5 shadow-md border border-white/30"
              : "bg-transparent py-2.5 px-3 border-bottom border-transparent"
          } flex items-center justify-between`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-2.5 group">
            <div className={`w-8.5 h-8.5 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-105 ${
              !scrolled && location.pathname === "/" ? "bg-accent shadow-accent/20" : "bg-primary shadow-primary/20"
            }`}>
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-serif font-bold text-base md:text-lg tracking-tight leading-none transition-colors duration-300 ${
                !scrolled && location.pathname === "/" ? "text-white" : "text-dark-navy"
              }`}>
                Prarthana
              </span>
              <span className={`text-[8px] md:text-[9px] uppercase tracking-widest mt-0.5 font-sans font-medium transition-colors duration-300 ${
                !scrolled && location.pathname === "/" ? "text-slate-300" : "text-slate-500"
              }`}>
                English Medium School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              const isHomepageTransparent = !scrolled && location.pathname === "/";

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 relative ${
                    isActive
                      ? isHomepageTransparent ? "text-accent" : "text-primary"
                      : isHomepageTransparent ? "text-white/90 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-primary hover:bg-white/30"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                        isHomepageTransparent ? "bg-accent" : "bg-primary"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center">
            <Button 
              to="/admissions" 
              variant={!scrolled && location.pathname === "/" ? "accent" : "primary"} 
              className="px-4 py-1.5 text-xs font-bold shadow-md shadow-primary/10"
            >
              Apply Now
            </Button>
          </div>

          {/* Custom Animated Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-50 w-8.5 h-8.5 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none ${
              isOpen 
                ? "bg-white/10 text-white" 
                : !scrolled && location.pathname === "/" 
                  ? "hover:bg-white/10 text-white" 
                  : "hover:bg-slate-100/80 text-dark-navy"
            }`}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-5 h-5 flex flex-col justify-center items-center gap-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`w-5 h-0.5 rounded-full ${isOpen || (!scrolled && location.pathname === "/") ? "bg-white" : "bg-dark-navy"}`}
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`w-5 h-0.5 rounded-full ${isOpen ? "bg-white" : !scrolled && location.pathname === "/" ? "bg-white" : "bg-dark-navy"}`}
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`w-5 h-0.5 rounded-full ${isOpen || (!scrolled && location.pathname === "/") ? "bg-white" : "bg-dark-navy"}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#080d1a]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8"
          >
            {/* Background design accents */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top header logo area */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto pt-4 relative z-50">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif font-bold text-lg text-white leading-none">Prarthana</span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 font-medium">English Medium School</span>
                </div>
              </div>
            </div>

            {/* Staggered Navigation Links */}
            <motion.nav 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center justify-center gap-6 my-auto"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);

                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl sm:text-3xl font-serif tracking-wide py-2 block transition-all duration-300 relative ${
                        isActive 
                          ? "text-accent font-bold scale-105" 
                          : "text-white/80 hover:text-white hover:scale-105"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span 
                          layoutId="mobileActiveDot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Bottom Action / Footer inside Mobile Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full max-w-sm mx-auto flex flex-col gap-4 text-center pb-8"
            >
              <Button to="/admissions" variant="accent" className="w-full py-4 text-sm font-semibold tracking-wide" onClick={() => setIsOpen(false)}>
                Apply Now
              </Button>
              <div className="text-xs text-slate-400 font-light uppercase tracking-widest">
                Admissions Open for 2026-27
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
