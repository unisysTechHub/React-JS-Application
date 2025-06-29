
export const FETCH_BENEFICIARIES_REQUEST = 'FETCH_ENEFICIARIES_REQUEST';
export const FETCH_BENEFICIARIES_SUCCESS = 'FETCH_ENEFICIARIES_SUCCESS';
export const FETCH_BENEFICIARIES_FAILURE = 'FETCH_ENEFICIARIES_FAILURE';

const initialState = {
  loading: false,
  beneficiaries: null,
  error: ''
};
const fallbackBeneficiaries = [
  {
    "accountType": "Checking",
    "transferType": "DomesticWire",
    "transferTypeACH": null,
    "country": "US",
    "currency": "usd",
    "iban": null,
    "swiftBicCode": null,
    "accountNumber": 987654322,
    "beneficiaryName": "John Doe",
    "bankName": "ABC Bank",
    "email": "johndoe@example.com",
    "phoneNumber": "123-456-7890"
  }, {
    "accountType": "Checking",
    "transferType": "International",
    "transferTypeACH": null,
    "country": "US",
    "currency": "usd",
    "iban": 23232323232,
    "accountNumber": 987654322,
    "beneficiaryName": "John Doe",
    "bankName": "ABC Bank",
    "email": "johndoe@example.com",
    "phoneNumber": "123-456-7890"
  }];
export const beneficiaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BENEFICIARIES_REQUEST:
      console.log("FETCH_BENEFICIARIES_REQUEST:")
      return { ...state, loading: true, error: '' };
    case FETCH_BENEFICIARIES_SUCCESS:
      return { ...state, loading: false, beneficiaries: action.payload };
    case FETCH_BENEFICIARIES_FAILURE:
      return { ...state, loading: false, beneficiaries: [], error: action.error };
    default:
      return state;
  }
};

const getBeneficiariesRequestBody = JSON.stringify({
  userId: "user123"

});

export const fetchBeneficiaries = (beneficiaryType) => {
  function getfilterBeneficiaries(beneficiary) {
    return beneficiary.transferType === beneficiaryType
  }
  return async dispatch => {
    dispatch({ type: FETCH_BENEFICIARIES_REQUEST });

    try {
      const response = await fetch("http://127.0.0.1:8082/api/transfer/beneficiaries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: getBeneficiariesRequestBody,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      dispatch({ type: FETCH_BENEFICIARIES_SUCCESS, payload: data.beneficiarylist });
    } catch (error) {
      console.error("Fetch error:", error);

      // In dev mode, fallback

      dispatch({ type: FETCH_BENEFICIARIES_SUCCESS, payload: fallbackBeneficiaries });

      // You may also want to dispatch failure
      //dispatch({ type: FETCH_BENEFICIARIES_FAILURE, error: error.message });
    }
  };
};

