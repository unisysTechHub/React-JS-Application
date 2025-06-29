

import { configureStore, createSelector, createSlice } from '@reduxjs/toolkit';
import { appStore } from './UserStore';

var fundDetails = {
    balance: { amount: 50, curreny: "INR" }
}

const UPDATE_FUND_DETAILS = "Update_fund_Detals"

export const fundDetailsReducer = (state = fundDetails, action) => {
    switch (action.type) {
        case UPDATE_FUND_DETAILS: {
            return { ...action.payload }
        }
        default:
            return state
    }
}


export function fetchFundDetails() {
    fetch("/fundetails").then((fundDetailsResponse) => {
        appStore.dispatch(updateFundDetails({ balance: { amount: 100, curreny: "INR" } }))
    }).catch((errorRespose) => {
        appStore.dispatch(updateFundDetails({ balance: { amount: 100, curreny: "INR" } }))

    })
}
function updateFundDetails(payload) {
    return { type: UPDATE_FUND_DETAILS, payload: payload }
}

export const fundDetailsStore = configureStore({ reducer: fundDetailsReducer, preloadedState: fundDetails })
