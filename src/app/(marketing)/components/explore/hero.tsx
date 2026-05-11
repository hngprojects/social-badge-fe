import Image from 'next/image';

const STATS = [
  { value: '1,240', label: 'Templates' },
  { value: '48k', label: 'Badges Made' },
  { value: '3.2k', label: 'Organizers' },
];

const ExploreHero = () => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="relative max-w-[1376px] mx-auto overflow-hidden py-10 md:py-16 px-[16px]  md:px-[24px] lg:h-[600px]">
        <Image
          src="/assets/landing-page/social-badge-icon-1.png"
          alt=""
          width={400}
          height={400}
          className="absolute -left-16 top-0 pointer-events-none select-none w-auto h-auto"
          aria-hidden="true"
          loading="eager"
        />
        <Image
          src="/assets/landing-page/social-badge-icon-2.png"
          alt=""
          width={400}
          height={400}
          className="absolute right-0 bottom-0 pointer-events-none select-none w-auto h-auto"
          aria-hidden="true"
          loading="eager"
        />

        <div className="max-w-[1376px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left: Text + Search + Stats */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="font-fraunces text-[clamp(32px,8vw,96px)] text-[#525252] leading-[1] tracking-[-0.65px] font-semibold">
              Explore <span className="text-primary italic">templates.</span>
            </h1>

            <p className="w-full max-w-[590px] mx-auto lg:mx-0 text-[#5B4137] text-[clamp(12px,1.2vw,16px)]">
              Browse hundreds of badge templates made by organizers just like you. One click to make
              it yours.
            </p>

            {/* Search */}
            <div className="flex items-center justify-center lg:justify-start z-10 gap-2 bg-white rounded-full w-full py-1 md:py-2 max-w-[455px] mx-auto lg:mx-0 border-white border-1">
              <input
                type="text"
                placeholder="Search templates, events, styles"
                className="flex-1 bg-white font-medium ml-2 md:ml-5 outline-none text-[12px] md:text-[14px] placeholder:text-[#0A0A0A99]"
              />
              <button
                type="button"
                className="bg-primary text-[#EEEEEE] text-[14px] md:text-[16px] font-medium px-5 py-1 mr-1 md:mr-2 lg:mr-2 md:py-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                Search
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-7 md:gap-10 pt-2">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[24px] leading-[29px] md:text-[34px] font-semibold font-fraunces text-[#5F5F5F]">
                    {value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[1.2px] text-[#646464]/45">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Badge image */}
          <div className="relative justify-center min-[1150px]:min-h-[600px]">
            <Image
              src="/assets/landing-page/Group 17.png"
              alt="Badge template previews"
              width={750}
              height={600}
              className="absolute w-[690px] hidden min-[1150px]:flex max-w-none h-auto right-0 top-[30px] shrink-0"
              priority
            />
            <div className="flex justify-center min-[1150px]:hidden">
              <Image
                src="/assets/landing-page/Group 17 (2).png"
                alt="Badge template previews"
                width={690}
                height={600}
                className="object-contain w-[690px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreHero;
