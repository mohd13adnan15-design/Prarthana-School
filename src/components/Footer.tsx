import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Clock, ArrowUp, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#080d1a] text-slate-300 pt-28 pb-16 border-t border-slate-900 relative overflow-hidden">
      {/* Background radial glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. School Motto / Closing Quote Above Footer */}
        <div className="text-center max-w-4xl mx-auto mb-20 border-b border-white/5 pb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-4">
            Our Legacy Compass
          </span>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic font-light leading-relaxed">
            "A Destiny for your Bright Future"
          </h3>
        </div>

        {/* 2. Main Footer Grid with Glassmorphic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Card 1: Logo, Info & Socials (4 Cols) */}
          <div className="lg:col-span-4 glass-panel-dark rounded-[2rem] p-8 border border-white/5 bg-white/5 backdrop-blur-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif font-bold text-lg text-white leading-none">
                    Prarthana
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 font-medium">
                    English Medium School
                  </span>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Nurturing young minds through classical values, comprehensive early education, and progressive pedagogical pathways designed for future thinkers and empathetic leaders.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10" aria-label="Instagram">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10" aria-label="Youtube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.002 3.002 0 0 0-2.11 2.107C0 8.028 0 12 0 12s0 3.972.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.475 20.455 12 20.455 12 20.455s7.524 0 9.388-.51a3.002 3.002 0 0 0 2.11-2.107C24 15.972 24 12 24 12s0-3.972-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Quick Links & Operating Hours (4 Cols) */}
          <div className="lg:col-span-4 glass-panel-dark rounded-[2rem] p-8 border border-white/5 bg-white/5 backdrop-blur-md flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <h4 className="font-serif text-lg text-white font-normal tracking-wide">
                Prospectus Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-light text-slate-400">
                <li>
                  <Link to="/" className="hover:text-accent transition-colors duration-300">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-accent transition-colors duration-300">About Us</Link>
                </li>
                <li>
                  <Link to="/academics" className="hover:text-accent transition-colors duration-300">Academics</Link>
                </li>
                <li>
                  <Link to="/facilities" className="hover:text-accent transition-colors duration-300">Facilities</Link>
                </li>
                <li>
                  <Link to="/activities" className="hover:text-accent transition-colors duration-300">Activities</Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-accent transition-colors duration-300">Gallery</Link>
                </li>
                <li>
                  <Link to="/admissions" className="hover:text-accent transition-colors duration-300">Admissions</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
              <h4 className="font-serif text-sm text-white font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" /> Working Hours
              </h4>
              <div className="text-xs font-light text-slate-400 flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-slate-300 font-normal">8:45 AM – 3:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-slate-300 font-normal">8:45 AM – 12:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-500/80">Sunday & Public Holidays:</span>
                  <span className="text-amber-500/80">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Address & Google Map Pin (4 Cols) */}
          <div className="lg:col-span-4 glass-panel-dark rounded-[2rem] p-8 border border-white/5 bg-white/5 backdrop-blur-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-lg text-white font-normal tracking-wide">
                Campus Location
              </h4>
              <div className="flex flex-col gap-3 text-sm font-light text-slate-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">
                    #001, Sy.No. 548/12, Aale Mane Bus Stop, Ambikapura, Ajjipura Village, Ramapura Main Road, Hanur, Chamarajanagara, Dist – 571439
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href="tel:+919986608637" className="hover:text-accent transition-colors">+91 9986608637</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href="mailto:info@prarthanaschool.edu.in" className="hover:text-accent transition-colors">info@prarthanaschool.edu.in</a>
                </div>
              </div>
            </div>

            {/* Google Map Styled Link Box */}
            <div className="relative h-28 w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
              {/* Mock Map Background Grid */}
              <div className="absolute inset-0 bg-slate-950 opacity-90" />
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
              
              {/* Glowing location coordinate */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 relative z-10">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Compass className="w-6 h-6 text-accent" />
                </motion.div>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold bg-[#0c1630]/90 px-2 py-0.5 rounded border border-white/10">Hanur, Chamarajanagara</span>
              </div>

              {/* Map Action Button */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Prarthana+English+Medium+School+Hanur+Chamarajanagara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-dark-navy/70 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xs font-semibold text-accent uppercase tracking-wider gap-1 cursor-pointer"
              >
                Open Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Row: Copyright & Disclaimers */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            &copy; {currentYear} Prarthana English Medium School. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>

      {/* 4. Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-accent hover:bg-accent-dark text-dark-navy shadow-2xl transition-all duration-300 hover:scale-110 border border-white/20 cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
