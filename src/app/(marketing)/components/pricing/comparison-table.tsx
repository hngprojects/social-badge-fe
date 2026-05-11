import { COMPARISON_ROWS } from '../../pricing/contants/comparison-rows';
import StatusIcon from './status-icon';

type CellValue = string;

function TableCell({ value }: { value: CellValue }) {
  if (value === 'check') return <StatusIcon type="check" className="bg-green-500" />;
  if (value === 'cross') return <StatusIcon type="cross" className="bg-red-500" />;
  return <span className="text-sm md:text-md text-[#303030]">{value}</span>;
}

const PLANS = ['free', 'pro', 'team'] as const;

export default function ComparisonTable() {
  return (
    <section className="lg:my-[140px] md:my-[100px] my-12 w-full px-6 max-w-[1090px] mx-auto text-center">
      <h2 className="text-[clamp(28px,3vw,40px)] mb-3 leading-[1.5] font-fraunces">
        Compare plans and features
      </h2>
      <p className="text-sm md:text-md text-[#888] mb-12">
        Choose the perfect plan for your journey
      </p>

      <div className="overflow-x-auto [-webkit-overflow-scrolling:touch] border border-[#B3B3B3]/40 rounded-[16px]">
        <table className="w-full border-collapse table-fixed min-w-[560px]">
          <thead>
            <tr>
              {['Feature / Plan', 'Free Plan', 'Pro Plan', 'Team Plan'].map((header, i) => (
                <th
                  key={header}
                  className={`py-4 md:py-5 font-medium text-[#161616] bg-[#F8F8F8] border-b border-[#B3B3B3]/40
                    ${
                      i === 0
                        ? 'px-3 md:px-6 text-left w-[120px] md:w-[334px] text-sm md:text-[24px] whitespace-normal'
                        : 'px-2 md:px-6 text-center border-l border-[#B3B3B3]/40 text-sm md:text-[24px] whitespace-normal'
                    }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => {
              const isEven = i % 2 === 0;
              const rowBg = isEven ? 'bg-white' : 'bg-[#F8F8F8]';
              const isLast = i === COMPARISON_ROWS.length - 1;

              return (
                <tr key={row.feature} className={rowBg}>
                  <td
                    className={`px-3 md:px-6 py-3 text-sm md:text-md text-[#121217] text-left leading-snug
                      ${!isLast ? 'border-b border-[#B3B3B3]/40' : ''}`}
                  >
                    {row.feature}
                  </td>
                  {PLANS.map((plan) => (
                    <td
                      key={plan}
                      className={`px-2 md:px-6 py-3 md:py-5 border-l border-[#B3B3B3]/40 text-center
                        ${!isLast ? 'border-b border-[#B3B3B3]/40' : ''}`}
                    >
                      <div className="flex justify-center items-center">
                        <TableCell value={row[plan]} />
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
