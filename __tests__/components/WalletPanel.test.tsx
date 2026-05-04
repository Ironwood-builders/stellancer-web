import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import WalletPanel from "@/components/wallet/WalletPanel";

describe("WalletPanel", () => {
  it("renders connect button when wallet is disconnected", () => {
    // TODO: render(<WalletPanel />) and assert "Connect Wallet" button is visible
  });

  it("renders public key when wallet is connected", () => {
    // TODO: render with connected wallet state, assert truncated key is shown
  });

  it("renders balance list when balances are provided", () => {
    // TODO: render with mock balances, assert each asset row is present
  });

  it("renders disconnect button when connected", () => {
    // TODO: implement
  });
});
