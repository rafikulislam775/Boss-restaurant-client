import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Boss | menu</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Cover img={menuImg} imgH={["h -800px"]} title="Our menu "></Cover>
    </div>
  );
};

export default Menu;
