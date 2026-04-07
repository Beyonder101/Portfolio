'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';

export default function CurtainLoader({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Hide text immediately
    gsap.to(textRef.current, { opacity: 0, duration: 0.3 });

    // Animate curtains
    gsap.to(leftCurtainRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: 'power3.inOut',
      delay: 0.2
    });
    
    gsap.to(rightCurtainRef.current, {
      xPercent: 100,
      duration: 1.5,
      ease: 'power3.inOut',
      delay: 0.2,
      onComplete: onOpen // Start background timeline
    });
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${isOpen ? 'pointer-events-none' : ''}`}>
      {/* Left Curtain */}
      <div 
        ref={leftCurtainRef} 
        className="absolute left-0 top-0 w-1/2 h-full bg-[#8b0000] border-r-4 border-[#d4af37] shadow-2xl flex items-center justify-end"
      >
         <div className="mr-[-2rem] w-16 h-16 rounded-full bg-[#d4af37] z-10 shadow-lg" />
      </div>
      
      {/* Right Curtain */}
      <div 
        ref={rightCurtainRef} 
        className="absolute right-0 top-0 w-1/2 h-full bg-[#8b0000] border-l-4 border-[#d4af37] shadow-2xl flex items-center justify-start"
      >
        <div className="ml-[-2rem] w-16 h-16 rounded-full bg-[#d4af37] z-10 shadow-lg" />
      </div>

      {!isOpen && (
        <button 
          ref={textRef}
          onClick={handleOpen}
          className="relative z-50 px-10 py-5 bg-[#d4af37] text-amber-950 font-bold text-2xl tracking-widest uppercase hover:bg-[#ebd57b] transition-colors shadow-2xl ring-4 ring-[#8b0000] ring-opacity-50 cursor-pointer"
        >
          Enter the Court
        </button>
      )}
    </div>
  );
}
