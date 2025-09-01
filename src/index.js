import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { appStore } from './Store/Store'
import { Provider } from 'react-redux';
import { Home } from './Home/Home';
import { fundDetailsStore } from './Store/FundStore';
import * as schedule from './Store/EMIScheduleStore'
import EMISchedule from './EMISchedule/EMISchedule';
import { BeneficiaryTypes } from './FundTransfer/Beneficiary/Beneficiary';
import RouterComponent from './FundTransfer/Router/RouterComponent';
import NavMenu, { SideNav } from './CommonComponents/Navigation/Nav-Menu/Nav-menu';
import { SideNavMenu } from './CommonComponents/Navigation/Side-nav-menu/Side-nav-menu';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import MainDashboard from './FundTransfer/Transfer/TransactionHistory/MainDashboard';
import EmiScheduleSkeleton from './EMISchedule/emiScheduleSkeleton';
import EMIscheduleCalc from './EMISchedule/EMISchedule';

const queryClient = new QueryClient(); // ✅ lowercase – instance


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore} >
      <h3 style={{color:'white', width:"200px", textAlign:"center"}}> React JS app</h3>
      <NavMenu></NavMenu>
      {/* <QueryClientProvider client={queryClient}>
      <EMIscheduleCalc></EMIscheduleCalc>
  </QueryClientProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
