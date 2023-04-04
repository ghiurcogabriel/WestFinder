import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//global data
import CartState from "./ContextApi/cart/CartState";
import { AuthContextProvider } from "./ContextApi/auth/AuthContext";
import { CategoryProvider } from "./ContextApi/category/CategoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CategoryProvider>
        <CartState>
          <AuthContextProvider>
            <App id="app" />
          </AuthContextProvider>
        </CartState>
      </CategoryProvider>
    </React.StrictMode>
  </BrowserRouter>
);
