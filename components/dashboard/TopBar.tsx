// ✅ AI wrote: Tailwind layout shell
// 🔧 Developer must implement: user session display, wallet status badge, sign-out action
export default function TopBar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-800 bg-gray-900 px-6">
      {/* TODO: Breadcrumb or page title */}
      <div className="h-4 w-32 rounded bg-gray-800" />

      <div className="flex items-center gap-3">
        {/* TODO: WalletStatusBadge component */}
        <div className="h-8 w-24 rounded-full bg-gray-800" />
        {/* TODO: UserAvatar / dropdown */}
        <div className="h-8 w-8 rounded-full bg-gray-700" />
      </div>
    </header>
  );
}
