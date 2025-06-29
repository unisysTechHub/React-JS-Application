import React, { Fragment, useContext, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import './BeneficiaryForm.css';
import InputField from '../../../CommonComponents/InputField/InputField';
import { addBeneficiary } from '../../../Store/Beneficary';
import AlertDialog from '../../../CommonComponents/alertDialog/AlertDialog';
import { useNavigate } from 'react-router-dom';
import {  useBeneficiaryContext } from './BeneficiaryContext';

const BeneficiaryForm = ({ beneficiaryType }) => {
  const navigate = useNavigate()
  const methods = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const { setBeneficiaryData } = useBeneficiaryContext()
  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    setBeneficiaryData(data)
    navigate("/home/beneficiary/domesticwire/review")
  };

  const handleCloseDialog = () => {
    setErrorMessage(null);
    navigate("home/home/Beneficiary")

  }
  return (
    <Fragment>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="form-container">
          <h2>Beneficiary Details</h2>

          <InputField name="AccountNumber" label="Account Number" />
          <InputField name="accountType" label="Account Type" options={[
            { value: "savings", label: "Savings" },
            { value: "checking", label: "Checking" }
          ]} />
          <InputField name="transferType" label="Transfer Type" value={beneficiaryType} disabled={true} />
          <InputField name="BankName" label="Bank Name" />
          <InputField name="BeneficiaryName" label="Beneficiary Name" />
          <InputField name="PhoneNumber" label="Phone Number" />
          <InputField name="Email" label="Email" />
          <InputField name="country" label="Country" />
          <InputField name="currency" label="Currency" />
          <InputField name="swiftBicCode" label="SWIFT/BIC Code" />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </FormProvider>
      {errorMessage && (
        <AlertDialog message={errorMessage} onClose={handleCloseDialog} />
      )}
    </Fragment>
  );
};

export default BeneficiaryForm;
