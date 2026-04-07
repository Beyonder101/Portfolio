'use client';

import React from 'react';
import Image from 'next/image';

interface TopNavigationProps {
  visible: boolean;
}

export default function TopNavigation({ visible }: TopNavigationProps) {
  const handleIndexClick = () => {
    window.dispatchEvent(new Event('goToIndex'));
  };

  return (
    <div 
      className={`absolute -top-52 left-0 w-full flex items-center justify-center gap-32 md:gap-64 z-[100] transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
    >
      {/* Left side: LinkedIn & Github */}
      <div className="flex gap-4">
        <a 
          href="https://www.linkedin.com/in/beyonder101/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-24 h-14 rounded-2xl bg-white/5 backdrop-blur-[2px] flex items-center justify-center hover:bg-white/10 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/5"
        >
          <Image src="/LinkedIn BW.svg" alt="LinkedIn" width={24} height={24} />
        </a>
        <a 
          href="https://github.com/Beyonder101/Portfolio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-24 h-14 rounded-2xl bg-white/5 backdrop-blur-[2px] flex items-center justify-center hover:bg-white/10 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/5"
        >
          <Image src="/Github BW.svg" alt="GitHub" width={28} height={28} />
        </a>
      </div>

      {/* Middle: Index Button */}
      <button 
        onClick={handleIndexClick}
        className="px-32 py-5 rounded-2xl bg-white/5 backdrop-blur-[2px] text-amber-50 font-serif tracking-widest text-lg hover:bg-white/10 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/5"
      >
        INDEX
      </button>

      {/* Right side: Gmail & X (Twitter) */}
      <div className="flex gap-4">
        <a 
          href="mailto:himanshupeyush@gmail.com" 
          className="w-24 h-14 rounded-2xl bg-white/5 backdrop-blur-[2px] flex items-center justify-center hover:bg-white/10 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/5"
        >
          <Image src="/Gmail C.svg" alt="Gmail" width={26} height={26} />
        </a>
        <a 
          href="https://twitter.com" // Update when they provide actual x link, leaving generic for now
          target="_blank" 
          rel="noopener noreferrer"
          className="w-24 h-14 rounded-2xl bg-white/5 backdrop-blur-[2px] flex items-center justify-center hover:bg-white/10 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/5"
        >
          <Image src="/X BW.svg" alt="X (Twitter)" width={22} height={22} />
        </a>
      </div>
    </div>
  );
}
