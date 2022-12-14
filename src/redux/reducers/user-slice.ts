import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getCurrentUser, signIn, signUp, updateProfile } from '../actions/user-actions';

export interface IUserState {
    isLogin: boolean;
    data: IUserStore;
}

const initialState: IUserState = {
    isLogin: false,
    data: {
        district: '',
        email: '',
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
    reducers: {
        signOut: (state) => {
            (state.isLogin = false), (state.data = initialState.data);
            localStorage.removeItem('userId');
        },
    },
    extraReducers(builder) {
        builder
            .addCase(signIn.fulfilled, (state, action: PayloadAction<IUserStore>) => {
                state.isLogin = true;
                state.data = action.payload;
                localStorage.setItem('userId', action.payload.id);
            })
            .addCase(signIn.rejected, (state) => {
                state.isLogin = false;
                state.data = initialState.data;
            });
        builder
            .addCase(signUp.fulfilled, (state, action: PayloadAction<IUserStore>) => {
                state.isLogin = true;
                state.data = action.payload;
                localStorage.setItem('userId', action.payload.id);
            })
            .addCase(signUp.rejected, (state) => {
                state.isLogin = false;
                state.data = initialState.data;
            });
        builder.addCase(updateProfile.fulfilled, (state, action: PayloadAction<IUpdateProfile>) => {
            state.data.name = action.payload.name;
            state.data.phone = action.payload.phone;
            state.data.email = action.payload.email;
            state.data.province = action.payload.province;
            state.data.district = action.payload.district;
            state.data.ward = action.payload.ward;
            state.data.streetAddress = action.payload.streetAddress;
        });
        builder
            .addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<IUserStore>) => {
                state.isLogin = true;
                state.data = action.payload;
                localStorage.setItem('userId', action.payload.id);
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.isLogin = false;
                state.data = initialState.data;
                localStorage.removeItem('userId');
            });
    },
});
export const { signOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
