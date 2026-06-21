import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Button from "../components/Button";

// Shared scroll-reveal used across the minimal homepage previews.
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// A small label used to introduce each "chapter preview".
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block w-fit">
      {children}
    </span>
  );
}

// A consistent "continue reading" link used to invite the visitor onward.
function ReadMore({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Button to={to} variant="glass" className="group px-6 py-2.5 w-fit border-slate-200">
      {children}
      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
}

const academicHighlights = [
  { title: "Inquiry over rote", desc: "We replace memorization with questions, experiments, and discovery." },
  { title: "Three growth stages", desc: "A curriculum tuned to how children actually learn and mature." },
  { title: "Labs & language", desc: "Hands-on science paired with English, Kannada, and confident expression." },
];

const facilityPreviews = [
  { img: "/assets/Kids1.png", label: "Science Labs" },
  { img: "/assets/kids3.png", label: "Smart Classrooms" },
  { img: "/assets/kids6.png", label: "Reading Sanctuary" },
];

const galleryPreviews = [
  { img: "/assets/kids4.png", aspect: "aspect-[4/5]" },
  { img: "/assets/kids8.png", aspect: "aspect-square" },
  { img: "/assets/kids9.png", aspect: "aspect-[4/5]" },
  { img: "/assets/kids5.png", aspect: "aspect-square" },
];

export default function Home() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="bg-[#fcfdfd] selection:bg-amber-100 selection:text-amber-900">

      {/* HERO — name, tagline, one line, campus image, one call to action */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0 select-none pointer-events-none" style={{ y: bgY }}>
          <img
            src="/assets/School image.jpeg"
            alt="Prarthana English Medium School campus"
            className="w-full h-[120%] object-cover object-center scale-110"
            style={{ transformOrigin: "center top" }}
          />
          <div className="absolute inset-0 bg-[#0f204a]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1630]/40 via-[#0f204a]/20 to-[#0c1630]" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-accent bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 mb-8"
          >
            A Digital Prospectus
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-normal leading-[1.08] tracking-tight"
          >
            PRARTHANA ENGLISH <br />
            <span className="italic font-light text-accent">MEDIUM SCHOOL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent/90 text-base md:text-lg font-light italic tracking-wide mt-6"
          >
            "A Destiny for your Bright Future"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-xl mt-5"
          >
            A school in Hanur where curiosity, character, and care shape every child's story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Button to="/about" variant="accent" size="lg" className="group px-8 font-medium shadow-lg shadow-accent/10">
              Explore Our Story
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Soft scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ABOUT PREVIEW — a short introduction only */}
      <section className="py-24 md:py-32 bg-[#fcfdfd]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-2xl group">
                <img
                  src="/assets/kids3.png"
                  alt="Students learning at Prarthana School"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-6 flex flex-col gap-6 items-start"
            >
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark-navy leading-tight">
                Shaping balanced minds since <span className="italic text-primary">1998</span>.
              </h2>
              <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-xl">
                What began as a humble promise to the families of Hanur has grown into a sanctuary of inquiry, character, and conscience.
              </p>
              <ReadMore to="/about">Read Our Story</ReadMore>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACADEMIC ADVISOR PREVIEW — portrait, name, designation, one quote */}
      <section className="relative py-24 md:py-32 bg-[#faf7f0] border-y border-[#f2edd8] overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 flex justify-center relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-2xl opacity-60 pointer-events-none" />
              <div className="relative w-64 h-80 md:w-72 md:h-[380px] rounded-3xl overflow-hidden border border-white shadow-2xl glass-card bg-slate-100/50">
                <img
                  src="/assets/Parmeshasir.png"
                  alt="Sri. Paramesha N, Academic Advisor"
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

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-7 flex flex-col gap-6 text-left relative"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-dark">
                The Leadership Message
              </span>
              <Quote className="w-10 h-10 text-accent/30" />
              <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-serif font-light italic text-dark-navy leading-relaxed">
                "We do not simply load minds with facts. We guide children to find their own true north."
              </h3>
              <ReadMore to="/about">Read His Vision</ReadMore>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACADEMICS PREVIEW — brief philosophy and a few highlights */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl flex flex-col gap-5 mb-16"
          >
            <Eyebrow>How We Teach</Eyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark-navy leading-tight">
              Learning designed to <span className="italic text-primary">last a lifetime</span>.
            </h2>
            <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
              Our pedagogy turns curiosity into understanding — and understanding into confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-12">
            {academicHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3"
              >
                <span className="text-4xl font-serif font-light text-accent">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-serif font-semibold text-dark-navy">{item.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <ReadMore to="/academics">Continue to Academics</ReadMore>
          </div>
        </div>
      </section>

      {/* FACILITIES PREVIEW — a few premium images and one sentence */}
      <section className="py-24 md:py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-8 flex flex-col gap-5"
            >
              <Eyebrow>Where Students Learn</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark-navy leading-tight">
                Spaces that <span className="italic text-primary">spark innovation</span>.
              </h2>
            </motion.div>
            <div className="lg:col-span-4 lg:text-right">
              <ReadMore to="/facilities">Explore Facilities</ReadMore>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilityPreviews.map((fac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[2rem] overflow-hidden aspect-[4/5] group shadow-xl border border-slate-100"
              >
                <img
                  src={fac.img}
                  alt={fac.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/70 via-dark-navy/10 to-transparent" />
                <span className="absolute bottom-6 left-6 font-serif text-white text-lg font-normal">{fac.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES PREVIEW — large photography, minimal text */}
      <section className="relative py-28 md:py-40 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img src="/assets/kids8.png" alt="Students at play" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0c1630]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1630] via-[#0c1630]/50 to-transparent" />
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-6 max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How Students Grow</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight">
            Beyond the classroom, <span className="italic text-accent">character takes shape</span>.
          </h2>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
            Music, robotics, athletics, and the arts — where hidden potential comes alive.
          </p>
          <Button to="/activities" variant="accent" className="group px-7 py-3 w-fit mt-2">
            Discover Activities
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </section>

      {/* GALLERY PREVIEW — a handful of selected images */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-xl mx-auto flex flex-col items-center gap-4 mb-14"
          >
            <Eyebrow>Daily Life</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-serif font-normal text-dark-navy">
              Moments from our campus
            </h2>
            <p className="text-slate-500 font-light text-sm md:text-base">
              A glimpse of everyday curiosity, friendship, and discovery.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
            {galleryPreviews.map((g, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl overflow-hidden ${g.aspect} group shadow-lg border border-slate-100 ${idx % 2 === 1 ? "md:translate-y-6" : ""}`}
              >
                <img
                  src={g.img}
                  alt="Campus life at Prarthana School"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <ReadMore to="/gallery">Open the Gallery</ReadMore>
          </div>
        </div>
      </section>

      {/* ADMISSIONS PREVIEW — one simple call to action */}
      <section className="py-24 md:py-32 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="glass-card rounded-[2.5rem] p-10 md:p-20 border border-white shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto bg-white/70"
          >
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent rounded-tl-3xl m-4" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent rounded-br-3xl m-4" />
            <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
              <Eyebrow>Admissions Open 2026 — 2027</Eyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark-navy font-normal leading-tight">
                Ready to begin your child's story?
              </h2>
              <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">
                Discover how your child can join the Prarthana family.
              </p>
              <Button to="/admissions" variant="primary" size="lg" className="group px-8 mt-2">
                Begin the Journey
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
