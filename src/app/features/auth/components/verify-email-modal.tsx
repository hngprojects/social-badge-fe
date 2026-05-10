import Image from 'next/image';
import { Button } from './button';

export const VerifyEmailModal = () => {
  return (
    <div className="bg-white rounded-lg p-5 w-full max-w-md">
      <div className="flex justify-end"></div>

      <div className="bg-[#DFDCDC]/71 m-3 rounded-[16px] p-5 ">
        <div className="relative h-52 mb-5">
          <Image fill src={'/images/emoji.png'} className="object-contain w-full h-full" alt={''} />
        </div>
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-semibold text-[20px] ">Email verified</h2>
          <div className="text-base text-[#4D4645]  ">
            <p>Great! Your email address has been verified</p>
          </div>
          <Button>Set up profile</Button>
          <Button variant="outline">Go to dashboard</Button>
        </div>
      </div>
    </div>
  );
};
