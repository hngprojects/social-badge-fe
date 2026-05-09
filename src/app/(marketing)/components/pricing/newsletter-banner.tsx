'use client';

import { useState } from 'react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-[#e8501a] px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-7 items-center justify-between">
        <div>
          <p className="text-base font-bold text-white mb-1.5 max-w-sm">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <p className="text-[13px] text-white/75 m-0 max-w-sm">
            Stay ahead with the latest updates, insights, and events from Social Badge.
          </p>
        </div>

        <div className="flex gap-2.5 flex-wrap">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full border-none text-sm min-w-55 outline-none"
          />
          <button className="px-6 py-3 rounded-full bg-[#111] text-white text-sm font-semibold cursor-pointer border-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
