import { forwardRef, Fragment } from "react";
import '../Transfer/styles/Transfer.css'
import { useFormContext } from "react-hook-form";
import { validationRules } from "../Beneficiary/AddBeneficiary/FiledValidations";
import { TransferValidationRules } from "../Transfer/TransferValidationRules";
export const TransferInputField = forwardRef(({ name, selectedValue, onChangeFn, options = [] }, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const rules = TransferValidationRules[name] || {};

  const isSelect = options.length > 0;

  return (

    <Fragment>
      <label>
        Select Account:
        <select
          id={name}
          name={name}
          value={selectedValue}
          onChange={(e) => onChangeFn(e)}
          className={errors[name] ? "error" : ""}
        >
          <option value="">-- Choose an account --</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

    </Fragment>)

})