// ✅ AI wrote: Tailwind detail layout shell
// 🔧 Developer must implement: useContract(id) hook, escrow status polling, milestone actions
import type { Contract } from "@/types";

interface ContractDetailProps {
  contractId: string;
  // TODO: Inject from useContract(contractId)
  contract?: Contract;
}

export default function ContractDetail({ contractId, contract }: ContractDetailProps) {
  if (!contract) {
    return (
      // TODO: Replace with proper loading skeleton
      <div className="h-64 animate-pulse rounded-xl bg-gray-800" />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">{contract.title}</h1>
        {/* TODO: StatusBadge */}
        <span className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-300">
          {contract.status}
        </span>
      </div>

      {/* Escrow info */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
        <h2 className="mb-3 text-sm font-medium text-gray-400">Escrow</h2>
        <p className="font-mono text-xs text-gray-300">
          {/* TODO: Link to Stellar explorer */}
          {contract.escrowAddress ?? "No escrow address"}
        </p>
        {/* TODO: EscrowStatusBadge — polls Horizon for account state */}
      </div>

      {/* Milestones */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
        <h2 className="mb-3 text-sm font-medium text-gray-400">Milestones</h2>
        <ul className="space-y-3">
          {contract.milestones.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between rounded-lg bg-gray-800 px-4 py-3"
            >
              <span className="text-sm text-white">{m.title}</span>
              <span className="font-mono text-sm text-gray-300">
                {m.amount}
              </span>
              {/* TODO: Milestone action button (approve / release) */}
            </li>
          ))}
        </ul>
      </div>

      {/* Hidden — used by hooks */}
      <span className="sr-only">{contractId}</span>
    </div>
  );
}
