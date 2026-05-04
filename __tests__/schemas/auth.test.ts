import { describe, it, expect } from "vitest";
import { loginSchema, registerSchema } from "@/lib/schemas/auth";

describe("loginSchema", () => {
  it("accepts valid credentials", () => {
    // TODO: implement
  });

  it("rejects invalid email", () => {
    const result = loginSchema.safeParse({ email: "not-an-email", password: "Password1" });
    expect(result.success).toBe(false);
  });

  it("rejects password shorter than 8 characters", () => {
    // TODO: implement
  });
});

describe("registerSchema", () => {
  it("accepts valid registration input", () => {
    // TODO: implement
  });

  it("rejects mismatched passwords", () => {
    // TODO: implement
  });

  it("rejects weak password missing uppercase", () => {
    // TODO: implement
  });
});
