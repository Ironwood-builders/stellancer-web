import { describe, it, expect, vi } from "vitest";
import * as payoutsApi from "@/lib/api/payouts";
import * as contractsApi from "@/lib/api/contracts";

describe("payouts API", () => {
  it("getPayouts throws until implemented", async () => {
    // TODO: Replace with mock once implemented
    await expect(payoutsApi.getPayouts()).rejects.toThrow("Not implemented");
  });

  it("createPayout throws until implemented", async () => {
    // TODO: Replace with mock once implemented
    const input = {
      contractId: "uuid",
      toAddress: "GABC",
      amount: "10",
      currency: "XLM" as const,
    };
    await expect(payoutsApi.createPayout(input)).rejects.toThrow(
      "Not implemented"
    );
  });
});

describe("contracts API", () => {
  it("getContracts throws until implemented", async () => {
    // TODO: Replace with mock once implemented
    await expect(contractsApi.getContracts()).rejects.toThrow("Not implemented");
  });
});
