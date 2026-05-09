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
      className={`min-h-117.5 relative bg-white rounded-2xl p-6 text-left flex flex-col ${
        plan.popular
          ? 'border-2 border-[#e8501a] shadow-[0_4px_32px_rgba(232,80,26,0.12)]'
          : 'border border-[#f0ece8] shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
      }`}
    >
      {plan.popular && (
        <div className="h-11 absolute -top-5.5 left-1/2 -translate-x-1/2 bg-primary-100 text-black text-xs font-bold px-5 rounded-full whitespace-nowrap flex justify-center items-center border border-primary-100">
          <span>Most Popular</span>
        </div>
      )}

      <p className="text-sm font-semibold text-[#333] mb-2">{plan.name}</p>

      <div className="flex items-baseline gap-0.5 mb-1">
        <span className="text-[22px] font-bold text-[#111]">$</span>
        <span className="text-[44px] font-extrabold text-[#111] leading-none">{price}</span>
        <span className="text-[13px] text-[#888] ml-0.5">/month</span>
      </div>

      <p className="text-[13px] text-[#888] mb-5">{plan.description}</p>

      <button
        className={`w-full py-3 rounded-full text-sm font-semibold cursor-pointer transition-opacity mb-5 ${
          isPrimary
            ? 'bg-[#e8501a] text-white border-none'
            : 'bg-transparent text-[#e8501a] border border-[#e8501a]'
        }`}
      >
        {plan.cta}
      </button>

      <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <StatusIcon type="check" />
            <span className="text-[13px] text-[#444]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
