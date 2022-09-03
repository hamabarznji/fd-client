import { createSlice } from "@reduxjs/toolkit";

const lezzooSlice = createSlice({
    name: "lezzoo",
    initialState: {
        isAuthenticated: false,
        latitude: 0,
        longitude: 0,
        basket: [],
    },

    reducers: {
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },

        setCordinates: (state, action) => {
            state.latitude = action.latitude;
            state.longitude = action.longitude;
        },
        addToBasketHandler: (state, action) => {
            const foundedItem = state.basket.find(
                (basket) => basket.id === action.payload.id
            );
            if (foundedItem) {
                const index = state.basket.findIndex(
                    (item) => item.id === foundedItem?.id
                );
                state.basket.splice(index, 1);
                const updateItem = {
                    ...foundedItem,
                    ordereQty: foundedItem.ordereQty + 1,
                };
                state.basket.push(updateItem);
            } else {
                state.basket.push(action.payload);
            }
        },
        removeItemFromBasketHandler: (state, action) => {
            const index = state.basket.findIndex(
                (item) => item.id === action.payload
            );

            const foundedItem = state.basket.find(
                (item) => item.id === action.payload
            );
            console.log(foundedItem.ordereQty);
            const updatedItem = {
                ...foundedItem,
                ordereQty: foundedItem.ordereQty - 1,
            };

            if (updatedItem.ordereQty == 0) {
                state.basket.splice(index, 1);
            } else {
                state.basket.splice(index, 1);
                state.basket.push(updatedItem);
            }
        },

        clearAuth: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const lezzooActions = lezzooSlice.actions;
export const { setAuth, logs, getCondinates } = lezzooSlice.actions;
export default lezzooSlice.reducer;
