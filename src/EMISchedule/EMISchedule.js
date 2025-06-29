"use strict"
import './EMISchedule.css'
import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import EmiScheduleSkeleton from "./emiScheduleSkeleton";
export const emiScheduleRequestBody = {
  principal: 100000,
  annualRate: 10,
  tenureYears: 1
};
async function fetchEMIScehdule(request) {
return   fetch("http://127.0.0.1:8080/api/loan/schedule", {
    body: JSON.stringify(request),
    method: "POST",
    headers: [["Content-Type", "application/json"]]
  })
}
 
const downloadCSV = (schedule) => {
    const headers = Object.keys(schedule[0]).join(",") + "\n";

    const rows = schedule
      .map(row => Object.values(row).join(","))
      .join("\n");

    const csvContent = headers + rows;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "emischedule.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
const EMISchedule = (props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await fetchEMIScehdule(props.input);
      //if (!res.ok) return scheduleData;
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    }
  });
 
  if (isLoading) return (<EmiScheduleSkeleton></EmiScheduleSkeleton>);
  if (error) return <p>Error: {error.message}</p>;
  
  return (
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
      <button onClick={downloadCSV(data)} style={{ marginTop: '10px' }}>
        Download as CSV
      </button>
    </div>
  );
};

const EMIscheduleCalc = (props) => {
  return(
    <Suspense >
      <EMISchedule input={emiScheduleRequestBody}></EMISchedule>
    </Suspense>
  )
}
export default EMIscheduleCalc;
