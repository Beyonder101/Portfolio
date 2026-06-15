'use client';

import { useEffect } from 'react';

const SECTION_COLOURS: Record<string, string> = {
  hero: '#F3EFE5',
  work: '#EDE8F7',
  about: '#DDF0E6',
  contact: '#1B3A2D',
};

export default function ScrollColourShift() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            const colour = id ? SECTION_COLOURS[id] : null;
            if (colour) {
              document.documentElement.style.setProperty('--page-bg', colour);
              document.body.style.backgroundColor = colour;
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
