'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { QrCode, Check, TrendingUp, Users } from 'lucide-react';

// --- Tab 3 UI Component: Share Your Badge ---
const ShareYourBadge = () => {
  const [copied, setCopied] = useState(false);
  const [activeApp, setActiveApp] = useState('twitter');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white flex flex-col items-center gap-[24px] p-[32px] w-full max-w-[465.6px] mx-auto shadow-[0px_20px_40px_rgba(0,0,0,0.06)] relative border border-gray-100 rounded-[32px]">
      <div className="flex flex-col gap-1 w-full text-center">
        <h3 className="font-fraunces font-bold text-[#0a0a0a] text-[28px] leading-tight">
          Share your Badge
        </h3>
        <p className="text-[#8a8a85] text-sm">Share it with attendees or embed it anywhere.</p>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {/* Link & Copy */}
        <div className="flex items-center gap-2">
          <div className="bg-[#f4f4f2] border border-black/5 flex-1 px-4 py-[14px] rounded-xl overflow-hidden">
            <p className="font-mono text-[#0a0a0a] text-xs truncate">badge.build/b/devcon-2026</p>
          </div>
          <button
            onClick={handleCopy}
            className="bg-[#0a0a0a] hover:bg-[#333] transition-colors flex items-center justify-center py-[14px] px-6 rounded-xl text-white font-bold text-[10px] tracking-widest uppercase shrink-0"
          >
            {copied ? <Check size={14} /> : 'COPY'}
          </button>
        </div>

        {/* QR Code Placeholder */}
        <div className="bg-[#eaeae6] border border-black/5 flex flex-col items-center justify-center p-6 rounded-[24px] w-[120px] mx-auto aspect-square gap-3 hover:scale-105 transition-transform cursor-pointer">
          <QrCode className="text-[#8a8a85]" size={36} />
          <p className="font-mono text-[#8a8a85] text-[9px] tracking-[1.5px] uppercase font-bold">
            QR CODE
          </p>
        </div>

        {/* Caption */}
        <div className="flex flex-col gap-2 w-full">
          <p className="font-mono text-[#8a8a85] text-[9px] tracking-[1.5px] uppercase font-bold">
            CAPTION
          </p>
          <div className="bg-[#f4f4f2] border border-black/5 p-5 rounded-[16px]">
            <p className="text-[#1a1c1d] text-[13px] leading-relaxed">
              Thrilled to announce I'll be speaking at the Global Innovation Summit 2024! 🚀 Can't
              wait to share insights on the future of SocialBadge. #GIS2024 #SocialBadge
            </p>
          </div>
        </div>

        {/* Social Interactive Grid */}
        <div className="flex justify-between items-center w-full gap-2 mt-2">
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
              className={`flex items-center justify-center w-12 h-12 rounded-full ${activeApp === 'instagram' ? '' : 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'}`}
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

        <button className="bg-[#ff4f1f] hover:bg-[#e54519] transition-colors text-white w-full py-[18px] rounded-[16px] font-bold text-sm flex items-center justify-center gap-2 group shadow-md">
          <span>Done</span>
          <div className="w-[18px] h-[18px] bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white text-[10px] leading-none mb-[1px]">↗</span>
          </div>
        </button>
      </div>
    </div>
  );
};

// --- Tab 4 UI Component: Comprehensive Analytics ---
const AnalyticsGraph = () => (
  <div className="w-full relative h-[180px] z-0">
    <svg
      viewBox="0 0 400 150"
      className="w-full h-full overflow-visible drop-shadow-md"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff4f1f" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff4f1f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Fill Area */}
      <path
        d="M 0 120 C 100 110, 150 70, 200 60 C 260 48, 300 60, 400 20 L 400 150 L 0 150 Z"
        fill="url(#gradientArea)"
      />
      {/* Line */}
      <path
        d="M 0 120 C 100 110, 150 70, 200 60 C 260 48, 300 60, 400 20"
        fill="none"
        stroke="#ff4f1f"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Points */}
      <circle
        cx="100"
        cy="98"
        r="4.5"
        fill="#ff4f1f"
        stroke="white"
        strokeWidth="1.5"
        className="drop-shadow-sm"
      />
      <circle
        cx="200"
        cy="60"
        r="4.5"
        fill="#ff4f1f"
        stroke="white"
        strokeWidth="1.5"
        className="drop-shadow-sm"
      />
      <circle
        cx="300"
        cy="52"
        r="4.5"
        fill="#ff4f1f"
        stroke="white"
        strokeWidth="1.5"
        className="drop-shadow-sm"
      />
      <circle
        cx="400"
        cy="20"
        r="4.5"
        fill="#ff4f1f"
        stroke="white"
        strokeWidth="1.5"
        className="drop-shadow-sm"
      />
    </svg>
  </div>
);

const ComprehensiveAnalytics = () => {
  return (
    <div className="w-full lg:w-[677.34px] flex flex-col items-start gap-[10px] p-[10px] relative">
      <div className="w-full rounded-[32px] p-10 shadow-[0px_20px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col bg-gradient-to-br from-[#f2efee] to-[#e4e1e3] border border-white/50 relative">
        {/* Header */}
        <div className="mb-2 z-10 relative">
          <p className="font-mono text-[10px] font-bold text-[#8e2d0b]/40 tracking-[1.5px] uppercase mb-1">
            LIVE CAMPAIGN DATA
          </p>
          <h3 className="font-bold text-[36px] text-[#1a1c1d] tracking-tight leading-none mt-2">
            Community Impact
          </h3>
        </div>

        {/* Decorative Glows */}
        <div className="absolute top-[-10%] right-[-20%] w-[350px] h-[350px] bg-[#ff4f1f]/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[400px] h-[400px] bg-[#6228d7]/5 blur-[80px] rounded-full pointer-events-none" />

        {/* Graph Center */}
        <div className="w-full h-[180px] relative mt-4 -mx-4 z-0">
          <AnalyticsGraph />
        </div>

        {/* Bottom Stats & Feeds */}
        <div className="flex flex-row justify-between w-full mt-4 gap-6 z-10">
          {/* Left: Stats Grid */}
          <div className="flex gap-4 flex-1">
            <div className="bg-white rounded-[24px] p-6 flex flex-col flex-1 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[8px] h-[1px] bg-gray-300" />
                <p className="font-mono text-[9px] font-bold tracking-[1.5px] uppercase text-gray-400">
                  TOTAL SHARES
                </p>
              </div>
              <p className="font-bold text-[42px] leading-none text-gray-900 tracking-tight mt-1">
                1,203
              </p>
              <div className="bg-[#e2f9e5] text-[#169d2e] text-[9px] font-bold px-3 py-1.5 rounded-full self-start flex items-center mt-auto">
                ↑ +8% this week
              </div>
            </div>
            <div className="bg-white rounded-[24px] p-6 flex flex-col flex-1 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[8px] h-[1px] bg-gray-300" />
                <p className="font-mono text-[9px] font-bold tracking-[1.5px] uppercase text-gray-400">
                  TOTAL GENERATIONS
                </p>
              </div>
              <p className="font-bold text-[42px] leading-none text-gray-900 tracking-tight mt-1">
                2,847
              </p>
              <div className="bg-[#e2f9e5] text-[#169d2e] text-[9px] font-bold px-3 py-1.5 rounded-full self-start flex items-center mt-auto">
                ↑ +12% this week
              </div>
            </div>
          </div>

          {/* Right: Feeds List */}
          <div className="flex flex-col gap-3 w-[260px] shrink-0">
            <div className="bg-white/70 backdrop-blur-md rounded-[16px] p-3 flex items-center gap-4 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-white/60">
              <div className="bg-[#eef5fc] p-2.5 rounded-full text-[#0a66c2]">
                <Users size={16} fill="currentColor" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-[12px] font-bold text-gray-900">@alex_dev</p>
                  <span className="text-[10px] font-medium text-gray-400">2m</span>
                </div>
                <p className="text-[11px] text-gray-500 font-medium">Shared to Twitter</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-[16px] p-3 flex items-center gap-4 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-white/60">
              <div className="bg-[#f5eeff] p-2.5 rounded-full text-[#9333ea] flex items-center justify-center">
                <span className="text-[16px] leading-none">🎯</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-[12px] font-bold text-gray-900">New Ticket Sale</p>
                </div>
                <p className="text-[11px] text-gray-500 font-medium">Via LinkedIn Badge</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-[16px] p-3 flex items-center gap-4 shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-white/60">
              <div className="bg-[#fceee8] p-2.5 rounded-full text-[#ff4f1f]">
                <TrendingUp size={16} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-[12px] font-bold text-gray-900">Influencer Reach</p>
                  <span className="text-[10px] font-medium text-gray-400">12m</span>
                </div>
                <p className="text-[11px] text-gray-500 font-medium">+50k views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. DATA SCHEMA
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
    component: ComprehensiveAnalytics,
    description:
      "Track badge views, shares, clicks, and engagement insights in real time to understand what's driving event visibility.",
    isComponent: true,
  },
];

export default function FeatureShowcase() {
  const [activeId, setActiveId] = useState('01');
  const activeFeature = FEATURES.find((f) => f.id === activeId) || FEATURES[0];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#fafafa] overflow-hidden">
      <div className="container mx-auto px-4 md:px-[64px] max-w-[1440px]">
        <div className="w-full max-w-[1312px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12 lg:mb-[64px] max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="bg-[#ff4f1f] w-2 h-2 rounded-sm" />
              <span className="text-[11px] text-gray-400 tracking-[1.54px] uppercase font-bold">
                FOR EVENT ORGANIZERS
              </span>
            </div>
            <h2 className="font-fraunces font-semibold text-4xl md:text-5xl lg:text-[72px] leading-[74px] tracking-[-0.65px] text-[#525252]">
              Pre-event hype <br className="hidden md:block" />
              shouldn't be <span className="italic text-[#ff4f1f]">this</span> hard.
            </h2>
          </div>

          {/* Content Layout */}
          <div
            className={`flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 w-full transition-all duration-500 ${
              activeId === '02' ? 'lg:items-center' : 'lg:items-start'
            }`}
          >
            {/* LEFT COLUMN: Vertical Menu */}
            <div className="flex flex-col w-full lg:w-[592px] shrink-0 p-0 items-stretch border-l border-[#e4beb1]/30">
              {FEATURES.map((feature) => {
                const isActive = activeId === feature.id;
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveId(feature.id)}
                    className={`relative flex flex-col items-start justify-start w-full py-8 gap-4 cursor-pointer transition-all duration-300 ease-in-out group ${
                      isActive
                        ? 'z-10 pl-[36px] pr-8'
                        : 'border-b border-gray-100 hover:bg-white/40 px-8'
                    }`}
                  >
                    {/* Active Background & Wrap-around Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-white border border-[#ff4f1f]/30 border-l-[4px] border-l-[#ff4f1f] rounded-3xl shadow-sm pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Header Row */}
                    <div className="flex items-center gap-4 w-full relative z-10">
                      <span
                        className={`font-bold text-sm tracking-wider transition-colors ${isActive ? 'text-[#ff4f1f]' : 'text-gray-400 group-hover:text-[#ff4f1f]/60'}`}
                      >
                        {feature.id}
                      </span>
                      <div
                        className={`h-[2px] w-10 transition-colors ${isActive ? 'bg-[#ff4f1f]' : 'bg-gray-200 group-hover:bg-[#ff4f1f]/30'}`}
                      />
                      {isActive && (
                        <div className="w-[6px] h-[6px] rounded-full bg-[#ff4f1f] shrink-0" />
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-fraunces text-left transition-colors mt-2 relative z-10 ${isActive ? 'text-2xl lg:text-[32px] font-bold text-[#8e2d0b] leading-tight' : 'text-lg lg:text-[18px] font-normal text-[#5b4137] leading-relaxed group-hover:text-[#8e2d0b]'}`}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden w-full text-left relative z-10"
                        >
                          <p className="text-[#5b4137] text-base leading-[24px] mt-2">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: The Visual Stage */}
            <div className="w-full lg:flex-1 shrink-0 relative flex items-center justify-start lg:justify-center overflow-visible">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                  className="w-full flex justify-center lg:justify-start"
                >
                  {!activeFeature.isComponent ? (
                    <div className="bg-white p-[32px] rounded-[32px] shadow-[0px_20px_40px_rgba(0,0,0,0.06)] w-full max-w-[465.6px] mx-auto flex flex-col items-center">
                      <div className="relative w-full aspect-[464/488] rounded-[24px] overflow-hidden">
                        <Image
                          src={activeFeature.imageUrl as string}
                          alt={activeFeature.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 464px"
                          priority={activeFeature.id === '01'}
                        />
                      </div>
                    </div>
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
