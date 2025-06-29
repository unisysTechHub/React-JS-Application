import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import './InputField.css'; // moved from BeneficiaryForm.css
import { validationRules } from '../../FundTransfer/Beneficiary/AddBeneficiary/FiledValidations';


const InputField = forwardRef(({ name, label, value, type = "text", options = [], disabled = false }, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const rules = validationRules[name] || {};

  const isSelect = options.length > 0;

  return (

    
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      {isSelect ? (
        <select
          id={name}
          name={name}
          {...register(name, rules)}
          className={errors[name] ? "error" : ""}
        >
          <option value="">-- Select --</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          {...register(name, rules)}
          className={errors[name] ? "error" : ""}
          disabled={disabled}
        />
      )}
      {errors[name] && <span className="error-message">{errors[name].message}</span>}
    </div>
  );
});

export default InputField;
