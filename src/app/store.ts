import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../redux/reducers/counter-slice';
import userReducer from '../redux/reducers/user-slice';
import cartReducer from '../redux/reducers/cart-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        cart: cartReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
