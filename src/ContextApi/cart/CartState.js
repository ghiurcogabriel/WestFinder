import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_HIDE_CART } from "../Types";

const CartState = ({children}) => {
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (items) => {
    dispatch({ type: ADD_TO_CART, payload: items });
    // localStorage.setItem('products', JSON.stringify(items));
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
    // localStorage.removeItem('products');
  };

  const showCartItems = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };


  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        showCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;