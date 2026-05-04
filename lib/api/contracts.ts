// ✅ AI wrote: function signatures and return types
// 🔧 Developer must implement: request bodies, escrow creation, milestone updates
import type { Contract, PaginatedResponse } from "@/types";

export interface CreateContractInput {
  title: string;
  clientId: string;
  totalAmount: string;
  currency: string;
  milestones: Array<{ title: string; amount: string; dueDate?: string }>;
}

export async function getContracts(
  page = 1,
  pageSize = 20
): Promise<PaginatedResponse<Contract>> {
  // TODO: GET /api/contracts?page=&pageSize=
  throw new Error("Not implemented");
}

export async function getContract(id: string): Promise<Contract> {
  // TODO: GET /api/contracts/:id
  throw new Error("Not implemented");
}

export async function createContract(
  _input: CreateContractInput
): Promise<Contract> {
  // TODO: POST /api/contracts
  throw new Error("Not implemented");
}

export async function approveMilestone(
  contractId: string,
  milestoneId: string
): Promise<Contract> {
  // TODO: PATCH /api/contracts/:contractId/milestones/:milestoneId/approve
  throw new Error("Not implemented");
}
