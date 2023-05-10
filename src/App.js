import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
//context
import { CategoryContext } from "./ContextApi/category/CategoryContext";

//components
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";

//routes
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import AllProducts from "./Pages/AllProducts";
import Register from './Pages/Register/Register';
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
import Admin from "./Pages/Admin/Admin";
import OrderPage from "./Pages/OrderPage/OrderPage";
import Checkout from "./Pages/CheckoutPage/Checkout";
import OrderPlaced from "./Pages/OrderPlaced/OrderPlaced";

function App() {
  const {category} = useContext(CategoryContext);
  console.log(category)
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/order" element={<OrderPage />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/checkout/orderPlaced" element={<OrderPlaced />}/>
          {/* <Route path="/womens" element={<AllProducts />}/> */}
          <Route path={`/${category}`} element={<AllProducts />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path={`/${category}/productPage/:id`} element={<ProductPage />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
