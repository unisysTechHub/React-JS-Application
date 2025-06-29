import "./Beneficiary.css";
import logo from '../../logo.svg';
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBeneficiaries } from "../../Store/BeneficiariesStore";
import { fetchAccounts } from "../../Store/AccountsStore";
const beneficiaryTypes = ["Intra", "Internal", "DomesticWire", "International"];

function getBeneficiaryTypeCardModel(type) {
  return { type: type, imageSrc: logo };
}

export const BeneficiaryTypes = () => {
  const dispatch  = useDispatch()
  const beneficiariesModel = beneficiaryTypes.map(getBeneficiaryTypeCardModel);
  const navigate = useNavigate()
  const handleClick = (type) => {
    navigate(`${type.toLowerCase()}`);
  };
  
  return (
    <Fragment>
      <div className="beneficiary-container">
        <div className="beneficiary-item-grid">
          {beneficiariesModel.map((cardModel, index) => (
            <div className="beneficiary-item" key={index}
              onClick={() => handleClick(cardModel.type)}
            >
              <img src={cardModel.imageSrc} alt={cardModel.type} />
              <p>{cardModel.type}</p>

            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
