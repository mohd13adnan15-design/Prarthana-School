import { useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import ProspectusCover from "../components/ProspectusCover";
import ChapterNav from "../components/ChapterNav";
import Button from "../components/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const galleryPreview = [
  { src: "/assets/kids4.png", pos: "center 28%", wide: false },
  { src: "/assets/School image.jpeg", pos: "center 45%", wide: true },
  { src: "/assets/Kids1.png", pos: "center 35%", wide: false },
  { src: "/assets/kids3.png", pos: "center 40%", wide: false },
];

const facilityImages = [
  { src: "/assets/Kids1.png", pos: "center 35%" },
  { src: "/assets/kids4.png", pos: "center 30%" },
  { src: "/assets/kids3.png", pos: "center 40%" },
];

export default function Home() {
  const [coverTurned, setCoverTurned] = useState(false);

  return (
    <div className="home-landing bg-[#fcfdfd] min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <div className={`prospectus-underneath ${coverTurned ? "prospectus-underneath--revealed" : ""}`}>

      {/* About Preview */}
      <section className="home-section py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="card-media card-media--hover relative aspect-[4/3] rounded-2xl md:rounded-[2rem] shadow-xl border border-slate-200/80"
              style={{ "--img-pos": "center 38%" } as CSSProperties}
            >
              <img
                src="/assets/kids3.png"
                alt="Students at Prarthana School"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="flex flex-col gap-4 md:gap-5"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark-navy leading-tight">
                Shaping balanced minds since{" "}
                <span className="italic text-primary">1998</span>.
              </h2>
              <p className="text-slate-600 font-light leading-relaxed text-sm md:text-base">
                Prarthana began with a promise to bring caliber and conscience
                to Hanur — a sanctuary where inquiry, ethics, and excellence
                grow together.
              </p>
              <Button to="/about" variant="primary" className="w-fit px-6">
                Read More <ChevronRight className="w-4 h-4 ml-1 inline" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Advisor Preview */}
      <section className="home-section py-14 md:py-28 bg-[#faf7f0] border-y border-[#f2edd8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="md:col-span-4 flex justify-center"
            >
              <div
                className="card-media w-full max-w-[14rem] sm:max-w-none sm:w-56 md:w-64 aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden border border-white shadow-2xl"
                style={{ "--img-pos": "center 15%" } as CSSProperties}
              >
                <img
                  src="/assets/Parmeshasir.png"
                  alt="Sri. Paramesha N"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="md:col-span-8 flex flex-col gap-3 md:gap-4 text-center md:text-left"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">
                Academic Advisor
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold text-dark-navy">
                Sri. Paramesha N
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light italic text-dark-navy leading-relaxed">
                &ldquo;We guide children to find their own true north — a compass
                built of inquiry, resilience, and compassion.&rdquo;
              </p>
              <Button to="/about" variant="secondary" className="w-fit px-6 mt-2 mx-auto md:mx-0">
                Read His Vision <ArrowRight className="w-4 h-4 ml-1 inline" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academics Preview */}
      <section className="home-section py-14 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col gap-4 md:gap-6 items-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Academics
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark-navy">
              Learning that grows with every child
            </h2>
            <p className="text-slate-600 font-light max-w-xl text-sm md:text-base px-2">
              From foundational discovery to board-ready excellence — a curriculum
              path shaped for each stage of development.
            </p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-x-6 sm:gap-y-2 text-sm text-slate-600 font-light">
              {[
                "Primary Years",
                "Middle School Inquiry",
                "Secondary Excellence",
              ].map((item) => (
                <li key={item} className="flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/academics" variant="primary" className="px-8 mt-2">
              Explore Academics
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="home-section py-14 md:py-28 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Facilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark-navy mt-3">
              Spaces designed for discovery
            </h2>
            <p className="text-slate-500 font-light text-sm mt-3 max-w-md mx-auto px-2">
              Laboratories, smart classrooms, and a reading sanctuary — every
              corner built to inspire.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-10">
            {facilityImages.map((item, i) => (
              <div
                key={i}
                className="card-media card-media--hover aspect-[4/3] rounded-xl md:rounded-2xl shadow-lg border border-slate-100"
                style={{ "--img-pos": item.pos } as CSSProperties}
              >
                <img src={item.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button to="/facilities" variant="glass" className="px-8">
              View All Facilities
            </Button>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="home-section py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="card-media relative rounded-2xl md:rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] shadow-2xl"
            style={{ "--img-pos": "center 32%" } as CSSProperties}
          >
            <img
              src="/assets/kids4.png"
              alt="Student activities at Prarthana"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/75 via-dark-navy/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Activities
              </span>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-white mt-2 leading-tight">
                Where talent finds its stage
              </h2>
              <Button
                to="/activities"
                variant="accent"
                className="mt-4 md:mt-6 px-6"
              >
                Discover Activities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="home-section py-14 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Gallery
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark-navy mt-3">
              Glimpses of campus life
            </h2>
          </motion.div>
          <div className="gallery-preview-grid mb-8 md:mb-10">
            {galleryPreview.map((item, i) => (
              <div
                key={i}
                className={`gallery-preview-item card-media card-media--hover ${
                  item.wide ? "gallery-preview-item--wide" : ""
                }`}
                style={{ "--img-pos": item.pos } as CSSProperties}
              >
                <img src={item.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button to="/gallery" variant="primary" className="px-8">
              Open Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Admissions Preview */}
      <section className="home-section py-14 md:py-28 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col gap-4 md:gap-5 items-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Admissions 2026 — 2027
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-dark-navy">
              Your child&apos;s journey begins here
            </h2>
            <Button to="/admissions" variant="accent" size="lg" className="px-8 md:px-10 mt-2 w-full sm:w-auto">
              Begin Admission Inquiry
            </Button>
          </motion.div>
        </div>
      </section>

      <ChapterNav />
      </div>

      <ProspectusCover onTurnComplete={() => setCoverTurned(true)} />
    </div>
  );
}
