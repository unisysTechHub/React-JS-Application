import { useContext } from 'react';
import logo from '../../../logo.svg';
import './TransferSuccessFailure.css'
import { FundTransferContext, useFundTransfer } from './FundTransferProvider';
import { TransferButton } from '../../../CommonComponents/button/TransferButton';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

export const TransferSucessFailure = ({ status = "Success" }) => {
  const navigate = useNavigate()
  const { transferConfirmData } = useFundTransfer()
 const navigateTo = () => {
  navigate("/home/fundtransfer")
 }
  return (
    <motion.div className="container">
      <div >
        <img src={logo} className='logo' alt='success or error ' />
        <p className='message'>Success</p>

      </div>
      {Object.entries(transferConfirmData).map(([key, value]) => (
        <div className="row" key={key}>
          <div className="cell label">{key}</div>
          <div className="cell value">
            {value}
          </div>
        </div>
      ))}
      <TransferButton onClick={navigateTo} title="Back to Transfer Home">  </TransferButton>
    </motion.div>
  )
}