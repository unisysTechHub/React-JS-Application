import { createSlice } from '@reduxjs/toolkit';

const initialState = { userId: "default user", user: "" };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { addUserDetails } = userSlice.actions;

export const fetchUserDetails = () => async dispatch => {
  try {
    const response = await fetch("/userdetails");
    // parse response if needed
    dispatch(addUserDetails({ user: "user", userId: "USERiD" }));
  } catch (error) {
    dispatch(addUserDetails({ user: "user", userId: "userID" }));
  }
};

export default userSlice.reducer;
