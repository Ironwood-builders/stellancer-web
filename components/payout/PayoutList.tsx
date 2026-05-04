// ✅ AI wrote: Tailwind table shell with status badge
// 🔧 Developer must implement: usePayout hook, pagination, status filter, row click → detail
import type { Payout } from "@/types";

interface PayoutRowProps {
  payout: Payout;
}

function PayoutRow({ payout }: PayoutRowProps) {
  return (
    <tr className="border-t border-gray-800 hover:bg-gray-800/50">
      <td className="px-4 py-3 text-sm text-gray-300">{payout.id}</td>
      <td className="px-4 py-3 text-sm text-white">
        {payout.amount} {payout.currency}
      </td>
      <td className="px-4 py-3">
        {/* TODO: StatusBadge component */}
        <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">
          {payout.status}
        </span>
      </td>
      <td className="px-4 py-3 text-sm text-gray-400">{payout.createdAt}</td>
    </tr>
  );
}

interface PayoutListProps {
  payouts?: Payout[];
  limit?: number;
}

export default function PayoutList({ payouts = [], limit }: PayoutListProps) {
  const rows = limit ? payouts.slice(0, limit) : payouts;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
      <table className="w-full">
        <thead>
          <tr className="text-left text-xs text-gray-500">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="px-4 py-8 text-center text-sm text-gray-500"
              >
                {/* TODO: Show loading skeleton when fetching */}
                No payouts yet
              </td>
            </tr>
          ) : (
            rows.map((p) => <PayoutRow key={p.id} payout={p} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
