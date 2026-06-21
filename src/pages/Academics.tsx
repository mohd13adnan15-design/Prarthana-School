import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Award, FileText, CheckCircle2, GraduationCap } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ChapterNav from "../components/ChapterNav";

interface CalendarEvent {
  date: string;
  event: string;
  type: "academic" | "holiday" | "exam";
}

export default function Academics() {
  const [activeTab, setActiveTab] = useState<"calendar" | "grading">("calendar");

  const curriculums = [
    {
      level: "Kindergarten & Pre-Primary (Nursery, LKG, UKG)",
      focus: "Foundational & Experiential Learning",
      desc: "Provides a safe, nurturing, and engaging environment that stimulates early childhood curiosity. We focus on motor skills, interactive communication, letters, shapes, numbers, social behaviors, and creative activities.",
      subjects: ["Phonics & Language arts", "Number concepts & counting", "Practical arts & craft", "Rhymes & sensory games", "Social interaction basics"]
    },
    {
      level: "Lower Primary (Grades 1-4)",
      focus: "Core Concept Formation",
      desc: "Establishes a solid baseline in analytical reasoning, reading fluency, mathematical logic, and environmental sciences. Rote-learning is replaced with active exploration, experiments, and descriptive storytelling.",
      subjects: ["English reading & grammar", "Basic arithmetic & logic", "Environmental Science (EVS)", "Regional Languages (Kannada)", "Visual & Performing Arts"]
    },
    {
      level: "Upper Primary (Grades 5-6)",
      focus: "Critical Inquiry & Expression",
      desc: "Builds academic skills that prepare children for analytical challenges. Students are introduced to formal laboratory periods, project work, computing basics, and scientific methods.",
      subjects: ["Primary Science & Math", "Social Studies & History", "Computer basics & typing", "Advanced grammar & languages", "Physical education & labs"]
    }
  ];

  const calendarEvents: CalendarEvent[] = [
    { date: "June 01, 2026", event: "New Academic Session Commences", type: "academic" },
    { date: "August 15, 2026", event: "Independence Day Celebration (National Holiday)", type: "holiday" },
    { date: "September 14-22, 2026", event: "Term-1 Mid-Term Assessments", type: "exam" },
    { date: "October 18-28, 2026", event: "Dasara Festival Vacation", type: "holiday" },
    { date: "December 23, 2026 - Jan 02, 2027", event: "Winter Break & Christmas Holidays", type: "holiday" },
    { date: "February 08-18, 2027", event: "Pre-Annual Preparatory Tests (Grades 1-6)", type: "exam" },
    { date: "March 15-28, 2027", event: "Annual Examinations (Grades 1-6)", type: "exam" },
    { date: "April 05, 2027", event: "Declaration of Results & Parent-Teacher Meet", type: "academic" },
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
            Academic Pathway
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-navy font-normal leading-tight">
            Academic Rigor & <span className="italic text-primary font-light">Holistic Pedagogy</span>
          </h1>
          <div className="w-12 h-[2px] bg-accent mt-2" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2 font-light max-w-2xl">
            Explore our curriculum architecture, key dates, examinations policies, and academic guidelines that cultivate high student benchmarks.
          </p>
        </motion.div>
      </section>

      {/* Curriculum Levels Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <SectionHeader 
          title="Designed for Gradual & Permanent Understanding"
          subtitle="Curriculum Stages"
          description="We align our syllabi with standard state and national educational policies, expanding key lessons with practical lab modules."
        />

        <div className="flex flex-col gap-10 max-w-5xl mx-auto mt-16">
          {curriculums.map((curr, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel-light rounded-[2.25rem] p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="lg:w-2/3 pl-2 text-left">
                <span className="text-xs font-bold text-accent uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20 inline-block mb-3">
                  {curr.focus}
                </span>
                <h3 className="text-2xl font-serif font-bold text-dark-navy mb-4">
                  {curr.level}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  {curr.desc}
                </p>
              </div>

              <div className="lg:w-1/3 bg-slate-50/50 rounded-2xl p-6 border border-slate-100/80 text-left self-center w-full">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4">
                  Featured Syllabus Topics:
                </span>
                <ul className="flex flex-col gap-3.5 text-xs text-slate-700">
                  {curr.subjects.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tabs Section: Calendar / Assessment Policy */}
      <section className="py-24 md:py-32 bg-white/40 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-16 max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => setActiveTab("calendar")}
              className={`w-full sm:w-auto px-6 py-3 rounded-full font-medium text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "calendar"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary"
                  : "bg-white hover:bg-slate-50 text-slate-500 border border-slate-200"
              }`}
            >
              <Calendar className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Academic Calendar
            </button>
            <button
              onClick={() => setActiveTab("grading")}
              className={`w-full sm:w-auto px-6 py-3 rounded-full font-medium text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "grading"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary"
                  : "bg-white hover:bg-slate-50 text-slate-500 border border-slate-200"
              }`}
            >
              <Award className="w-4 h-4 inline-block mr-2 -mt-0.5" />
              Grading & Evaluation
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === "calendar" ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="glass-panel-light rounded-[2.25rem] p-8 md:p-10 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl"
              >
                <h3 className="text-2xl font-serif font-bold text-dark-navy mb-2 text-center">
                  Key Dates & Scheduled Calendar Events
                </h3>
                <p className="text-xs text-slate-400 text-center uppercase tracking-widest mb-10 font-semibold">
                  Academic Year 2026 - 2027 Schedule (Subject to minor adjustments)
                </p>
 
                <div className="flex flex-col gap-4">
                  {calendarEvents.map((item, idx) => {
                    const badgeColors = {
                      academic: "bg-blue-500/10 text-blue-700 border-blue-500/20",
                      holiday: "bg-green-500/10 text-green-700 border-green-500/20",
                      exam: "bg-amber-500/10 text-amber-700 border-amber-500/20",
                    }[item.type];

                    return (
                      <div 
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-slate-100 hover:bg-slate-50/50 rounded-2xl transition-colors gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm font-semibold text-dark-navy text-left">{item.event}</span>
                        </div>
                        <div className="flex items-center gap-3.5 justify-between sm:justify-start">
                          <span className="text-xs font-mono text-slate-500">{item.date}</span>
                          <span className={`text-[9px] font-bold tracking-widest uppercase px-3 py-0.5 rounded border ${badgeColors}`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="glass-panel-light rounded-[2.25rem] p-8 md:p-12 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl flex flex-col gap-6"
              >
                <h3 className="text-2xl font-serif font-bold text-dark-navy text-center mb-2">
                  Continuous Comprehensive Evaluation (CCE)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light text-center max-w-2xl mx-auto">
                  We adopt the CCE format to monitor learning progressions. Under this method, grades are compiled through regular formative assessments (assignments, laboratory files, presentation boards) combined with two summative examinations.
                </p>
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div className="border border-slate-200/80 bg-slate-50/50 rounded-2xl p-6 text-left">
                    <h4 className="font-serif font-bold text-dark-navy text-lg mb-4 flex items-center gap-2.5">
                      <FileText className="w-5 h-5 text-primary" /> Formative Assessments (40%)
                    </h4>
                    <ul className="flex flex-col gap-3 text-xs text-slate-600 font-light">
                      <li className="flex items-center gap-2">• Weekly unit tests & worksheets</li>
                      <li className="flex items-center gap-2">• Project worksheets & science portfolio files</li>
                      <li className="flex items-center gap-2">• Classroom debates & public speaking panels</li>
                      <li className="flex items-center gap-2">• Lab practical file keeping</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200/80 bg-slate-50/50 rounded-2xl p-6 text-left">
                    <h4 className="font-serif font-bold text-dark-navy text-lg mb-4 flex items-center gap-2.5">
                      <GraduationCap className="w-5 h-5 text-primary" /> Summative Assessments (60%)
                    </h4>
                    <ul className="flex flex-col gap-3 text-xs text-slate-600 font-light">
                      <li className="flex items-center gap-2">• Mid-term examinations (September)</li>
                      <li className="flex items-center gap-2">• Term-end final examinations (March)</li>
                      <li className="flex items-center gap-2">• Written research scripts & formal vivas</li>
                      <li className="flex items-center gap-2">• Laboratory board screening</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-8 mt-4 text-center">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                    Minimum Passing Standards:
                  </span>
                  <p className="text-sm text-slate-600 max-w-xl mx-auto italic font-light">
                    A minimum of 35% in aggregate (combined Formative & Summative elements) is mandatory for academic promotion across all grades.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Faculty Credentials Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 w-fit">
            Academic Mentorship
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-dark-navy leading-tight font-normal">
            Highly Certified & Empathetic Faculty Staff
          </h2>
          <div className="w-12 h-[2px] bg-primary mt-1" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mt-2 max-w-2xl">
            Our student-to-teacher ratio is maintained strictly at <strong>20:1</strong>, ensuring teachers can monitor each child's absorption rates, customize assignments, and support weak zones.
          </p>

          {/* Full-width Faculty Group Photograph */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mx-auto mt-10 mb-6 overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-2xl bg-white"
          >
            <img 
              src="/assets/faculties.png" 
              alt="Prarthana English Medium School Faculty Team" 
              className="w-full h-auto object-contain hover:scale-101 transition-transform duration-[1200ms] ease-out"
              loading="lazy"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-6">
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-panel-light rounded-2xl p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg"
            >
              <span className="text-4xl font-serif font-bold text-primary block mb-1">100%</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">Certified Educators</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-panel-light rounded-2xl p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg"
            >
              <span className="text-4xl font-serif font-bold text-primary block mb-1">8+ Years</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">Avg. Teaching Exp.</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-panel-light rounded-2xl p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg"
            >
              <span className="text-4xl font-serif font-bold text-primary block mb-1">20:1</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">Student-Teacher Ratio</span>
            </motion.div>
          </div>
        </div>
      </section>

      <ChapterNav />
    </div>
  );
}
