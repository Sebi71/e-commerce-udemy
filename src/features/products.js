import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: undefined
}

export const products = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.item = action.payload
        }
    }
})

export const { addProduct } = products.actions
export default products.reducer