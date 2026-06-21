// Ordered "chapters" of the digital prospectus. Each page answers one question
// while creating curiosity for the next, powering the Chapter Navigation card.

export interface Chapter {
  path: string;
  label: string;
  title: string;
  question: string;
  teaser: string;
  image: string;
}

export const chapters: Chapter[] = [
  {
    path: "/",
    label: "Home",
    title: "Welcome",
    question: "Who are we?",
    teaser: "Begin the story of a school built on conscience and curiosity.",
    image: "/assets/School image.jpeg",
  },
  {
    path: "/about",
    label: "About Us",
    title: "About Us",
    question: "What do we believe?",
    teaser: "Discover the origins, the visionaries, and the values behind our name.",
    image: "/assets/kids3.png",
  },
  {
    path: "/academics",
    label: "Academics",
    title: "Academics",
    question: "How do we teach?",
    teaser: "Step inside a curriculum designed for gradual, lasting understanding.",
    image: "/assets/kids5.png",
  },
  {
    path: "/facilities",
    label: "Facilities",
    title: "Facilities",
    question: "Where do students learn?",
    teaser: "Walk through the laboratories, libraries, and spaces that spark innovation.",
    image: "/assets/Kids1.png",
  },
  {
    path: "/activities",
    label: "Activities",
    title: "Activities",
    question: "How do students grow?",
    teaser: "See how clubs, arts, and athletics shape well-rounded young minds.",
    image: "/assets/kids8.png",
  },
  {
    path: "/gallery",
    label: "Gallery",
    title: "Gallery",
    question: "What does daily life look like?",
    teaser: "A photographic journey through everyday moments on our campus.",
    image: "/assets/kids4.png",
  },
  {
    path: "/admissions",
    label: "Admissions",
    title: "Admissions",
    question: "How can your child join us?",
    teaser: "Learn how to begin your child's journey with Prarthana.",
    image: "/assets/kids10.png",
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact",
    question: "How can we connect?",
    teaser: "Reach our administrative desk and find your way to our campus.",
    image: "/assets/kids6.png",
  },
];

// Returns the chapter that follows the given path. After the final chapter
// (Contact), the journey loops back to Home as a gentle "Back to Home".
export function getNextChapter(pathname: string): Chapter | null {
  const index = chapters.findIndex((c) => c.path === pathname);
  if (index === -1) return null;
  return chapters[(index + 1) % chapters.length];
}
