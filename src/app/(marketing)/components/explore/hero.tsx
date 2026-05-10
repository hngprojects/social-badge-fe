import Image from 'next/image';

const STATS = [
  { value: '1,240', label: 'Templates' },
  { value: '48k', label: 'Badges Made' },
  { value: '3.2k', label: 'Organizers' },
];

const ExploreHero = () => {
  return (
    <section className="relative overflow-hidden py-16 h-[600px]">
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
          <h1 className="font-fraunces text-[96px] text=[#525252] leading-[1] tracking-[-0.65px] font-semibold">
            Explore <span className="text-primary italic block">templates.</span>
          </h1>

          <p className="max-w-[590px] text-[#5B4137]">
            Browse hundreds of badge templates made by organizers just like you. One click to make
            it yours.
          </p>

          {/* Search */}
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 max-w-[455px]">
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
        <div className="flex justify-end absolute right-25 top-15">
          <Image
            src="/assets/landing-page/Group 17.png"
            alt="Badge template previews"
            width={690}
            height={577}
            className="object-contain w-[690px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreHero;
