import React, { useRef } from "react";
import CartCounterButton from "../../components/Common/CartCountButton/CartCounterButton";
import Footer from "../../components/Common/Footer/Footer";
import Banner from "../../components/Home/Banner/Banner";
import Menu from "../../components/Common/Menu/Menu";
import { menuItemsData } from "../../components/Common/Menu/data";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () =>
    menuRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      {/* BANNER */}
      <Banner handleScrollMenu={handleScrollMenu} />
      {/* MENU */}
      <Menu list={menuItemsData} ref={menuRef} />
      {/* FOOTER  */}
      <Footer />
      {/* CART COUNT BUTTON */}
      <CartCounterButton />
    </div>
  );
};

export default Home;
