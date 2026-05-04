// ✅ AI wrote: function signatures and return types
// 🔧 Developer must implement: request bodies, pagination params, error handling
import type { Payout, PayoutRequest, PaginatedResponse } from "@/types";

export async function getPayouts(
  page = 1,
  pageSize = 20
): Promise<PaginatedResponse<Payout>> {
  // TODO: GET /api/payouts?page=&pageSize=
  throw new Error("Not implemented");
}

export async function getPayout(id: string): Promise<Payout> {
  // TODO: GET /api/payouts/:id
  throw new Error("Not implemented");
}

export async function createPayout(_input: PayoutRequest): Promise<Payout> {
  // TODO: POST /api/payouts — requires wallet signature in body
  throw new Error("Not implemented");
}

export async function cancelPayout(id: string): Promise<Payout> {
  // TODO: PATCH /api/payouts/:id/cancel
  throw new Error("Not implemented");
}
