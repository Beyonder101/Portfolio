'use client';
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { slides } from '../data/slides.config';
import Image from 'next/image';

export default function SlidePresentation() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const jumpTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    const handleGoToIndex = () => jumpTo(0);
    window.addEventListener('goToIndex', handleGoToIndex);
    return () => window.removeEventListener('goToIndex', handleGoToIndex);
  }, [jumpTo]);

  return (
    <div className="relative w-full h-full bg-neutral-950 group rounded-sm ring-1 ring-[#d4af37]/30">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          {slides.map((slide, i) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full flex flex-col items-center justify-center p-8 bg-black/50 border-x border-[#d4af37]/10">
              
              {/* If it's the index, show branching narrative */}
              {slide.type === 'index' ? (
                <div className="text-center w-full z-10 flex flex-col items-center gap-6">
                  <h2 className="text-4xl md:text-5xl text-[#d4af37] font-serif mb-4 pb-2 border-b-2 border-[#d4af37]/50 inline-block">
                    {slide.title}
                  </h2>
                  <p className="text-amber-200/80 mb-8 italic tracking-wide">{slide.subtitle}</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-xl">
                     {slides.filter(s => s.jumpLabel).map((s, idx) => {
                       const slideIndex = slides.findIndex(x => x.id === s.id);
                       return (
                         <button 
                           key={idx} 
                           onClick={() => jumpTo(slideIndex)}
                           className="flex-1 px-6 py-4 bg-[#8b0000]/80 hover:bg-[#8b0000] border border-[#d4af37] text-amber-50 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                         >
                           {s.jumpLabel}
                         </button>
                       )
                     })}
                  </div>
                </div>
              ) : (
                <div className="text-center z-10 flex flex-col items-center justify-center h-full w-full">
                   <h2 className="text-3xl text-amber-50 font-serif mb-2">{slide.title}</h2>
                   {slide.subtitle && <p className="text-[#d4af37] mb-8 italic">{slide.subtitle}</p>}
                   
                   {/* Media Placeholder -> Real images will load from imagePath */}
                   <div className="w-full max-w-2xl aspect-video border-2 border-dashed border-amber-600/30 flex items-center justify-center mx-auto bg-black/40 rounded shadow-2xl relative">
                     <span className="text-sm text-amber-700/60 font-mono">Image Asset: {slide.imagePath}</span>
                     
                     {/* Decorative Elements */}
                     <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]/50" />
                     <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]/50" />
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <button 
        onClick={scrollPrev} 
        className="absolute -left-4 md:-left-12 top-0 w-12 md:w-16 h-full bg-white/5 backdrop-blur-[2px] rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 shadow-lg z-50 overflow-hidden"
        aria-label="Previous Slide"
      >
        <Image src="/Arrow Left.svg" alt="Previous" width={60} height={150} className="object-fill w-full h-[20%] scale-150 hover:scale-[1.7] opacity-80 hover:opacity-100 transition-all" />
      </button>
      <button 
        onClick={scrollNext} 
        className="absolute -right-4 md:-right-12 top-0 w-12 md:w-16 h-full bg-white/5 backdrop-blur-[2px] rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/10 shadow-lg z-50 overflow-hidden"
        aria-label="Next Slide"
      >
        <Image src="/Arrow Right.svg" alt="Next" width={60} height={150} className="object-fill w-full h-[20%] scale-150 hover:scale-[1.7] opacity-80 hover:opacity-100 transition-all" />
      </button>
    </div>
  );
}
