// ✅ AI wrote: page shell
// 🔧 Developer must implement: fetch payout list, pagination, status filters
import PayoutList from "@/components/payout/PayoutList";

export default function PayoutsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-white">Payouts</h1>
      <PayoutList />
    </div>
  );
}
