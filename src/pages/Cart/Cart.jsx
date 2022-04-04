import React from "react";
import Menu from "../../components/Home/Menu/Menu";
import { menuItemsData } from "../../components/Home/Menu/data";
import Footer from "../../components/Common/Footer/Footer";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import "./styles.css";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  console.log(cartCount, cartList, cartTotal);
  return (
    <>
      <div className="cart-header">{/* <Logo /> */}</div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
