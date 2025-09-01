
// actionTypes.js
// actionTypes.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiConfig from './ApiConfig';

const getAccountsRequestBody = JSON.stringify({ userId: 'user123' });

export const fetchAccounts = createAsyncThunk(
  'accounts/fetchAccounts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(ApiConfig.baseURL +"/api/user/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: getAccountsRequestBody,
      });

      if (!response.ok) throw new Error('Network response not ok');

      const data = await response.json();
      return data.accountList; // payload for fulfilled
    } catch (error) {
      console.error("Fetch error:", error);
      // fallback accounts
      return [
        { accountNumber: "123344", accountHolderName: "test", usBankAccount: { account_type: "Saving" } },
        { accountNumber: "1233445", accountHolderName: "test45", usBankAccount: { account_type: "Saving" } }
      ];
      // or use rejectWithValue(error.message) if you want failure action
    }
  }
);

const accountSlice = createSlice({
  name: 'accounts',
  initialState: {
    loading: false,
    accounts: [],
    error: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAccounts.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload;
      })
      .addCase(fetchAccounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.accounts = [];
      });
  }
});

export default accountSlice.reducer;
