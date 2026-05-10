import Image from 'next/image';

const STATS = [
  { value: '1,240', label: 'Templates' },
  { value: '48k', label: 'Badges Made' },
  { value: '3.2k', label: 'Organizers' },
];

const ExploreHero = () => {
  return (
    <section className="relative py-16  overflow-hidden max-w-360 mx-auto px-4 md:px-6 sm:px-6 lg:px-8">
      <Image
        src="/assets/landing-page/social-badge-icon-1.png"
        alt=""
        width={400}
        height={400}
        className="absolute -left-16 top-0 pointer-events-none select-none"
        aria-hidden="true"
      />

      <Image
        src="/assets/landing-page/social-badge-icon-2.png"
        alt=""
        width={567}
        height={286}
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Text + Search + Stats */}
        <div className="flex flex-col gap-6">
          <h1 className="font-fraunces text-[96px] text-[#525252] leading-none tracking-[-0.65px] font-semibold">
            Explore <span className="text-[#fa5424] italic block">templates.</span>
          </h1>

          <p className="max-w-147.5 text-[#5B4137]">
            Browse hundreds of badge templates made by organizers just like you. One click to make
            it yours.
          </p>

          {/* Search */}
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 max-w-113.75">
            <input
              type="text"
              placeholder="Search templates, events, styles"
              className="flex-1 bg-white font-medium outline-none text-[14px] placeholder:text-[#0A0A0A99]"
            />
            <button
              type="button"
              className="bg-primary text-[#EEEEEE] text-[16px] font-medium px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10 pt-2">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-[34px] font-semibold font-fraunces text-[#5F5F5F]">
                  {value}
                </span>
                <span className="text-[10px] uppercase tracking-[1.2px] text-[#646464]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Badge image */}
        <div className="flex justify-end">
          <Image
            src="/assets/landing-page/Hero section cards.png"
            alt="Badge template previews"
            width={690}
            height={577}
            className="w-full max-w-172.5 h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreHero;
