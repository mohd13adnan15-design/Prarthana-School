import { Suspense, type ReactNode } from "react";
import { type MotionValue } from "framer-motion";
import PageCurlSheet from "./PageCurlSheet";
import Hero from "./Hero";
import { getLazyChapterPage } from "../data/chapterPages";

interface PageTurnOverlayProps {
  targetPath: string;
  snapshotHtml: string;
  progress: MotionValue<number>;
}

function PageTurnUnderneath({ path }: { path: string }) {
  if (path === "/") {
    return (
      <div className="page-turn-underneath-page bg-[#fcfdfd]">
        <div className="h-[100svh] w-full">
          <Hero />
        </div>
      </div>
    );
  }

  const LazyPage = getLazyChapterPage(path);
  if (!LazyPage) return null;

  return (
    <Suspense fallback={<div className="page-turn-loading" aria-hidden="true" />}>
      <LazyPage />
    </Suspense>
  );
}

export default function PageTurnOverlay({
  targetPath,
  snapshotHtml,
  progress,
}: PageTurnOverlayProps) {
  return (
    <div className="page-turn-root" aria-hidden="true">
      <div className="page-turn-underneath">
        <PageTurnUnderneath path={targetPath} />
      </div>
      <div className="page-turn-cover">
        <PageCurlSheet progress={progress}>
          <PageTurnSnapshot html={snapshotHtml} />
        </PageCurlSheet>
      </div>
    </div>
  );
}

function PageTurnSnapshot({ html }: { html: string }) {
  if (!html) {
    return <div className="page-turn-snapshot bg-[#fcfdfd]" />;
  }

  return (
    <div
      className="page-turn-snapshot"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function PageTurnSheet({
  progress,
  children,
}: {
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  return <PageCurlSheet progress={progress}>{children}</PageCurlSheet>;
}
