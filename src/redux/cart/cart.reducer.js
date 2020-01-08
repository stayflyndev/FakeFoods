import CartActionTypes from "./cart.types"


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducr = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART: //"toggle_cart"
        return {
            ...state,
            hidden: !state.hidden
        };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state
    }
}

export default cartReducr