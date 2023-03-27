import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../ContextApi/cart/CartContext";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";

const Cart = () => {
  const { cartItems, showCart, showCartItems, removeFromCart } =
    useContext(CartContext);
  // console.log(cartItems, showCart);
  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div
            style={{
              justifyContent: "flex-end",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaTimesCircle
              style={{ cursor: "pointer" }}
              aria-hidden="true"
              onClick={showCartItems}
            />
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <>
                <ul className="ul-items">
                  {cartItems?.map((item) => (
                    <li className="CartItem__item" key={item.id}>
                      <img
                        className="item-cart-photo"
                        src={item.photo}
                        alt="photosda"
                      />
                      <p className="item-cart-title">{item.title}</p>
                      <p className="item-cart-title">{item.price}</p>
                      <DeleteForeverSharpIcon
                        className="CartItem__button"
                        onClick={() => removeFromCart(item.id)}
                        color="error"
                        style={{ cursor: "pointer" }}
                      />
                    </li>
                  ))}
                </ul>
                <Link to="" className="finish-order" style={{ color: "black" }}>
                  Complete order
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
