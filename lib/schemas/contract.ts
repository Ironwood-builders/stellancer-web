// ✅ AI wrote: Zod field definitions and validation rules
import { z } from "zod";

const milestoneSchema = z.object({
  title: z.string().min(1, "Title required").max(120),
  amount: z
    .string()
    .regex(/^\d+(\.\d{1,7})?$/, "Invalid amount")
    .refine((v) => parseFloat(v) > 0, "Amount must be greater than 0"),
  dueDate: z.string().datetime({ offset: true }).optional(),
});

export const createContractSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200),
  clientId: z.string().uuid("Invalid client ID"),
  currency: z.enum(["XLM", "USDC"]),
  milestones: z
    .array(milestoneSchema)
    .min(1, "At least one milestone required"),
});

export type CreateContractInput = z.infer<typeof createContractSchema>;
