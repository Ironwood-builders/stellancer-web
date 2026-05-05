// ✅ AI wrote: Tailwind form shell
// 🔧 Developer must implement: FX rate fetch, balance validation, createFiatWithdrawal()
import type { FiatProvider, FiatRail, PayoutCurrency } from "@/types";

export default function FiatWithdrawForm() {
  // TODO: Controlled form state for all fields
  const rail: FiatRail = "bank_transfer";
  const currency: PayoutCurrency = "USDC";

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 space-y-5">
      {/* Amount */}
      <div className="space-y-1">
        <label className="text-sm text-gray-400">Amount ({currency})</label>
        <input
          disabled
          type="number"
          min="0"
          placeholder="0.00"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand"
        />
        {/* TODO: Show available balance */}
        <p className="text-xs text-gray-500">Available: — USDC</p>
      </div>

      {/* Rail */}
      <div className="space-y-1">
        <label className="text-sm text-gray-400">Withdrawal Method</label>
        {/* TODO: Controlled select */}
        <select
          disabled
          defaultValue={rail}
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none"
        >
          <option value="bank_transfer">Bank Transfer</option>
          <option value="mobile_money">Mobile Money</option>
        </select>
      </div>

      {/* Provider */}
      <div className="space-y-1">
        <label className="text-sm text-gray-400">Provider</label>
        {/* TODO: Filter options by selected rail */}
        <select
          disabled
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none"
        >
          <option value="bank">Bank</option>
          <option value="opay">OPay</option>
          <option value="mtn_momo">MTN MoMo</option>
          <option value="mpesa">M-Pesa</option>
        </select>
      </div>

      {/* Account details */}
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Account Number</label>
          <input
            disabled
            placeholder="Account / phone number"
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Account Name</label>
          <input
            disabled
            placeholder="Full name"
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
      </div>

      {/* FX estimate */}
      <div className="rounded-lg bg-gray-800 px-4 py-3 text-sm text-gray-400">
        {/* TODO: Fetch live FX rate and compute estimate */}
        You will receive: <span className="text-white font-medium">—</span>
      </div>

      {/* TODO: onSubmit → createFiatWithdrawal() */}
      <button
        disabled
        className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark disabled:opacity-40"
      >
        Withdraw
      </button>
    </div>
  );
}
