// ✅ AI wrote: Tailwind card grid shell
// 🔧 Developer must implement: useContracts hook, status filter, pagination, link to detail
import type { Contract } from "@/types";

interface ContractCardProps {
  contract: Contract;
}

function ContractCard({ contract }: ContractCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-gray-700">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium text-white">{contract.title}</h3>
        {/* TODO: StatusBadge */}
        <span className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">
          {contract.status}
        </span>
      </div>
      <p className="mt-2 font-mono text-lg text-white">
        {contract.totalAmount}{" "}
        <span className="text-sm text-gray-400">{contract.currency}</span>
      </p>
      <p className="mt-1 text-xs text-gray-500">
        {contract.milestones.length} milestone
        {contract.milestones.length !== 1 ? "s" : ""}
      </p>
      {/* TODO: Link to /contracts/[id] */}
    </div>
  );
}

interface ContractListProps {
  contracts?: Contract[];
}

export default function ContractList({ contracts = [] }: ContractListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contracts.length === 0 ? (
        <p className="col-span-full text-sm text-gray-500">
          {/* TODO: Show skeleton while loading */}
          No contracts yet
        </p>
      ) : (
        contracts.map((c) => <ContractCard key={c.id} contract={c} />)
      )}
    </div>
  );
}
