export const TransferValidationRules = {
  fromAccount: {
    required: "Account Number is required",

  },

  beneficiary: {
    required: "Account Number is required",

  },
  amount: {
    required: "Amount is required",
    pattern: {
      value: /^\d+(\.\d{0,2})?$/,
      message: "Amount mush contain two digits"
    }
  }

}