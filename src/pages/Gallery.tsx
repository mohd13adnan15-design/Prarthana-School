import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Camera, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  img: string;
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Modern Science Lab Practical", category: "classrooms", img: "/assets/Kids1.png", aspect: "aspect-[4/3]" },
  { id: 2, title: "Smart-Board Interactive Learning", category: "classrooms", img: "/assets/kids 2.png", aspect: "aspect-square" },
  { id: 3, title: "Physics Lab Experimentations", category: "classrooms", img: "/assets/kids3.png", aspect: "aspect-[4/5]" },
  { id: 4, title: "Performing Arts & Sketching Classes", category: "activities", img: "/assets/kids4.png", aspect: "aspect-[3/2]" },
  { id: 5, title: "Active Computer Coding Workshop", category: "classrooms", img: "/assets/kids5.png", aspect: "aspect-[4/3]" },
  { id: 6, title: "Spacious Reading Sanctuary & Book Hub", category: "campus", img: "/assets/kids6.png", aspect: "aspect-video" },
  { id: 7, title: "Collaborative Classroom Group Work", category: "classrooms", img: "/assets/kids7.png", aspect: "aspect-square" },
  { id: 8, title: "Playground Recreations & Moral Unity", category: "sports", img: "/assets/kids8.png", aspect: "aspect-[4/5]" },
  { id: 9, title: "Annual Athletic Track Events & Skating", category: "sports", img: "/assets/kids9.png", aspect: "aspect-[3/2]" },
  { id: 10, title: "School Central Atrium & Wide Yards", category: "campus", img: "/assets/kids10.png", aspect: "aspect-[4/3]" }
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { value: "all", label: "All Stories" },
    { value: "campus", label: "Campus & Spaces" },
    { value: "classrooms", label: "Classrooms & Labs" },
    { value: "activities", label: "Activities & Arts" },
    { value: "sports", label: "Sports & Athletics" },
    { value: "events", label: "Events & Celebrations" },
    { value: "faculty", label: "Faculty & Leadership" }
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return null;
        return prev === 0 ? filteredItems.length - 1 : prev - 1;
      });
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return null;
        return prev === filteredItems.length - 1 ? 0 : prev + 1;
      });
    }
  };

  return (
    <div className="bg-[#fcfdfd] min-h-screen pt-28 pb-32">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 max-w-3xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 w-fit">
            Digital Archive
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-navy font-normal leading-tight">
            Our Cinematic <span className="italic text-primary font-light">Ecosystem</span>
          </h1>
          <div className="w-12 h-[2px] bg-accent mt-2" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-2 font-light max-w-2xl">
            A photographic log of active scientific inquiry, holistic development, athletic discipline, and cultural achievements.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 overflow-hidden">
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:justify-center md:flex-wrap gap-2.5 md:gap-3.5 no-scrollbar px-6 md:px-0 -mx-6 md:mx-0">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.value}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
              onClick={() => setFilter(cat.value)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary"
                  : "bg-white hover:bg-slate-50 text-slate-500 border border-slate-200"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Premium Masonry Gallery */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] box-border">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`break-inside-avoid mb-8 group relative overflow-hidden rounded-[2rem] shadow-xl ${item.aspect} bg-slate-50 border border-slate-100 cursor-pointer`}
              >
                {/* Soft backdrop scale */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" 
                />
                
                {/* Soft bottom-up dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/20 to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-500" />
                
                {/* Translucent glass overlay on hover */}
                <div className="absolute inset-0 bg-[#0f204a]/75 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-8">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white self-end border border-white/10 shadow-inner">
                    <Search className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-accent uppercase font-bold tracking-[0.2em] flex items-center gap-2">
                      <Camera className="w-3.5 h-3.5" /> {item.category}
                    </span>
                    <h3 className="font-serif text-white text-xl font-normal leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080d1a]/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 hover:scale-105 border border-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Button */}
            <button 
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 hover:scale-105 border border-white/10 transition-all duration-300 cursor-pointer"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button 
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 hover:scale-105 border border-white/10 transition-all duration-300 cursor-pointer"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0f204a]/30 shadow-2xl flex flex-col justify-center"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <img 
                src={filteredItems[lightboxIndex].img} 
                alt={filteredItems[lightboxIndex].title} 
                className="w-full h-auto object-contain max-h-[75vh]" 
              />
              <div className="bg-[#0f204a]/90 backdrop-blur-md p-6 text-center border-t border-white/10">
                <span className="text-[10px] text-accent uppercase font-bold tracking-[0.25em] block mb-1">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-white text-lg md:text-xl font-normal">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
