import { createContext, useContext, useState } from "react"
export const FundTransferContext = createContext()
export const FundStransferProvider = ({ children }) => {

  const [selectedBeneficiary, setSelectedBeneficary] = useState(null)
  const [selectedFromAccount, setSelectedFromAccount] = useState(null)
  const [transferConfirmData, setTransferConfirmData] = useState(null)
  const [amount, setAmount] = useState('');

   const resetTransferData = () => {
    setSelectedBeneficary(null);
    setSelectedFromAccount(null);
    setTransferConfirmData(null);
    setAmount('');
  };

  
  return (<FundTransferContext.Provider value={{
    selectedFromAccount,
    setSelectedFromAccount, 
    selectedBeneficiary,
     setSelectedBeneficary,
    amount, setAmount, 
    transferConfirmData,
    setTransferConfirmData,
    resetTransferData
  }}
  > {children}</FundTransferContext.Provider>
  )

}

export const useTransferContext = () => useContext(FundTransferContext)