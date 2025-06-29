"use client";
import './AccountsOverView.css'
import React, { Fragment, useEffect, useState } from 'react';
export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

const AccountOverView = () => {
  const [accounts, setAccounts] = useState([]);
  const accountsRequestBody = JSON.stringify({
    "userId": "user123"
  }
  )
  useEffect(() => {
    const controller = new AbortController()
    
    fetch("http://127.0.0.1:8083/api/account/accounts", {
      body: accountsRequestBody,
      method: "POST",
      headers: [["Content-Type", "application/json"]],
      signal:controller.signal
    },)
      .then(response => response.json())
      .then(data => {
        if (data.responseCode === "200" && data.accuntList) {
          setAccounts(data.accuntList);
        }
      })
      .catch(error => {
        console.error('Error fetching accounts:', error);
      });
      return () => controller.abort()
  }, []);

  return (
    <Fragment>
      <div className="account-table">
        <p>{formatCurrency(10.00)}</p>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Account Number</th>
              <th>Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={account.accountId}>
                <td>{index + 1}</td>
                <td>{account.accountNumber}</td>
                <td>{formatCurrency(account.availableBalance.toFixed(2))}</td>
                <td>
                  <button className="arrow-button" >
                    &gt;&gt;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AccountOverView;
