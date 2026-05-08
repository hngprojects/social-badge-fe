import Image from 'next/image';

const templates = [
  {
    id: 1,
    title: 'Hack The Future',
    type: 'Hackathon',
    creator: '@techevents',
    location: 'Berlin',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-1.png',
    tag: 'Trending',
    hasShadow: true,
  },
  {
    id: 2,
    title: "Dev Summit '26",
    type: 'Conference',
    creator: '@techevents',
    location: 'Berlin',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-2.png',
    tag: 'Trending',
    hasShadow: true,
  },
  {
    id: 3,
    title: "Dev Summit '26",
    type: 'Conference',
    creator: '@techevents',
    location: 'Berlin',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-3.png',
    tag: 'New',
  },
  {
    id: 4,
    title: "Dev Summit '26",
    type: 'Conference',
    creator: '@techevents',
    location: 'Berlin',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-4.png',
    tag: null,
    hasShadow: true,
  },
  {
    id: 5,
    title: "Dev Summit '26",
    type: 'Conference',
    creator: '@techevents',
    location: 'Berlin',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-5.png',
    tag: null,
  },
  {
    id: 6,
    title: "Dev Summit '26",
    type: 'Conference',
    creator: '@techevents',
    location: 'Berlin',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-6.png',
    tag: null,
  },
  {
    id: 7,
    title: "Dev Summit '26",
    type: 'Conference',
    creator: '@techevents',
    location: 'Berlin',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-7.png',
    tag: 'Trending',
  },
  {
    id: 8,
    title: 'Sabi Girls SQ',
    type: 'Community',
    creator: '@sabigirls',
    location: 'Lagos',
    badgeCount: '4,230',
    image: '/assets/landing-page/template-8.png',
    tag: null,
  },
];

const Templates = () => {
  return (
    <div className="py-6 my-4 relative w-full max-w-360 flex justify-center max-md:items-center flex-col">
      {/* Section category */}
      <div className="text-black/60 uppercase text-[11px] tracking-[1px] flex items-center gap-2">
        <span className="inline-block bg-primary rounded-full w-2 h-2" />
        <span>Templates</span>
      </div>

      {/* Section title */}
      <h1 className="font-semibold text-[#525252] text-[clamp(2rem,6vw,4.5rem)] my-4 text-center md:text-left leading-[0.95]">
        Browse Template <span className="font-fraunces text-primary italic">section</span>
      </h1>

      {/* Cards stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 gap-6 mb-3">
        {templates.map((template, index) => (
          <div
            key={template.id}
            className={`relative h-[420px] flex flex-col rounded-[12px] border border-[#EAEAE6] overflow-hidden ${
              index >= 3 ? 'hidden md:flex' : 'flex'
            }`}
          >
            {/* Tag */}
            {template.tag && (
              <span className="absolute z-10 top-4 font-mono left-4 text-[9px] uppercase tracking-[1px] bg-primary rounded-full py-[4px] px-[10px] text-white">
                {template.tag}
              </span>
            )}

            <div className="bg-[#F0F0E8] relative w-full h-64 shrink-0 overflow-hidden">
              <Image
                src={template.image}
                alt={template.title}
                fill
                className={`object-contain ${template.hasShadow ? 'p-0 pt-2' : 'p-4'}`}
              />
            </div>

            {/* Bottom half */}
            <div className="bg-[#F4F4F2] flex flex-col flex-1 justify-between">
              <div className="flex flex-col gap-1 p-4">
                <span className="uppercase text-[10px] tracking-[1.2px] text-primary">
                  {template.type}
                </span>
                <span className="font-fraunces text-[20px] uppercase font-semibold text-[#0A0A0A]">
                  {template.title}
                </span>
                <span className="text-[#8A8A85] text-[12px]">
                  by {template.creator} · {template.location}
                </span>
              </div>

              <div className="border-t border-[#DCDCD7] p-4 flex justify-between items-center">
                {/* Badge Count */}
                <div className="text-[#8A8A85] uppercase text-[10px] tracking-[1px] flex items-center gap-2">
                  <span className="inline-block bg-primary rounded-full w-2 h-2" />
                  <span>{template.badgeCount} badges made</span>
                </div>

                {/* Link arrow */}
                <span className="flex items-center justify-center w-5 h-5 bg-primary rounded-full">
                  <img
                    src="/assets/landing-page/icons/Vector.svg"
                    alt="Arrow"
                    className="w-2 h-2"
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore button */}
      <button className="flex items-center justify-end gap-2 text-right underline font-medium">
        Explore more
        <img src="/assets/landing-page/icons/Arrow Right.svg" alt="Arrow" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Templates;
