import { useNavigate } from 'react-router-dom'
import './TransferReview.css'
import { useCallback, useContext } from 'react'
import { FundTransferContext, useFundTransfer } from './FundTransferProvider'
import TransferButton from '../TransferButton'
import { transferFunds } from '../transferFunds'
import {motion} from 'framer-motion'
import { pageTransition } from './TransferFlow'
const buildTransferConfirmData = (transaction) => ({
  transactionId: transaction.transactionId,
  senderAccount: transaction.senderAccount,
  senderAccountType: transaction.senderAccountType,
  receiverAccount: transaction.receiverAccount,
  receiverAccountType: transaction.receiverAccountType,
  transferAmount: transaction.amount,
  transactionType: transaction.transactionType,
  transferType: transaction.transferType,
});
export const TransferReiview = (props) => {
  const navigate = useNavigate()
  const { selectedBeneficiary, selectedFromAccount,setTransferConfirmData ,amount} = useFundTransfer()
  
  const onSubmit = () => {
    navigate("/home/fundtransfer/domesticWire/status")
  }
  const handleTransfer = useCallback(async () => {

    //setStatus('loading');
    try {
      const data = await transferFunds(selectedFromAccount, selectedBeneficiary, amount, props.transferType);
      const transaction = data.transaction
      // console.log(JSON.stringify({
      //   transactionId: transaction.transactionId, senderAccount: transaction.senderAccount,
      //   senderAccountType: transaction.senderAccountType, receiverAccount: transaction.receiverAccount, receiverAccountType: transaction.receiverAccountType,
      //   transferAmount: transaction.amount, transactionType: transaction.transactionType, transferType: transaction.transferType
      // }))
      setTransferConfirmData(buildTransferConfirmData(transaction))
      console.log(JSON.stringify(data))
      // setStatus("data.message");
      onSubmit()

    } catch (err) {
      //setStatus("data.message");
      //setErrorMessage(err.message || 'Transfer failed');
    }
  }, [selectedFromAccount, selectedBeneficiary, amount]);
  return (
    <motion.div className="transfer-review-container">
      <h1 className="title">Transfer Review</h1>
      <div className="transfer-table">
        <div className="row">
          <div className="cell label">From Account No</div> <div className="cell value">{selectedFromAccount.accountNumber}</div>
        </div>
        <div className="row">

          <div className="cell label">Beneficiary Account No</div> <div className="cell value">{selectedBeneficiary.accountNumber}</div>
        </div>
        <div className="row">
          <div className="cell label">Beneficiary Name</div> <div className="cell value">{selectedBeneficiary.beneficiaryName}</div>
        </div>
        <div className="row">

          <div className="cell label">Transfer Amount</div> <div className="cell value">{amount}</div>

        </div>
      </div>
      <TransferButton onTransfer={handleTransfer} />
      {/* <div className='button'>
      <button className='submit' onClick={onSubmit}  >Next</button>
        </div> */}

    </motion.div>
  )
}



