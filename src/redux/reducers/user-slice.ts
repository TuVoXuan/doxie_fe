import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { signIn } from '../actions/user-actions';

export interface IUserState {
    isLogin: boolean;
    data: IUserStore;
}

const initialState: IUserState = {
    isLogin: false,
    data: {
        avatar: '',
        district: '',
        email: '',
        hamlet: '',
        id: '',
        name: '',
        phone: '',
        province: '',
        streetAddress: '',
        ward: '',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(signIn.fulfilled, (state, action: PayloadAction<IUserStore>) => {
                state.isLogin = true;
                state.data = action.payload;
            })
            .addCase(signIn.rejected, (state) => {
                state = initialState;
            });
    },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
