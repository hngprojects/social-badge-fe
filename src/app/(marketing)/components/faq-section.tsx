'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus, X } from 'lucide-react';

const faqData = [
  {
    id: 'item-1',
    question: 'How long to set up a badge?',
    answer:
      "For a brand-new template from a starter, most organizers ship in under 10 minutes. From scratch, give yourself 20–30 if you're particular about typography. Participants generate their badge in well under a minute.",
  },
  {
    id: 'item-2',
    question: 'Can I edit a process by email?',
    answer:
      'Yes. You can edit processes, templates, and submissions directly through our email integration system.',
  },
  {
    id: 'item-3',
    question: 'What about content moderation?',
    answer:
      'Our content moderation tools allow you to review, approve, or reject submissions with customizable workflows.',
  },
  {
    id: 'item-4',
    question: 'Can I use my own fonts and colors?',
    answer:
      'Absolutely. You have full control over branding with custom fonts, colors, and design elements.',
  },
  {
    id: 'item-5',
    question: 'Will it embed on my event page?',
    answer: 'Yes. Our embed code integrates seamlessly with any event page or website platform.',
  },
  {
    id: 'item-6',
    question: 'What happens if I downgrade?',
    answer:
      'Your data remains safe. You can upgrade or downgrade plans anytime without losing access to your badges and submissions.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string>('');

  return (
    <section className="w-full md:max-w-5xl mx-auto py-10 px-2 md:py-20 md:px-4 rouneded-none">
      <div className="mb-10 md:mb-20 text-center">
        <div className="font-sans tracking-widest text-muted-foreground text-[11px] items-center flex justify-center mb-6">
          <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 text-sm" />
          <span className="hidden md:block">FAQS</span>
          <span className="block md:hidden">FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <div className="font-fraunces justify-center text-center leading-18.5 text-[clamp(26px,calc(5vw+8px),78px)] flex flex-row md:flex-col gap-2 px-4">
          <span className="block md:hidden">All</span>
          <p className="font-semibold hidden md:block">Questions,</p>
          <p className="font-semibold md:hidden">questions,</p>
          <h2 className="font-medium italic  text-primary">answered.</h2>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="border-none"
        value={openId}
        onValueChange={setOpenId}
      >
        {faqData.map((faq, index) => (
          <div key={faq.id} className={`${index === 0 ? 'border-t-2' : ''} border-b-2`}>
            <AccordionItem value={faq.id} className="border-none pb-1 pl-1 md:pb-2 md:pl-5">
              <AccordionTrigger className="hover:no-underline py-4 md:py-6 group data-[state=open]:[&>svg]:hidden data-[state=closed]:[&>svg]:hidden cursor-pointer data-[state=open]:bg-none">
                <div className="flex items-center justify-between w-full gap-2 md:gap-4">
                  <span
                    className={`text-left text-lg md:text-[24px] flex-1 font-bold font-fraunces ${
                      openId === faq.id ? 'text-primary' : 'text-[0A0A0A] hover:text-primary'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* toggle icons*/}
                  <div
                    className={`flex h-8 w-8 md:h-10 md:w-10 items-center text-white justify-center rounded-full border shrink-0 transition-all duration-300 ${
                      openId === faq.id
                        ? 'bg-primary border-primary'
                        : 'bg-black border-gray-300 group-hover:bg-primary group-hover:border-primary'
                    }`}
                  >
                    <Plus
                      className={`h-4 w-4 transition-all duration-300 ${openId === faq.id ? 'hidden' : 'block'}`}
                    />
                    <X
                      className={`h-4 w-4 transition-all duration-300 ${openId === faq.id ? 'block' : 'hidden'}`}
                    />
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="bg-none font-sans text-sm md:text-[16px] leading-relaxed text-[#121217] max-w-3xl ">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </section>
  );
}
