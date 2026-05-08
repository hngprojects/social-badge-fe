'use client';
import { useState, useRef } from 'react';
import BadgePreview from './try-it-now/BadgePreview';
import BadgeForm from './try-it-now/BadgeForm';
import { BadgeState } from '../types/badge';

const INITIAL_STATE: BadgeState = {
  photo: null,
  photoPreview: '',
  name: '',
  role: '',
  event: '',
  hashtag: '',
  style: 'classic',
  badgeColor: '#E8441A',
  textColor: '#ffffff',
};

export default function TryItNow() {
  const [badge, setBadge] = useState<BadgeState>(INITIAL_STATE);
  const previewRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof BadgeState>(key: K, value: BadgeState[K]) => {
    setBadge((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="w-full max-w-300 mx-auto md:h-[944px] text-center md:text-left">
      {/* Label */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-orange-600 rounded "></div>
        <p className="text-black/60 text-xs font-normal font-['DM_Sans'] uppercase leading-4 tracking-wider text-center md:text-left">
          Try it now
        </p>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
        Make one. <span className="italic font-fraunces text-[#FF4F1F] ">right now.</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-start mt-17.5 md:h-[767px]">
        <div className="w-full md:[576px] h-full">
          <div className="flex items-center justify-center bg-neutral-200 rounded-2xl p-8 md:p-12 min-h-75 md:h-full shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.12)]">
            <BadgePreview ref={previewRef} badge={badge} />
          </div>
        </div>
        <div className="w-full h-full bg-white py-6 px-4 rounded-2xl ">
          <BadgeForm badge={badge} update={update} previewRef={previewRef} />
        </div>
      </div>
    </section>
  );
}
