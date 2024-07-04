import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        createCartItem: (state, action) => {
            state.cartItems.push(action.payload)
        },
        updateItem: (state, action) => {
            state.cartItems.find(product => product.id === action.payload.id).quantity = Number(action.payload.value)
        },
        deleteCart: (state, action) =>  {
            const cartToRemove = state.cartItems.findIndex(product => product.id === action.payload)
            state.cartItems.splice(cartToRemove, 1)
        }
    }
})

export const { createCartItem, updateItem, deleteCart } = cart.actions
export default cart.reducer