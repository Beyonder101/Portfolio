'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import CurtainLoader from './CurtainLoader';
import SlidePresentation from './SlidePresentation';
import { Volume2, VolumeX } from 'lucide-react';

export default function PortfolioCinematic() {
  const [opened, setOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSlides, setShowSlides] = useState(false);

  // Refs for animation
  const containerRef = useRef<HTMLDivElement>(null);
  const courtImageRef = useRef<HTMLDivElement>(null);
  const projectorBeamRef = useRef<SVGPolygonElement>(null);
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
    gsap.set(projectorBeamRef.current, { opacity: 0 });
    gsap.set(slideContainerRef.current, { opacity: 0 });

    // 1. 0s-2s: Keep zoomed in focusing on the projector area.
    
    // 2. 3s: Gear spins & music fades in. 
    tl.to({}, { duration: 3 })
      .add(() => {
        if(audioRef.current) gsap.to(audioRef.current, { volume: 0.6, duration: 2 });
      }, 3);

    // 3. 3s-7s: Projector flicker
    // We create a fast flicker effect by repeating an opacity tween, ending firmly ON at 7s
    tl.to(projectorBeamRef.current, {
      opacity: 0.85,
      duration: 0.15,
      yoyo: true,
      repeat: 26, // 26 * 0.15 ~= 3.9 seconds of flickering
      ease: "power1.inOut"
    }, 3);
    
    // Ensure beam stays fully on at the end of flicker
    tl.to(projectorBeamRef.current, { opacity: 0.9, duration: 0.5 }, 7);

    // 4. 7s-8s: Camera zooms out to show full court
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
  }, [opened]); // Removed isMuted from dependency array to prevent timeline reset

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] text-amber-50">
      {!opened && <CurtainLoader onOpen={() => setOpened(true)} />}

      {/* Put your music file in /public/audio/court-melody.mp3 */}
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
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[85%] md:w-[70%] aspect-[21/9] border-[8px] border-[#8b0000] bg-black rounded-sm z-10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Interactive Presentation mounts here */}
              <div 
                ref={slideContainerRef} 
                className={`w-full h-full transition-opacity ${showSlides ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                 {showSlides && <SlidePresentation />}
              </div>
          </div>

          {/* Projector Machine Target (Bottom Center) */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[120px] h-[60px] bg-neutral-900/80 border border-[#d4af37]/40 rounded-sm flex items-center justify-center z-10 backdrop-blur-sm shadow-xl">
            <div className="w-10 h-10 rounded-full border-2 border-amber-500/50 animate-[spin_4s_linear_infinite]" />
          </div>

          {/* Projector Beam SVG overlay */}
          <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none drop-shadow-2xl" viewBox="0 0 1000 1000" preserveAspectRatio="none">
             <defs>
               <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0">
                 <stop offset="0%" stopColor="rgba(255, 240, 180, 0.7)" />
                 <stop offset="30%" stopColor="rgba(255, 230, 150, 0.4)" />
                 <stop offset="100%" stopColor="rgba(255, 255, 220, 0.05)" />
               </linearGradient>
               {/* Dust grain filter for beam */}
               <filter id="dust">
                 <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                 <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" in="noise" result="coloredNoise" />
                 <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                 <feBlend mode="screen" in="composite" in2="SourceGraphic" />
               </filter>
             </defs>
             {/* 
                 Trapezoid polygon projecting from bottom center (Projector) 
                 up to top rectangle (Screen)
             */}
             <polygon 
               ref={projectorBeamRef}
               points="480,920 520,920 850,120 150,120" 
               fill="url(#beamGrad)" 
               filter="url(#dust)"
             />
          </svg>
        </div>
      </div>

      {/* Audio toggle control */}
      {opened && (
        <button 
          onClick={() => {
             setIsMuted(!isMuted);
             if(audioRef.current) audioRef.current.muted = !isMuted;
          }}
          className="absolute bottom-8 right-8 z-[100] p-4 bg-[#8b0000] text-[#d4af37] rounded-full hover:bg-red-950 transition-all duration-300 shadow-[0_0_20px_rgba(139,0,0,0.5)] border-2 border-[#d4af37] hover:scale-110"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}
    </div>
  );
}
