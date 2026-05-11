'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- Tab 4 UI Component: Comprehensive Analytics ---

const FEATURES = [
  {
    id: '01',
    title: 'Unique badge builder',
    image: '/assets/landing-page/feature-1.png',
    imageWidth: 1944,
    imageHeight: 2392,
    description:
      'Every keystroke reflects instantly on the canvas. High-fidelity rendering ensures what you see is exactly what they share.',
  },
  {
    id: '02',
    title: 'Real-time live preview',
    image: '/assets/landing-page/feature-2.png',
    imageWidth: 1856,
    imageHeight: 1952,
    description:
      'Changes appear instantly as organizers customize names, photos, and layouts, making every badge feel polished before it goes live.',
  },
  {
    id: '03',
    title: 'One-click social sharing',
    image: '/assets/landing-page/feature-3.png',
    imageWidth: 1863,
    imageHeight: 2432,
    description:
      'Changes appear instantly as organizers customize names, photos, and layouts, making every badge feel polished before it goes live.',
  },
  {
    id: '04',
    title: 'Comprehensive analytics',
    image: '/assets/landing-page/feature-4.png',
    imageWidth: 3808,
    imageHeight: 3348,
    description:
      "Track badge views, shares, clicks, and engagement insights in real time to understand what's driving event visibility.",
  },
];

export default function Feature() {
  const [activeId, setActiveId] = useState('01');
  const activeFeature = FEATURES.find((f) => f.id === activeId) || FEATURES[0];

  return (
    <section
      id="feature-section"
      className="w-full py-12 sm:py-16 lg:py-24 bg-[#f9f9f9] overflow-hidden"
    >
      <div className="mx-auto px-4 md:px-6 sm:px-6 lg:px-8  max-w-360">
        <div className="w-full mx-auto">
          {/* ── Header ── */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#ff4f1f] w-2 h-2 rounded-sm" />
              <span className="text-[11px] text-gray-400 tracking-[1.54px] uppercase">
                FEATURES
              </span>
            </div>
            <h2 className="font-fraunces font-semibold text-[32px] sm:text-4xl md:text-5xl lg:text-[72px] leading-[1.1] lg:leading-18.5 tracking-[-0.65px] text-[#525252]">
              Pre-event hype <br className="hidden sm:block" />
              shouldn&apos;t be <span className="italic text-[#ff4f1f]">this</span> hard.
            </h2>
          </div>

          {/* ── Content Layout ──
               Mobile/Tablet : steps list → CTA button → visual (stacked)
               Desktop (lg+) : left column (steps) | right column (visual)
          ── */}
          <div
            className={`flex flex-col min-[900px]:flex-row justify-between gap-8 min-[900px]:gap-12 lg:gap-0 w-full transition-all duration-500 ${
              activeId === '02' ? 'min-[900px]:items-center' : 'min-[900px]:items-start'
            }`}
          >
            {/* ── LEFT COLUMN: Step Menu ── */}
            <div className="flex flex-col w-full min-[900px]:w-112.5 lg:w-148 shrink-0 p-0 items-stretch border-l border-[#e4beb1]/30">
              {FEATURES.map((feature) => {
                const isActive = activeId === feature.id;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveId(feature.id)}
                    className={`relative flex flex-col items-start justify-start w-full py-5 sm:py-8 gap-3 sm:gap-4 cursor-pointer transition-all duration-300 ease-in-out group ${
                      isActive
                        ? 'z-10 pl-7 sm:pl-9 pr-5 sm:pr-8'
                        : 'border-b border-gray-100 hover:bg-white/40 px-5 sm:px-8'
                    }`}
                  >
                    {/* Active Background & Wrap-around Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-white border border-[#ff4f1f]/30 border-l-4 border-l-[#ff4f1f] rounded-2xl sm:rounded-3xl shadow-sm pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Header Row */}
                    <div className="flex items-center gap-3 sm:gap-4 w-full relative z-10">
                      <span
                        className={`font-bold text-sm tracking-wider transition-colors ${isActive ? 'text-[#ff4f1f]' : 'text-gray-400 group-hover:text-[#ff4f1f]/60'}`}
                      >
                        {feature.id}
                      </span>
                      <div
                        className={`h-0.5 w-8 sm:w-10 transition-colors ${isActive ? 'bg-[#ff4f1f]' : 'bg-gray-200 group-hover:bg-[#ff4f1f]/30'}`}
                      />
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4f1f] shrink-0" />
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-fraunces text-left transition-colors mt-1 relative z-10 ${isActive ? 'text-xl sm:text-2xl lg:text-[32px] font-bold text-primary-800 leading-tight' : 'text-base sm:text-lg lg:text-[18px] font-normal text-[#5b4137] leading-relaxed group-hover:text-primary-800'}`}
                    >
                      {feature.title}
                    </h3>

                    {/* Description — only shown when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden w-full text-left relative z-10"
                        >
                          <p className="text-[#5b4137] text-sm sm:text-base leading-6 mt-1 sm:mt-2">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* ── Mobile CTA Button (between steps & visual, hidden on min-900) ── */}
            <div className="flex min-[900px]:hidden w-full px-1">
              <button className="w-full bg-[#ff4f1f] hover:bg-[#e54519] active:scale-[0.98] transition-all text-white font-bold text-base py-4.5 rounded-full shadow-lg">
                {activeId === '03' ? 'Generate and share' : 'Publish and share'}
              </button>
            </div>

            {/* ── RIGHT COLUMN: Visual Stage ── */}
            <div className="w-full min-[900px]:flex-1 shrink-0 relative flex items-center min-[900px]:pt-12 justify-center overflow-visible">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.97 }}
                  transition={{ duration: 0.45, type: 'spring', stiffness: 200, damping: 22 }}
                  className="w-full flex justify-center"
                >
                  <div
                    className="
        w-full
        max-w-[320px] sm:max-w-[465px] lg:max-w-[752px]
        rounded-[24px] sm:rounded-[32px] lg:rounded-[48px]
        overflow-hidden
        shadow-[0px_20px_40px_rgba(0,0,0,0.06)]
      "
                  >
                    <Image
                      src={activeFeature.image as string}
                      alt={activeFeature.title}
                      width={activeFeature.imageWidth}
                      height={activeFeature.imageHeight}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 80vw, 752px"
                      priority={activeFeature.id === '01'}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
