import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ChapterNav from "../components/ChapterNav";
import Button from "../components/Button";

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    grade: "",
    email: "",
    phone: "",
    prevSchool: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Registration Inquiry",
      desc: "Fill out the online admission query form below or visit our school admin desk to purchase the school prospectus."
    },
    {
      num: "02",
      title: "Document Verification",
      desc: "Submit academic transcripts from previous schools, birth certificate copies, Aadhaar card, and passport photographs."
    },
    {
      num: "03",
      title: "Interaction / Screening Test",
      desc: "For Nursery to Grade 4, it is a basic interaction. Grades 5 and 6 take a screening test covering English and Math."
    },
    {
      num: "04",
      title: "Fee Clearance & Admission",
      desc: "Upon final approval by the principal, clear the initial registration fee and secure the child's academic seat."
    }
  ];

  const eligibility = [
    { grade: "Nursery / Playgroup", age: "3 Years complete by June 1st" },
    { grade: "LKG (Lower Kindergarten)", age: "4 Years complete by June 1st" },
    { grade: "UKG (Upper Kindergarten)", age: "5 Years complete by June 1st" },
    { grade: "Grade 1", age: "6 Years complete by June 1st" },
    { grade: "Grade 2 to 6", age: "Based on previous school transfer certificate (TC)" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.parentName || !formData.email || !formData.phone || !formData.grade) {
      alert("Please fill out all mandatory fields.");
      return;
    }
    setSubmitted(true);
  };

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
            Enrolling Now
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-navy font-normal leading-tight">
            Admissions & <span className="italic text-primary font-light">Enrollment Portal</span>
          </h1>
          <div className="w-12 h-[2px] bg-accent mt-2" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2 font-light max-w-2xl">
            Secure your child's academic seat for the 2026-2027 sessions. Explore our requirements, age eligibility criteria, and process guidelines.
          </p>
        </motion.div>
      </section>

      {/* Step by Step Admissions Flow */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <SectionHeader 
          title="Our Structured Enrollment Journey"
          subtitle="Process Roadmap"
          description="We make the registration experience clear and systematic, supporting parents at each milestone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16 text-left">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel-light rounded-[2rem] p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl flex flex-col justify-between transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                <span className="text-5xl font-serif font-black text-primary/10 block leading-none">
                  {step.num}
                </span>
                <h3 className="text-lg md:text-xl font-serif font-bold text-dark-navy">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Age Eligibility & Required Documents */}
      <section className="py-24 md:py-32 bg-white/40 border-y border-slate-100 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start text-left">
            {/* Eligibility Table */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className="text-2xl font-serif font-bold text-dark-navy">
                Grade-Wise Age Eligibility Guide
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Age calculation is relative to June 1st of the joining year. No relaxation can be granted on these limits due to local board constraints.
              </p>

              <div className="glass-panel-light rounded-[2rem] overflow-x-auto border border-slate-200/60 shadow-xl bg-white/70 backdrop-blur-md">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-150">
                      <th className="p-3.5 sm:p-5 font-bold text-dark-navy uppercase tracking-wider text-xs whitespace-nowrap">Grade Level</th>
                      <th className="p-3.5 sm:p-5 font-bold text-dark-navy uppercase tracking-wider text-xs whitespace-nowrap">Age Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibility.map((item, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                        <td className="p-3.5 sm:p-5 font-medium text-slate-800 whitespace-nowrap">{item.grade}</td>
                        <td className="p-3.5 sm:p-5 text-slate-600 font-light whitespace-nowrap">{item.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Required Documents */}
            <div className="lg:col-span-5 glass-panel-light rounded-[2rem] p-8 md:p-10 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl flex flex-col gap-6">
              <h3 className="text-2xl font-serif font-bold text-dark-navy">
                Required Documents
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                Please compile photocopies of these credentials to speed up verification procedures at the school office:
              </p>
              
              <ul className="flex flex-col gap-4 text-xs md:text-sm text-slate-700 font-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Original birth certificate + 2 photocopies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Student Aadhaar card copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Original Transfer Certificate (TC) from previous recognized school</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Report card transcript copy showing previous class marks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>4 passport-sized color photos of the child</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Registration Form Section */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Submit an Admission Inquiry Query"
          subtitle="Online Admission Form"
          description="Let us know your child's educational details. Our registration office will review it and coordinate interaction slots."
        />

        <div className="max-w-3xl mx-auto mt-16">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
                className="glass-panel-light rounded-[2.25rem] p-8 md:p-12 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl flex flex-col gap-6 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="studentName" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Child's Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="studentName"
                      name="studentName" 
                      required 
                      value={formData.studentName} 
                      onChange={handleInputChange} 
                      placeholder="Enter student name"
                      className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                  </div>

                  {/* Parent Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="parentName" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Parent / Guardian Name *
                    </label>
                    <input 
                      type="text" 
                      id="parentName"
                      name="parentName" 
                      required 
                      value={formData.parentName} 
                      onChange={handleInputChange} 
                      placeholder="Enter parent's name"
                      className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Grade Applied */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="grade" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Grade Applied For *
                    </label>
                    <select 
                      id="grade"
                      name="grade" 
                      required 
                      value={formData.grade} 
                      onChange={handleInputChange}
                      className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer"
                    >
                      <option value="">Select Class</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                    </select>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Parent's Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="example@mail.com"
                      className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Contact Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="10-digit number"
                      className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                {/* Previous School */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="prevSchool" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Previous School & City (If applicable)
                  </label>
                  <input 
                    type="text" 
                    id="prevSchool"
                    name="prevSchool" 
                    value={formData.prevSchool} 
                    onChange={handleInputChange} 
                    placeholder="E.g., St. Mary's School, Hanur"
                    className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Additional Remarks / Queries
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={4}
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Enter any queries or child support requirements..."
                    className="px-5 py-4 rounded-3xl border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>

                <div className="text-center mt-4">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto px-10 py-4 font-semibold tracking-wide">
                    Submit Admission Request <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="glass-panel-light rounded-[2.25rem] p-8 md:p-12 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl text-center flex flex-col items-center gap-6 max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center border border-green-500/20 shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                  Thank you, <strong>{formData.parentName}</strong>. We have logged your inquiry for <strong>{formData.studentName}</strong> (applying for <strong>{formData.grade}</strong>).
                </p>
                <p className="text-xs text-slate-500 max-w-md italic font-light">
                  A representative from the Prarthana School admissions cell will review your details and contact you via <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 24 to 48 office hours.
                </p>
                <div className="mt-4">
                  <Button onClick={() => setSubmitted(false)} variant="secondary">
                    Submit Another Query
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ChapterNav />
    </div>
  );
}
