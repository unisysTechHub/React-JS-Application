import React from "react";
import "./EmiScheduleSkeleton.css"; // Add basic styles

const EmiScheduleSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="emi-table-container">
      <h2 className="emi-title skeleton-box skeleton-title"></h2>
      <table className="emi-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>EMI (₹)</th>
            <th>Interest (₹)</th>
            <th>Principal (₹)</th>
            <th>Remaining (₹)</th>
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, index) => (
            <tr key={index}>
              <td><div className="skeleton-box skeleton-cell"></div></td>
              <td><div className="skeleton-box skeleton-cell"></div></td>
              <td><div className="skeleton-box skeleton-cell"></div></td>
              <td><div className="skeleton-box skeleton-cell"></div></td>
              <td><div className="skeleton-box skeleton-cell"></div></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="skeleton-box skeleton-button" style={{ marginTop: "10px" }}></div>
    </div>
  );
};

export default EmiScheduleSkeleton;
