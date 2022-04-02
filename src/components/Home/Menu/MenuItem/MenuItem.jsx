import React from "react";
import ButtonAddRemoveItem from "../../../Common/ButtonAddRemoveItem/ButtonAddRemoveItem";
import "./styles.css";

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, img, name, price, info } = item;

  return (
    <div className="item">
      <img src={img} alt="food" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        <ButtonAddRemoveItem />
      </div>
    </div>
  );
};

export default MenuItem;
