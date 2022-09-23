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
