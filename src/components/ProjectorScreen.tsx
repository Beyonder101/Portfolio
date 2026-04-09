'use client';

import React from 'react';
import SlidePresentation from './SlidePresentation';

interface ProjectorScreenProps {
  visible: boolean;
}

/**
 * ProjectorScreen
 * ─────────────────────────────────────────────────────
 * Fully fluid — all sizes use vw/% so they scale with
 * the background image at every viewport width.
 *
 * To reposition: change top / width in the outer div.
 * ─────────────────────────────────────────────────────
 */
export default function ProjectorScreen({ visible }: ProjectorScreenProps) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-20"
      style={{
        top: '17.5%',
        /* Width of the cream wall area in the background image */
        width: '74%',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      {/*
       * Arrow gutter: padding on left/right so the arrows sit
       * fully outside the slide frame and never overlap content.
       * Using vw so the gutter shrinks/grows with the screen.
       */}
      <div
        className="relative w-full"
        style={{
          paddingLeft: '4vw',
          paddingRight: '4vw',
        }}
      >
        {/* aspect-video keeps slide frame proportional */}
        <div className="relative w-full aspect-video">
          <SlidePresentation />
        </div>
      </div>
    </div>
  );
}
