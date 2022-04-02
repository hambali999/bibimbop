import React from "react";
import Menu from "../../components/Home/Menu/Menu";
import { menuItemsData } from "../../components/Home/Menu/data";
import "./styles.css";
import Footer from "../../components/Common/Footer/Footer";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";

const Cart = () => {
  return (
    <>
      <div className="cart-header">{/* <Logo /> */}</div>
      <EmptyCart />
      <div className="orders">
        <h1 className="orders-heading">Your Orders</h1>
        <div className="orders-menu">
          <Menu list={menuItemsData} />
        </div>
        <h3 className="orders-total">Your Total $23</h3>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
