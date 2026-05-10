import Image from 'next/image';
import starIcon from '../../../../public/assets/icons/star-icon.svg';
import './trusted-by.css';

export default function TrustedBy() {
  const trustedBy = [
    'DEVCON BERLIN',
    'LAGOS UX WEEK',
    'HACK THE BAY',
    'THE AI SUMMIT',
    'FOUNDERSHQ',
    'FRONTEND NATION ',
  ];

  return (
    <section className="text-[10px] bg-[#2B2A2A] py-3 lg:text-[24px] lg:py-6 overflow-hidden">
      <div className="marquee flex gap-8 text-white/50 whitespace-nowrap w-max">
        {[...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy].map((item, index) => (
          <div className="w-fit flex gap-6  font-bold items-center" key={index}>
            <p className="trusted-text">{item}</p>
            <Image src={starIcon} alt="star-icon" className="w-2 h-2 lg:w-4.5 " />
          </div>
        ))}
      </div>
    </section>
  );
}
