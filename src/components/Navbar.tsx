import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SchoolLogo from "./SchoolLogo";
import Button from "./Button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 28 },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const onHero = isHome && !scrolled;
  const navVariant = onHero ? "light" : "dark";

  return (
    <>
      <header className="navbar-root">
        <div
          className={`navbar-shell ${scrolled || !isHome ? "navbar-shell--solid" : "navbar-shell--hero"}`}
        >
          <SchoolLogo
            size="md"
            variant={navVariant}
            linkToHome
            className="shrink-0"
          />

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`navbar-link ${isActive ? "navbar-link--active" : ""} ${
                    onHero ? "navbar-link--hero" : ""
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`navbar-link-indicator ${onHero ? "bg-accent" : "bg-primary"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Button
              to="/admissions"
              variant={onHero ? "accent" : "primary"}
              size="sm"
              className="btn-premium-gold px-5 py-2 text-xs font-bold"
            >
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`navbar-menu-toggle lg:hidden ${onHero && !isOpen ? "text-white" : "text-dark-navy"}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className={`navbar-menu-bar ${isOpen ? "navbar-menu-bar--top-open" : ""}`} />
            <span className={`navbar-menu-bar ${isOpen ? "navbar-menu-bar--mid-open" : ""}`} />
            <span className={`navbar-menu-bar ${isOpen ? "navbar-menu-bar--bot-open" : ""}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="navbar-mobile-backdrop lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="navbar-mobile-drawer lg:hidden"
            >
              <div className="navbar-mobile-header">
                <SchoolLogo size="lg" variant="dark" linkToHome />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="navbar-mobile-close"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="navbar-mobile-links"
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
                        className={`navbar-mobile-link ${isActive ? "navbar-mobile-link--active" : ""}`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <div className="navbar-mobile-footer">
                <Button
                  to="/admissions"
                  variant="accent"
                  className="btn-premium-gold w-full py-3.5"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Button>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest text-center mt-3">
                  Admissions Open 2026–27
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
