// ✅ AI wrote: Tailwind layout shell
// 🔧 Developer must implement: wallet.connect(), balance fetching, disconnect, network switch
import type { WalletState, WalletBalance } from "@/types";

interface WalletPanelProps {
  // TODO: Inject from useWallet() hook
  wallet?: WalletState;
  balances?: WalletBalance[];
}

export default function WalletPanel({ wallet, balances = [] }: WalletPanelProps) {
  const isConnected = wallet?.status === "connected";

  return (
    <div className="space-y-4">
      {/* Connection card */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        {isConnected ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Public Key</span>
              <span className="font-mono text-xs text-gray-300">
                {/* TODO: Truncate public key */}
                {wallet?.publicKey ?? "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Network</span>
              <span className="text-sm text-white capitalize">
                {wallet?.network}
              </span>
            </div>
            {/* TODO: Disconnect button → wallet.disconnect() */}
            <button className="mt-2 w-full rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
              Disconnect
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4">
            <p className="text-sm text-gray-400">No wallet connected</p>
            {/* TODO: Trigger wallet provider selection modal */}
            <button className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-dark">
              Connect Wallet
            </button>
          </div>
        )}
      </div>

      {/* Balances */}
      {isConnected && (
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-4 text-sm font-medium text-gray-400">Balances</h2>
          {balances.length === 0 ? (
            <p className="text-sm text-gray-500">
              {/* TODO: Show skeleton while loading */}
              No assets found
            </p>
          ) : (
            <ul className="space-y-2">
              {balances.map((b) => (
                <li
                  key={b.asset}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-300">{b.asset}</span>
                  <span className="font-mono text-white">{b.balance}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
