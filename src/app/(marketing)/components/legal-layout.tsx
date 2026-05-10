import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logoFloat from '../../../../public/assets/landing-page/logo-float-low-bg.svg';
import logoBg from '../../../../public/assets/landing-page/landing-logo-bgg.svg';

interface LegalLayoutProps {
  title: string;
  titleHighlight: string;
  date: string;
  summary: React.ReactNode;
  toc: Array<{ id: string; title: string }>;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  titleHighlight,
  date,
  summary,
  toc,
  children,
}: LegalLayoutProps) {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-[#fff8f6] dark:bg-background py-16 md:py-24 lg:py-32">
        {/* Background Images */}
        <Image
          src={logoFloat}
          alt="background shape"
          width={400}
          height={400}
          className="absolute scale-[0.5] md:scale-[1.1] -top-34 -left-24 md:-my-4 md:top-8 md:-left-10.5 lg:-top-2.5 lg:-left-9.5 opacity-60"
        />
        <Image
          src={logoBg}
          alt="background shape"
          width={400}
          height={400}
          className="absolute scale-[0.7] md:scale-[1.1] rotate-13 -bottom-80 -right-40 md:bottom-10 md:-right-45 lg:rotate-[-15deg] lg:-bottom-57.5 lg:-right-35 opacity-60"
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pt-12 md:pt-16 pb-8 md:pb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[clamp(40px,6vw,75px)] font-semibold tracking-[-0.65px] leading-tight text-foreground flex flex-col">
            <span>{title}</span>
            <span className="font-fraunces text-primary italic">{titleHighlight}</span>
          </h1>
          <p className="mt-4 text-sm md:text-[15px] font-medium text-muted-foreground">
            Effective: {date}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 flex flex-col gap-6">
              <h3 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                CONTENTS
              </h3>
              <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
                {toc.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className="hover:text-foreground transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 max-w-3xl flex flex-col gap-12">
            {/* Summary Box */}
            <div className="rounded-r-lg border-l-4 border-primary bg-secondary p-6 text-sm text-secondary-foreground">
              {summary}
            </div>

            {/* Policy Content */}
            <div className="text-sm md:text-[15px] leading-relaxed text-muted-foreground flex flex-col gap-10 pb-12 [&>section:not(:first-child)]:border-t [&>section:not(:first-child)]:border-[color:var(--border)] [&>section:not(:first-child)]:pt-10">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
