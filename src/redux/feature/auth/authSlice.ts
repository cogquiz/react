import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
    userLoginThunk,
    userSignupThunk,
} from "./authThunk";

interface AuthState {
    status: "idle" | "loading" | "succeeded" | "failed";
    userData: AxiosResponse | null;
    error: AxiosResponse | string | null;
}

const initialState = {
    status: "idle",
    userData: [],
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        // for login users only
        builder.addCase(userLoginThunk.pending, (state: AuthState) => {
            state.status = "loading";
        });
        builder.addCase(
            userLoginThunk.fulfilled,
            (state: AuthState, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.userData = action.payload.data;
            }
        );
        builder.addCase(
            userLoginThunk.rejected,
            (state: AuthState, action: PayloadAction<any>) => {
                state.status = "failed";
                state.error = action.payload.data ? action.payload.data : "Unknown error";
            }
        );
        // for create user only
        builder.addCase(userSignupThunk.pending, (state: AuthState) => {
            state.status = "loading";
        });
        builder.addCase(
            userSignupThunk.fulfilled,
            (state: AuthState, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.userData = action.payload.data;
            }
        );
        builder.addCase(
            userSignupThunk.rejected,
            (state: AuthState, action: PayloadAction<any>) => {
                state.status = "failed";
                state.error = action.payload.data ? action.payload.data : "Unknown error";
            }
        );
    },
});

export default authSlice.reducer;
