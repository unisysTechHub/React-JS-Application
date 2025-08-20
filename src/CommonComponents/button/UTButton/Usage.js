// TransferForm.tsx
import React, { useState } from "react";
import BankButton from "./BankButton";

const TransferForm = () => {
  const [amount, setAmount] = useState("");
  const isAmountValid = Number(amount) > 0;

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("Transferring amount:", amount);
    }}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <BankButton
        type="submit"
        disabled={!isAmountValid}
        name="transferButton"
        value={amount}
      >
        Transfer Funds
      </BankButton>
    </form>
  );
};

export default TransferForm;
