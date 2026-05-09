import { COMPARISON_ROWS } from '../../pricing/contants/comparison-rows';
import StatusIcon from './status-icon';
type CellValue = string;

function TableCell({ value }: { value: CellValue }) {
  if (value === 'check') return <StatusIcon type="check" />;
  if (value === 'cross') return <StatusIcon type="cross" />;
  return <span className="text-[13px] text-[#555]">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-18 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-tight mb-2">
        Compare plans and features
      </h2>
      <p className="text-sm text-[#888] mb-10">Choose the perfect plan for your journey</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              {['Feature / Plan', 'Free Plan', 'Pro Plan', 'Team Plan'].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3.5 text-left font-bold text-[#111] border-b-2 border-[#f0ece8] bg-[#fafafa] whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#fdf9f7]' : ''}>
                <td className="px-4 py-3.5 font-medium text-[#111] border-b border-[#f4f0ed] whitespace-nowrap">
                  {row.feature}
                </td>
                {(['free', 'pro', 'team'] as const).map((plan) => (
                  <td key={plan} className="px-4 py-3.5 text-[#444] border-b border-[#f4f0ed]">
                    <TableCell value={row[plan]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
