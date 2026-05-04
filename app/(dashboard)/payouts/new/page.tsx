// ✅ AI wrote: page shell
// 🔧 Developer must implement: multi-step payout form state machine, wallet signing, submission
import PayoutForm from "@/components/payout/PayoutForm";

export default function NewPayoutPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="text-xl font-semibold text-white">Request Payout</h1>
      <PayoutForm />
    </div>
  );
}
