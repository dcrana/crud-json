import {  createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    userInfo: {},
  },
  reducers: {
    userLogin: (state, action) => {
      state.userInfo = action?.payload;
    },
    userLogout: (state, action) => {
      state.userInfo = {};
    },
  },
  extraReducers: {
  },
});
export const {userLogin,userLogout} =loginSlice.actions;
export default loginSlice.reducer
