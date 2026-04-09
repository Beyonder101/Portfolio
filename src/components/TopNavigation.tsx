'use client';

import React from 'react';
import Image from 'next/image';

interface TopNavigationProps {
  visible: boolean;
}

/**
 * TopNavigation
 * ─────────────────────────────────────────────────────
 * Fully fluid — all sizes use vw/% so they scale with
 * the background image at every viewport width.
 *
 * To reposition: change top / left / width below.
 * ─────────────────────────────────────────────────────
 */
export default function TopNavigation({ visible }: TopNavigationProps) {
  const handleIndexClick = () => {
    window.dispatchEvent(new Event('goToIndex'));
  };

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-30"
      style={{
        top: '4%',
        width: '90%',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.9s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="w-full flex items-center justify-between"
        style={{ gap: '24%' }}
      >
        {/* Left — LinkedIn & GitHub */}
        <div className="flex" style={{ gap: '0.5vw' }}>
          {[
            { href: 'https://www.linkedin.com/in/beyonder101/', src: '/LinkedIn BW.svg', alt: 'LinkedIn' },
            { href: 'https://github.com/Beyonder101/Portfolio', src: '/Github BW.svg', alt: 'GitHub' },
          ].map(({ href, src, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={alt}
              className="flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-[2px] hover:bg-white/15 transition-all border border-[#d4af37]/30 shadow-md"
              style={{ width: '5vw', height: '40px', minWidth: '36px', minHeight: '20px' }}
            >
              <img src={src} alt={alt} style={{ width: '40px', minWidth: '12px' }} />
            </a>
          ))}
        </div>

        {/* Center — INDEX */}
        <button
          onClick={handleIndexClick}
          className="flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-[2px] text-amber-50 font-serif tracking-widest hover:bg-white/15 transition-all border border-[#d4af37]/30 shadow-md"
          style={{
            flex: 1,
            height: '40px',
            minHeight: '40px',
            fontSize: 'clamp(8px, 50px, 40px)',
            color: 'black',
          }}
        >
          INDEX
        </button>

        {/* Right — Gmail & X */}
        <div className="flex" style={{ gap: '0.5vw' }}>
          {[
            { href: 'mailto:himanshupeyush@gmail.com', src: '/Gmail C.svg', alt: 'Gmail', target: '_self' },
            { href: 'https://twitter.com', src: '/X BW.svg', alt: 'X (Twitter)', target: '_blank' },
          ].map(({ href, src, alt, target }) => (
            <a
              key={alt}
              href={href}
              target={target}
              rel="noopener noreferrer"
              title={alt}
              className="flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-[2px] hover:bg-white/15 transition-all border border-[#d4af37]/30 shadow-md"
              style={{ width: '5vw', height: '40px', minWidth: '30px', minHeight: '20px' }}
            >
              <img src={src} alt={alt} style={{ width: '40px', minWidth: '11px' }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
