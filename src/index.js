import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {appStore } from './Store/UserStore'
import { Provider } from 'react-redux';
import App1 from './Router1/Router';
import { Component1Navigation } from './Navigation/Navigation';
import App11 from './Router1/Router';
import { Home } from './Home/Home';
import { fundDetailsStore } from './Store/FundStore';
import { FunHome } from './FunPractice/FunHome';
import { CenterContainer } from './FunPractice/CenterContainer';
import { HorizontalPager, OverlappingDivs } from './FunPractice/HorizontalPager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore} >
      <div id="root">
        <OverlappingDivs></OverlappingDivs>

        </div>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
