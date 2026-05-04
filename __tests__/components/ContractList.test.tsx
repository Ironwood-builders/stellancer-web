import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import ContractList from "@/components/contract/ContractList";

describe("ContractList", () => {
  it("renders empty state when no contracts", () => {
    // TODO: render(<ContractList contracts={[]} />) and assert empty message
  });

  it("renders a card for each contract", () => {
    // TODO: render with mock contracts array, assert card count matches
  });

  it("displays contract status on each card", () => {
    // TODO: implement
  });

  it("displays total amount and currency", () => {
    // TODO: implement
  });
});
