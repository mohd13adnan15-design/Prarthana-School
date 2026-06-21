import { lazy, type ComponentType, type LazyExoticComponent } from "react";

const pageImports: Record<string, () => Promise<{ default: ComponentType }>> = {
  "/": () => import("../pages/Home"),
  "/about": () => import("../pages/About"),
  "/academics": () => import("../pages/Academics"),
  "/facilities": () => import("../pages/Facilities"),
  "/activities": () => import("../pages/Activities"),
  "/gallery": () => import("../pages/Gallery"),
  "/admissions": () => import("../pages/Admissions"),
  "/contact": () => import("../pages/Contact"),
};

const lazyPages: Record<string, LazyExoticComponent<ComponentType>> = {};

export function getLazyChapterPage(
  path: string
): LazyExoticComponent<ComponentType> | null {
  const loader = pageImports[path];
  if (!loader) return null;
  if (!lazyPages[path]) {
    lazyPages[path] = lazy(loader);
  }
  return lazyPages[path];
}

export function preloadChapterPage(path: string): void {
  pageImports[path]?.();
}
