import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { incrementAsync } from '../actions/counter-actions';

const initialState: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<string>) => {
            const delCartItemId = action.payload;
            const index = state.findIndex((item) => item.id === delCartItemId);
            if (index >= 0) {
                state.splice(index, 1);
            }

            localStorage.setItem('cart', JSON.stringify(state));
        },
        changeQuantity: (state, action: PayloadAction<IChangeQuantity>) => {
            const itemID = action.payload.id;
            const foundItem = state.find((item) => item.id === itemID);
            if (foundItem) {
                if (action.payload.type === 'increase') {
                    foundItem.quantity += 1;
                } else if (foundItem.quantity > 1) {
                    foundItem.quantity -= 1;
                }
            }

            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeAll: (state) => {
            state.splice(0);
            localStorage.setItem('cart', '[]');
        },
        add: (state, action: PayloadAction<ICartItem>) => {
            const item = action.payload;
            const data = state.find((e) => e.productId === item.productId && e.size === item.size);

            if (data) {
                data.quantity += 1;
            } else {
                state.push(item);
            }

            localStorage.setItem('cart', JSON.stringify(state));
        },
    },
});

export const { remove, changeQuantity, removeAll, add } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
