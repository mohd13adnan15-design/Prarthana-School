import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Trophy, Music, Atom, 
  ChevronRight, Phone, Mail, MapPin,
  Compass, Award, ArrowRight, Clock, HelpCircle, ChevronDown, CheckCircle2
} from "lucide-react";
import Button from "../components/Button";

// Framer Motion Animation Settings
const scrollFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

// Subtle floating particles for the hero background
const heroParticles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  left: `${(i * 7) % 100}%`,
  top: `${(i * 13) % 100}%`,
  size: (i % 3) * 2 + 2, // 2px, 4px, 6px
  duration: (i % 4) * 4 + 10, // 10s to 22s
  delay: (i % 3) * 2 // 0s, 2s, 4s
}));

export default function Home() {
  const [activeTab, setActiveTab] = useState<"primary" | "middle" | "secondary">("primary");
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);


  const whyChooseUsStories = [
    {
      num: "01",
      title: "Sanctuary of Care & Security",
      desc: "Our campus operates under strict 24/7 digital surveillance and student-welfare frameworks, providing a protective, inclusive home where every child is personally recognized."
    },
    {
      num: "02",
      title: "The Digital Learning Horizon",
      desc: "By integrating premium smartboards, interactive media tools, and digital resources, we turn abstract science and mathematics into direct, visual discovery."
    },
    {
      num: "03",
      title: "Holistic Character Architect",
      desc: "We balance intensive academic study with track events, skating lanes, debates, and fine arts to shape emotional resilience and collaborative leadership."
    },
    {
      num: "04",
      title: "Timeless Moral Anchor",
      desc: "We instill core Indian ethics, empathy, and cultural heritage alongside modern global perspectives, ensuring students remain grounded in high values."
    }
  ];

  const academicPrograms = {
    primary: {
      grades: "Grades 1 to 5",
      title: "Primary Years: Foundational Discovery",
      desc: "In these early years, we focus on cognitive curiosity, sensory coordination, language mastery, and creative expression. The classroom is a playground of structured exploration.",
      highlights: ["Linguistic & Phonics mastery", "Foundational Arithmetic & Logical reasoning", "Creative Painting & Vocal Music", "Introductory environmental science projects"]
    },
    middle: {
      grades: "Grades 6 to 8",
      title: "Middle Years: Analytical Inquiry",
      desc: "We transition students into rigorous analytical inquiry, urging them to question mechanisms, engage in structured scientific research, and understand social frameworks.",
      highlights: ["Integrated Physics, Chemistry, Biology", "Computer literacy & early programming logic", "Sanskrit, English & Kannada language modules", "Structured inter-house debates & leadership camps"]
    },
    secondary: {
      grades: "Grades 9 & 10",
      title: "Secondary Years: Scholarly Excellence",
      desc: "Designed for intensive academic preparation, board exam counseling, and professional focus. We combine practical labs with testing routines to guarantee student confidence.",
      highlights: ["Syllabus tracking & mock board diagnostics", "Full laboratory experiment schedules", "Dedicated mental wellness & career counseling", "Advanced analytical mathematics & geometry panels"]
    }
  };

  const facilities = [
    {
      num: "I",
      title: "The Science Laboratories",
      desc: "Dedicated Physics, Chemistry, and Biology workbenches built to safety specifications, offering students tactile verification of physical laws and chemical reactions.",
      detail: "Aggregating a 2400 sq.ft. footprint with modern apparatus."
    },
    {
      num: "II",
      title: "Smart Classrooms",
      desc: "Interactive multimedia smartboards and sound configurations that make geometry, astronomy, and history highly interactive and engaging.",
      detail: "100% of secondary classes are active smart-board spaces."
    },
    {
      num: "III",
      title: "The Reading Sanctuary",
      desc: "A quiet resource center containing over 10,000 volumes, academic journals, child literature, and computer research stations.",
      detail: "Lending libraries accessible to all grade lines weekly."
    }
  ];

  const activities = [
    {
      icon: <Music className="w-5 h-5 text-primary" />,
      title: "Aesthetics & Music",
      desc: "Weekly training in classical vocals, keyboards, sketching, and watercolor layouts to refine artistic consciousness."
    },
    {
      icon: <Atom className="w-5 h-5 text-primary" />,
      title: "Science & Robotics",
      desc: "Hands-on projects covering block coding, electronic circuits, and environment audits, sparking engineering paths."
    },
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      title: "Sports & Athletics",
      desc: "Professional coaching in basketball, synthetic skating tracks, football, and yoga coordinates for high stamina."
    }
  ];

  const faqs = [
    {
      q: "What syllabus affiliation does Prarthana School follow?",
      a: "We are affiliated to the Government of Karnataka, integrating progressive child-centric pedagogical models. This ensures robust academic performance alongside rigorous conceptual understanding."
    },
    {
      q: "Are transportation routes available for Hanur outskirts?",
      a: "Yes. Our GPS-tracked transport buses travel across a 25km radius spanning Hanur and adjacent suburban neighborhoods. Security guards accompany every bus route."
    },
    {
      q: "What are the school hours for primary and pre-primary sections?",
      a: "Kindergarten runs from 9:00 AM to 12:30 PM. Grades 1 through 6 operate from 8:45 AM to 3:30 PM (Mondays through Fridays) and 8:45 AM to 12:30 PM on Saturdays."
    },
    {
      q: "Are admissions open for the middle of the academic year?",
      a: "Admissions generally close by June 15th to maintain syllabus coherence. However, mid-term transfers with valid Transfer Certificates (TC) from recognized schools are reviewed by the administration."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill out all mandatory fields.");
      return;
    }
    setSubmitted(true);
  };

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="bg-[#fcfdfd] min-h-screen selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. HERO SECTION (Cinematic Parallax Viewport-Height) */}
      <section className="relative min-h-screen py-28 md:py-36 flex items-center justify-center overflow-hidden">
        
        {/* Parallax Background School Image */}
        <motion.div 
          className="absolute inset-0 z-0 select-none pointer-events-none"
          style={{ y: bgY }}
        >
          <img 
            src="/assets/School image.jpeg" 
            alt="Prarthana English Medium School Cinematic View" 
            className="w-full h-[120%] object-cover object-center scale-110"
            style={{ transformOrigin: "center top" }}
          />
          {/* Royal Blue Transparent overlay with subtle transparency */}
          <div className="absolute inset-0 bg-[#0f204a]/85 backdrop-blur-[2px]" />
          
          {/* Visual gradient mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f204a]/20 to-[#0c1630]" />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {heroParticles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-white/25 rounded-full"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [0, -350],
                opacity: [0, 0.7, 0],
                x: [0, (p.id % 2 === 0 ? 30 : -30)]
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 flex flex-col justify-center pt-16 pb-6">
          <div className="max-w-4xl text-left flex flex-col items-start">
            
            {/* Admissions tag */}
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-accent bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 mb-6"
            >
              Admissions Open 2026 — 2027
            </motion.span>
            
            {/* Elegant Header */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-normal leading-[1.08] tracking-tight mb-6"
            >
              PRARTHANA ENGLISH <br />
              <span className="italic font-light text-accent">MEDIUM SCHOOL</span>
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10"
            >
              "A Destiny for your Bright Future"
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/admissions" variant="accent" size="lg" className="px-8 font-medium shadow-lg shadow-accent/10">
                Admissions Open
              </Button>
              
              {/* Secondary CTA */}
              <Button to="/about" variant="glass" size="lg" className="text-white border-white/20 hover:bg-white/10 px-8">
                Explore Campus
              </Button>
            </motion.div>
          </div>

          {/* Glass statistic cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-12 md:mt-20">
            {[
              { title: "25+ Years", desc: "Years of Excellence" },
              { title: "60+ Specialists", desc: "Qualified Teachers" },
              { title: "GPS & 24/7 Security", desc: "Safe Campus" },
              { title: "Arts, Sports & Labs", desc: "Holistic Education" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel rounded-2xl p-5 md:p-6 border border-white/15 shadow-xl text-left backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300 hover:border-white/25 flex flex-col justify-center min-h-[90px] h-full"
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-accent mb-1">{stat.title}</h4>
                <p className="text-xs text-white/80 font-sans tracking-wide font-light leading-snug">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. ABOUT SCHOOL (Redesigned Premium Editorial Section) */}
      <section className="py-28 md:py-36 bg-[#fcfdfd] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Top Storytelling block (Left Image, Right Story) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
            
            {/* Left: Large school image with scroll animation */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
              
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-2xl group">
                <img 
                  src="/assets/kids3.png" 
                  alt="Modern learning environments at Prarthana School" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
            
            {/* Right: Story (editorial blocks) */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit">
                  01 / Our Story
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark-navy leading-tight">
                  Shaping balanced minds since <span className="italic text-primary">1998</span>.
                </h2>
              </motion.div>

              {/* Storytelling blocks instead of long paragraphs */}
              <div className="flex flex-col gap-6 text-slate-600 font-light text-sm md:text-base leading-relaxed">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l-2 border-accent pl-6"
                >
                  <h4 className="font-serif text-dark-navy font-bold text-base md:text-lg mb-1">The Seed of Conscience</h4>
                  <p>Prarthana English Medium School began with a singular promise: to provide the families of Hanur with an education of caliber and conscience, growing from a humble beginning into a premier local benchmark.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l-2 border-primary pl-6"
                >
                  <h4 className="font-serif text-dark-navy font-bold text-base md:text-lg mb-1">Sanctuary of Inquiry</h4>
                  <p>We do not view learning as memorization. We see it as a sanctuary for critical analysis, active science experiments, and ethical responsibility, preparing students for tomorrow's logical challenges.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l-2 border-slate-300 pl-6"
                >
                  <h4 className="font-serif text-dark-navy font-bold text-base md:text-lg mb-1">Cultivating Character</h4>
                  <p>By pairing rigorous curriculum paths with classical moral principles, fine arts, and active athletics, we foster compassionate, grounded world citizens ready to guide their own true north.</p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-2"
              >
                <Button to="/about" variant="primary" className="px-8 py-3">
                  Our Legacy Narrative <ChevronRight className="w-4 h-4 ml-2 inline" />
                </Button>
              </motion.div>
            </div>
            
          </div>

          {/* Below Storytelling: Statistics, Mission, Vision, and Values */}
          <div className="border-t border-slate-100 pt-20 md:pt-24 flex flex-col gap-16 md:gap-24">
            
            {/* Statistics Area */}
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit mb-4 inline-block">
                  02 / Measured Progress
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-dark-navy">Our Institutional Footprint</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Enrolled Thinkers", value: "800+" },
                  { label: "Discovery Laboratories", value: "4" },
                  { label: "Qualified Specialists", value: "60+" },
                  { label: "Years of Excellence", value: "25+" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel-light rounded-2xl p-6 border border-slate-200/60 bg-white/60 backdrop-blur-md shadow-lg text-center"
                  >
                    <span className="text-3xl md:text-4xl font-serif font-bold text-primary block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-semibold font-sans">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission, Vision, and Values premium glass cards */}
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit mb-4 inline-block">
                  03 / Core Foundations
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-dark-navy">The Pillars of Prarthana</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel-light rounded-3xl p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl flex flex-col gap-6 hover:shadow-2xl hover:border-slate-300 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent-dark shadow-inner">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-dark-navy">Our Vision</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    To stand as a beacon of academic rigor and ethics, helping children cultivate a logical mind, scientific temperament, and robust empathy to thrive in future global landscapes.
                  </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel-light rounded-3xl p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl flex flex-col gap-6 hover:shadow-2xl hover:border-slate-300 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-dark-navy">Our Mission</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    To operate a technologically active campus centered on student inquiry, creative exploration, and moral responsibility, training students to become compassionate world citizens.
                  </p>
                </motion.div>

                {/* Values Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel-light rounded-3xl p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl flex flex-col gap-6 hover:shadow-2xl hover:border-slate-300 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-accent shadow-inner">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-dark-navy">Our Values</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    Guided by scientific integrity, empathy, collaborative character, and absolute respect for truth, shaping future-ready leaders anchored in timeless moral standards.
                  </p>
                </motion.div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ACADEMIC ADVISOR PROFILE (Cream & Gold Editorial Feature - Emotional Heart) */}
      <section className="relative py-28 bg-[#faf7f0] border-y border-[#f2edd8] overflow-hidden">
        {/* Soft blurred background shapes */}
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Large Portrait Representation with subtle hover movement */}
            <motion.div 
              className="md:col-span-5 flex justify-center relative group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Soft background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-2xl opacity-60 pointer-events-none group-hover:opacity-85 transition-opacity duration-500" />
              
              {/* Elegant Glass Container Portrait */}
              <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-3xl overflow-hidden border border-white shadow-2xl glass-card bg-slate-100/50 backdrop-blur-md">
                <img 
                  src="/assets/Parmeshasir.png" 
                  alt="Sri. Paramesha N" 
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-left z-10 pointer-events-none">
                  <h4 className="font-serif text-white font-bold text-xl leading-tight">Sri. Paramesha N</h4>
                  <span className="text-xs uppercase tracking-widest text-accent font-semibold mt-1 block">Academic Advisor</span>
                </div>
              </div>
            </motion.div>

            {/* Message block with beautiful quote mark and typography */}
            <div className="md:col-span-7 flex flex-col gap-6 text-left relative">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-dark">
                The Leadership Message
              </span>
              
              {/* Large quotation marks */}
              <span className="absolute -top-14 -left-8 text-[9rem] font-serif text-accent/15 select-none pointer-events-none">“</span>
              
              <div className="relative z-10">
                {/* Short inspiring excerpt */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light italic text-dark-navy leading-relaxed mb-6">
                  "We do not simply load minds with facts. We guide children to find their own true north—a compass built of scientific inquiry, deep resilience, and human compassion."
                </h3>
                
                {/* Expandable vision text */}
                <AnimatePresence initial={false}>
                  {isVisionExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed mb-6 border-l-2 border-accent pl-4">
                        Our pedagogical philosophy is built on three pillars: active inquiry, individual potential, and moral anchoring. We believe that when you give children the freedom to ask 'why' alongside a secure framework of values, they do not just succeed—they lead. Prarthana is designed as a sanctuary of growth where every student is seen, heard, and nurtured to become a thoughtful, compassionate global citizen.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button
                  onClick={() => setIsVisionExpanded(!isVisionExpanded)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest hover:underline cursor-pointer focus:outline-none"
                >
                  {isVisionExpanded ? "Collapse Vision" : "Read My Vision"} 
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isVisionExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Digital signature area */}
              <div className="pt-6 border-t border-slate-200 mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl font-bold text-dark-navy">
                      Sri. Paramesha N
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
                      Academic Advisor
                    </span>
                  </div>
                  
                  {/* Digital Signature */}
                  <div className="font-serif text-3xl text-accent font-semibold select-none border-l border-slate-200 pl-6 py-1 italic tracking-wider" style={{ fontFamily: "'Brush Script MT', 'Caveat', cursive" }}>
                    Paramesha N
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* 5. WHY CHOOSE US (Roman Numeral Stories) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block mb-4">
              Our Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-dark-navy leading-tight">
              An ecosystem engineered for <span className="italic text-primary">potential</span>.
            </h2>
          </div>
          
          {/* Asymmetrical list of storytelling cards with Roman numerals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 border-t border-slate-100 pt-12">
            {whyChooseUsStories.map((story, idx) => (
              <div key={idx} className="flex gap-6 items-start py-4">
                <span className="text-4xl md:text-5xl font-serif font-light text-accent tracking-tighter">
                  {story.num}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-dark-navy">
                    {story.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                    {story.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 6. ACADEMIC PROGRAMS ( prospect catalog layout ) */}
      <section className="py-24 md:py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block mb-4">
              Curriculum Path
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark-navy">
              Strategic Academics for Every Age
            </h2>
            <p className="text-slate-500 font-light text-sm md:text-base mt-4">
              We divide our syllabus track into three developmental blocks, matching cognitive growth levels with appropriate practical assets.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tabs Selector */}
            <div className="flex justify-center border-b border-slate-200 mb-12">
              <button 
                onClick={() => setActiveTab("primary")}
                className={`px-6 py-4 font-serif text-base md:text-lg border-b-2 transition-all cursor-pointer ${
                  activeTab === "primary" ? "border-primary text-primary font-bold" : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Primary School
              </button>
              <button 
                onClick={() => setActiveTab("middle")}
                className={`px-6 py-4 font-serif text-base md:text-lg border-b-2 transition-all cursor-pointer ${
                  activeTab === "middle" ? "border-primary text-primary font-bold" : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Middle School
              </button>
              <button 
                onClick={() => setActiveTab("secondary")}
                className={`px-6 py-4 font-serif text-base md:text-lg border-b-2 transition-all cursor-pointer ${
                  activeTab === "secondary" ? "border-primary text-primary font-bold" : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Secondary School
              </button>
            </div>

            {/* Tab Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 md:p-12 border border-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/5 px-3.5 py-1 rounded-full border border-primary/10 w-fit">
                    {academicPrograms[activeTab].grades}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy mt-1">
                    {academicPrograms[activeTab].title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    {academicPrograms[activeTab].desc}
                  </p>
                  
                  <div className="mt-4">
                    <Button to="/academics" variant="glass" className="px-6 py-2">
                      Syllabus Details <ChevronRight className="w-4 h-4 ml-1 inline" />
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white/60 rounded-2xl p-6 border border-white/60">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4 border-b border-slate-100 pb-2">
                    Key Curriculum Focus:
                  </span>
                  <ul className="flex flex-col gap-3">
                    {academicPrograms[activeTab].highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </section>

      {/* 7. CAMPUS (Asymmetric Serene Landscape Highlight) */}
      <section className="relative py-28 md:py-36 bg-[#080d1a] overflow-hidden text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/assets/School image.jpeg" 
            alt="Hanur campus landscape" 
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d1a] via-[#080d1a]/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              02 / The Campus
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif font-normal leading-tight text-white">
              Centrally Located Sanctuary in <span className="italic text-accent">Hanur</span>
            </h2>
            
            <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
              Nestled at Ajjipura Village on Ramapura Main Road, Hanur, our school campus offers a safe haven away from noise, yet maintains close access coordinates with local transit lines.
            </p>
            
            <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
              Designed with wide walking lanes, botanical gardens, and spacious school assembly points, our physical space contributes directly to a serene, relaxed atmosphere for study.
            </p>
            
            <div className="pt-4 flex gap-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Prarthana+English+Medium+School+Hanur+Chamarajanagara" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:underline cursor-pointer"
              >
                View on Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="glass-card rounded-[2rem] p-8 border border-white/5 flex flex-col gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">
                Hanur, Chamarajanagara
              </h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Our geographical design allows parents to easily arrange pick-ups, and coordinates smoothly with our GPS-linked bus network covering suburban lines.
              </p>
              <div className="border-t border-white/5 pt-4 mt-2 grid grid-cols-2 gap-4 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <div>
                  <span className="block text-[10px] text-slate-500 mb-1">Campus footprint</span>
                  2.5 Serene Acres
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 mb-1">Security guard coverage</span>
                  24/7 Monitored
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 8. FACILITIES (Asymmetric Magazine Spread) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-end">
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit">
                Learning Spaces
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-dark-navy leading-tight">
                Architectural resources that <br />
                <span className="italic text-primary">enhance understanding</span>.
              </h2>
            </div>
            <div className="lg:col-span-5 text-left lg:text-right">
              <Button to="/facilities" variant="primary" className="px-8 py-3">
                Explore All Facilities
              </Button>
            </div>
          </div>

          {/* Asymmetric vertical panels list */}
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {facilities.map((fac, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-slate-100 pt-8"
              >
                {/* Numeric index marker */}
                <div className="md:col-span-1 text-2xl font-serif text-accent block leading-none font-semibold">
                  {fac.num}
                </div>
                
                {/* Title */}
                <div className="md:col-span-4 text-left">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-navy">
                    {fac.title}
                  </h3>
                  <span className="text-xs text-slate-400 block mt-2 font-medium italic">
                    {fac.detail}
                  </span>
                </div>
                
                {/* Description */}
                <div className="md:col-span-7 text-left text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  {fac.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. ACTIVITIES (Index-Style Typography Layout) */}
      <section className="py-24 md:py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block mb-4">
              03 / Co-Curricular
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark-navy leading-tight">
              Active Clubs to Cultivate Hidden Potential
            </h2>
            <p className="text-slate-500 font-light text-sm md:text-base mt-4">
              We design activities that build collaborative team coordinates, refine creative motor skills, and stimulate scientific exploration outside the standard curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((act, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-3xl p-8 border border-white flex flex-col gap-6 text-left transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  {act.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif font-bold text-dark-navy">
                    {act.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/activities" variant="secondary" className="px-8">
              View All Student Activities
            </Button>
          </div>

        </div>
      </section>

      {/* 10. GALLERY PREVIEW (Curated Museum Exhibition Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block mb-4">
              Visions of Campus
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-dark-navy">
              The Curated Exhibition
            </h2>
            <p className="text-slate-500 font-light text-xs md:text-sm mt-3">
              Explore snippets of student laboratory milestones, smart learning rooms, and sports arena events.
            </p>
          </div>

          {/* Asymmetric Assembled Masonry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] relative group border border-slate-100">
              <img src="/assets/kids4.png" alt="Multimedia smartboard class" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white uppercase tracking-wider block font-semibold">Active Learning</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg aspect-square relative group border border-slate-100 md:scale-110 z-10 bg-slate-100">
              <img src="/assets/School image.jpeg" alt="School central panel" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white uppercase tracking-wider block font-semibold">Prarthana Campus</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] relative group border border-slate-100">
              <img src="/assets/Kids1.png" alt="Chemistry experiments" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white uppercase tracking-wider block font-semibold">Science Laboratory</span>
              </div>
            </div>

          </div>

          <div className="text-center mt-16">
            <Button to="/gallery" variant="glass" className="px-8">
              Open Media Library
            </Button>
          </div>

        </div>
      </section>

      {/* 11. ADMISSIONS CTA (Physical Invitation Envelope Design) */}
      <section className="py-24 md:py-32 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFade}
            className="glass-card rounded-[2.5rem] p-8 md:p-20 border border-white shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto bg-white/70"
          >
            {/* Elegant framing vectors */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent rounded-tl-3xl m-4" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-3xl m-4" />

            <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary bg-primary/5 px-4 py-1 rounded-full border border-primary/10">
                2026 Academic Term Enrolling
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark-navy font-normal leading-tight">
                An Invitation to Join Our Family
              </h2>
              
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                Ensure a structured, care-oriented trajectory for your child. Our admission coordinators will guide you through documents and interaction milestones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                <Button to="/admissions" variant="primary" size="lg" className="px-8">
                  Begin Inquiry Form
                </Button>
                <Button to="/contact" variant="glass" size="lg" className="px-8 border-slate-200">
                  Speak to Admissions Desk
                </Button>
              </div>

              <span className="text-[10px] text-slate-400 mt-2 block italic uppercase tracking-wider">
                * Assessment tests are mandatory for Grade 5 and above entries.
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 12. CONTACT (Correspondence Desk & Parent FAQ Spread) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Details & Messaging Form */}
            <div className="lg:col-span-6 flex flex-col gap-8 text-left">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit">
                  Campus Coordinates
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-dark-navy">
                  Administrative Desk
                </h2>
                <p className="text-slate-500 font-light text-sm">
                  Reach out directly regarding fees, curriculum recognition, bus coordinates, and student welfare policies.
                </p>
              </div>

              {/* Minimal coordinates card */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>+91 9480112233 / +91 (8182) 223456</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>info@prarthanaschool.edu.in</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span>Monday – Friday: 8:30 AM to 4:00 PM</span>
                </div>
              </div>

              {/* Message form */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-serif font-bold text-dark-navy text-sm">Direct Correspondence Portal</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary"
                      />
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address" 
                        className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary"
                      />
                    </div>
                    
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit Mobile Number" 
                      className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary"
                    />
                    
                    <textarea 
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your query details here..." 
                      className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs resize-none focus:outline-none focus:border-primary"
                    />

                    <Button type="submit" variant="primary" className="py-2.5 text-xs">
                      Send Correspondence <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
                    </Button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1 }}
                    className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl text-center flex flex-col items-center gap-3"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                    <h4 className="font-serif font-bold text-dark-navy text-sm">Correspondence Logged!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our receptionist will review the details and respond via email or phone shortly.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="text-[10px] font-bold text-primary hover:underline cursor-pointer">
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Parent FAQ Accordion Block */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div className="flex flex-col gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Parent Helpdesk
                </span>
                <h3 className="text-2xl font-serif font-bold text-dark-navy">
                  Frequently Answered Queries
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="border-b border-slate-100 pb-4 transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left flex justify-between items-center font-serif font-semibold text-sm md:text-base text-dark-navy hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-3">
                          <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-slate-500 text-xs md:text-sm mt-3 pl-7 leading-relaxed font-light">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
