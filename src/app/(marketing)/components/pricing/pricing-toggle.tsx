import { BillingCycle } from '../../pricing/types/pricing';

type PricingToggleProps = {
  billing: BillingCycle;
  onChange: (billing: BillingCycle) => void;
};

export default function PricingToggle({ billing, onChange }: PricingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-1 mb-12">
      <div className="flex items-center border border-white bg-[#FEE9E380] md:bg-white/40 h-[46px] max-w-[180px] rounded-full px-1 py-2.5 mb-2">
        {(['monthly', 'yearly'] as BillingCycle[]).map((cycle) => (
          <button
            key={cycle}
            onClick={() => onChange(cycle)}
            className={`h-9 px-3 py-2 rounded-full text-[16px] flex items-center gap-2 font-medium transition-all capitalize cursor-pointer ${
              billing === cycle
                ? 'bg-[#e8501a] text-white font-semibold'
                : 'bg-transparent text-[#555]'
            }`}
          >
            {cycle}
          </button>
        ))}
      </div>
      <span className="text-[14px] text-[#1E1E1E]">Save up to 20% with yearly</span>
    </div>
  );
}
