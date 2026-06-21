import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMotionValue } from "framer-motion";
import PageTurnOverlay from "../components/PageTurnOverlay";
import {
  animatePageTurn,
  captureMainSnapshot,
  lockPageForTurn,
  prefersReducedMotion,
  unlockPageAfterTurn,
} from "../lib/pageTurn";
import { preloadChapter } from "../data/chapters";

interface TurnState {
  targetPath: string;
  snapshotHtml: string;
}

interface PageTurnContextValue {
  requestPageTurn: (targetPath: string) => void;
  isTurning: boolean;
}

const PageTurnContext = createContext<PageTurnContextValue | null>(null);

export function PageTurnProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const progress = useMotionValue(0);
  const [turnState, setTurnState] = useState<TurnState | null>(null);

  const requestPageTurn = useCallback(
    (targetPath: string) => {
      if (turnState || targetPath === location.pathname) return;

      preloadChapter(targetPath);

      if (prefersReducedMotion()) {
        navigate(targetPath);
        return;
      }

      const snapshotHtml = captureMainSnapshot();
      lockPageForTurn();
      setTurnState({ targetPath, snapshotHtml });

      animatePageTurn(progress, () => {
        navigate(targetPath);
        setTurnState(null);
        unlockPageAfterTurn();
        progress.set(0);
      });
    },
    [turnState, location.pathname, navigate, progress]
  );

  const value = useMemo(
    () => ({
      requestPageTurn,
      isTurning: turnState !== null,
    }),
    [requestPageTurn, turnState]
  );

  return (
    <PageTurnContext.Provider value={value}>
      {children}
      {turnState && (
        <PageTurnOverlay
          targetPath={turnState.targetPath}
          snapshotHtml={turnState.snapshotHtml}
          progress={progress}
        />
      )}
    </PageTurnContext.Provider>
  );
}

export function usePageTurn() {
  const ctx = useContext(PageTurnContext);
  if (!ctx) {
    throw new Error("usePageTurn must be used within PageTurnProvider");
  }
  return ctx;
}
