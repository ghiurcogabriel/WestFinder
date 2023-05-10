import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../ContextApi/cart/CartContext";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";

const Cart = () => {
  const { cartItems, showCart, showCartItems, removeFromCart } =
    useContext(CartContext);
  // console.log(showCart);
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
                <div className="cart-items">
                  {cartItems?.map((item) => (
                    <div className="cart-box">
                      <div className="cart-items-align">
                        <img
                          key={item.id}
                          className="item-cart-photo"
                          src={item.photo}
                          alt="photosda"
                        />
                      </div>
                      <div className="cart-title">
                        <div>
                          <p className="item-cart-title">{item.title}</p>
                          <p className="item-cart-title">
                            Price: {item.price} RON
                          </p>
                        </div>
                      </div>
                      <DeleteForeverSharpIcon
                        className="CartItem__button"
                        onClick={() => removeFromCart(item.id)}
                        color="error"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="total-cart">
            <h2>
              Cart Total:{" "}
              {cartItems.reduce((amount, item) => item.price + amount, 0)}
            </h2>
            <Link
              onClick={showCartItems}
              to="order"
              className="finish-order"
              style={{ color: "black" }}
            >
              Complete order
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
