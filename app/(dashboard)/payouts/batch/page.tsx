// ✅ AI wrote: page shell
// 🔧 Developer must implement: batch payout form state, wallet signing, submission
import BatchPayoutForm from "@/components/payout/BatchPayoutForm";

export default function BatchPayoutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-xl font-semibold text-white">Batch Payout</h1>
      <BatchPayoutForm />
    </div>
  );
}
