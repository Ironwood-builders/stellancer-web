// ✅ AI wrote: page shell
// 🔧 Developer must implement: balance check, FX rate fetch, submission
import FiatWithdrawForm from "@/components/wallet/FiatWithdrawForm";

export default function WithdrawPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="text-xl font-semibold text-white">Withdraw to Fiat</h1>
      <FiatWithdrawForm />
    </div>
  );
}
