import { describe, it, expect } from "vitest";
import { payoutSchema } from "@/lib/schemas/payout";

describe("payoutSchema", () => {
  it("accepts a valid payout request", () => {
    // TODO: implement with a valid Stellar G-address
  });

  it("rejects an invalid Stellar address", () => {
    // TODO: implement — address not starting with G or wrong length
  });

  it("rejects zero amount", () => {
    // TODO: implement
  });

  it("rejects memo longer than 28 characters", () => {
    // TODO: implement
  });

  it("rejects unsupported currency", () => {
    // TODO: implement
  });
});
