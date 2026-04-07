'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import CurtainLoader from './CurtainLoader';
import SlidePresentation from './SlidePresentation';
import MughalAnimations from './MughalAnimations';
import TopNavigation from './TopNavigation';
import { Volume2, VolumeX } from 'lucide-react';

export default function PortfolioCinematic() {
  const [opened, setOpened] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSlides, setShowSlides] = useState(false);

  // Refs for animation
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!opened || !imageLoaded) return;

    // Prevent scrolling while cinematic plays
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch(e => console.log('Audio blocked', e));
    }

    // Prepare scroll-based animation
    const docHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = Math.max(0, docHeight - viewportHeight);

    // Setup initial state: Zoomed in to bottom center
    window.scrollTo(0, maxScroll);
    gsap.set(containerRef.current, { 
      scale: 1.4, 
      transformOrigin: '50% 100%' 
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setShowSlides(true);
        // CRITICAL FIX: Unlock scroll natively on both body and documentElement
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    });

    // 1. Music fades in
    tl.to({}, { duration: 3 })
      .add(() => {
        if(audioRef.current) gsap.to(audioRef.current, { volume: 0.6, duration: 2 });
      }, 3);

    // 2. 6s-7.5s: Camera zooms out to show full court
    tl.to(containerRef.current, {
      scale: 1,
      duration: 1.5,
      ease: 'power3.inOut'
    }, 6);

    // 3. 7.5s-9.5s: Camera pans upward natively via scroll perfectly syncing to top screen
    const scrollObj = { y: maxScroll };
    tl.to(scrollObj, {
      y: 0,
      duration: 2,
      ease: 'power3.inOut',
      onUpdate: () => window.scrollTo(0, scrollObj.y)
    }, 7.5);

    return () => {
      tl.kill();
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, [opened, imageLoaded]); 

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] text-amber-50">
      {!opened && <CurtainLoader onOpen={() => setOpened(true)} />}

      <audio ref={audioRef} src="/audio/court-melody.mp3" loop />

      {/* Main Orchestrator Viewport (Native Scroll setup) */}
      <div className="w-full bg-[#0A0A0A] overflow-x-hidden min-h-screen">
        <div ref={containerRef} className="relative w-full max-w-[1600px] mx-auto bg-neutral-900 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {/* Main Background Native Image */}
          <img 
            src="/images/Background.png" 
            alt="Mughal Court" 
            className="w-full h-auto block" 
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Projector Screen Target Area (Top of Court) */}
          <div className="absolute top-[8%] md:top-[10%] left-1/2 -translate-x-1/2 w-[80%] md:w-[65%] max-w-[1200px] z-20 flex flex-col items-center">
            
            {/* Top Navigation injected exactly above the Slide frame */}
            <TopNavigation visible={showSlides} />

            {/* Seamless Interactive Presentation Frame without red outline */}
            <div className={`relative w-full aspect-[21/9] bg-transparent mt-4 transition-all duration-1000 ${showSlides ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                 <SlidePresentation />
            </div>
            
          </div>

          {/* New Ambient Animations overlay (Lanterns, Gears, Pankhas, Beam) focused on the very bottom portion */}
          <div className="absolute bottom-0 left-0 w-full aspect-[16/9] z-10 pointer-events-none">
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
