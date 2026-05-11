'use client';

import { useState } from 'react';
import { BillingCycle } from './types/pricing';
import PricingToggle from '../components/pricing/pricing-toggle';
import PricingGrid from '../components/pricing/pricing-grid';
import ComparisonTable from '../components/pricing/comparison-table';
import FAQSection from '../components/pricing/faq-section';

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  return (
    <div className="font-sans bg-white text-[#111] ">
      {/* Hero */}
      <section className="px-[16px] lg:px-6 py-18 text-center bg-center bg-cover bg-none md:bg-[url('/assets/pricing/gradientBg.jpg')]">
        <div className="w-full max-w-272.5 mx-auto">
          <h1 className="text-[clamp(28px,5vw,64px)] leading-[29px] md:leading-[64px] tracking-[-2px] mb-2 font-fraunces">
            Create and share <em className="italic text-orange-500">badges</em>
            <br />
            in seconds
          </h1>
          <p className="text-[14px] md:text-[18px] text-[#757575] mb-9">
            Start free and upgrade as your needs grow.
          </p>

          <div>
            <PricingToggle billing={billing} onChange={setBilling} />
            <PricingGrid billing={billing} />
          </div>
        </div>
      </section>

      <ComparisonTable />
      <FAQSection />
    </div>
  );
}
