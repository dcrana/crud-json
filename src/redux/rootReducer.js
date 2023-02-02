import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./features/register/registerSlice";



export const rootReducer = combineReducers({
  register:registerReducer
});
