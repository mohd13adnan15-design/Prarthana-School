import { useCallback, useState, type MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { getNextChapter, preloadChapter, chapters } from "../data/chapters";
import { usePageTurn } from "../context/PageTurnContext";

interface ChapterNavProps {
  className?: string;
}

function ChapterRipple({
  x,
  y,
  onDone,
}: {
  x: number;
  y: number;
  onDone: () => void;
}) {
  return (
    <motion.span
      className="chapter-card-ripple"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0.45 }}
      animate={{ scale: 2.8, opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onAnimationComplete={onDone}
      aria-hidden="true"
    />
  );
}

function ChapterContinueCard({
  chapterNum,
  title,
  question,
  teaser,
  previewImage,
  onContinue,
  ctaLabel,
}: {
  chapterNum?: number;
  title: string;
  question?: string;
  teaser: string;
  previewImage?: string;
  onContinue: () => void;
  ctaLabel: string;
}) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x, y }]);
      onContinue();
    },
    [onContinue]
  );

  return (
    <section className="chapter-nav-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.button
          type="button"
          onClick={handleClick}
          whileHover={{ y: -8, scale: 1.012 }}
          whileTap={{ scale: 0.985, y: -2 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            default: { type: "spring", stiffness: 420, damping: 26 },
          }}
          className="chapter-card chapter-card--interactive w-full text-left group cursor-pointer overflow-hidden relative"
          aria-label={`${ctaLabel}: ${title}`}
        >
          {ripples.map((ripple) => (
            <ChapterRipple
              key={ripple.id}
              x={ripple.x}
              y={ripple.y}
              onDone={() =>
                setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
              }
            />
          ))}

          <div className="chapter-card-pulse-ring" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {previewImage && (
              <div className="md:col-span-4 relative h-44 sm:h-48 md:h-auto min-h-[11rem] overflow-hidden">
                <img
                  src={previewImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-white/30" />
                <span className="chapter-card-page-icon" aria-hidden="true">
                  <BookOpen className="w-4 h-4" />
                </span>
              </div>
            )}
            <div
              className={`relative flex flex-col justify-center gap-3 p-6 sm:p-8 md:p-10 ${
                previewImage ? "md:col-span-8" : "md:col-span-12"
              }`}
            >
              {chapterNum !== undefined && (
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                  Chapter {String(chapterNum + 1).padStart(2, "0")} — Next
                </span>
              )}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-dark-navy group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              {question && (
                <p className="text-accent-dark/80 text-sm font-medium italic">
                  {question}
                </p>
              )}
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {teaser}
              </p>

              <div className="chapter-card-cta">
                <span className="chapter-card-cta-icon" aria-hidden="true">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4 chapter-card-cta-arrow" />
              </div>
            </div>
          </div>

          <div className="chapter-card-shine" aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  );
}

export default function ChapterNav({ className = "" }: ChapterNavProps) {
  const { pathname } = useLocation();
  const { requestPageTurn, isTurning } = usePageTurn();
  const next = getNextChapter(pathname);
  const isLastChapter = pathname === "/contact";

  const goTo = useCallback(
    (path: string) => {
      if (isTurning) return;
      preloadChapter(path);
      requestPageTurn(path);
    },
    [isTurning, requestPageTurn]
  );

  if (isLastChapter) {
    return (
      <div className={className}>
        <ChapterContinueCard
          title="Back to Home"
          teaser="Return to the beginning of our story."
          ctaLabel="Tap to Return"
          onContinue={() => goTo("/")}
        />
      </div>
    );
  }

  if (!next) return null;

  const chapterNum = chapters.findIndex((c) => c.path === next.path);

  return (
    <div className={className}>
      <ChapterContinueCard
        chapterNum={chapterNum}
        title={`Continue to ${next.title}`}
        question={next.question}
        teaser={next.teaser}
        previewImage={next.previewImage}
        ctaLabel="Tap to Continue"
        onContinue={() => goTo(next.path)}
      />
    </div>
  );
}
