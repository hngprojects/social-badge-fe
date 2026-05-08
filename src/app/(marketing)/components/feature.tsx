'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { QrCode, Check } from 'lucide-react';

// --- Tab 3 UI Component: Share Your Badge ---
const ShareYourBadge = () => {
  const [copied, setCopied] = useState(false);
  const [activeApp, setActiveApp] = useState('twitter');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white flex flex-col items-center gap-5 sm:gap-6 w-full max-w-full sm:max-w-[465.6px] mx-auto shadow-[0px_20px_40px_rgba(0,0,0,0.06)] relative border border-gray-100 rounded-[24px] sm:rounded-[32px]">
      <div className="flex flex-col gap-1 w-full text-center">
        <h3 className="font-fraunces font-bold text-[#0a0a0a] text-[22px] sm:text-[28px] leading-tight">
          Share your Badge
        </h3>
        <p className="text-[#8a8a85] text-sm">Share it with attendees or embed it anywhere.</p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 w-full">
        {/* Link & Copy */}
        <div className="flex items-center gap-2">
          <div className="bg-[#f4f4f2] border border-black/5 flex-1 px-4 py-3 sm:py-3.5 rounded-xl overflow-hidden">
            <p className="font-mono text-[#0a0a0a] text-xs truncate">badge.build/b/devcon-2026</p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-[#0a0a0a] hover:bg-[#333] transition-colors flex items-center justify-center py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl text-white font-bold text-[10px] tracking-widest uppercase shrink-0"
          >
            {copied ? <Check size={14} /> : 'COPY'}
          </button>
        </div>

        {/* QR Code Placeholder */}
        <div className="bg-[#eaeae6] border border-black/5 flex flex-col items-center justify-center p-5 rounded-[20px] sm:rounded-[24px] w-25 sm:w-30 mx-auto aspect-square gap-2 sm:gap-3 hover:scale-105 transition-transform cursor-pointer">
          <QrCode className="text-[#8a8a85]" size={30} />
          <p className="font-mono text-[#8a8a85] text-[9px] tracking-[1.5px] uppercase font-bold">
            QR CODE
          </p>
        </div>

        {/* Caption */}
        <div className="flex flex-col gap-2 w-full">
          <p className="font-mono text-[#8a8a85] text-[9px] tracking-[1.5px] uppercase font-bold">
            CAPTION
          </p>
          <div className="bg-[#f4f4f2] border border-black/5 p-4 sm:p-5 rounded-[14px] sm:rounded-[16px]">
            <p className="text-[#1a1c1d] text-[13px] leading-relaxed">
              Thrilled to announce I&apos;ll be speaking at the Global Innovation Summit 2024! 🚀
              Can&apos;t wait to share insights on the future of SocialBadge. #GIS2024 #SocialBadge
            </p>
          </div>
        </div>

        {/* Social Interactive Grid */}
        {/* Social buttons — mobile: circular icon buttons / sm+: pill card layout */}
        <div className="flex justify-center items-end w-full gap-5 mt-1 sm:hidden">
          {/* LinkedIn */}
          <div
            onClick={() => setActiveApp('linkedin')}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ scale: activeApp === 'linkedin' ? 1 : 0.82 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`flex items-center justify-center rounded-full transition-all duration-300 shadow-md ${
                activeApp === 'linkedin' ? 'w-14 h-14 bg-[#ff4f1f]' : 'w-11 h-11 bg-[#0a66c2]'
              }`}
            >
              <Image
                src="https://res.cloudinary.com/dpx9mb1oa/image/upload/v1778208086/linkden_aprwlg.png"
                alt="LinkedIn"
                width={activeApp === 'linkedin' ? 22 : 18}
                height={activeApp === 'linkedin' ? 22 : 18}
                className="object-contain invert brightness-0"
              />
            </motion.div>
            <p
              className={`text-[9px] font-bold uppercase tracking-wider ${activeApp === 'linkedin' ? 'text-[#ff4f1f]' : 'text-gray-400'}`}
            >
              LINKEDIN
            </p>
          </div>

          {/* X / Twitter */}
          <div
            onClick={() => setActiveApp('twitter')}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ scale: activeApp === 'twitter' ? 1 : 0.82 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`flex items-center justify-center rounded-full transition-all duration-300 shadow-md ${
                activeApp === 'twitter' ? 'w-14 h-14 bg-[#ff4f1f]' : 'w-11 h-11 bg-[#ff5c00]'
              }`}
            >
              <Image
                src="https://res.cloudinary.com/dpx9mb1oa/image/upload/v1778208110/twitter_ctppv3.png"
                alt="X / Twitter"
                width={activeApp === 'twitter' ? 22 : 18}
                height={activeApp === 'twitter' ? 22 : 18}
                className="object-contain invert brightness-0"
              />
            </motion.div>
            <p
              className={`text-[9px] font-bold uppercase tracking-wider ${activeApp === 'twitter' ? 'text-[#ff4f1f]' : 'text-[#ff5c00]'}`}
            >
              X / TWITTER
            </p>
          </div>

          {/* Instagram */}
          <div
            onClick={() => setActiveApp('instagram')}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <motion.div
              animate={{ scale: activeApp === 'instagram' ? 1 : 0.82 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`flex items-center justify-center rounded-full transition-all duration-300 shadow-md ${
                activeApp === 'instagram'
                  ? 'w-14 h-14 bg-[#ff4f1f]'
                  : 'w-11 h-11 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'
              }`}
            >
              <Image
                src="https://res.cloudinary.com/dpx9mb1oa/image/upload/v1765716432/icon-instagram_hnn5nq.svg"
                alt="Instagram"
                width={activeApp === 'instagram' ? 22 : 18}
                height={activeApp === 'instagram' ? 22 : 18}
                className="object-contain invert brightness-0"
              />
            </motion.div>
            <p
              className={`text-[9px] font-bold uppercase tracking-wider ${activeApp === 'instagram' ? 'text-[#ff4f1f]' : 'text-gray-400'}`}
            >
              INSTAGRAM
            </p>
          </div>
        </div>

        {/* sm+ pill card layout */}
        <div className="hidden sm:flex justify-between items-center w-full gap-2 mt-2">
          <div
            onClick={() => setActiveApp('linkedin')}
            className={`flex flex-col items-center justify-center gap-3 cursor-pointer flex-1 py-4 rounded-[20px] transition-all duration-300 ${activeApp === 'linkedin' ? 'bg-[#ff4f1f] shadow-md' : 'hover:bg-gray-50'}`}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${activeApp === 'linkedin' ? '' : 'bg-[#0a66c2]'}`}
            >
              <Image
                src="https://res.cloudinary.com/dpx9mb1oa/image/upload/v1778208086/linkden_aprwlg.png"
                alt="LinkedIn"
                width={20}
                height={20}
                className="object-contain invert brightness-0"
              />
            </div>
            <p
              className={`text-[10px] font-bold uppercase tracking-wider ${activeApp === 'linkedin' ? 'text-white' : 'text-gray-400'}`}
            >
              LINKEDIN
            </p>
          </div>
          <div
            onClick={() => setActiveApp('twitter')}
            className={`flex flex-col items-center justify-center gap-3 cursor-pointer flex-1 py-4 rounded-[20px] transition-all duration-300 ${activeApp === 'twitter' ? 'bg-[#ff4f1f] shadow-md' : 'hover:bg-gray-50'}`}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${activeApp === 'twitter' ? '' : 'bg-[#ff5c00]'}`}
            >
              <Image
                src="https://res.cloudinary.com/dpx9mb1oa/image/upload/v1778208110/twitter_ctppv3.png"
                alt="X / Twitter"
                width={20}
                height={20}
                className="object-contain invert brightness-0"
              />
            </div>
            <p
              className={`text-[10px] font-bold uppercase tracking-wider ${activeApp === 'twitter' ? 'text-white' : 'text-[#ff5c00]'}`}
            >
              X / TWITTER
            </p>
          </div>
          <div
            onClick={() => setActiveApp('instagram')}
            className={`flex flex-col items-center justify-center gap-3 cursor-pointer flex-1 py-4 rounded-[20px] transition-all duration-300 ${activeApp === 'instagram' ? 'bg-[#ff4f1f] shadow-md' : 'hover:bg-gray-50'}`}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${activeApp === 'instagram' ? '' : 'bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'}`}
            >
              <Image
                src="https://res.cloudinary.com/dpx9mb1oa/image/upload/v1765716432/icon-instagram_hnn5nq.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="object-contain invert brightness-0"
              />
            </div>
            <p
              className={`text-[10px] font-bold uppercase tracking-wider ${activeApp === 'instagram' ? 'text-white' : 'text-gray-400'}`}
            >
              INSTAGRAM
            </p>
          </div>
        </div>

        <button className="bg-[#ff4f1f] hover:bg-[#e54519] transition-colors text-white w-full py-4 sm:py-4.5 rounded-[14px] sm:rounded-[16px] font-bold text-sm flex items-center justify-center gap-2 group shadow-md">
          <span>Done</span>
          <div className="w-4.5 h-4.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white text-[10px] leading-none mb-px">↗</span>
          </div>
        </button>
      </div>
    </div>
  );
};

// --- Tab 4 UI Component: Comprehensive Analytics ---

const FEATURES = [
  {
    id: '01',
    title: 'Unique badge builder',
    imageUrl: 'https://res.cloudinary.com/dpx9mb1oa/image/upload/v1778206666/tb-1_ovhugn.jpg',
    description:
      'Every keystroke reflects instantly on the canvas. High-fidelity rendering ensures what you see is exactly what they share.',
    isComponent: false,
  },
  {
    id: '02',
    title: 'Real-time live preview',
    imageUrl: 'https://res.cloudinary.com/dpx9mb1oa/image/upload/v1778206666/tb-2_lh6gt4.jpg',
    description:
      'Changes appear instantly as organizers customize names, photos, and layouts, making every badge feel polished before it goes live.',
    isComponent: false,
  },
  {
    id: '03',
    title: 'One-click social sharing',
    component: ShareYourBadge,
    description:
      'Changes appear instantly as organizers customize names, photos, and layouts, making every badge feel polished before it goes live.',
    isComponent: true,
  },
  {
    id: '04',
    title: 'Comprehensive analytics',
    imageUrl:
      'https://res.cloudinary.com/dpx9mb1oa/image/upload/v1778259506/Main_Dashboard_Container_ol638s.png',
    description:
      "Track badge views, shares, clicks, and engagement insights in real time to understand what's driving event visibility.",
    isComponent: false,
  },
];

export default function Feature() {
  const [activeId, setActiveId] = useState('01');
  const activeFeature = FEATURES.find((f) => f.id === activeId) || FEATURES[0];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-360">
        <div className="w-full max-w-328 mx-auto">
          {/* ── Header ── */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#ff4f1f] w-2 h-2 rounded-sm" />
              <span className="text-[11px] text-gray-400 tracking-[1.54px] uppercase font-bold">
                FOR EVENT ORGANIZERS
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
            <div className="flex flex-col w-full min-[900px]:w-[450px] lg:w-148 shrink-0 p-0 items-stretch border-l border-[#e4beb1]/30">
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
            <div
              className={`w-full min-[900px]:flex-1 shrink-0 relative flex items-center min-[900px]:pt-12 ${activeId === '04' ? 'justify-center' : 'justify-center min-[900px]:justify-end lg:justify-center'} overflow-visible`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.97 }}
                  transition={{ duration: 0.45, type: 'spring', stiffness: 200, damping: 22 }}
                  className={`w-full flex ${activeId === '04' ? 'justify-center' : 'justify-center lg:justify-start'}`}
                >
                  {!activeFeature.isComponent ? (
                    activeFeature.id === '04' ? (
                      <Image
                        src={activeFeature.imageUrl as string}
                        alt={activeFeature.title}
                        width={752}
                        height={637}
                        sizes="(max-width: 640px) 100%, (max-width: 1024px) 80%, 752px"
                        className="w-full max-w-188 h-auto rounded-[48px]"
                        priority={false}
                      />
                    ) : (
                      <div className="relative w-full max-w-full sm:max-w-[465.6px] mx-auto aspect-464/488 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.06)]">
                        <Image
                          src={activeFeature.imageUrl as string}
                          alt={activeFeature.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 464px"
                          priority={activeFeature.id === '01'}
                        />
                      </div>
                    )
                  ) : (
                    activeFeature.component && <activeFeature.component />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
