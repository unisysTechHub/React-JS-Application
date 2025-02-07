import React, { useReducer } from "react";
import { combineReducers, configureStore, createSelector, createSlice } from '@reduxjs/toolkit';
import { fundDetailsReducer } from "./FundStore";


var initalUserStore = {userId : "default user"
} 
const ADD_USER_DETAILS = "ADD_USER_DETAILS"
const userReducer = (state = initalUserStore, action) => {
    switch (action.type) {
        case ADD_USER_DETAILS:
            return {  ...action.payload };
        default:
            return state;
    }
}
//initalUserStore.prototype.fetchUserDetails = fetchUserDetails
function addUserDetails(payload) {
    return {
        type: ADD_USER_DETAILS,
        payload,
    }
}

export function fetchUserDetails() {
    fetch("/userdetails").then((userDetailsResponse) => {
        appStore.dispatch(addUserDetails({ user: "RameshErrr", userId: "Ranesh5petnaSucess" }))
    }).catch((error) => {
        appStore.dispatch(addUserDetails({ user: "RameshErrr", userId: "Ranesh5petnaErr" }))

    })
}

// export const userStoreSlice  = createSlice({
//     name: 'userStore',
//     initialState: {
//               },
//     reducers: [userReducer
//     ],
//       // other reducers...
//     },
//   );
export const selectUsertata = state => state

// Create a memoized selector using createSelector
// export const selectUserStore = createSelector(
//   [selectUsertata],
//   data => data
// );
const appReducers =combineReducers({userStore : userReducer, fundDetailsStore : fundDetailsReducer})
export  const appStore = configureStore({ reducer: appReducers })

