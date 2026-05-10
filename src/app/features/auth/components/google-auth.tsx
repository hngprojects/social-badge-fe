import { Icons } from '@/components/ui/icons';
import React from 'react';

export const GoogleAuth = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 ">
        <span className="h-px flex-1 bg-[#D1D1DB]" />

        <p className="text-[#978B8A] text-sm ">or continue with</p>

        <span className="h-px flex-1 bg-[#D1D1DB]" />
      </div>

      <button className="w-full border border-[#D1D1DB] rounded-full p-2 flex items-center justify-center gap-1 sm:gap-3 hover:bg-[#f0f0f0]">
        <Icons.GoogleLogo />
        <span className="text-sm sm:text-md">Continue with Google</span>
      </button>
    </div>
  );
};
