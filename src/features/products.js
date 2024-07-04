import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: undefined
  }
  
  export const products = createSlice({
    name: "products",
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.items = action.payload
      }
    },
    extraReducers: {
      ["cart/createCartItem"]: (state, action) => {
        state.items.find(el => el.id === action.payload.id).picked = true
      },
      ["cart/deleteCart"]: (state, action) => {
        state.items.find(product => product.id === action.payload).picked = false
      }
    }
})

export const { addProduct } = products.actions
export default products.reducer