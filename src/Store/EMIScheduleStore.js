// emiSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { appStore } from './UserStore';

// var initalEMITStore = {data : []} 
// const GET_EMI_SECHEDULE = "FETCH_EMI_SCHEDULE"
// const emiReducer = (state = initalEMITStore, action) => {
//     switch (action.type) {
//         case GET_EMI_SECHEDULE:
//           console.log( "action pay load " + action.payload)
//             return  action.payload ;
//         default:
//           console.log("schedule data")
//             return scheduleData;
//     }
// }
// //initalUserStore.prototype.fetchUserDetails = fetchUserDetails
// function getemiScheduleAction(payload) {
//     return {
//         type: GET_EMI_SECHEDULE,
//         payload,
//     }
// }

// export const emiScheduleRequestBody = JSON.stringify({
//   principal: 100000,
//   annualRate: 10,
//   tenureYears: 1
// });
// export function fetchEMIScehdule() {
//   fetch("http://127.0.0.1:8080/api/loan/schedule", {
//     body: emiScheduleRequestBody,
//     method: "POST",
//     headers: [["Content-Type", "application/json"]]
//   })
//     .then((response) => response.json())
//     .then((resonse) => {
//       appStore.dispatch(getemiScheduleAction(resonse));
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//      //appStore.dispatch(getemiScheduleAction(scheduleData));
//     });

// }


// export default emiReducer;

// export  const scheduleData = [
//     {
//       month: 1,
//       emi: 8791.59,
//       interest: 833.33,
//       principalComponent: 7958.26,
//       balance: 92041.74
//     },
//     {
//       month: 2,
//       emi: 8791.59,
//       interest: 767.01,
//       principalComponent: 8024.58,
//       balance: 84017.16
//     }
//   ];


//   // const fetchUser = () => {
//   //     return async (dispatch) => {
//   //       dispatch({ type: 'FETCH_USER_REQUEST' });
    
//   //       try {
//   //         const response = await fetch('/api/user');
//   //         const data = await response.json();
//   //         dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });
//   //       } catch (error) {
//   //         dispatch({ type: 'FETCH_USER_ERROR', error });
//   //       }
//   //     };
//   //   };
    