// ✅ AI wrote: Tailwind form shell
// 🔧 Developer must implement: dynamic recipient rows, validation, wallet signing, createBatchPayout()
import type { BatchPayoutRecipient, PayoutCurrency } from "@/types";

interface RecipientRowProps {
  index: number;
  // TODO: Bind to form state
  recipient?: BatchPayoutRecipient;
}

function RecipientRow({ index }: RecipientRowProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-start">
      <input
        disabled
        placeholder="G... Stellar address"
        className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand"
      />
      <input
        disabled
        placeholder="Amount"
        type="number"
        min="0"
        className="w-28 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand"
      />
      {/* TODO: Remove row handler */}
      <button
        disabled
        className="rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-400 hover:bg-gray-800"
      >
        ✕
      </button>
    </div>
  );
}

export default function BatchPayoutForm() {
  // TODO: currency state, recipients state (min 1 row)
  const currency: PayoutCurrency = "USDC";

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 space-y-5">
      {/* Currency selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-400 w-20">Currency</label>
        {/* TODO: Controlled select */}
        <select
          disabled
          defaultValue={currency}
          className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none"
        >
          <option value="USDC">USDC</option>
          <option value="XLM">XLM</option>
        </select>
      </div>

      {/* Recipient rows */}
      <div className="space-y-3">
        <span className="text-sm text-gray-400">Recipients</span>
        {/* TODO: Map over recipients state */}
        <RecipientRow index={0} />
      </div>

      {/* TODO: Add recipient handler */}
      <button
        disabled
        className="text-sm text-brand hover:underline disabled:opacity-40"
      >
        + Add recipient
      </button>

      {/* Summary */}
      <div className="rounded-lg bg-gray-800 px-4 py-3 text-sm text-gray-400">
        {/* TODO: Compute total from recipients */}
        Total: <span className="text-white font-medium">— {currency}</span>
      </div>

      {/* TODO: onSubmit → createBatchPayout() */}
      <button
        disabled
        className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark disabled:opacity-40"
      >
        Send Batch Payout
      </button>
    </div>
  );
}
