import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../src/assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading="Check it out"
        subHeading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-gray-900 bg-opacity-60 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="uppercase"> March 20, 2023</p>
          <p>
            WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0  btn-success border-b-2 hover:btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
