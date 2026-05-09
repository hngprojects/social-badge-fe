import Image from 'next/image';
import { Button } from './button';
import { Icons } from '@/components/ui/icons';

export const ResetPasswordModal = () => {
  return (
    <div className="w-full h-screen backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 w-full max-w-md">
        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-700">
            <Icons.XMark />
          </button>
        </div>

        <div className="bg-[#DFDCDC]/71 m-3 rounded-[16px] p-5 ">
          <div className="relative h-52 mb-5">
            <Image
              fill
              src={'/images/mail-img.png'}
              className="object-contain w-full h-full"
              alt={''}
            />
          </div>
          <div className="text-center flex flex-col gap-3">
            <h2 className="font-semibold text-[20px] ">We’ve sent you a reset link</h2>
            <div className="text-base text-[#4D4645]  ">
              <p>We’ve sent instructions to your registered email address.</p>
              <p>Click the link in the email to reset your password.</p>
            </div>
            <Button name="Go to mail" />
          </div>
        </div>
      </div>
    </div>
  );
};
