import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLoginService, userSignupService } from "../../../services/apis/auth/auth";

// for login action
export const userLoginThunk = createAsyncThunk(
    "auth/userLogin",
    async (data: LoginDetails, thunkApi) => {
        try {
            const response = await userLoginService(data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

// for login action
export const userSignupThunk = createAsyncThunk(
    "auth/userSignup",
    async (data: SignUpDetails, thunkApi) => {
        try {
            const response = await userSignupService(data);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);
