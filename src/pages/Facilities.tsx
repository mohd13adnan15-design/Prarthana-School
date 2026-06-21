import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { 
  Atom, Laptop, BookOpen, Bus, Heart, Trophy
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ChapterNav from "../components/ChapterNav";

export default function Facilities() {
  const list = [
    {
      icon: <Atom className="w-6 h-6 text-primary" />,
      title: "State-of-the-Art Science Laboratories",
      desc: "Our physics, chemistry, and biology labs are spacious and designed strictly according to safety protocols. Each lab features specialized workbenches, standard instruments (microscopes, titration units, test kits), and direct educator supervision.",
      detail: "Three dedicated labs with an aggregate footprint of 2400 sq.ft.",
      image: "/assets/kids4.png",
      imgPos: "center 28%",
    },
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: "Multimedia Smart Classrooms",
      desc: "We believe visual aids speed up learning retention. Our classrooms feature interactive digital smartboards, HD projectors, and acoustic systems. Teachers leverage curated digital libraries to display complex geometry and science structures.",
      detail: "All secondary classrooms are 100% smart-board active.",
      image: "/assets/kids8.png",
      imgPos: "center 30%",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Vast Library & Resource Center",
      desc: "A quiet space designed to inspire research. The school library features over 10,000 reference volumes, educational encyclopedias, children's literature, daily periodicals, and computer stations for searching e-journals.",
      detail: "Lending facility open to all grades, with weekly reading hours.",
      image: "/assets/kids6.png",
      imgPos: "center 25%",
    },
    {
      icon: <Bus className="w-6 h-6 text-primary" />,
      title: "Safe GPS-tracked Bus Network",
      desc: "Our school buses traverse all critical sectors of Hanur, operated by experienced licensed drivers and monitored by security cameras. We coordinate daily routes to ensure child safety and transit comfort.",
      detail: "Our fleet spans a 25km radius with active GPS tracking.",
      image: "/assets/SchoolBus.png",
      imgPos: "center center",
    }
  ];

  const secondaryFacilities = [
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: "ICT Computer Center",
      desc: "Featuring modern desktop computers, high-speed child-filtered internet, and professional educational software installations."
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "Sports Arena & Playground",
      desc: "Dedicated court layouts for basketball, volleyball, synthetic skating lanes, and a spacious grassy field for athletics and football."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Infirmary & First Aid Desk",
      desc: "A clean first aid center staffed by a qualified nurse to treat minor cuts, monitor heights/weights, and address immediate emergencies."
    }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-28 pb-32 overflow-hidden">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit">
            Campus Infrastructure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-navy font-normal leading-tight">
            Advanced Spaces That <span className="italic text-primary font-light">Spark Innovation</span>
          </h1>
          <div className="w-12 h-[2px] bg-accent mt-2" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2 font-light max-w-2xl">
            Explore our architectural design, technology centers, science hubs, and support facilities that keep students secure and inspired.
          </p>
        </motion.div>
      </section>

      {/* Main Facilities Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col gap-24 max-w-5xl mx-auto">
          {list.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Image Block */}
                <div
                  className={`lg:w-1/2 w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/80 aspect-video relative group card-media card-media--hover ${
                    item.image.includes("SchoolBus") ? "card-media--contain" : ""
                  }`}
                  style={
                    item.image.includes("SchoolBus")
                      ? undefined
                      : ({ "--img-pos": item.imgPos ?? "center 30%" } as CSSProperties)
                  }
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0f204a]/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Text Content Block */}
                <div className="lg:w-1/2 w-full flex flex-col gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    {item.desc}
                  </p>
                  
                  <div className="border-t border-slate-100 pt-4 mt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider font-sans">{item.detail}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Secondary Supportive Facilities Section */}
      <section className="py-24 md:py-32 bg-white/40 border-y border-slate-100 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            title="Essential Amenities for Student Comfort & Safety"
            subtitle="Supportive Infrastructure"
            description="We build comprehensive safety protocols and health networks to ensure students study in clean, well-managed ecosystems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            {secondaryFacilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-panel-light rounded-[2rem] p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl flex gap-6 items-start text-left transition-all duration-500"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 shadow-inner">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-serif font-bold text-dark-navy">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ChapterNav />
    </div>
  );
}
