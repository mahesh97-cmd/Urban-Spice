import React from "react";
import Slider from "react-slick";
import data from "./Slides/MockData";
import { NavLink } from "react-router-dom";
import { IoBagHandle } from "react-icons/io5";
import { MdHelpCenter } from "react-icons/md";



const SlideShow = () => {
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    // cssEase: "linear"
  };
  return (
    <div className="slider-slick w-[80%] my-4 relative bg-black ">
      <Slider {...settings}>
        {data.map((item) => (
          <img src={item.img} alt="" className="w-full h-[24vw] lg:h-[28vw] opacity-50" />
        ))}
      </Slider>
      <div className="lg:absolute lg:top-28 lg:left-12 lg:space-y-6">
        <h2 className="lg:text-4xl text-white font-bold">Homemade food just a click away.</h2>
        <p className="text-white font-semibold"><span className="text-md lg:text-2xl text-red-500">Where Every Bite Tells a Story</span><br/> <span className="text-sm lg:text-xl text-orange-500">Ideal for a restaurant with a focus on culinary storytelling and unique flavors.</span> </p>
        <div className=" hidden lg:block space-x-2">
        <button
            className="w-[25%] h-[50px] bg-[#EFAF20] text-black font-semibold"
            onClick={() => scrollToSection("#sectionId")}
          >
           <span className="flex items-center justify-center gap-2"> Order now <IoBagHandle/></span>
          </button>
          <NavLink to="/help">
          <button
            className="w-[25%] h-[50px] bg-white text-black  font-semibold"
            // onClick={() => scrollToSection("#sectionId")}
          >
           <span className="flex items-center justify-center gap-2">Need Help <MdHelpCenter/></span>
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
