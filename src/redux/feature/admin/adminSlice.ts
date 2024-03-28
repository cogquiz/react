import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
    fetchAllUserThunk
} from "./adminThunk";

interface AdminState {
    status: "idle" | "loading" | "succeeded" | "failed";
    responseData: null;
    data: AxiosResponse | null;
    error: AxiosResponse | string | null;
    signUpState: AxiosResponse | string | null;
}

const initialState = {
    status: "idle",
    data: null,
    responseData: null,
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        // for login users only
        builder.addCase(fetchAllUserThunk.pending, (state: AdminState) => {
            state.status = "loading";
        });
        builder.addCase(
            fetchAllUserThunk.fulfilled,
            (state: AdminState, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.data = action.payload;
            }
        );
        builder.addCase(
            fetchAllUserThunk.rejected,
            (state: AdminState, action: PayloadAction<any>) => {
                state.status = "failed";
                state.error = action.payload ? action.payload : "Unknown error";
            }
        );
    },
});

export default adminSlice.reducer;
