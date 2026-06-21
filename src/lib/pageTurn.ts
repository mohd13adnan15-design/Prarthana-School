import { animate, type MotionValue } from "framer-motion";

export const PAGE_TURN_DURATION = 2.05;
export const PAGE_TURN_EASE = [0.25, 0.1, 0.2, 1] as const;

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function captureMainSnapshot(): string {
  const main = document.querySelector("main");
  if (!main) return "";
  const clone = main.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("video, canvas, iframe").forEach((el) => el.remove());
  return clone.innerHTML;
}

export function lockPageForTurn() {
  window.scrollTo({ top: 0, behavior: "instant" });
  document.body.classList.add("page-turn-active");
  document.body.style.overflow = "hidden";
}

export function unlockPageAfterTurn() {
  document.body.classList.remove("page-turn-active");
  document.body.style.overflow = "";
}

export function animatePageTurn(
  progress: MotionValue<number>,
  onComplete?: () => void
) {
  progress.set(0);
  return animate(progress, 1, {
    duration: PAGE_TURN_DURATION,
    ease: PAGE_TURN_EASE,
    onComplete,
  });
}
