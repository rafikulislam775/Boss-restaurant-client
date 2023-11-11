import React from 'react';
import MenuItem from "../Shared/MenuItem/MenuItem";
import Cover from "../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0  btn-success border-b-2 hover:btn">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;