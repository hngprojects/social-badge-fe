'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQ_DATA } from '../../pricing/contants/faq-data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-[16px] lg:px-6 pb-20 max-w-[1090px] mx-auto text-center">
      <h2 className="text-[clamp(28px,3vw,40px)] mb-3 leading-[1.5] font-fraunces">Frequently Asked Questions</h2>

      <div className="text-left w-full max-w-220 mx-auto">
        {FAQ_DATA.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="border-b border-[#f0ece8]">
              <button
                className="group w-full flex justify-between items-center py-4 md:py-6 bg-transparent border-none cursor-pointer gap-4"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span
                  className={`text-[16px] md:text-[24px] font-fraunces font-semibold leading-[26px] text-left transition-colors ${
                    isOpen ? 'text-primary' : 'text-[#111] group-hover:text-primary'
                  }`}
                >
                  {item.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-primary' : 'bg-[#111] group-hover:bg-primary'
                  }`}
                >
                  <span className="relative w-[10px] h-[10px]">
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-white rounded-full" />
                    <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-white rounded-full" />
                  </span>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="text-[14px] md:text-lg max-w-[670px] text-[#767676] leading-[20px] md:leading-[28px] pb-4.5 m-0">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
