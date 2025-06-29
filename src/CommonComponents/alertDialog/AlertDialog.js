import React from 'react';
import './AltertDialog.css';
const AlertDialog = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-dialog">
        <h3>Error</h3>
        <p>{message}</p>
        <button className="dialog-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default AlertDialog;




