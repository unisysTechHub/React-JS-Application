// DisplayBeneficiary.js
import React, { useContext, useState } from 'react';
import {  useBeneficiary, useBeneficiaryContext,  } from './BeneficiaryContext';
import './BeneficiaryReview.css'; // import the CSS file
import AlertDialog from '../../../CommonComponents/alertDialog/AlertDialog';
import { addBeneficiary } from '../../../Store/Beneficary';
import { useNavigate } from 'react-router-dom';
import { TransferButton } from '../../../CommonComponents/button/TransferButton';

export const BeneficiaryReview = () => {
  const { beneficiaryData } =useBeneficiary();
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  if (!beneficiaryData) {
    return <p className="no-data">No beneficiary data available.</p>;
  }
  const onSubmit = async () => {
    console.log("Form submitted:", beneficiaryData);
    const messeage = await addBeneficiary(beneficiaryData)
    setErrorMessage(messeage)
  };
  const handleCloseDialog = () => {
    setErrorMessage(null);
    navigate("/home/Beneficiary")

  }
  return (
    <div className="beneficiary-review-container">
      <h2 className="title">Beneficiary Details</h2>
      <div className="beneficiary-table">
        {Object.entries(beneficiaryData).map(([key, value]) => (
          <div className="row" key={key}>
            <div className="cell label">{key}</div>
            <div className="cell value">{value}</div>
          </div>
        ))}

      </div>
      <TransferButton onClick={onSubmit} />
      {errorMessage && (
        <AlertDialog message={errorMessage} onClose={handleCloseDialog} />
      )}    </div>
  );
};

export default BeneficiaryReview;
