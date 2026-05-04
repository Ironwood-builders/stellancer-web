// ✅ AI wrote: page shell
// 🔧 Developer must implement: fetch contract by id, escrow status polling, milestone actions
import ContractDetail from "@/components/contract/ContractDetail";

interface Props {
  params: { id: string };
}

export default function ContractDetailPage({ params }: Props) {
  return <ContractDetail contractId={params.id} />;
}
