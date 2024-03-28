import { combineReducers, Reducer as ReduxReducer } from "@reduxjs/toolkit";
import authSlice from "../feature/auth/authSlice";
import adminSlice from "../feature/admin/adminSlice";
import userProfileSlice from "../feature/user-profile/userProfileSlice";

// Here you have to import all the features slice function here, if there is any individual feature function export ,then you can export it from store.
export const rootReducer: ReduxReducer = combineReducers({
  auth: authSlice,
  admin: adminSlice,
  userProfile: userProfileSlice
}) as ReduxReducer;
