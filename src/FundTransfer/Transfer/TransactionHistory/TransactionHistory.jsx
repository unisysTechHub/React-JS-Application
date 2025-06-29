// TransactionHistory.jsx
import React from "react";
import './TransactionHistory.css'
import { useQuery } from '@tanstack/react-query';
import TransferFormSkeleton from "../TransferForm/TransferFormSkeleton";
import { render } from "react-dom";
 const emiScheduleRequestBody = JSON.stringify({
  principal: 100000,
  annualRate: 10,
  tenureYears: 1
});
async function fetchEMIScehdule() {
return   fetch("http://127.0.0.1:8080/api/loan/schedule", {
    body: emiScheduleRequestBody,
    method: "POST",
    headers: [["Content-Type", "application/json"]]
  })
}


export default function TransactionHistory() {
 const { data, error, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await fetchEMIScehdule();
      //if (!res.ok) return scheduleData;
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    }
  });
  if (error) return <p>Error: {error.message}</p>;
  // if(data == undefined){
  //    console.log("data undefind")
    
  // }
  // else {console.log(JSON.stringify(data))}
  return  data ? (
    
    <div className="emi-table-container">
      <h2 className="emi-title">EMI Schedule</h2>
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
          {data.map((row) => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td>{row.emi.toFixed(2)}</td>
              <td>{row.interest.toFixed(2)}</td>
              <td>{row.principalComponent.toFixed(2)}</td>
              <td>{row.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button  style={{ marginTop: '10px' }}>
        Download as CSV
      </button>
    </div>
  ) : TransferFormSkeleton;
}
