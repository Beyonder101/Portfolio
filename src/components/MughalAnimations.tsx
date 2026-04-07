'use client';

import React from 'react';

export default function MughalAnimations() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flicker {
          0%, 100% { opacity: 1; transform: scale(1); }
          25% { opacity: 0.8; transform: scale(0.98); }
          50% { opacity: 0.9; transform: scale(1.02); }
          75% { opacity: 0.7; transform: scale(0.95); }
        }
        @keyframes rotate-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pankha-swing {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes pulse-beam {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .anim-lantern {
          animation: flicker 2s infinite ease-in-out;
        }
        .anim-gear-large {
          animation: rotate-cw 3s linear infinite;
          transform-origin: center;
        }
        .anim-gear-small {
          animation: rotate-ccw 2s linear infinite;
          transform-origin: center;
        }
        .anim-pankha {
          animation: pankha-swing 1.4s ease-in-out infinite;
          transform-origin: top center;
        }
        .anim-beam {
          animation: pulse-beam 3s ease-in-out infinite;
        }
      `}} />

      {/* Note: All positions (top/left/bottom/right) are relative to the parent container which should represent the image aspect ratio */}
      
      {/* Lanterns */}
      <div 
        className="absolute anim-lantern rounded-full" 
        style={{ top: '7.5%', left: '16%', width: '28px', height: '28px', background: 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 70%)', animationDelay: '0s' }} 
      />
      <div 
        className="absolute anim-lantern rounded-full" 
        style={{ top: '7.5%', right: '16%', width: '28px', height: '28px', background: 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 70%)', animationDelay: '300ms' }} 
      />

      {/* Gears SVG */}
      <div className="absolute -translate-x-1/2" style={{ bottom: '28%', left: '50%', width: '40px', height: '40px' }}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_2px_rgba(184,134,11,0.5)]">
           <circle cx="20" cy="20" r="9" stroke="#B8860B" strokeWidth="2" strokeDasharray="4 2" className="anim-gear-large" />
           <circle cx="28" cy="12" r="6" stroke="#B8860B" strokeWidth="1.5" strokeDasharray="3 2" className="anim-gear-small" />
        </svg>
      </div>

      {/* Pankha Fans */}
      {/* 1st Fan */}
      <div className="absolute anim-pankha drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" style={{ bottom: '34%', right: '24%', width: '30px', height: '80px', animationDelay: '0s' }}>
        <svg viewBox="0 0 30 80" className="w-full h-full">
           <line x1="15" y1="0" x2="15" y2="40" stroke="#8b4513" strokeWidth="2" />
           <ellipse cx="15" cy="60" rx="15" ry="20" fill="rgba(184,134,11,0.85)" stroke="#663300" strokeWidth="1" />
        </svg>
      </div>
      
      {/* 2nd Fan */}
      <div className="absolute anim-pankha drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" style={{ bottom: '34%', right: '18%', width: '30px', height: '80px', animationDelay: '0.2s' }}>
        <svg viewBox="0 0 30 80" className="w-full h-full">
           <line x1="15" y1="0" x2="15" y2="40" stroke="#8b4513" strokeWidth="2" />
           <ellipse cx="15" cy="60" rx="15" ry="20" fill="rgba(184,134,11,0.85)" stroke="#663300" strokeWidth="1" />
        </svg>
      </div>

      {/* Projector Beam */}
      <div 
        className="absolute -translate-x-1/2 anim-beam mix-blend-screen pointer-events-none" 
        style={{ 
          bottom: '28%', 
          left: '50%', 
          width: '60px', 
          height: '180px',
          background: 'linear-gradient(to top, transparent 0%, rgba(255,200,0,0.4) 100%)',
          clipPath: 'polygon(20% 100%, 80% 100%, 100% 0%, 0% 0%)',
          transformOrigin: 'bottom center',
        }} 
      />
    </>
  );
}
