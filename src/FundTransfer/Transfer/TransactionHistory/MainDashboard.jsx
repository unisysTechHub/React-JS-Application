import React, { Suspense, lazy } from "react";

const TransactionHistory = lazy(() => import("./TransactionHistory"));


export default function MainDashboard() {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <Suspense fallback={<progre></progre>}>
        <TransactionHistory />
      </Suspense>
    </div>
  );
}
