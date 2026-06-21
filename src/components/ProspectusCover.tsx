import { useCallback, useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import Hero from "./Hero";
import PageCurlSheet from "./PageCurlSheet";
import { AmbientSoundToggle } from "./AmbientSound";
import { useAmbientSound } from "../context/AmbientSoundContext";

interface ProspectusCoverProps {
  onTurnComplete?: () => void;
}

const TURN_DURATION = 2.05;
const TURN_EASE = [0.25, 0.1, 0.2, 1] as const;

function CoverContent() {
  return (
    <div className="prospectus-cover-content relative h-full w-full">
      <Hero />
      <AmbientSoundToggle placement="cover" />
    </div>
  );
}

export default function ProspectusCover({ onTurnComplete }: ProspectusCoverProps) {
  const [isTurned, setIsTurned] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const progress = useMotionValue(0);
  const touchStartY = useRef(0);
  const lockedRef = useRef(false);
  const { setHeroCoverVisible } = useAmbientSound();

  const turnPage = useCallback(() => {
    if (lockedRef.current || isTurned) return;
    lockedRef.current = true;
    setIsAnimating(true);

    animate(progress, 1, {
      duration: TURN_DURATION,
      ease: TURN_EASE,
      onComplete: () => {
        setIsTurned(true);
        setIsAnimating(false);
        onTurnComplete?.();
      },
    });
  }, [isTurned, onTurnComplete, progress]);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reducedMotion || isTurned) {
      setHeroCoverVisible(false);
      return;
    }
    setHeroCoverVisible(true);
    return () => setHeroCoverVisible(false);
  }, [reducedMotion, isTurned, setHeroCoverVisible]);

  useEffect(() => {
    if (reducedMotion || isTurned) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [reducedMotion, isTurned]);

  useEffect(() => {
    if (reducedMotion || isTurned) return;

    const blockScroll = (e: Event) => {
      if (lockedRef.current || isAnimating) {
        e.preventDefault();
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!lockedRef.current && e.deltaY > 0) turnPage();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (lockedRef.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (delta > 40) turnPage();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (lockedRef.current) {
        e.preventDefault();
        return;
      }
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        turnPage();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchmove", blockScroll, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", blockScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [reducedMotion, isTurned, isAnimating, turnPage]);

  if (reducedMotion) {
    return (
      <div className="hero-section relative">
        <Hero />
      </div>
    );
  }

  if (isTurned) return null;

  return (
    <div className="prospectus-cover-root">
      <PageCurlSheet progress={progress}>
        <CoverContent />
      </PageCurlSheet>
    </div>
  );
}
