import { addProduct } from "../features/products"


export function getproductsList (action) {
    return function (dispatch, getState) {
        fetch("../data/inventory.json")
        .then(response => response.json())
        .then(data => dispatch(addProduct(data.products)))
    } 
}