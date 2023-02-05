import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./features/register/registerSlice";
import postsReducer from "./features/posts/postsSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./features/login/loginSlice"



const persistConfig = {
  storage,
  key: "crud-user",
  whitelist: ["userInfo"],
};

const PeristedLoginReducer = persistReducer(persistConfig, loginReducer);

export const rootReducer = combineReducers({
  register:registerReducer,
  posts:postsReducer,
  login:PeristedLoginReducer
});
