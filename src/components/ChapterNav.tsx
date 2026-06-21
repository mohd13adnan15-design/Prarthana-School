import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { getNextChapter, preloadChapter, chapters } from "../data/chapters";

interface ChapterNavProps {
  className?: string;
}

export default function ChapterNav({ className = "" }: ChapterNavProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const next = getNextChapter(pathname);
  const isLastChapter = pathname === "/contact";

  const handleNavigate = (path: string) => {
    preloadChapter(path);
    navigate(path);
  };

  if (isLastChapter) {
    return (
      <section className={`py-16 md:py-24 ${className}`}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.button
            type="button"
            onClick={() => handleNavigate("/")}
            onMouseEnter={() => preloadChapter("/")}
            onFocus={() => preloadChapter("/")}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="chapter-card w-full text-left group cursor-pointer"
          >
            <div className="flex items-center justify-between gap-6 p-8 md:p-10">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                  End of the Journey
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-dark-navy group-hover:text-primary transition-colors">
                  Back to Home
                </h3>
                <p className="text-slate-500 text-sm font-light">
                  Return to the beginning of our story.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Home className="w-5 h-5" />
              </div>
            </div>
          </motion.button>
        </div>
      </section>
    );
  }

  if (!next) return null;

  const chapterNum = chapters.findIndex((c) => c.path === next.path);

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.button
          type="button"
          onClick={() => handleNavigate(next.path)}
          onMouseEnter={() => preloadChapter(next.path)}
          onFocus={() => preloadChapter(next.path)}
          whileHover={{ y: -8, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="chapter-card w-full text-left group cursor-pointer overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {next.previewImage && (
              <div className="md:col-span-4 relative h-40 md:h-auto min-h-[10rem] overflow-hidden">
                <img
                  src={next.previewImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-l md:from-transparent md:to-white/30" />
              </div>
            )}
            <div className={`flex flex-col justify-center gap-3 p-8 md:p-10 ${next.previewImage ? "md:col-span-8" : "md:col-span-12"}`}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                Chapter {String(chapterNum + 1).padStart(2, "0")} — Next
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-dark-navy group-hover:text-primary transition-colors duration-300">
                Continue to {next.title}
                <ArrowRight className="inline-block w-6 h-6 ml-2 -mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              {next.question && (
                <p className="text-accent-dark/80 text-sm font-medium italic">
                  {next.question}
                </p>
              )}
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {next.teaser}
              </p>
            </div>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
