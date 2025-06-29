import React, { createContext, useContext, useState } from 'react';

export const BeneficiaryContext = createContext();

export const AddBeneficiaryProvider = ({ children }) => {
    const [beneficiaryData, setBeneficiaryData] = useState(null);
    const resetBeneficiaryData = () => setBeneficiaryData(null);

    return (
      <BeneficiaryContext.Provider value={{ beneficiaryData, setBeneficiaryData, resetBeneficiaryData }}>
        {children}
      </BeneficiaryContext.Provider>
    );
  };

  export const useBeneficiaryContext = () => useContext(BeneficiaryContext);