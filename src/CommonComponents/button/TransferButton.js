import './TransferButton.css'
export const TransferButton = ({onClick,title}) => {
return ( <div className='button'>
      <button className='submit' onClick={onClick}  >Next</button>
        </div>)
}