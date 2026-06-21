export interface Chapter {
  path: string;
  title: string;
  teaser: string;
  previewImage?: string;
  question?: string;
}

export const chapters: Chapter[] = [
  {
    path: "/",
    title: "Home",
    teaser: "Discover the campus, spirit, and promise of Prarthana School.",
    previewImage: "/assets/School image.jpeg",
    question: "Who are we?",
  },
  {
    path: "/about",
    title: "About Us",
    teaser: "Our legacy, values, and the people who shape every student's journey.",
    previewImage: "/assets/kids 2.png",
    question: "What do we believe?",
  },
  {
    path: "/academics",
    title: "Academics",
    teaser: "A curriculum designed for inquiry, mastery, and lifelong learning.",
    previewImage: "/assets/faculties.png",
    question: "How do we teach?",
  },
  {
    path: "/facilities",
    title: "Facilities",
    teaser: "Laboratories, smart classrooms, and spaces built for discovery.",
    previewImage: "/assets/kids6.png",
    question: "Where do students learn?",
  },
  {
    path: "/activities",
    title: "Activities",
    teaser: "Music, sports, robotics, and clubs that cultivate hidden potential.",
    previewImage: "/assets/kids5.png",
    question: "How do students grow?",
  },
  {
    path: "/gallery",
    title: "Gallery",
    teaser: "Moments from classrooms, labs, celebrations, and campus life.",
    previewImage: "/assets/kids10.png",
    question: "What does daily life look like?",
  },
  {
    path: "/admissions",
    title: "Admissions",
    teaser: "Begin your child's journey with our admissions team.",
    previewImage: "/assets/kids7.png",
    question: "How can your child join us?",
  },
  {
    path: "/contact",
    title: "Contact",
    teaser: "Reach our campus desk — we're here to help.",
    previewImage: "/assets/kids8.png",
    question: "How can we connect?",
  },
];

const pagePreloaders: Record<string, () => Promise<unknown>> = {
  "/": () => import("../pages/Home"),
  "/about": () => import("../pages/About"),
  "/academics": () => import("../pages/Academics"),
  "/facilities": () => import("../pages/Facilities"),
  "/activities": () => import("../pages/Activities"),
  "/gallery": () => import("../pages/Gallery"),
  "/admissions": () => import("../pages/Admissions"),
  "/contact": () => import("../pages/Contact"),
};

export function getChapterIndex(pathname: string): number {
  return chapters.findIndex((c) => c.path === pathname);
}

export function getNextChapter(pathname: string): Chapter | null {
  const idx = getChapterIndex(pathname);
  if (idx === -1 || idx >= chapters.length - 1) return null;
  return chapters[idx + 1];
}

export function preloadChapter(path: string): void {
  pagePreloaders[path]?.();
}
