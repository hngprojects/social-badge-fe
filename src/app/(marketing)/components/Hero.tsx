import { Button } from '@/components/ui/button';
import ctaArrow from '../../../../public/assets/icons/round-arrow-right-up.svg';
import rightArrow from '../../../../public/assets/icons/round-arrow-right.svg';

import cardsMobile from '../../../../public/assets/landing-page/badge-group.png';
import cardsMd from '../../../../public/assets/landing-page/Hero section cards.png';

import logoFloat from '../../../../public/assets/landing-page/logo-float-low-bg.svg';
import logoBg from '../../../../public/assets/landing-page/landing-logo-bgg.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-365  mx-auto px-4 ">
      <div className="hero-section-container max-w-365 relative md:flex justify-center md:pl-2.5  md:pt-[101px] md:pr-[5px] md:pb-[54px]">
        {/* BG FLOAT LOGO */}
        <Image
          src={logoFloat}
          alt="background image"
          className="absolute -my-4 scale-[1.1] top-8 -left-[42px] "
        />

        <Image
          src={logoBg}
          alt="background image"
          className="absolute  right-[-180px] bottom-10 rotate-13  scale-[1.1]"
        />

        {/* HEADER */}
        <div className="">
          <div className="flex flex-col items-center pt-[29px]  md:items-start  md:max-w-[500px]">
            <div className=" mb-2 gap-2.5 flex items-center md:items-start">
              <div className="bg-[#ff4f1f] rounded-full w-2 h-2"></div>{' '}
              <p className="text-[11px] font-light tracking-[1.54px] ">FOR EVENT ORGANIZERS</p>
            </div>

            <p className="text-[32px] text-center font-bold leading-10 tracking-tight md:text-left  md:text-[40px] ">
              Turn attendees into your{' '}
              <span className="text-[#fa5424] italic font-fraunces">marketing </span>team.
            </p>
            <div className="text-muted-foreground text-[12px] text-center mt-2 mb-[22px] md:text-left">
              <p>Design a branded badge once. Watch your participants share it everywhere.</p>
              <p>Track every click back to your event page.</p>
            </div>

            <div className="w-full flex-col flex items-center md:flex-row gap-3.5 ">
              <Button className="w-full font-light py-2 md:w-fit" asChild>
                <Link href="/">
                  Create Your First Badge{' '}
                  <Image src={ctaArrow} alt="arrow" width="12" height="12" />
                </Link>
              </Button>

              <button className="py-2">
                <Link className="flex gap-1 w-full" href="/">
                  <p> View Templates</p>{' '}
                  <Image src={rightArrow} alt="right arrow" width={20} height={20} />
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="grid place-items-center">
          <div className="w-[370px] my-[-22px]">
            <Image src={cardsMobile} className="md:hidden" alt="badge preview" />
            <Image src={cardsMd} className="hidden md:block" alt="badge preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
