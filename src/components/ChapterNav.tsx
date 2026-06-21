import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { getNextChapter } from "../data/chapters";

// Premium "Next Chapter" card shown at the bottom of every page. Behaves like
// turning to the next page of a beautifully designed magazine.
export default function ChapterNav() {
  const { pathname } = useLocation();
  const next = getNextChapter(pathname);

  // Preload the next chapter's imagery on intent so navigation feels instant.
  const preload = useCallback(() => {
    if (!next) return;
    const img = new Image();
    img.src = next.image;
  }, [next]);

  if (!next) return null;

  const isLoopHome = next.path === "/";

  return (
    <section className="bg-[#fcfdfd] pb-24 md:pb-28 pt-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-5 justify-center">
            <span className="h-px w-8 bg-slate-200" />
            {isLoopHome ? "The Story Continues" : "Next Chapter"}
            <span className="h-px w-8 bg-slate-200" />
          </span>

          <Link
            to={next.path}
            onMouseEnter={preload}
            onFocus={preload}
            onTouchStart={preload}
            className="group block focus:outline-none"
            aria-label={isLoopHome ? "Back to Home" : `Continue to ${next.title}`}
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="glass-card relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-[2rem] border border-white/60 shadow-xl group-hover:shadow-2xl group-focus-visible:ring-2 group-focus-visible:ring-primary/40"
            >
              {/* Preview image */}
              <div className="relative w-full sm:w-2/5 h-44 sm:h-auto overflow-hidden shrink-0">
                <img
                  src={next.image}
                  alt={next.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-dark-navy/50 via-dark-navy/10 to-transparent" />
              </div>

              {/* Teaser content */}
              <div className="flex flex-1 flex-col justify-center gap-2.5 p-8 md:p-10 text-left">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-dark">
                  {next.question}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-dark-navy leading-tight">
                  {isLoopHome ? "Back to Home" : `Continue to ${next.title}`}
                </h3>
                <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-md">
                  {isLoopHome
                    ? "Return to where the story began and explore again."
                    : next.teaser}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  {isLoopHome ? (
                    <Home className="w-4 h-4" />
                  ) : null}
                  {isLoopHome ? "Home" : "Turn the page"}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
