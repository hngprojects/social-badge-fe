import { BillingCycle, Plan } from '../../pricing/types/pricing';
import StatusIcon from './status-icon';

type PricingCardProps = {
  plan: Plan;
  billing: BillingCycle;
};

export default function PricingCard({ plan, billing }: PricingCardProps) {
  const price = billing === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
  const isPrimary = plan.ctaVariant === 'primary';

  return (
    <div
      className={`max-w-[350px] min-h-[584px] relative  rounded-2xl p-6 text-left flex flex-col ${
        plan.popular
          ? 'border-2 border-primary bg-primary-50'
          : 'border border-[#E5E7EB] bg-[#f8f8f8]'
      }`}
    >
      {plan.popular && (
        <>
          <div className=" h-11 absolute -top-5.5 left-1/2 -translate-x-1/2 bg-primary-100 text-black text-md font-medium px-5 rounded-full whitespace-nowrap flex justify-center items-center border-2 border-primary-500">
            <span>Most Popular</span>
          </div>
          <div className="h-5.5"></div>
        </>
      )}

      <p className="text-[24px] font-medium text-[#333] mb-2">{plan.name}</p>

      <div className="flex items-baseline gap-0.5 mb-1">
        <span className="text-[48px] font-medium text-[#111]">$</span>
        <span className="text-[48px] font-medium text-[#111] leading-none">{price}</span>
        <span className="text-[16px] text-[#757575] ml-0.5">/month</span>
      </div>

      <p className="text-md text-[#5A5A5A]">{plan.description}</p>

      <button
        className={`w-full h-12.5 py-3 rounded-full text-md font-semibold cursor-pointer transition-all duration-200 my-6 ${
          isPrimary
            ? 'bg-primary text-white border-none hover:opacity-90'
            : 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white'
        }`}
      >
        {plan.cta}
      </button>

      <ul className="flex flex-col gap-4 list-none m-0 p-0">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <StatusIcon type="check" />
            <span className="text-[14px] leading-[20px] text-[#303030]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
