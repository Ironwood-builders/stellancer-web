// ✅ AI wrote: page shell
// 🔧 Developer must implement: wallet connection flow, balance fetching, transaction history
import WalletPanel from "@/components/wallet/WalletPanel";

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-white">Wallet</h1>
      <WalletPanel />
    </div>
  );
}
