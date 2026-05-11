import Image from 'next/image';

interface StepCardProps {
    stepNumber: number;
    iconSrc: string;
    title: string;
    description: string;
}

const StepCard = ({ stepNumber, iconSrc, title, description }: StepCardProps) => {
    return (
        <div className="flex flex-col items-center p-8 bg-white rounded-[24px] border border-gray-100 shadow-sm max-w-[320px] text-center">
            {/* Icon Container */}
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                <Image
                    src={iconSrc}
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                />
            </div>

            {/* Step Badge */}
            <span className="px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest text-white bg-black rounded-full">
                Step {stepNumber}
            </span>

            {/* Text Content */}
            <h3 className="mb-2 text-xl font-bold text-gray-900">
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
                {description}
            </p>
        </div>
    );
};

export default StepCard;