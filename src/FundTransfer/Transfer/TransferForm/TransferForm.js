import { Suspense, useCallback, useContext, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBeneficiaries } from "../../../Store/BeneficiariesStore"
import { fetchAccounts } from "../../../Store/AccountsStore"
import { TransferValidationRules } from "../TransferValidationRules"
import { transferFunds } from "../transferFunds"
import { FundTransferContext, useTransferContext } from "./FundTransferProvider"
import { useNavigate } from "react-router-dom"
import './TransferForm.css'
import TransferFormSkeleton from "./TransferFormSkeleton"
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "./TransferFlow"



export const TransferForm = (props) => {
  const dispatch = useDispatch()
  const {
    beneficiaries,
    status: beneficiaryStatus,
    error: beneficiaryError
  } = useSelector(state => state.beneficiaryStore);

  const {
    accounts,
    status: accountsStatus,
    error: accountsError
  } = useSelector(state => state.accountsStore);

  const navigate = useNavigate()
  const { selectedBeneficiary, setSelectedBeneficary } = useTransferContext()
  const { selectedFromAccount, setSelectedFromAccount } = useTransferContext()
  const { amount, setAmount } = useTransferContext()

  const [formErrors, setFormErrors] = useState({});
  const selectedBeneficiaryIndex = useRef(-1);

  function getfilterBeneficiaries(beneficiary) {
    return beneficiary.transferType === props.transferType
  }
  useEffect(() => {
    console.log("dispatch useEffect");
    
    dispatch(fetchBeneficiaries(props.transferType));
    dispatch(fetchAccounts());

  }, [dispatch]);

  const onSubmit = () => {
       
    if (!errosNone()) {
      return;
    }
    navigate("/home/fundtransfer/domesticWire/review")
  }

  const beneficiaryOptions = useCallback(() => {
    return beneficiaries?.filter(getfilterBeneficiaries) || []
  }, [beneficiaries])

  const onBeneficiarySelected = (e) => {
    console.log(e.target.value)
    const index = e.target.value;

    if (index !== "") {
      console.log(beneficiaries[e.target.value].beneficiaryName)
      setSelectedBeneficary(beneficiaries[e.target.value])
      setFormErrors(prev => ({ ...prev, beneficiary: "" }));

    }
    else {
      setSelectedBeneficary(null)
      formErrors["beneficiary"] = TransferValidationRules.beneficiary.required;

    }
  }
  const onFromAccountSelected = (e) => {
    const index = e.target.value;

    if (index !== "") {
      console.log(accounts[e.target.value].accountNumber)
      setSelectedFromAccount(accounts[e.target.value])
      setFormErrors(prev => ({ ...prev, fromAccount: "" }));
    }
    else {

      setSelectedFromAccount(null)
      formErrors["fromAccount"] = TransferValidationRules.fromAccount.required
    }
  }
  const isValidAmount = (value) => {
    const pattern = TransferValidationRules.amount.pattern.value
    return pattern.test(value)
  }

  const onInputAmountChanged = (e) => {
    const inputValue = e.target.value
    if (inputValue === '') {
   //   setFormErrors(prev => ({ ...prev, amount: TransferValidationRules.amount.required }));
      setAmount('')
    }
    else
      if (!isValidAmount(inputValue)) {
        setFormErrors(prev => ({ ...prev, amount: TransferValidationRules.amount.pattern.message }));
        setAmount(inputValue)
      }
      else {
        setAmount(inputValue)
        setFormErrors(prev => ({ ...prev, amount: "" }));
      }
  }
  const errosNone = () => {
    console.log(JSON.stringify(selectedFromAccount))
    console.log(JSON.stringify(selectedBeneficiary))
    if (amount === '') {
      setFormErrors((prev) => ({ ...prev, amount: TransferValidationRules.amount.required }))
    }

    return formErrors["fromAccount"] === '' && formErrors["beneficiary"] === '' && formErrors["amount"] === ''
  };
  const handleTransfer = useCallback(async () => {
    if (!errosNone()) {
      return;
    }

    //setStatus('loading');
    try {
      const data = await transferFunds(selectedFromAccount, selectedBeneficiary, amount, props.transferType);
      // setStatus("data.message");
      setAmount('');
    } catch (err) {
      //setStatus("data.message");
      //setErrorMessage(err.message || 'Transfer failed');
    }
  }, [selectedFromAccount, selectedBeneficiary, amount]);
   
  const defaultFromAccountValue = useCallback(() => {
    if (accounts && accounts.length > 0) {
        formErrors["fromAccount"] = '';
        setSelectedFromAccount(accounts[0]);
        return accounts[0].accountNumber
    } else {
        setSelectedFromAccount("-- Choose an account --");
        return "-- Choose an account --"
    }
}, [accounts]);

   const defaultSelectBeneficiary = useCallback(() => {
  if (beneficiaries && beneficiaries.length > 0)
  {
    formErrors["beneficiary"] = ""
    setSelectedBeneficary(beneficiaries[0])
    return beneficiaries[0].beneficiaryName
  }
   else {
     setSelectedBeneficary("-- Choose a Beneficiary --");
     return "-- Choose a Beneficiary --"
   }
    
    
}, [beneficiaries]);
 return beneficiaries ?
  ( 
    <motion.div className="transfer-form" pagetransition={pageTransition} >
      <h2>{accountsError}</h2>
      <h2>{`${beneficiaryError}`}</h2>
      <h2>{`${props.transferType} Transfer`}</h2>
      <label>
        Select Account:
        <select required={true}
          onChange={onFromAccountSelected}
        >
          <option value="">{defaultFromAccountValue()}</option>
          {accounts.map((account, index) => (
            <option key={index} value={index}>
              {account.accountNumber + ' - ' + account.usBankAccount.account_type}
            </option>
          ))}
        </select>
        {(formErrors["fromAccount"] !== '') && <span className="error">{"Please select From account"}</span>}

      </label>
      <label>
        Select Beneficiary:
        <select name="Beneficiary" onChange={onBeneficiarySelected} >
          <option value="">{defaultSelectBeneficiary()}</option>
          {beneficiaryOptions().map((beneficiary, index) => (
            <option key={index} value={index}>
              {beneficiary.beneficiaryName}
            </option>
          ))}
        </select>
        {(formErrors["beneficiary"] !== '') && <span className="error">{"Please select Beneficary"}</span>}

      </label>
      <input type="text" value={amount} onChange={onInputAmountChanged} required="hwew" placeholder="Ex : 100.00"></input>
      {(formErrors["amount"] !== '') && <span className="error">{formErrors["amount"]}</span>}
      <button className="transfer-button" onClick={onSubmit}>Next</button>
      {/* <TransferButton onTransfer={handleTransfer}  /> */}

    </motion.div> 
  ) : (<TransferFormSkeleton></TransferFormSkeleton>)
  

} 
export const TransferFormSuspense = (props) => {
  return( <TransferForm></TransferForm>)
}
export default TransferForm