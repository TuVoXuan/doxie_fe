import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { incrementAsync } from '../actions/counter-actions';

const initialState: ICartItem[] = [
    {
        id: 'a8157056-d4a1-4065-b7de-798b8afe91a7',
        productId: 'f76731c6-cd74-449a-bcef-40eb5d55584f',
        category: 't shirts',
        defaultImg: './assets/images/women/TShirts/TShirt1.png',
        name: 'Women TShirts MT21025',
        price: 50,
        size: 'S',
        quantity: 1,
    },
    {
        id: '7b4b8b60-c44f-4e11-b296-8a0fe0f58e60',
        productId: '0d23f948-9f2a-4527-a415-28c28ce38289',
        category: 't shirts',
        defaultImg: './assets/images/women/TShirts/TShirt2.png',
        name: 'Women TShirts MT21026',
        price: 50,
        size: 'L',
        quantity: 2,
    },
    {
        id: '8beb5d92-962f-4271-aa45-a301246cfc9d',
        productId: '550f82c7-4f9f-48f9-81dd-057717fe1a22',
        category: 'jacket',
        defaultImg: './assets/images/kids/Jacket/Jacket4.png',
        name: 'Appliquéd Baseball Jacket',
        price: 49.99,
        size: 'L',
        quantity: 2,
    },
];

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
        },
        removeAll: (state) => {
            state.splice(0);
        },
    },
});

export const { remove, changeQuantity, removeAll } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
