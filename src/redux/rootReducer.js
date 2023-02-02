import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./features/register/registerSlice";
import postsReducer from "./features/posts/postsSlice";



export const rootReducer = combineReducers({
  register:registerReducer,
  posts:postsReducer
});
