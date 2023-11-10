import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules

import { Pagination } from "swiper/modules";
//img import
import slide1 from "../../../src/assets/home/slide1.jpg";
import slide2 from "../../../src/assets/home/slide2.jpg";
import slide3 from "../../../src/assets/home/slide3.jpg";
import slide4 from "../../../src/assets/home/slide4.jpg";
import slide5 from "../../../src/assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl ">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl ">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl ">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl ">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
