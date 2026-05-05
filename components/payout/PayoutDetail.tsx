// ✅ AI wrote: Tailwind layout shell
// 🔧 Developer must implement: getPayout(id) call, loading/error states, cancel action
import type { Payout } from "@/types";

interface PayoutDetailProps {
  id: string;
  // TODO: Inject from data fetch
  payout?: Payout;
}

export default function PayoutDetail({ id, payout }: PayoutDetailProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 space-y-4">
      {/* TODO: Replace with real data; show skeleton while loading */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">ID</span>
        <span className="font-mono text-xs text-gray-300">{payout?.id ?? id}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Amount</span>
        <span className="text-sm text-white">
          {payout ? `${payout.amount} ${payout.currency}` : "—"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Status</span>
        {/* TODO: StatusBadge component */}
        <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">
          {payout?.status ?? "—"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Tx Hash</span>
        <span className="font-mono text-xs text-gray-300 truncate max-w-[200px]">
          {payout?.txHash ?? "—"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Created</span>
        <span className="text-sm text-gray-300">{payout?.createdAt ?? "—"}</span>
      </div>
      {/* TODO: Cancel button → cancelPayout(id) — only show when status is pending */}
      <button
        disabled
        className="mt-2 w-full rounded-lg border border-red-800 px-4 py-2 text-sm text-red-400 hover:bg-red-900/20 disabled:opacity-40"
      >
        Cancel Payout
      </button>
    </div>
  );
}
