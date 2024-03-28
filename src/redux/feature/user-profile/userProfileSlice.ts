import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import {
    fetchAllOptionThunk, fetchUserProfileThunk, fetchUserThunk, resetPasswordThunk, updateUserProfileThunk
} from "./userProfileThunk";

interface UserProfileState {
    status: "idle" | "loading" | "succeeded" | "failed";
    userDetails: AxiosResponse | null;
    userProfileDetails: AxiosResponse | null;
    error: AxiosResponse | string | null;
    options: AxiosResponse | null;
}

const initialState = {
    status: "idle",
    userDetails: null,
    userProfileDetails: null,
    error: null,
    options: null
};

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        // fetch user details
        builder.addCase(fetchUserThunk.pending, (state: UserProfileState) => {
            state.status = "loading";
        });
        builder.addCase(
            fetchUserThunk.fulfilled,
            (state: UserProfileState, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.userDetails = action.payload.data;
            }
        );
        builder.addCase(
            fetchUserThunk.rejected,
            (state: UserProfileState, action: PayloadAction<any>) => {
                state.status = "failed";
                state.error = action.payload ? action.payload : "Unknown error";
            }
        );

        // fetch options
        builder.addCase(fetchAllOptionThunk.pending, (state: UserProfileState) => {
            state.status = "loading";
        });
        builder.addCase(
            fetchAllOptionThunk.fulfilled,
            (state: UserProfileState, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.options = action.payload.data.data;
            }
        );
        builder.addCase(
            fetchAllOptionThunk.rejected,
            (state: UserProfileState, action: PayloadAction<any>) => {
                state.status = "failed";
                state.error = action.payload ? action.payload : "Unknown error";
            }
        );

        // fetch userProfile details
        builder.addCase(fetchUserProfileThunk.pending, (state: UserProfileState) => { state.status = "loading"; });
        builder.addCase(
            fetchUserProfileThunk.fulfilled,
            (state: UserProfileState, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.userProfileDetails = action.payload.data;
            }
        );
        builder.addCase(
            fetchUserProfileThunk.rejected,
            (state: UserProfileState, action: PayloadAction<any>) => {
                state.status = "failed";
                state.error = action.payload.data ? action.payload.data : "Unknown error";
            }
        );


        // update profile
        builder.addCase(updateUserProfileThunk.pending, (state: UserProfileState) => {
            state.status = "loading";
        });
        builder.addCase(
            updateUserProfileThunk.fulfilled,
            (state: UserProfileState, action: any) => {
                state.status = "succeeded";
                state.userProfileDetails = action?.meta.arg;
            }
        );
        builder.addCase(
            updateUserProfileThunk.rejected,
            (state: UserProfileState, action: PayloadAction<any>) => {
                state.status = "failed";
                state.error = action.payload ? action.payload : "Unknown error";
            }
        );
    },
});

export default userProfileSlice.reducer;
