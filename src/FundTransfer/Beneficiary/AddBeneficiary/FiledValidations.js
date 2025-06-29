export const validationRules = {
  AccountNumber: {
    required: "Account Number is required",
    pattern: {
      value: /^\d+$/,
      message: "Account Number must contain only digits",
    },
  },
  accountType: {
    required: "Account Type is required",
  },
  transferType: {
    required: "Transfer Type is required",
  },
  BankName: {
    required: "Bank Name is required",
  },
  BeneficiaryName: {
    required: "Beneficiary Name is required",
  },
  PhoneNumber: {
    required: "Phone Number is required",
    pattern: {
      value: /^[0-9]{10,15}$/,
      message: "Invalid phone number format",
    },
  },
  Email: {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email format",
    },
  },
  country: {
    required: "Country is required",
  },
  currency: {
    required: "Currency is required",
  },
  iban: {
    pattern: {
      value: /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/,
      message: "Invalid IBAN format",
    },
  },
  swiftBicCode: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
      message: "Invalid SWIFT/BIC Code",
    },
  },
};
