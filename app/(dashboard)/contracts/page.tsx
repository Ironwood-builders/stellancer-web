// ✅ AI wrote: page shell
// 🔧 Developer must implement: fetch contracts list, filter by status, pagination
import ContractList from "@/components/contract/ContractList";

export default function ContractsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-white">Contracts</h1>
      <ContractList />
    </div>
  );
}
