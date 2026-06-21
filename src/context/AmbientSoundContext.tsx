import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Volume2, VolumeX } from "lucide-react";

const STORAGE_KEY = "prarthana-ambient-sound";
const TARGET_VOLUME = 0.12;
const FADE_MS = 2000;
const AUDIO_SRC = "/assets/audio/campus-ambience.mp3";

interface AmbientSoundContextValue {
  enabled: boolean;
  loaded: boolean;
  pendingRestore: boolean;
  heroCoverVisible: boolean;
  setHeroCoverVisible: (visible: boolean) => void;
  toggle: () => void;
}

const AmbientSoundContext = createContext<AmbientSoundContextValue | null>(null);

function readStoredPreference(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "enabled";
  } catch {
    return false;
  }
}

function writeStoredPreference(enabled: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, enabled ? "enabled" : "disabled");
  } catch {
    /* ignore */
  }
}

export function AmbientSoundProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const targetVolumeRef = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pendingRestore, setPendingRestore] = useState(false);
  const [heroCoverVisible, setHeroCoverVisible] = useState(false);

  const cancelFade = useCallback(() => {
    if (fadeFrameRef.current !== null) {
      cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
  }, []);

  const fadeTo = useCallback(
    (target: number, onComplete?: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;

      cancelFade();
      const start = audio.volume;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / FADE_MS, 1);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        audio.volume = start + (target - start) * eased;

        if (t < 1) {
          fadeFrameRef.current = requestAnimationFrame(step);
        } else {
          fadeFrameRef.current = null;
          audio.volume = target;
          onComplete?.();
        }
      };

      fadeFrameRef.current = requestAnimationFrame(step);
    },
    [cancelFade]
  );

  const ensureAudio = useCallback(() => {
    if (audioRef.current) return audioRef.current;

    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = "none";
    audio.volume = 0;

    audio.addEventListener(
      "canplaythrough",
      () => setLoaded(true),
      { once: true }
    );
    audio.addEventListener("error", () => setLoaded(false));

    audioRef.current = audio;
    return audio;
  }, []);

  const startPlayback = useCallback(async () => {
    const audio = ensureAudio();
    targetVolumeRef.current = TARGET_VOLUME;

    try {
      if (audio.readyState < 2) {
        audio.load();
      }
      await audio.play();
      fadeTo(TARGET_VOLUME);
      setPendingRestore(false);
      return true;
    } catch {
      return false;
    }
  }, [ensureAudio, fadeTo]);

  const stopPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    targetVolumeRef.current = 0;
    setPendingRestore(false);
    fadeTo(0, () => {
      audio.pause();
    });
  }, [fadeTo]);

  const toggle = useCallback(async () => {
    if (enabled) {
      setEnabled(false);
      writeStoredPreference(false);
      stopPlayback();
    } else {
      setEnabled(true);
      writeStoredPreference(true);
      const ok = await startPlayback();
      if (!ok) setPendingRestore(true);
    }
  }, [enabled, startPlayback, stopPlayback]);

  useEffect(() => {
    if (!readStoredPreference()) return;

    setEnabled(true);
    setPendingRestore(true);
    startPlayback().then((ok) => {
      if (!ok) setPendingRestore(true);
    });
  }, [startPlayback]);

  useEffect(() => {
    if (!pendingRestore || !enabled) return;

    const resume = () => {
      startPlayback();
    };

    document.addEventListener("click", resume, { once: true });
    document.addEventListener("keydown", resume, { once: true });
    return () => {
      document.removeEventListener("click", resume);
      document.removeEventListener("keydown", resume);
    };
  }, [pendingRestore, enabled, startPlayback]);

  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio || !enabled) return;

      if (document.hidden) {
        cancelFade();
        audio.pause();
      } else if (targetVolumeRef.current > 0) {
        audio.volume = 0;
        audio.play().then(() => fadeTo(TARGET_VOLUME)).catch(() => undefined);
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [enabled, cancelFade, fadeTo]);

  useEffect(() => {
    return () => {
      cancelFade();
      audioRef.current?.pause();
    };
  }, [cancelFade]);

  return (
    <AmbientSoundContext.Provider
      value={{
        enabled,
        loaded,
        pendingRestore,
        heroCoverVisible,
        setHeroCoverVisible,
        toggle,
      }}
    >
      {children}
    </AmbientSoundContext.Provider>
  );
}

export function useAmbientSound() {
  const ctx = useContext(AmbientSoundContext);
  if (!ctx) {
    throw new Error("useAmbientSound must be used within AmbientSoundProvider");
  }
  return ctx;
}

interface AmbientSoundToggleProps {
  placement?: "fixed" | "cover";
}

export function AmbientSoundToggle({ placement = "fixed" }: AmbientSoundToggleProps) {
  const { enabled, loaded, pendingRestore, heroCoverVisible, toggle } =
    useAmbientSound();

  if (placement === "fixed" && heroCoverVisible) return null;
  if (placement === "cover" && !heroCoverVisible) return null;

  return (
    <div
      className={`ambient-sound-root ambient-sound-root--${placement}`}
      aria-live="polite"
    >
      <button
        type="button"
        onClick={toggle}
        className={`ambient-sound-toggle ${enabled ? "ambient-sound-toggle--on" : ""}`}
        aria-pressed={enabled}
        aria-label={
          enabled ? "Disable ambient campus sound" : "Enable ambient campus sound"
        }
        title={enabled ? "Disable ambient sound" : "Enable ambient sound"}
      >
        {enabled ? (
          <Volume2 className="w-4 h-4 shrink-0" strokeWidth={1.75} />
        ) : (
          <VolumeX className="w-4 h-4 shrink-0" strokeWidth={1.75} />
        )}
        <span className="ambient-sound-toggle-label">
          {enabled
            ? pendingRestore
              ? "Tap to Resume"
              : "Ambience On"
            : "Enable Ambient Sound"}
        </span>
      </button>
      {enabled && !loaded && (
        <span className="ambient-sound-status">Loading…</span>
      )}
    </div>
  );
}
