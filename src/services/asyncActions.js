import { addProduct } from "../features/products"
import { createCartItem } from "../features/cart"


export function getproductsList (action) {
    return function (dispatch, getState) {
        fetch("../data/inventory.json")
        .then(response => response.json())
        .then(data => dispatch(addProduct(data.products)))
    } 
}

export function addToCart (action) {
    return function (dispatch, getState) {
        const storeState = getState()
        const isAlreadyPresent = storeState.cart.cartItems.find(product => product.id === action)
       

        if (!isAlreadyPresent) {
            const productToAdd = storeState.products.items.find(product => product.id === action)
            const newCartProduct = {
                ...productToAdd,
                quantity: 1
            }
            dispatch(createCartItem(newCartProduct))
        }
    }
}
