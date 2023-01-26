// For Add Item to Cart
export const addCart = (player) => {
    return{
        type : "ADDITEM",
        payload : player
    }
}

//For Delete Item From Cart
export const delCart = (player) => {
    return{
        type : "DELITEM",
        payload : player
    }
}