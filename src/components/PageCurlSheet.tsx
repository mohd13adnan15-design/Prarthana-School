import { type ReactNode } from "react";
import { motion, type MotionValue, useTransform } from "framer-motion";

interface PageCurlSheetProps {
  progress: MotionValue<number>;
  children: ReactNode;
}

/** Gentle cubic ease — keeps the curl graceful over ~1s */
function easePeel(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function PageCurlSheet({ progress, children }: PageCurlSheetProps) {
  const peelTop = useTransform(progress, (p) => 100 - easePeel(p) * 100);
  const peelBottom = useTransform(progress, (p) => {
    const line = 100 - easePeel(p) * 100;
    return Math.max(0, line - easePeel(p) * 6);
  });

  const flatClip = useTransform([peelTop, peelBottom], ([top, bottom]) =>
    `polygon(0 0, ${top}% 0, ${bottom}% 100%, 0 100%)`
  );

  const flapLeft = useTransform(peelTop, (t) => `${t}%`);
  const flapWidth = useTransform(peelTop, (t) => `${100 - t}%`);
  const flapFrontX = useTransform(peelTop, (t) => `calc(-${t}vw)`);

  const flapRotateY = useTransform(progress, [0, 0.12, 0.55, 1], [0, -22, -92, -172]);
  const flapRotateX = useTransform(progress, [0, 0.5, 1], [0, 2, 8]);
  const flapLiftZ = useTransform(progress, [0, 0.5, 1], [0, 16, 4]);

  const shadowOpacity = useTransform(progress, [0, 0.12, 0.55, 1], [0, 0.38, 0.58, 0.1]);
  const shadowSpread = useTransform(progress, [0, 0.5, 1], [0, 52, 28]);
  const shadowBlur = useTransform(progress, [0, 0.5, 1], [0, 80, 44]);

  const castShadow = useTransform(
    [shadowSpread, shadowBlur, shadowOpacity],
    ([spread, blur, opacity]) =>
      `-${spread}px 12px ${blur}px rgba(5, 20, 55, ${opacity})`
  );

  const foldScale = useTransform(progress, [0, 0.07], [1, 0]);
  const foldOpacity = useTransform(progress, [0, 0.06], [1, 0]);
  const curlHighlight = useTransform(progress, [0, 0.5, 1], [0.65, 0.38, 0.08]);

  return (
    <div className="page-curl-stage">
      <motion.div
        className="page-curl-ambient-shadow"
        style={{ opacity: shadowOpacity }}
        aria-hidden="true"
      />

      <motion.div className="page-curl-flat" style={{ clipPath: flatClip }}>
        {children}
      </motion.div>

      <motion.div
        className="page-curl-flap-wrap"
        style={{ left: flapLeft, width: flapWidth }}
      >
        <motion.div
          className="page-curl-flap"
          style={{
            rotateY: flapRotateY,
            rotateX: flapRotateX,
            z: flapLiftZ,
            boxShadow: castShadow,
          }}
        >
          <div className="page-curl-flap-body">
            <motion.div className="page-curl-flap-front" style={{ x: flapFrontX }}>
              {children}
            </motion.div>
            <div className="page-curl-flap-back" aria-hidden="true">
              <div className="page-curl-paper-texture" />
              <div className="page-curl-paper-shade" />
            </div>
          </div>

          <motion.div
            className="page-curl-flap-highlight"
            style={{ opacity: curlHighlight }}
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="page-curl-dogear"
        style={{ scale: foldScale, opacity: foldOpacity }}
        aria-hidden="true"
      >
        <div className="page-curl-dogear-front" />
        <div className="page-curl-dogear-back" />
      </motion.div>
    </div>
  );
}
