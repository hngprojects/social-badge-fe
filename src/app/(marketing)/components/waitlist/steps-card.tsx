import Image from 'next/image';

interface StepCardProps {
  stepNumber: number;
  iconSrc: string;
  title: string;
  description: string;
}

const StepCard = ({ stepNumber, iconSrc, title, description }: StepCardProps) => {
  return (
    <div className=" flex flex-col items-center p-8 bg-white rounded-[24px] border-[0.5px] border-[#D1D5DB]  max-w-[368px] text-center">
      {/* Icon Container */}
      <div className="relative mb-2 flex w-[120px] h-[120px] items-center justify-center  rounded-full border-1 border-[#D1D5DB]">
        <Image src={iconSrc} alt="" width={80} height={80} className="object-contain" />
      </div>

      {/* Step Badge */}
      <span className="px-5 py-1 mb-3  text-[10px] font-sans font-bold uppercase tracking-widest text-white bg-[#161616] rounded-full">
        Step {stepNumber}
      </span>

      {/* Text Content */}
      <h3 className="mb-2 text-xl font-bold text-[#161616]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#222222] font-bold-s">{description}</p>
    </div>
  );
};

export default StepCard;
