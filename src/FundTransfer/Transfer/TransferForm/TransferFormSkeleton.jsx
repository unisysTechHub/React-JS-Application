import React from "react";
import './TransferFormSkeleton.css'
export default function TransferFormSkeleton() {
  // Helper class to create gray blocks with animation
  return (
    <div className="transfer-form skeleton">
      <h2 className="skeleton-text skeleton-title"></h2>
      <h2 className="skeleton-text skeleton-title"></h2>
      <h2 className="skeleton-text skeleton-subtitle"></h2>

      <label>
        Select Account:
        <select disabled className="skeleton-select">
          <option>Loading accounts...</option>
        </select>
        <span className="skeleton-error"></span>
      </label>

      <label>
        Select Beneficiary:
        <select disabled className="skeleton-select">
          <option>Loading beneficiaries...</option>
        </select>
        <span className="skeleton-error"></span>
      </label>

      <input
        type="text"
        disabled
        placeholder="Ex : 100.00"
        className="skeleton-input"
      />
      <span className="skeleton-error"></span>

      <button disabled className="transfer-button skeleton-button">
        Loading...
      </button>
    </div>
  );
}
