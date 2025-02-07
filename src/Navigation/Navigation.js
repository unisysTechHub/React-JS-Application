import React, { useEffect } from 'react';
// customHistory.js
import { createBrowserHistory } from 'history';
import Component1 from '../Component1/Component1';
import "./Navigation.css"
import { BrowserRouter as Router, Route, Link, Routes ,Switch, useNavigate } from 'react-router-dom';
import { TabLayout } from '../Home/Home';


const customHistory = createBrowserHistory();
export const Component1Routes = { main : "/main", child1: "/child1", child2:"/child2"}
export const useCustomHistory = () => { 
  return customHistory;
};

export const Component1Navigation = () => {
    const navigate = useNavigate()
  
    const addRoute = (route) => {
      navigate(route)
    };
  
    // const navigateToComponent1_2 = () => {
    //   history.push('/component2');
    // };

    // const onBack = () => {
    //     history.back()
    // }
    
    return (
        <Component1 addRoute={addRoute}></Component1>
    );
  };