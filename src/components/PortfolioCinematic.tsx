'use client';

import { useState, useRef, useEffect } from 'react';
import SlidePresentation from './SlidePresentation';
import TopNavigation from './TopNavigation';
import { Volume2, VolumeX } from 'lucide-react';

export default function PortfolioCinematic() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default muted since no curtain interaction
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle ambient background audio (requires user interaction to unmute cleanly)
  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(e => console.log('Audio blocked by browser policy', e));
    } else if (audioRef.current && isMuted) {
      audioRef.current.pause();
    }
  }, [isMuted]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#0A0A0A] text-amber-50">
      
      {/* Background Audio */}
      <audio ref={audioRef} src="/audio/court-melody.mp3" loop />

      {/* Main Orchestrator Viewport (Static, Native Scroll) */}
      <div className="w-full bg-[#0A0A0A] overflow-x-hidden min-h-screen">
        <div className="relative w-full max-w-[1600px] mx-auto bg-neutral-900 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {/* Main Background Native Image */}
          <img 
            src="/images/Background.png" 
            alt="Mughal Court" 
            className="w-full h-auto block" 
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Projector Screen Target Area (Top of Court) */}
          <div className="absolute top-[12%] md:top-[15%] left-1/2 -translate-x-1/2 w-[80%] md:w-[65%] max-w-[1200px] z-20 flex flex-col items-center">
            
            {/* Top Navigation Frame */}
            <TopNavigation visible={true} />

            {/* Presentation Frame */}
            <div className={`relative w-full aspect-video bg-transparent mt-4 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                 <SlidePresentation />
            </div>
            
          </div>
        </div>
      </div>

      {/* Audio toggle control */}
      <button 
        onClick={() => setIsMuted(prev => !prev)}
        className="fixed bottom-8 right-8 z-[100] p-4 bg-[#8b0000] text-[#d4af37] rounded-full hover:bg-red-950 transition-all shadow-[0_0_20px_rgba(139,0,0,0.5)] border-2 border-[#d4af37] pointer-events-auto"
        aria-label="Toggle Audio"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      
    </div>
  );
}
