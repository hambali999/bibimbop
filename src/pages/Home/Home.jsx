import React from "react";
import CartCounterButton from "../../components/Common/CartCountButton/CartCounterButton";
import Footer from "../../components/Common/Footer/Footer";
import Banner from "../../components/Home/Banner/Banner";
import Menu from "../../components/Home/Menu/Menu";
import { menuItemsData } from "../../components/Home/Menu/data";

const Home = () => {
  return (
    <div>
      {/* BANNER */}
      <Banner />
      {/* MENU */}
      <Menu list={menuItemsData} />
      {/* FOOTER  */}
      <Footer />
      {/* CART COUNT BUTTON */}
      <CartCounterButton />
    </div>
  );
};

export default Home;
