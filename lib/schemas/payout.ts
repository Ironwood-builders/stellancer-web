// ✅ AI wrote: Zod field definitions and validation rules
import { z } from "zod";

// Stellar public key: starts with G, 56 chars, base32
const stellarAddress = z
  .string()
  .regex(/^G[A-Z2-7]{55}$/, "Invalid Stellar public key");

const positiveDecimal = z
  .string()
  .regex(/^\d+(\.\d{1,7})?$/, "Invalid amount")
  .refine((v) => parseFloat(v) > 0, "Amount must be greater than 0");

export const payoutSchema = z.object({
  contractId: z.string().uuid("Invalid contract ID"),
  toAddress: stellarAddress,
  amount: positiveDecimal,
  currency: z.enum(["XLM", "USDC"]),
  memo: z.string().max(28, "Memo max 28 characters").optional(),
});

export type PayoutFormInput = z.infer<typeof payoutSchema>;
