import React from 'react';
import Image from 'next/image';

const BuildYourOwn = () => {
  return (
    <section className="py-16 flex items-center justify-center text-center">
      <div className="flex flex-col items-center gap-5 max-w-360">
        {/* Eyebrow */}
        <div className="text-[#8A8A85] uppercase text-[11px] tracking-[1.5px] flex items-center gap-2 mb-5">
          <span className="inline-block bg-primary rounded-full w-[8px] h-[8px]" />
          <span>Don&apos;t see what you need?</span>
        </div>

        {/* Heading */}
        <h2 className="font-fraunces text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.05] text-[#0A0A0A] max-w-[500px]">
          Build your own <span className="text-primary italic">from scratch.</span>
        </h2>

        {/* Subtext */}
        <p className="text-[#8A8A85] text-[15px]">
          Start with a blank canvas and design something uniquely yours in minutes.
        </p>

        {/* CTA button */}
        <button
          type="button"
          className="mt-2 flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Start Building For Free
          <span className="flex items-center justify-center w-5 h-5 bg-white/50 rounded-full">
            <Image
              width={2}
              height={2}
              src="/assets/landing-page/icons/Vector.svg"
              alt="Arrow"
              className="w-2 h-2"
            />
          </span>
        </button>
      </div>
    </section>
  );
};

export default BuildYourOwn;
