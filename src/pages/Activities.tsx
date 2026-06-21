import { motion } from "framer-motion";
import { 
  Music, Atom, Trophy, Compass, BookOpen, Star, Palette
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

export default function Activities() {
  const clubs = [
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Visual Arts & Crafts",
      desc: "Weekly modules in watercolor techniques, clay sculpting, and origami. We encourage students to exhibit their creations during school cultural festivals."
    },
    {
      icon: <Music className="w-6 h-6 text-primary" />,
      title: "Performing Arts & Music",
      desc: "Covers classical Hindustani vocals, keyboard and flute training, along with traditional drama/theatre groups to cultivate emotional expression and stage presence."
    },
    {
      icon: <Atom className="w-6 h-6 text-primary" />,
      title: "Science & Robotics Club",
      desc: "Fosters scientific curiosity. Students work on solar panels, minor electric circuitry, programming basic robots, and preparing projects for state competitions."
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "Athletics & Sports Clubs",
      desc: "Coaching squads for basketball, cricket, track & field events, and daily yoga practices under the oversight of expert sports training supervisors."
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Eco & Gardening Club",
      desc: "Maintains our kitchen garden and compost pits. Students learn about rainwater harvesting, recycling, and plant saplings on Environment Day."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Literary & Debate Club",
      desc: "Fosters public speaking confidence. Weekly activities include extempore, mock parliaments, creative spelling challenges, and essay writing panels."
    }
  ];

  const events = [
    {
      title: "Prarthana Utsav (Annual Cultural Fest)",
      timeline: "Held in November",
      desc: "A two-day celebration of dance, music, and drama. Every student is encouraged to participate, fostering confidence, teamwork, and cultural pride."
    },
    {
      title: "Anveshan (Annual Science Exhibition)",
      timeline: "Held in January",
      desc: "A platform where middle and secondary students exhibit working models in physics, environment safety systems, and math puzzles to visiting parents and experts."
    },
    {
      title: "Annual Sports Meet",
      timeline: "Held in December",
      desc: "Inter-house athletic meets, track competitions, tug-of-war, and relay contests. The meet concludes with the crowning of the Champion House."
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
            Student Life
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-navy font-normal leading-tight">
            Co-Curricular Clubs & <span className="italic text-primary font-light">Landmark Events</span>
          </h1>
          <div className="w-12 h-[2px] bg-accent mt-2" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2 font-light max-w-2xl">
            We prioritize balanced growth. Discover the wide selection of creative, scientific, and athletic clubs that build well-rounded pupil profiles.
          </p>
        </motion.div>
      </section>

      {/* Clubs Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <SectionHeader 
          title="Nurturing Creative Talents & Analytical Interests"
          subtitle="Student Clubs"
          description="Our active club system helps children build leadership skills, collaborate in teams, and uncover lifelong passions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {clubs.map((club, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel-light rounded-[2rem] p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl flex flex-col gap-4 text-left transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2 shadow-inner">
                {club.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-dark-navy">
                {club.title}
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                {club.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Landmark Events Timeline/Section */}
      <section className="py-24 md:py-32 bg-white/40 border-y border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
            title="Anticipated Annual Celebrations on Campus"
            subtitle="Landmark Events"
            description="Our events calendar represents major milestones in the academic year, bringing parents, teachers, and students together."
          />

          <div className="flex flex-col gap-8 max-w-4xl mx-auto mt-16">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.01 }}
                className="glass-panel-light rounded-[2rem] p-8 border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden text-left transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />
                <div className="shrink-0">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block">
                    {event.timeline}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-dark-navy flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent shrink-0 fill-accent/10" /> {event.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
