'use client';
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { slides } from '../data/slides.config';
import Image from 'next/image';

export default function SlidePresentation() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 30,
  });

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
    <div className="relative w-full h-full bg-neutral-950 rounded-sm ring-1 ring-[#d4af37]/30">

      {/* Slide track */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full w-full">
          {slides.map((slide, i) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">

              {/* Full-bleed slide image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.imagePath}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  unoptimized={slide.imagePath.endsWith('.gif') || slide.imagePath.endsWith('.svg')}
                  priority={i === 0}
                />
              </div>

              {/* Index slide overlay — chapter nav buttons */}
              {slide.type === 'index' && (
                <div className="absolute inset-0 flex flex-col items-center justify-end z-10 bg-black/20"
                  style={{ paddingBottom: '3%' }}
                >
                  <div className="flex justify-center w-full" style={{ gap: '2%', padding: '0 4%' }}>
                    {slides.filter(s => s.jumpLabel).map((s) => {
                      const slideIndex = slides.findIndex(x => x.id === s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => jumpTo(slideIndex)}
                          className="flex-1 bg-[#8b0000]/80 hover:bg-[#8b0000] border border-[#d4af37] text-amber-50 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] tracking-wide"
                          style={{
                            fontSize: 'clamp(8px, 1vw, 14px)',
                            padding: 'clamp(4px, 0.6vw, 10px) clamp(8px, 1.2vw, 20px)',
                          }}
                        >
                          {s.jumpLabel}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow — fluid vw positioning, always outside slide */}
      <button
        onClick={scrollPrev}
        aria-label="Previous Slide"
        className="absolute top-0 h-80px flex items-center justify-center bg-white/5 backdrop-blur-[2px] rounded-2xl hover:bg-gray/10 transition-all shadow-lg z-50 overflow-hidden"
        style={{
          right: '100%',
          marginLeft: '20px',
          height: '290px',
          width: '90px',
          minWidth: '20px',
        }}
      >
        <img
          src="/Arrow Left.svg"
          alt="Previous"
          style={{ width: '60%' }}
        />
      </button>

      {/* Right arrow — fluid vw positioning, always outside slide */}
      <button
        onClick={scrollNext}
        aria-label="Next Slide"
        className="absolute top-0 80px flex items-center justify-center bg-white/5 backdrop-blur-[2px] rounded-2xl hover:bg-white/10 transition-all shadow-lg z-50 overflow-hidden"
        style={{
          left: '100%',
          marginLeft: '20px',
          height: '290px',
          width: '90px',
          minWidth: '20px',
        }}
      >
        <img
          src="/Arrow Right.svg"
          alt="Next"
          style={{ width: '60%' }}
        />
      </button>

    </div>
  );
}
