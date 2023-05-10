import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_HIDE_CART, INCREASE_CART } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case INCREASE_CART: {
      return {
        ...state,
        cartTotal: !state.showCart,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
