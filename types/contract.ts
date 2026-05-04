export type ContractStatus =
  | "draft"
  | "active"
  | "in_escrow"
  | "completed"
  | "disputed";

export interface Milestone {
  id: string;
  title: string;
  amount: string;
  dueDate: string | null;
  completedAt: string | null;
}

export interface Contract {
  id: string;
  title: string;
  clientId: string;
  freelancerId: string;
  status: ContractStatus;
  totalAmount: string;
  currency: string;
  milestones: Milestone[];
  escrowAddress: string | null;
  createdAt: string;
}
