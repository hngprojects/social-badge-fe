import Image from 'next/image';
import starIcon from '../../../../public/assets/icons/star-icon.svg';
import './Trusted-by.css';

export default function TrustedBy() {
  const trustedBy = [
    'DEVCON BEERLIN',
    'LAGOS UX WEEK',
    'HACK THE BAY',
    'THE AI SUMMIT',
    'FOUNDERSHQ',
    'FRONTEND NATION ',
  ];

  return (
    <div className=" overflow-hidden w-full mx-auto bg-[#2B2A2A]  py-3 ">
      <div className="marquee flex gap-8 text-white/50 whitespace-nowrap w-max">
        {[...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy].map((item, index) => (
          <div className="w-fit flex gap-6 text-[10px] font-bold" key={index}>
            <p className="trusted-text">{item}</p>
            <Image src={starIcon} width={8} height={8} alt="star-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
