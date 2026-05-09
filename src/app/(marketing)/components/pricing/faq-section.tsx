'use client';

import { useState } from 'react';
import { FAQ_DATA } from '../../pricing/contants/faq-data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="px-6 pb-20 max-w-2xl mx-auto text-center">
      <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-tight mb-9">
        Frequently Asked Question
      </h2>

      <div className="text-left">
        {FAQ_DATA.map((item, i) => (
          <div key={i} className="border-b border-[#f0ece8]">
            <button
              className="w-full flex justify-between items-center py-4.5 bg-transparent border-none cursor-pointer gap-4"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <span
                className={`text-[15px] font-semibold text-left transition-colors ${
                  openIndex === i ? 'text-[#e8501a]' : 'text-[#111]'
                }`}
              >
                {item.question}
              </span>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-light shrink-0 transition-colors"
                style={{ background: openIndex === i ? '#e8501a' : '#111' }}
              >
                {openIndex === i ? '−' : '+'}
              </span>
            </button>

            {openIndex === i && (
              <p className="text-sm text-[#666] leading-relaxed pb-4.5 m-0">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
