import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../ContextApi/cart/CartContext";
import Cart from "./Cart";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartNum = () => {
  const { cartItems, showCartItems } = useContext(CartContext);

  const [num, setNum] = useState(null);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    if (cartItems.length >= 0) setNum(cartItems.length);
  }, [cartItems.length]);

  return (
    <div className="cart-icon">
      <IconButton aria-label="cart">
        <StyledBadge
          badgeContent={num}
          color="secondary"
          onClick={showCartItems}
        >
          <ShoppingCartIcon style={{ color: "white" }} />
        </StyledBadge>
      </IconButton>

      <Cart />
    </div>
  );
};

export default CartNum;
