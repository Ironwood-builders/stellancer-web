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

// --- Batch Payouts ---

export interface BatchPayoutRecipient {
  toAddress: string;
  amount: string;
  memo?: string;
}

export interface BatchPayoutRequest {
  currency: PayoutCurrency;
  recipients: BatchPayoutRecipient[];
}

export interface BatchPayout {
  id: string;
  currency: PayoutCurrency;
  totalAmount: string;
  recipientCount: number;
  status: PayoutStatus;
  payouts: Payout[];
  createdAt: string;
}

// --- Fiat Withdrawal ---

export type FiatRail = "bank_transfer" | "mobile_money";
export type FiatProvider = "opay" | "mtn_momo" | "mpesa" | "bank";

export interface FiatWithdrawalRequest {
  amount: string;
  currency: PayoutCurrency;
  rail: FiatRail;
  provider: FiatProvider;
  accountNumber: string;
  accountName: string;
}

export interface FiatWithdrawal {
  id: string;
  amount: string;
  currency: PayoutCurrency;
  fiatAmount: string;
  fiatCurrency: string;
  rail: FiatRail;
  provider: FiatProvider;
  status: "pending" | "processing" | "completed" | "failed";
  reference: string | null;
  createdAt: string;
}
