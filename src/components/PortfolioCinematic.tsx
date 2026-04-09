'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import TopNavigation from './TopNavigation';
import ProjectorScreen from './ProjectorScreen';
import CurtainLoader from './CurtainLoader';
import MughalAnimations from './MughalAnimations';
import { Volume2, VolumeX } from 'lucide-react';

export default function PortfolioCinematic() {
  const [curtainDone, setCurtainDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  // Two independent refs — one per component
  const navRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  // Sync mute toggle
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  }, [isMuted]);

  // Called INSTANTLY on curtain button click — this IS the user gesture so audio works
  const handleAudioStart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    audio.loop = true;
    if (!isMuted) {
      audio.play().catch(() => {});
    }
  };

  // Called when curtain animation finishes (1.7s after click)
  const handleCurtainOpen = () => {

    const viewport = viewportRef.current;
    const nav = navRef.current;
    const screen = screenRef.current;

    if (!viewport) {
      setCurtainDone(true);
      return;
    }

    // Hide both independently before pan starts
    if (nav)    gsap.set(nav,    { opacity: 0 });
    if (screen) gsap.set(screen, { opacity: 0 });

    // Snap to bottom — reveals presenter + gear area
    viewport.scrollTop = viewport.scrollHeight;

    // Pan upward over 4s
    gsap.to(viewport, {
      scrollTop: 0,
      duration: 4,
      ease: 'power2.inOut',
      onComplete: () => setCurtainDone(true),
    });

    // Fade in nav first (3.2s in)
    if (nav) {
      gsap.to(nav, {
        opacity: 1,
        duration: 0.6,
        ease: 'power1.out',
        delay: 3.2,
      });
    }

    // Fade in projector screen slightly after (3.5s in)
    if (screen) {
      gsap.to(screen, {
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
        delay: 3.5,
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] text-amber-50">

      {/* Background Audio */}
      <audio ref={audioRef} src="/sound/The Mughals - Epic Music.aac" loop />

      {/* Curtain overlay */}
      {!curtainDone && <CurtainLoader onButtonClick={handleAudioStart} onOpen={handleCurtainOpen} />}

      {/* Scrollable viewport — GSAP pans this from bottom to top */}
      <div
        ref={viewportRef}
        className="w-full overflow-y-auto overflow-x-hidden"
        style={{
          height: '100vh',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`#scene::-webkit-scrollbar { display: none; }`}</style>

        <div
          id="scene"
          className="relative w-full max-w-[1600px] mx-auto bg-neutral-900 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Background image */}
          <img
            src="/images/Background.png"
            alt="Mughal Court"
            className="w-full h-auto block"
          />

          {/* Animated overlays — gear, beam, corner lamps */}
          <div className="absolute inset-0 pointer-events-none">
            <MughalAnimations />
          </div>

          {/*
           * ── COMPONENT 1: TopNavigation ──────────────────────────────
           * Edit position inside TopNavigation.tsx → top-[x%]
           * Edit width inside TopNavigation.tsx → w-[x%] / max-w-[xpx]
           */}
          <div ref={navRef} style={{ opacity: curtainDone ? 1 : 0 }}>
            <TopNavigation visible={curtainDone} />
          </div>

          {/*
           * ── COMPONENT 2: ProjectorScreen ────────────────────────────
           * Edit position inside ProjectorScreen.tsx → top-[x%]
           * Edit width inside ProjectorScreen.tsx → w-[x%] / max-w-[xpx]
           */}
          <div ref={screenRef} style={{ opacity: curtainDone ? 1 : 0 }}>
            <ProjectorScreen visible={curtainDone} />
          </div>

        </div>
      </div>

      {/* Audio toggle */}
      <button
        onClick={() => setIsMuted(prev => !prev)}
        className="fixed bottom-8 right-8 z-[100] p-4 bg-[#8b0000] text-[#d4af37] rounded-full hover:bg-red-950 transition-all shadow-[0_0_20px_rgba(139,0,0,0.5)] border-2 border-[#d4af37]"
        aria-label="Toggle Audio"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

    </div>
  );
}
