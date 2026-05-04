import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import PayoutList from "@/components/payout/PayoutList";

describe("PayoutList", () => {
  it("renders empty state when no payouts", () => {
    // TODO: render(<PayoutList payouts={[]} />) and assert empty message
  });

  it("renders a row for each payout", () => {
    // TODO: render with mock payout array, assert row count matches
  });

  it("respects the limit prop", () => {
    // TODO: render with 10 payouts and limit=5, assert only 5 rows rendered
  });

  it("displays payout status badge", () => {
    // TODO: implement
  });
});
