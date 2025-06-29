import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { transferFunds } from './transferFunds';
import { getAccounts } from './getAccounts';
import TransferButton from './TransferButton';
import AlertDialog from '../../CommonComponents/alertDialog/AlertDialog';
import '../Transfer/styles/Transfer.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '../../Store/AccountsStore';
import InputField from '../../CommonComponents/InputField/InputField';
import { TransferInputField } from '../Common/TransferInputField';
import { FormProvider, useForm } from 'react-hook-form';

const IntraTransferForm = ({ transferType }) => {
  const dispatch = useDispatch();
  const methods = useForm()
  const { accounts, loading, error } = useSelector(state => state.accountsStore)
  const [amount, setAmount] = useState('');
  //const [accounts, setAccounts] = useState([]);
  const [toAccount, setSelectedTOAccount] = useState(null)
  const [fromAccount, setSelectedFromAccount] = useState(null)
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [amountError, setAmountError] = useState('');
  const [disableButton, setDisableButton] = useState(true)
  const navigate = useNavigate()
  const transferTypeRef = useRef(transferType)
  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  const  toAccounts = useMemo(() => {
  if (transferTypeRef.current === "Intra") {
     return accounts.filter((account) => {
        return account.accountNumber !== fromAccount
      })
    }
    else if (transferTypeRef.current === "DemesticWire") {
      //beneficiaries
      return []
    }
},[fromAccount, accounts])
  // useEffect(() => {
  //   const fetchAccounts = async () => {
  //     try {
  //       const data = await getAccounts();

  //       setAccounts(data);

  //     } catch (err) {
  //       setErrorMessage('Unable to fetch account list');
  //       setAccounts([{accountNumber : "123344", accountHolderName : "test"},
  //         {accountNumber : "1233445", accountHolderName : "test45"}

  //       ])
  //     }
  //   };
  //   fetchAccounts();
  // }, []);

  const fromAccountOptions = useMemo(() => {
    console.log(JSON.stringify(accounts))
    return accounts.map((account) => ({ label: `${account.accountNumber} - ${account.accountHolderName}`, value: account.accountNumber })) || []
  }, [accounts])

  const FromAccountSelectprops = {
    selectedValue: fromAccount,
    onChangeFn: (e) => setSelectedFromAccount(e.target.value),
    options: fromAccountOptions,
  };
  const toAccountOptions = useMemo(() => {
    return toAccounts.map((account) => ({ label: `${account.accountNumber} - ${account.accountHolderName}`, value: account.accountNumber })) || []

  }, [toAccounts])
  const ToAccountSelectProps = {
    selectedValue: toAccount,
    onChangeFn: (e) => setSelectedTOAccount(e.target.value),
    options: toAccountOptions
  }


  // useEffect(() => {
  //   console.log(transferTypeRef.current)
  //   if (transferTypeRef.current === "Intra") {
  //     setToAccounts(accounts.filter((account) => {
  //       return account.accountNumber !== fromAccount
  //     }))
  //   }
  //   else if (transferTypeRef.current === "DemesticWire") {
  //     //beneficiaries
  //   }
  // }, [fromAccount, accounts])

  const isValidAmount = (value) => {
    const pattern = /^\d+(\.\d{0,2})?$/;
    return pattern.test(value) && parseFloat(value) > 0;
  };
  const isValidFormData = useCallback(() => { return (fromAccount !== null && toAccount !== null && amountError === '') }, [fromAccount, toAccount, amountError]);
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || isValidAmount(value)) {
      setAmount(value);
      setAmountError('');
      if (isValidFormData()) {
        setDisableButton(false)
      } else { setDisableButton(true) }

    } else {
      setAmount(value); // still update so user can correct
      setAmountError('Enter a valid amount (max 2 decimals)');
      setDisableButton(true)
    }
  };

  const handleTransfer = useCallback(async () => {
    if (!isValidAmount(amount)) {
      setAmountError('Please enter a valid amount');
      return;
    }

    setStatus('loading');
    try {
      const data = await transferFunds(fromAccount, toAccount, amount);
      setStatus("data.message");
      setAmount('');
    } catch (err) {
      setStatus("data.message");
      setErrorMessage(err.message || 'Transfer failed');
    }
  }, [fromAccount, amount]);

  const handleCloseDialog = () => {
    setErrorMessage(null);
    //navigate("/transfer/benefciaryhome")

  };

  return (
    <FormProvider {...methods}>
      <form className="transfer-form" >
        <h2>{`${transferType} Transfer`} </h2>
        {toAccount}
        {fromAccount}
        {/* <TransferInputField name="senderAccount"  {...FromAccountSelectprops} ></TransferInputField>
    <TransferInputField name="receiverAccount"  {...ToAccountSelectProps} ></TransferInputField> */}

        <label>
          Select Account:
          <select required={true}
            value={fromAccount}
            onChange={(e) => {
              setSelectedFromAccount(e.target.value)
              setDisableButton(isValidFormData())
            }}
          >
            <option >-- Choose an account --</option>
            {accounts.map((account) => (
              <option key={account.accountNumber} value={account.accountNumber}>
                {account.accountNumber + ' - ' + account.accountHolderName}
              </option>
            ))}
          </select>
          {(fromAccount == null) && <span className="error">{"Please select From account"}</span>}

        </label>
        {transferTypeRef.current == "Intra" && <label>
          Select To Account:
          <select
            value={toAccount}
            onChange={(e) => {
              setSelectedTOAccount(e.target.value)
              setDisableButton(isValidFormData())
            }}
          >
            <option >-- Choose an account --</option>
            {toAccounts.map((account) => (
              <option key={account.accountNumber} value={account.accountNumber}>
                {account.accountNumber + ' - ' + account.accountHolderName}
              </option>
            ))}
          </select>
          {(toAccount == null) && <span className="error">{"Please select To account"}</span>}

        </label>
        }
        {/* {( beneficiaryTypeRef.current == "Internal" || beneficiaryTypeRef.current == "DomesticWire" ||
         beneficiaryTypeRef.current == "International"
        
      ) && <label>
        Select To Account:
        <select
          value={toAccount}
          onChange={(e) => setSelectedTOAccount(e.target.value)}
        >
          <option >-- Choose an account --</option>
          {toAccounts.map((account) => (
            <option key={account.accountNumber } value={account.accountNumber }>
              {account.accountNumber + ' - ' + account.accountHolderName}
    </option>
          ))}
        </select>
      </label>
      } */}

        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="e.g. 100.00"
          />
          {amountError && <span className="error">{amountError}</span>}
        </label>

        <TransferButton onTransfer={handleTransfer} disabled={disableButton} />

        {status && (
          <p className={`status ${status}`}>
            {status === 'loading' && 'Processing transfer...'}
            {status === 'success' && 'Transfer successful!'}
            {status === 'error' && 'Transfer failed. Try again.'}
          </p>
        )}

        {errorMessage && (
          <AlertDialog message={errorMessage} onClose={handleCloseDialog} />
        )}
      </form>
    </FormProvider>
  );
};

export default IntraTransferForm
