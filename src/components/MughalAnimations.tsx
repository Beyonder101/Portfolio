'use client';

import React from 'react';
import Image from 'next/image';

export default function MughalAnimations() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gear-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes beam-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.28; }
        }
        @keyframes lamp-flicker {
          0%, 100% { opacity: 0.95; transform: scale(1); }
          20% { opacity: 0.4; transform: scale(0.96); }
          40% { opacity: 0.6; transform: scale(1.03); }
          60% { opacity: 0.38; transform: scale(0.97); }
          80% { opacity: 0.58; transform: scale(1.01); }
        }
        .anim-gear {
          animation: gear-spin 4s linear infinite;
          transform-origin: center;
          will-change: transform;
        }
        .anim-beam {
          animation: beam-pulse 3s ease-in-out infinite;
          will-change: opacity;
        }
        .anim-lamp-left {
          animation: lamp-flicker 2.4s ease-in-out infinite;
          animation-delay: 0s;
          will-change: opacity, transform;
        }
        .anim-lamp-right {
          animation: lamp-flicker 2.4s ease-in-out infinite;
          animation-delay: 0.7s;
          will-change: opacity, transform;
        }
      `}} />

      {/* Corner lamp dim effect - top-left */}
      <div
        className="absolute pointer-events-none anim-lamp-left"
        style={{
          top: 0,
          left: 0,
          width: '22%',
          height: '30%',
          background: 'radial-gradient(ellipse at 0% 0%, rgba(255,200,80,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Corner lamp dim effect - top-right */}
      <div
        className="absolute pointer-events-none anim-lamp-right"
        style={{
          top: 0,
          right: 0,
          width: '22%',
          height: '30%',
          background: 'radial-gradient(ellipse at 100% 0%, rgba(255,200,80,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Projector soft light cone — from machine up to the wall/screen */}
      <div
        className="absolute pointer-events-none anim-beam"
        style={{
          /* Machine sits ~58% from top, slightly right of center (~53%) */
          top: '30%',
          left: '50%',
          transform: 'translateX(-52%)',
          width: '48%',
          height: '30%',
          background: 'linear-gradient(to top, rgba(255,220,100,0.25) 0%, rgba(255,220,100,0.07) 70%, transparent 100%)',
          clipPath: 'polygon(38% 100%, 62% 100%, 100% 0%, 0% 0%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Spinning gear wheel — on the projector machine wheel on the table,
          just right of and below the presenter's laptop */}
      <div
        className="absolute"
        style={{
          top: '82%',
          left: '58.6%',
          transform: 'translate(-50%, -50%)',
          width: '3.5%',
          minWidth: '28px',
          maxWidth: '46px',
          aspectRatio: '1',
          zIndex: 10,
        }}
      >
        <div className="anim-gear w-full h-full relative">
          <Image
            src="/images/Gear-wheel.jpg"
            alt="Projector gear"
            fill
            className="object-contain rounded-full"
            style={{ mixBlendMode: 'multiply', opacity: 0.88 }}
          />
        </div>
      </div>
    </>
  );
}
