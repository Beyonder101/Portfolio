'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import CurtainLoader from './CurtainLoader';
import SlidePresentation from './SlidePresentation';
import MughalAnimations from './MughalAnimations';
import { Volume2, VolumeX } from 'lucide-react';

export default function PortfolioCinematic() {
  const [opened, setOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSlides, setShowSlides] = useState(false);

  // Refs for animation
  const containerRef = useRef<HTMLDivElement>(null);
  const courtImageRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!opened) return;

    // Prevent scrolling while cinematic plays
    document.body.style.overflow = 'hidden';

    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch(e => console.log('Audio blocked', e));
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setShowSlides(true);
      }
    });

    // Setup initial state: Zoomed in to bottom center
    gsap.set(courtImageRef.current, { 
      scale: 2.2, 
      transformOrigin: '50% 90%' // Focus tightly on bottom center
    });
    gsap.set(slideContainerRef.current, { opacity: 0 });

    // 1. 0s-2s: Keep zoomed in focusing on the projector area.
    
    // 2. 3s: Music fades in, we wait 2 seconds.
    tl.to({}, { duration: 3 })
      .add(() => {
        if(audioRef.current) gsap.to(audioRef.current, { volume: 0.6, duration: 2 });
      }, 3);

    // 4. 7s-8.5s: Camera zooms out to show full court
    tl.to(courtImageRef.current, {
      scale: 1,
      duration: 1.5,
      ease: 'power3.inOut'
    }, 7);

    // 5. 8.5s-10s: Camera pans upward to focus precisely on the projector screen
    tl.to(containerRef.current, {
      y: '35vh', // Translates the whole viewport down to bring the top screen into view
      duration: 1.5,
      ease: 'power3.inOut'
    }, 8.5);

    // Fade in the interactive slides right at 10s
    tl.to(slideContainerRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power1.inOut'
    }, 10);

    return () => {
      tl.kill();
    };
  }, [opened]); 

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] text-amber-50">
      {!opened && <CurtainLoader onOpen={() => setOpened(true)} />}

      <audio ref={audioRef} src="/audio/court-melody.mp3" loop />

      {/* Main Orchestrator Viewport */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-start pointer-events-none pt-[10vh]"
      >
        
        {/* Court Image Background Panel */}
        <div 
          ref={courtImageRef} 
          className="relative w-full max-w-[1400px] aspect-[4/5] md:aspect-[16/10] bg-neutral-900 mx-auto border-4 border-[#8b0000]/50 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden rounded-md"
        >
          {/* Real Mughal illustration goes here, spanning full height/width */}
          <div className="absolute inset-0 flex items-center justify-center flex-col text-amber-600/30 bg-[url('/images/mughal-court.webp')] bg-cover bg-center">
            <span className="text-xl tracking-widest font-serif border border-amber-600/30 p-4 bg-black/50 backdrop-blur">
              [ /public/images/mughal-court.webp ]
            </span>
          </div>
          
          {/* Projector Screen Target Area (Top of Court) */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[85%] md:w-[70%] aspect-[21/9] border-[8px] border-[#8b0000] bg-black rounded-sm z-20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Interactive Presentation mounts here */}
              <div 
                ref={slideContainerRef} 
                className={`w-full h-full transition-opacity ${showSlides ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                 {showSlides && <SlidePresentation />}
              </div>
          </div>

          {/* New Ambient Animations overlay (Lanterns, Gears, Pankhas, Beam) */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <MughalAnimations />
          </div>

        </div>
      </div>

      {/* Audio toggle control */}
      {opened && (
        <button 
          onClick={() => {
             setIsMuted(!isMuted);
             if(audioRef.current) audioRef.current.muted = !isMuted;
          }}
          className="absolute bottom-8 right-8 z-[100] p-4 bg-[#8b0000] text-[#d4af37] rounded-full hover:bg-red-950 transition-all duration-300 shadow-[0_0_20px_rgba(139,0,0,0.5)] border-2 border-[#d4af37] hover:scale-110 pointer-events-auto"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}
    </div>
  );
}
