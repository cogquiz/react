import { createAsyncThunk } from "@reduxjs/toolkit";
import { addNewParticipant, resetPassword, updateUserProfileService, userDetailsService, userProfileDetailsService, userProfileOptionService } from "../../../services/apis/userprofile/userprofile";

// for login action
export const fetchAllOptionThunk = createAsyncThunk(
  "user-profile/fetchAllOptionThunk",
  async (_, thunkApi) => {
    try {
      const response = await userProfileOptionService();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchUserProfileThunk = createAsyncThunk(
  "user-profile/fetchUserProfileThunk",
  async (userId: string, thunkApi) => {
    try {
      const response = await userProfileDetailsService(userId);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchUserThunk = createAsyncThunk(
  "user-profile/fetchUserThunk",
  async (userId: string, thunkApi) => {
    try {
      const response = await userDetailsService(userId);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  "user-profile/updateUserProfileThunk",
  async (data: any, thunkApi) => {
    try {
      const response = await updateUserProfileService(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addNewParticipantThunk = createAsyncThunk(
  "provider/addParticipant",
  async (data: any, thunkApi) => {
    try {
      const response = await addNewParticipant(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "provider/resetPassword",
  async (data: any, thunkApi) => {
    try {
      const response = await resetPassword(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);