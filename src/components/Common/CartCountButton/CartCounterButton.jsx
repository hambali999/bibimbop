import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const CartCounterButton = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <div className="btnCartCount" onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i class="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartCounterButton;
