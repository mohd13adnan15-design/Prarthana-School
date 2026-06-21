import { motion } from "framer-motion";
import { Compass, Award, Heart, BookOpen, UserCheck, Shield } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const cardTransition = { type: "spring" as const, stiffness: 300, damping: 22 };

export default function About() {
  const milestones = [
    {
      year: "1998",
      title: "Founding Pillars",
      desc: "Prarthana English Medium School was established with just 50 students, focused on value-oriented foundation teaching."
    },
    {
      year: "2005",
      title: "Secondary School Expansion",
      desc: "Obtained recognition to operate high school modules. Established our first physics and chemistry laboratories."
    },
    {
      year: "2014",
      title: "Digital Integration",
      desc: "Upgraded all classrooms with interactive media projectors and established our digital library network."
    },
    {
      year: "2020",
      title: "Sports Arena Inauguration",
      desc: "Built our state-of-the-art synthetic sports courts for basketball and dedicated athletic tracks."
    },
    {
      year: "2026",
      title: "Silver Jubilee Milestone",
      desc: "Celebrating 28 years of academic excellence, preparing to adopt advanced digital credentials and student portals."
    }
  ];

  const values = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Academic Devotion",
      desc: "Striving for thorough subject mastery, promoting scientific inquiry, and developing deep analytical skillsets."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Discipline & Integrity",
      desc: "Cultivating respect, punctuality, social responsibility, and a strong sense of moral accountability."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Compassion & Respect",
      desc: "Fostering an inclusive campus environment that values cultural diversity and mutual understanding."
    }
  ];

  const principles = [
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

  const trustees = [
    {
      name: "Sri. K. S. Chandrashekar",
      role: "Founder & President",
      qualification: "M.A. in Public Administration, Social Reformer",
      bio: "A visionary educationalist who founded Prarthana School to bring affordable, premium English-medium schooling to Hanur."
    },
    {
      name: "Smt. Shailaja Chandrashekar",
      role: "Managing Director",
      qualification: "M.Sc. in Child Psychology",
      bio: "Focuses on pedagogical innovation, student welfare networks, and parent integration programs."
    },
    {
      name: "Sri. Paramesha N",
      role: "Academic Advisor",
      qualification: "M.A., M.Ed, Educationist",
      bio: "Designs our academic syllabus benchmarks, oversees laboratory integrations, and leads faculty counseling panels."
    }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-28 pb-32 overflow-hidden">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit">
            Our Pedigree
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-navy font-normal leading-tight">
            Nurturing Caliber, <span className="italic text-primary font-light">Building Legacies</span>
          </h1>
          <div className="w-12 h-[2px] bg-accent mt-2" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2 font-light max-w-2xl">
            Discover the origins, visionaries, and core values that have driven Prarthana English Medium School to become a symbol of trust and academic superiority.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-panel-light rounded-[2.25rem] p-8 md:p-10 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-inner">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy mb-4">
              Our Vision
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              To stand as a beacon of academic rigor and ethics, helping children cultivate a logical mind, scientific temperament, and robust empathy to thrive in future global landscapes.
            </p>
          </motion.div>

          {/* Mission card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-panel-light rounded-[2.25rem] p-8 md:p-10 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent-dark mb-6 shadow-inner">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              To operate a technologically active campus centered on student inquiry, creative exploration, and moral responsibility, training students to become compassionate world citizens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="The Tenets of Prarthana"
          subtitle="Our Core Values"
          description="Every classroom interaction, curricular test, and playground event is built around these fundamental beliefs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel-light rounded-3xl p-8 text-center border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 shadow-inner">
                {val.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark-navy mb-3">
                {val.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us / Guiding Principles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-block mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-dark-navy leading-tight">
              An ecosystem engineered for <span className="italic text-primary">potential</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 border-t border-slate-100 pt-12">
            {principles.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 items-start py-4"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="py-24 md:py-32 bg-white/40 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            title="Our Path of Growing Legacy"
            subtitle="Milestones & Timeline"
            description="Explore key achievements that highlight the gradual expansion of our physical facilities and academic boundaries."
          />

          <div className="relative border-l-2 border-slate-200 max-w-3xl mx-auto pl-8 md:pl-12 py-6 flex flex-col gap-12 mt-16">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Year tag indicator */}
                <div className="absolute -left-[42px] md:-left-[58px] top-2.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-4 border-white flex items-center justify-center shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <motion.div 
                  whileHover={{ x: 6 }}
                  transition={cardTransition}
                  className="glass-panel-light rounded-[2rem] p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <span className="text-xs font-bold text-accent uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20 inline-block mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-navy mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                    {milestone.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="The Administrators & Pedagogical Thinkers"
          subtitle="Our Leadership"
          description="Dedicated educators who ensure academic standards align with student welfare on a daily basis."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {trustees.map((tr, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel-light rounded-[2.25rem] p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl flex flex-col justify-between transition-all duration-500"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-dark-navy leading-none">
                      {tr.name}
                    </h3>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider block mt-1.5">
                      {tr.role}
                    </span>
                  </div>
                </div>
                
                <span className="text-xs text-slate-400 font-medium italic text-left">
                  {tr.qualification}
                </span>
                
                <p className="text-slate-600 text-sm leading-relaxed mt-2 border-t border-slate-100 pt-4 font-light text-left">
                  {tr.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
