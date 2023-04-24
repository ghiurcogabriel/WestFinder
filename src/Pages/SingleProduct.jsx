import React, { useContext } from "react";

import "./SingleProduct.css";
import { FaHeart, FaTrashAlt, FaCartPlus } from "react-icons/fa";
import CartContext from "../ContextApi/cart/CartContext";
import { Link } from "react-router-dom";
import { CategoryContext } from "../ContextApi/category/CategoryContext";

const Product = ({ products }) => {
  // console.log(products);
  // console.log(CartContext)
  const { addToCart } = useContext(CartContext);
  const { category } = useContext(CategoryContext);
  // console.log(category);

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
              <FaTrashAlt />
              <div className="product-desc">
                <div className="prices">
                  <p className="price">989.99 lei </p>
                  <p className="reduced-price">{item.price}</p>
                </div>
                <FaHeart />
              </div>
              <div className="title-single-product">
                <Link to={`/${category}/productPage/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
              </div>
              <div className="button3" onClick={() => addToCart(item)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add to cart 
                <FaCartPlus className="add-cart-icon"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Product;
