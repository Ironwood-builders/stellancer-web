// ✅ AI wrote: Tailwind layout shell with stat card grid
// 🔧 Developer must implement: fetch user stats (active contracts, pending payouts, wallet balance)
import type { Contract, Payout, WalletBalance } from "@/types";

interface StatCardProps {
  label: string;
  value: string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

interface DashboardOverviewProps {
  // TODO: Replace with real data from hooks
  contracts?: Contract[];
  recentPayouts?: Payout[];
  balance?: WalletBalance;
}

export default function DashboardOverview(_props: DashboardOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* TODO: Populate from fetched data */}
        <StatCard label="Active Contracts" value="—" />
        <StatCard label="Pending Payouts" value="—" />
        <StatCard label="Wallet Balance" value="—" />
      </div>

      {/* Recent payouts table placeholder */}
      <section>
        <h2 className="mb-3 text-sm font-medium text-gray-400">
          Recent Payouts
        </h2>
        {/* TODO: Replace with <PayoutList limit={5} /> */}
        <div className="h-40 rounded-xl border border-gray-800 bg-gray-900" />
      </section>
    </div>
  );
}
