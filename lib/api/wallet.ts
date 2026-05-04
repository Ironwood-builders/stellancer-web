// ✅ AI wrote: function signatures and return types
// 🔧 Developer must implement: Freighter/Albedo SDK calls, Horizon balance fetch, network switch
import type { WalletBalance, WalletState } from "@/types";

export async function connectWallet(
  _provider: WalletState["provider"]
): Promise<Pick<WalletState, "publicKey" | "network">> {
  // TODO: Call Freighter / Albedo SDK based on provider
  throw new Error("Not implemented");
}

export async function disconnectWallet(): Promise<void> {
  // TODO: Clear wallet state from store
  throw new Error("Not implemented");
}

export async function getWalletBalances(
  _publicKey: string
): Promise<WalletBalance[]> {
  // TODO: GET Horizon /accounts/:publicKey — parse balances array
  throw new Error("Not implemented");
}

export async function signTransaction(_xdr: string): Promise<string> {
  // TODO: Call active wallet provider's signTransaction method
  // Returns signed XDR string
  throw new Error("Not implemented");
}
