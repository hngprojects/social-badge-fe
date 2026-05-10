import Image from 'next/image';

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
      'No back and forth. No waiting. By the time you finish your tea, your badge campaign is live and your link is ready to share. It’s that simple.',
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
    <section className="bg-[#F9F9F9]">
      <div className="py-12 md:px-6 md:py-24 max-w-360 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* RIGHT SIDE*/}
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
            {/* Header */}
            <header className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4F11]" />
                <span className="text-xs  uppercase tracking-[1.54px] text-[#7A7A7A] ">
                  Benefits
                </span>
              </div>

              {/* Mobile Headline */}
              <h2 className="block lg:hidden text-3xl md:text-4xl font-bold text-[#525252] leading-tight font sans">
                More <span className="italic text-[#FF4F11]  font-fraunces font-bold">reach.</span>{' '}
                Zero ad spend. No designer needed.
              </h2>

              {/* Desktop Headline */}
              <h2 className="hidden lg:block text-[72px] md:text-6xl font-bold text-[#525252] leading-tight font sans">
                Why would they <br />{' '}
                <span className="italic text-[#FF4F11]  font-fraunces font-bold">share?</span>
              </h2>
            </header>

            {/* Benefits List */}
            <div className="space-y-4 md:space-y-6  ">
              {BENEFITS_DATA.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-2 md:p-6 rounded-xl border border-[#EAEAE6] bg-white  ${!benefit.desktopTitle && 'lg:hidden'}`}
                >
                  <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF4F11] flex items-center justify-center">
                    <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF4F11] flex items-center justify-center shadow-lg shadow-orange-100">
                      <div className="relative w-6 h-6 md:w-7 md:h-7">
                        <Image
                          src="/assets/icons/Icon-Button.svg"
                          alt="Checkmark"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#0A0A0A] font-fraunces">
                      <span className="lg:hidden">{benefit.mobileTitle}</span>
                      <span className="hidden lg:inline">{benefit.desktopTitle}</span>
                    </h3>
                    <p className="text-[#797074] text-sm md:text-base leading-relaxed font-sans">
                      <span className="lg:hidden">{benefit.mobileDesc}</span>
                      <span className="hidden lg:inline">{benefit.desktopDesc}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEFT SIDE: Back to the original single container */}
          <div className="w-full md:w-1/2 flex lg:justify-center order-2 lg:order-1 -mt-4 md:mt-0 lg:mt-30">
            <div className="relative w-full max-w-160">
              <div className="relative rounded-3xl transition-transform hover:scale-[1.02] duration-500 h-80 md:h-auto md:aspect-square p-1 md:p-6 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/landing-page/benefit-cards.png"
                    alt="Social badges showing user profiles"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
