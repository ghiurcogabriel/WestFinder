import React, { useContext } from "react";

import "./SingleProduct.css";
import { FaHeart } from "react-icons/fa";
import CartContext from "../ContextApi/cart/CartContext";
import { Link } from "react-router-dom";

function Product({ products }) {
  // console.log(products);
  // console.log(CartContext)
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="container-single-product">
        {products?.map((item) => (
          <div key={item.id}>
            <div className="card">
              <div className="product-card-single">
                <img src={item.photo} alt="geaca" />
                <p className="over-1 discount">Promo 25%</p>
                <p className="over-2 sales">Winter sales</p>
              </div>
              <div className="product-desc">
                <div className="prices">
                  <p className="price">989.99 lei </p>
                  <p className="reduced-price">{item.price}</p>
                </div>
                <FaHeart />
              </div>
              <div className="title-single-product">
                <Link to={`/jackets/productPage/${item.id}`}><h3>{item.title}</h3></Link>
              </div>
              <button className="button" onClick={() => addToCart(item)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Product;
