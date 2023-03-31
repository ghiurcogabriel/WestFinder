import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

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

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/jackets" element={<AllProducts />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/jackets/productPage/:id" element={<ProductPage />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
