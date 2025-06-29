
// actionTypes.js
// actionTypes.js
export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';
export const getAccountsRequestBody = JSON.stringify({
  userId: "user123"
});
export const fetchAccounts = () => {
  return async dispatch => {
    dispatch({ type: FETCH_ACCOUNTS_REQUEST });

    try {
      const response = await fetch("http://127.0.0.1:8082/api/user/accounts", {
        body: getAccountsRequestBody,
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      // const accounts = data.accountList?.map((account) => ({
      //   accountNumber: account.accountNumber,
      //   accountHolderName: account.billingDetails?.name,
      // })) 

      dispatch({ type: FETCH_ACCOUNTS_SUCCESS, payload: data.accountList });
    } catch (error) {
      console.error("Fetch error:", error);
      const accounts = [{ accountNumber: "123344", accountHolderName: "test", usBankAccount :{account_type: "Saving" }},
      { accountNumber: "1233445", accountHolderName: "test45", usBankAccount:{account_type: "Saving"} }];
      dispatch({ type: FETCH_ACCOUNTS_SUCCESS, payload: accounts });
      // dispatch({ type: FETCH_ACCOUNTS_FAILURE, error: "get accounts API error" });
    }
  };
};




const initialState = {
  loading: false,
  accounts: [],
  error: ''
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS_REQUEST:
      return { ...state, loading: true, error: '' };
    case FETCH_ACCOUNTS_SUCCESS:
      return { ...state, loading: false, accounts: action.payload };
    case FETCH_ACCOUNTS_FAILURE:
      return { ...state, loading: false, accounts: [], error: action.error };
    default:
      return state;
  }
};