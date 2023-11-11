import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmet>
        <title>Boss | menu</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Cover img={menuImg} title="Our menu "></Cover>
      {/* main cover */}
      <SectionTitle
        heading="Don't miss"
        subHeading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        title="desserts"
        img={dessertImg}
        items={dessert}
      ></MenuCategory>
      <MenuCategory title="Pizza" img={pizzaImg} items={pizza}></MenuCategory>
      <MenuCategory title="Salad" img={saladImg} items={salad}></MenuCategory>
      <MenuCategory title="Soup" img={soupImg} items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
