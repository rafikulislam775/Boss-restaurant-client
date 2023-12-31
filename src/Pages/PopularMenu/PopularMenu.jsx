
// import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu?.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  console.log(menu);
  return (
    <section>
      <SectionTitle
        heading="Check it out"
        subHeading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {popularItems?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0  btn-success border-b-2 hover:btn">
        view full menu
      </button>
    </section>
  );
};

export default PopularMenu;
