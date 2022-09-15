import { createAsyncThunk } from '@reduxjs/toolkit';
import counterApi from '../../api/counter-api';

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number, thunkAPI) => {
        try {
            const response = await counterApi.fetchCount(amount);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
