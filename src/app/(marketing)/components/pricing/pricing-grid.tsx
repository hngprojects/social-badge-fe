import { PLANS } from '../../pricing/contants/plans';
import { BillingCycle } from '../../pricing/types/pricing';
import PricingCard from './pricing-card';

type PricingGridProps = {
  billing: BillingCycle;
};

export default function PricingGrid({ billing }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-items-center  mx-auto min-h-147">
      {PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} billing={billing} />
      ))}
    </div>
  );
}
