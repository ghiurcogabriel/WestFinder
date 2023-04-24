import React, { useContext, useState } from "react";
import CartContext from "../../ContextApi/cart/CartContext";
import { Link } from "react-router-dom";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import "./OrderPage.css";
import { CategoryContext } from "../../ContextApi/category/CategoryContext";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect } from "react";

const OrderPage = () => {
  const { cartItems, removeFromCart } =
    useContext(CartContext);
    const [newData, setNewData] = useState({});
  console.log(newData);

  const { category } = useContext(CategoryContext);

useEffect(() => {
    cartItems?.map(item =>{
        return setNewData(item)
    })
}, [cartItems]) 

  return (
    <div className="order-container">
      <div className="cart_wrapper">
        {cartItems.length === 0 ? (
          <h4>No orders yet. Go buy some nice things!</h4>
        ) : (
          <>
            <div className="cart-items-order">
              {cartItems?.map((item) => (
                <div className="cart-order-box">
                  <Link to={`/${category}/productPage/${newData.id}`}>
                    <div className="order-items-align">
                      <img
                        key={item.id}
                        className="item-order-photo"
                        src={item.photo}
                        alt="photosda"
                      />
                    </div>
                  </Link>
                  <div className="cart-title">
                    <div>
                      <p className="item-cart-title">{item.title}</p>
                      <p className="item-cart-title">Price: {item.price} RON</p>
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
      <div className="total-cart-order">
        <h2>
          Cart Total:
          {cartItems.reduce((amount, item) => item.price + amount, 0)}
        </h2>
        <Link to='/checkout'>
          <div className="button3 btn-order">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Go to Checkout
            <FaArrowAltCircleRight className="add-cart-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
