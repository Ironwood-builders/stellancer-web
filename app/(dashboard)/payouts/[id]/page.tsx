// ✅ AI wrote: page shell
// 🔧 Developer must implement: fetch payout by id, error/not-found states
import PayoutDetail from "@/components/payout/PayoutDetail";

interface Props {
  params: { id: string };
}

export default function PayoutDetailPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-xl font-semibold text-white">Payout Detail</h1>
      {/* TODO: Pass fetched payout data */}
      <PayoutDetail id={params.id} />
    </div>
  );
}
