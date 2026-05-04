export type PayoutStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "cancelled";

export type PayoutCurrency = "XLM" | "USDC";

export interface Payout {
  id: string;
  contractId: string;
  fromAddress: string;
  toAddress: string;
  amount: string;
  currency: PayoutCurrency;
  status: PayoutStatus;
  txHash: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PayoutRequest {
  contractId: string;
  toAddress: string;
  amount: string;
  currency: PayoutCurrency;
  memo?: string;
}
