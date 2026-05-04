// ✅ AI wrote: Tailwind layout shell
// 🔧 Developer must implement: active route highlighting, mobile collapse, auth-aware nav items
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Contracts", href: "/contracts" },
  { label: "Payouts", href: "/payouts" },
  { label: "Wallet", href: "/wallet" },
] as const;

export default function Sidebar() {
  return (
    <aside className="flex w-56 flex-col border-r border-gray-800 bg-gray-900 px-4 py-6">
      <span className="mb-8 text-lg font-bold text-brand">Stellancer</span>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
