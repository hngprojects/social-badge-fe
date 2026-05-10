import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-360 mx-auto px-4 md:px-6 sm:px-6 lg:px-8  overflow-hidden  relative md:flex md:py-18">
        {/* BG FLOAT LOGO */}
        <Image
          src="/assets/landing-page/logo-float-low-bg.svg"
          alt="background image"
          width={400}
          height={400}
          style={{ width: 'auto', height: 'auto' }}
          className="absolute -my-4 scale-[1.1] top-8 -left-10.5 lg:-top-2.5 lg:-left-9.5"
        />

        <Image
          src="/assets/landing-page/landing-logo-bgg.svg"
          alt="background image"
          width={400}
          height={400}
          style={{ width: 'auto', height: 'auto' }}
          className="absolute -right-45 bottom-10 rotate-13 scale-[1.1] lg:rotate-[-15deg] lg:-bottom-57.5 lg:-right-35"
        />

        {/* HEADER */}
        <div className="flex flex-1 flex-col items-center pt-7.25 lg:max-w-150  md:items-start">
          <div className=" mb-2 gap-2.5 flex items-center">
            <div className="bg-[#ff4f1f] rounded-full w-2 h-2"> </div>{' '}
            <p className="text-[11px] font-light tracking-[1.54px] ">FOR EVENT ORGANIZERS</p>
          </div>

          <h1 className="text-[clamp(32px,6vw,75px)] font-semibold text-center leading-12.5 text-pretty tracking-[-0.65px] md:text-left  lg:leading-18.5 lg:tracking-[-0.65px] lg:mt-3">
            Turn attendees into your{' '}
            <span className="text-[#fa5424] italic font-fraunces">marketing </span>team.
          </h1>
          <div className="text-muted-foreground text-[12px] text-center mt-2 mb-5.5 md:text-left lg:mb-32px">
            <p>Design a branded badge once. Watch your participants share it everywhere.</p>
            <p>Track every click back to your event page.</p>
          </div>

          {/* CTA BTNS */}
          <div className="w-full flex-col flex items-center md:flex-row gap-3.5 ">
            <Button className="w-full font-light py-4! md:w-fit lg:py-6!" asChild>
              <Link href="/">
                Create Your First Badge{' '}
                <Image
                  src="/assets/icons/round-arrow-right-up.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                />
              </Link>
            </Button>

            <Link
              href="/login"
              className={cn(
                'px-2 py-2 md:px-2 flex gap-1 text-base font-medium rounded-lg',
                'text-foreground hover:bg-muted',
                'transition-colors duration-150',
              )}
            >
              <span>View Templates</span>
              <Image
                className="md:hidden"
                src="/assets/icons/round-arrow-right.svg"
                alt="right arrow"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>

        {/* LANDING IMAGE */}
        <div className="grid flex-1  place-items-center">
          <div className="w-80 sm:w-92.5 h-auto -my-5.5 md:my:0 lg:w-full lg:flex-1">
            <Image
              src="/assets/landing-page/badge-group.png"
              width={320}
              height={400}
              loading="eager"
              className="-ml-1 md:hidden"
              alt="badge preview"
            />{' '}
            <Image
              src="/assets/landing-page/Hero section cards.png"
              width={600}
              height={500}
              loading="eager"
              style={{ width: '100%', height: 'auto' }}
              className="hidden md:block"
              alt="badge preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
