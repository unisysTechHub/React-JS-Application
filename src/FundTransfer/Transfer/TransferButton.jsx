import React from 'react';
import '../Transfer/styles/Transfer.css';

const TransferButton = React.memo(({ onTransfer, disabled }) => {
  console.log("🔁 TransferButton rendered");

  return (
    <button type='submit' className={disabled ? "disable" : "transfer-button"} onClick={onTransfer} disabled={disabled}>
      Transfer Now
    </button>
  );
});

export default TransferButton;
