import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import "./styles.css";

const Menu = ({ list }) => {
  return (
    <main>
      {list.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Menu;
