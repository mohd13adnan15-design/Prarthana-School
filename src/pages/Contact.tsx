import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, HelpCircle, Send, CheckCircle2, ChevronDown, Compass
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ChapterNav from "../components/ChapterNav";
import Button from "../components/Button";

interface FAQItem {
  q: string;
  a: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "What is the primary syllabus affiliation of Prarthana School?",
      a: "We are affiliated with the Government of Karnataka and also align core modules with National Curriculum frameworks. This guarantees robust preparation for academic excellence while keeping subjects digestible."
    },
    {
      q: "Does the school provide dedicated hostel facilities?",
      a: "Currently, we operate as a day scholar school and do not provide boarding facilities. However, we coordinate with accredited parent-hostel networks in Hanur."
    },
    {
      q: "What are the school timings for primary vs pre-primary sections?",
      a: "Nursery & Kindergarten operate from 9:00 AM to 12:30 PM. Grades 1 through 6 operate from 8:45 AM to 3:30 PM (Mondays through Fridays) and 8:45 AM to 12:30 PM on Saturdays."
    },
    {
      q: "Are school bus services provided to outskirts of Hanur?",
      a: "Yes. Our bus routes span a 25km radius across Hanur and adjacent suburban communities. Contact our transport coordinator at transport@prarthanaschool.edu.in for routing maps."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill out all mandatory fields.");
      return;
    }
    setSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
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
            Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-navy font-normal leading-tight">
            Contact Our <span className="italic text-primary font-light">Administrative Office</span>
          </h1>
          <div className="w-12 h-[2px] bg-accent mt-2" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2 font-light max-w-2xl">
            Have queries regarding school admissions, fee policies, or bus zones? Send us a message or visit our campus.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards & Form Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-2xl font-serif font-bold text-dark-navy">
              Campus Contact Channels
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              We look forward to hearing from you. Our office desks are active during office timings listed below.
            </p>

            {/* Info cards list */}
            <div className="flex flex-col gap-4 mt-2">
              <motion.div 
                whileHover={{ x: 6 }}
                className="glass-panel-light rounded-2xl p-5 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg flex gap-4 items-start transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">School Address</h4>
                  <p className="text-slate-600 text-xs md:text-sm mt-1 leading-relaxed font-light">
                    #001, Sy.No. 548/12, Aale Mane Bus Stop, Ambikapura, Ajjipura Village, Ramapura Main Road, Hanur, Chamarajanagara, Dist – 571439
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6 }}
                className="glass-panel-light rounded-2xl p-5 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg flex gap-4 items-start transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Phone Enquiries</h4>
                  <p className="text-slate-600 text-xs md:text-sm mt-1 font-light leading-relaxed">
                    Helpline: <a href="tel:+919986608637" className="font-normal text-primary hover:underline">+91 9986608637</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6 }}
                className="glass-panel-light rounded-2xl p-5 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg flex gap-4 items-start transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Email Coordinates</h4>
                  <p className="text-slate-600 text-xs md:text-sm mt-1 font-light leading-relaxed">
                    Admissions: <a href="mailto:admissions@prarthanaschool.edu.in" className="font-normal text-primary hover:underline">admissions@prarthanaschool.edu.in</a> <br />
                    General: <a href="mailto:info@prarthanaschool.edu.in" className="font-normal text-primary hover:underline">info@prarthanaschool.edu.in</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 6 }}
                className="glass-panel-light rounded-2xl p-5 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-lg flex gap-4 items-start transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Administrative Hours</h4>
                  <p className="text-slate-600 text-xs md:text-sm mt-1 font-light leading-relaxed">
                    Monday – Friday: 8:45 AM – 3:30 PM <br />
                    Saturday: 8:45 AM – 12:30 PM <br />
                    Sunday & Public Holidays: Closed
                  </p>
                </div>
              </motion.div>

              {/* Google Maps Actions */}
              <div className="mt-2">
                <Button 
                  onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Prarthana+English+Medium+School+Hanur+Chamarajanagara", "_blank")}
                  variant="glass" 
                  className="w-full flex items-center justify-center gap-2 border-primary/20 text-primary hover:bg-primary/5 py-3 rounded-2xl text-sm font-semibold"
                >
                  <Compass className="w-4 h-4 text-primary" /> Navigate via Google Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleSubmit}
                  className="glass-panel-light rounded-[2.25rem] p-8 md:p-10 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl flex flex-col gap-6 text-left"
                >
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-navy">
                    Send Administrative Message
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Your name"
                        className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="10-digit mobile"
                        className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject / Category</label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleInputChange} 
                        placeholder="E.g., Fee inquiry, TC Request"
                        className="px-5 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message Body *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={5}
                      required 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Write your detailed query here..."
                      className="px-5 py-4 rounded-3xl border border-slate-200 focus:outline-none focus:border-primary text-sm bg-white/80 focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                    />
                  </div>

                  <div className="mt-2">
                    <Button type="submit" variant="primary" className="w-full justify-center py-4">
                      Send message <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="glass-panel-light rounded-[2.25rem] p-8 md:p-12 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl text-center flex flex-col items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center border border-green-500/20 shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    Thank you, <strong>{formData.name}</strong>. Your message has been logged under our administrative systems.
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    We will review the contents and email a response to <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="mt-4">
                    <Button onClick={() => setSubmitted(false)} variant="secondary">
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-24 md:py-32 bg-white/40 border-y border-slate-100 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            title="Common Administrative Queries"
            subtitle="Frequently Asked Questions"
            description="Find rapid answers to standard queries on syllabus recognition, transport timings, and hosteling."
          />

          <div className="max-w-3xl mx-auto flex flex-col gap-4 mt-16 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-panel-light rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md overflow-hidden shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex justify-between items-center font-serif font-bold text-sm md:text-base text-dark-navy hover:bg-slate-50/50 transition-colors cursor-pointer focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-slate-600 text-xs md:text-sm border-t border-slate-100 leading-relaxed font-light bg-slate-50/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ChapterNav />
    </div>
  );
}
