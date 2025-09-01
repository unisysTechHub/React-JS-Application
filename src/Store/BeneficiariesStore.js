import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiConfig from './ApiConfig';

const getBeneficiariesRequestBody = JSON.stringify({ userId: "user123" });

const fallbackBeneficiaries = [
  { accountType: "Checking", transferType: "DomesticWire", country: "US", currency: "usd", accountNumber: 987654322, beneficiaryName: "John Doe", bankName: "ABC Bank", email: "johndoe@example.com", phoneNumber: "123-456-7890" },
  { accountType: "Checking", transferType: "International", country: "US", currency: "usd", iban: 23232323232, accountNumber: 987654322, beneficiaryName: "John Doe", bankName: "ABC Bank", email: "johndoe@example.com", phoneNumber: "123-456-7890" }
];

export const fetchBeneficiaries = createAsyncThunk(
  'beneficiaries/fetchBeneficiaries',
  async (beneficiaryType, { rejectWithValue }) => {
    try {
      const response = await fetch(ApiConfig.baseURL + "/api/transfer/beneficiaries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: getBeneficiariesRequestBody,
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      return data.beneficiarylist.filter(b => b.transferType === beneficiaryType);
    } catch (error) {
      console.error("Fetch error:", error);
      return fallbackBeneficiaries; // fallback
    }
  }
);

const beneficiarySlice = createSlice({
  name: 'beneficiaries',
  initialState: { loading: false, beneficiaries: [], error: '' },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBeneficiaries.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchBeneficiaries.fulfilled, (state, action) => {
        state.loading = false;
        state.beneficiaries = action.payload;
      })
      .addCase(fetchBeneficiaries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.beneficiaries = [];
      });
  }
});

export default beneficiarySlice.reducer;
