import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/user-api';

export const signIn = createAsyncThunk('user/signIn', async (data: ISignIn, thunkAPI) => {
    try {
        const response = await userApi.signIn(data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const signUp = createAsyncThunk('user/signUp', async (data: ISignUP, thunkAPI) => {
    try {
        const response = await userApi.signUp(data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateProfile = createAsyncThunk(
    'user/updateProfile',
    async (data: IUpdateProfileData, thunkAPI) => {
        try {
            const response = await userApi.updateProfile(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
