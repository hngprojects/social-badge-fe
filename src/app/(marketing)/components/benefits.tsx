import React from 'react';

const BENEFITS_DATA = [
  {
    desktopTitle: 'Looks designed',
    desktopDesc: "Polished output that's worth posting — without opening Photoshop or Canva.",
    mobileTitle: 'Your participants become your promoters',
    mobileDesc:
      'When someone has a badge with their name and photo on it, they share it, because they are proud to.',
  },
  {
    desktopTitle: 'Done in 60 seconds',
    desktopDesc: 'Type, upload, share. No accounts, no friction. Mobile-first by design.',
    mobileTitle: 'Get more from those already in the room',
    mobileDesc:
      'When your participants share their badges, their networks see it. Organic growth like that cost nothing.',
  },
  {
    desktopTitle: 'Signals belonging',
    desktopDesc: 'Speaker badges, finalist badges, member badges — built-in social proof.',
    mobileTitle: 'From idea to live badge in under five minutes',
    mobileDesc:
      'No back and forth. No waiting. By the time you finish your tea, your badge campaign is live.',
  },
  {
    mobileTitle: 'No stress for your promoter',
    mobileDesc:
      'They click the link. They add their name and photo. They share. No account. No confusion.',
    desktopTitle: '',
    desktopDesc: '',
  },
];

const BenefitSection = () => {
  return (
    <section className="py-12 px-6 md:py-24  mx-auto font-sans ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* RIGHT SIDE*/}
        <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
          {/* Header */}
          <header className="space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4F11]" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Benefits
              </span>
            </div>

            {/* Mobile Headline */}
            <h2 className="block lg:hidden text-3xl md:text-4xl font-bold text-[#333] leading-tight">
              More <span className="italic text-[#FF4F11]">reach.</span> Zero ad spend. No designer
              needed.
            </h2>

            {/* Desktop Headline */}
            <h2 className="hidden lg:block text-5xl md:text-6xl font-bold text-[#333] leading-tight">
              Why would they <br />{' '}
              <span className="italic text-[#FF4F11] font-serif font-light">share?</span>
            </h2>
          </header>

          {/* Benefits List */}
          <div className="space-y-4 md:space-y-6">
            {BENEFITS_DATA.map((benefit, index) => (
              // If desktopTitle is empty, we only show this on mobile
              <div
                key={index}
                className={`flex items-start gap-4 p-5 md:p-6 rounded-xl border border-gray-100 bg-white shadow-sm ${!benefit.desktopTitle && 'lg:hidden'}`}
              >
                {/* Custom Checkmark Icon */}
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF4F11] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M16.6666 5L7.49992 14.1667L3.33325 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  {/* Responsive Title: Swaps content based on screen size */}
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A]">
                    <span className="lg:hidden">{benefit.mobileTitle}</span>
                    <span className="hidden lg:inline">{benefit.desktopTitle}</span>
                  </h3>

                  {/* Responsive Description: Swaps content based on screen size */}
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    <span className="lg:hidden">{benefit.mobileDesc}</span>
                    <span className="hidden lg:inline">{benefit.desktopDesc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 mt-8 lg:mt-0">
          <div className="relative w-full max-w-[500px]">
            {/* Actual Card Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              {/* Use your Card Image here */}
              <div className="bg-gray-50 aspect-[4/5] lg:aspect-square flex items-center justify-center border border-gray-200">
                <p className="text-gray-400">Card xxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
