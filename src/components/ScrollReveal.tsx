"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function setupScrollReveal() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    document.querySelectorAll(".scroll-reveal-item").forEach((el) => {
      el.classList.add("is-revealed");
    });
    return () => {};
  }

  const grids = document.querySelectorAll(
    "main .grid-2, main .grid-3, main .grid-4"
  );

  const items: Element[] = [];
  grids.forEach((grid) => {
    Array.from(grid.children).forEach((child, index) => {
      if (
        !child.classList.contains("dc-card") &&
        !child.classList.contains("dc-card-navy")
      ) {
        return;
      }
      child.classList.add("scroll-reveal-item");
      (child as HTMLElement).style.setProperty(
        "--reveal-index",
        String(index)
      );
      items.push(child);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  items.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    const frame = requestAnimationFrame(() => {
      cleanup = setupScrollReveal();
    });
    return () => {
      cancelAnimationFrame(frame);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
