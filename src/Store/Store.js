import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './AccountsStore';
import beneficiaryReducer from './BeneficiariesStore';
import userReducer from './UserStore';
import { fundDetailsReducer } from './FundStore';
import emiReducer from './EMIScheduleStore';

export const appStore = configureStore({
  reducer: {
    userStore: userReducer,
    fundDetailsStore: fundDetailsReducer,
    accountsStore: accountReducer,
    beneficiaryStore: beneficiaryReducer,
    emiStore: emiReducer
  }
});