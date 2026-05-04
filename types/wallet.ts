export type WalletProvider = "freighter" | "albedo" | "rabet";

export type WalletStatus = "disconnected" | "connecting" | "connected" | "error";

export interface WalletState {
  provider: WalletProvider | null;
  publicKey: string | null;
  status: WalletStatus;
  network: "mainnet" | "testnet";
}

export interface WalletBalance {
  asset: string;
  balance: string;
  limit: string | null;
}
