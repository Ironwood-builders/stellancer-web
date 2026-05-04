// ✅ AI wrote: form shell with Zod schema hookup points
// 🔧 Developer must implement: useForm submission, wallet signing, multi-step state, error handling
"use client";

import type { PayoutRequest } from "@/types";

interface PayoutFormProps {
  // TODO: Pass contractId from parent or route param
  contractId?: string;
  onSuccess?: (payout: PayoutRequest) => void;
}

export default function PayoutForm({ contractId, onSuccess: _onSuccess }: PayoutFormProps) {
  // TODO: const form = useForm<PayoutRequest>({ resolver: zodResolver(payoutSchema) })
  // TODO: const { mutate, isPending } = useCreatePayout()

  return (
    <form className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Recipient Address
        </label>
        <input
          type="text"
          placeholder="G..."
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          // TODO: {...form.register("toAddress")}
        />
        {/* TODO: <ErrorMessage errors={form.formState.errors} name="toAddress" /> */}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm text-gray-400">Amount</label>
          <input
            type="text"
            placeholder="0.00"
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
            // TODO: {...form.register("amount")}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-400">Currency</label>
          <select className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand">
            <option value="XLM">XLM</option>
            <option value="USDC">USDC</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-gray-400">
          Memo (optional)
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
          // TODO: {...form.register("memo")}
        />
      </div>

      {/* TODO: Show wallet connect prompt if wallet not connected */}
      <button
        type="submit"
        disabled
        className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-dark disabled:opacity-50"
      >
        {/* TODO: Show spinner when isPending */}
        Request Payout
      </button>

      {/* Hidden field — contractId */}
      <input type="hidden" value={contractId ?? ""} />
    </form>
  );
}
