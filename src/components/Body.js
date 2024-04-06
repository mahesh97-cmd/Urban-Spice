import React, { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
import Banner from "./Banner";
import ResCart from "./ResCart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Shimmer from "./Shimmer";
// import BGimg from "./utils/BGimg.jpg";
import SlideShow from "./utils/SlideShow";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredStore, setFilteredStore] = useState([]);
  const [banner, setBanner] = useState([]);
  const API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    console.log(restroList,"listofrestro")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try{const data = await fetch(API);
    const json = await data.json();
    // const {name}
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    const result =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const scroll = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    console.log(json)
    // console.log(scroll)

    setBanner(scroll);
    setRestroList(result);
    setFilteredStore(result);}
    catch(err){
      console.log(err)
    }
  };
  const handleSearch = (value) => {
    setSearchData(value);
    const searchFilter = restroList.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredStore(searchFilter);
  };
  

  {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 5,
    };

      if (restroList.length === 0) {
        return <Shimmer />;
      }
    return (
      <div className="body bg-[#F6F6F6] ">
        <div className="flex justify-center">
        <SlideShow/>

        </div>
       
                  

        <div className="justify-center w-[100%] flex">
          <div className="my-4 max-w-[71%] w-[100%]"><h1 className="text-2xl font-bold font-sans ">Whats on your mind?</h1></div>
        </div>
        
        <div className="mx-56 ">
        <div className="hidden lg:block">
          {banner.length>0 && (<Slider {...settings} className="">
            {banner.map((ban) => (
              <Banner banName={ban} />
            ))}
          </Slider>)}
          
          </div>
        </div>

        <div className="main-con "id="sectionId">
          <div className="flex my-4 items-center flex-col">
          <div className="restro-head my-4 max-w-[70%] w-[100%]" >
            <h1 className="text-2xl font-bold font-sans">Top Restaurants with online food delivery</h1>
          </div>
          <div className="search text-justify justify-center gap-6 max-w-[70%] w-[100%] flex">
            <div className="search-box flex max-w-[70%]">
              <input
                className="w-[600px] p-2 h-[40px] rounded-xl border-zinc-800 border-2"
                type="text"
                value={searchData}
                onChange={(e) => {
                  handleSearch(e.target.value);
                  setSearchData(e.target.value);
                }}
                placeholder="Search Items"
              />
              <button
                className="btn mx-2 border-zinc-800 border-2 rounded-xl p-1.5 transition-transform ease-in-out duration-500 hover:scale-75"
                onClick={(e) => {
                  const searchFilter = restroList.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchData.toLowerCase())
                  );
                  // console.log(searchFilter);
                  setFilteredStore(searchFilter);
                  e.preventDefault();
                }}
              >
                Search
              </button>
            </div>
            <button
              className="hidden lg:block filter-btn ml-6 border-black rounded-xl border-2 p-1.5 transition-transform ease-in-out duration-500 hover:scale-75"
              onClick={() => {
                const filtered = restroList.filter(
                  (rest) => rest.info.avgRating > 4.2
                );
                setFilteredStore(filtered);
              }}
            >
              Rating 4.0+
            </button>
            <button
              className="hidden lg:block filter-btn border-black rounded-xl border-2 p-1.5 transition-transform ease-in-out duration-500 hover:scale-75"
              onClick={() => {
                const delFilter = restroList.filter(
                  (res) => res.info.sla.deliveryTime <= 25
                );
                setFilteredStore(delFilter);
              }}
            >
              Fast Delivery
            </button>
          </div>
          </div>
          <div className="w-[100%] flex justify-center items-center">
          <div className=" justify-center items-center lg:res-container flex  lg:justify-center ">
            <div className="flex flex-wrap  max-w-[70%] ">
              {filteredStore && filteredStore.map((res) => (
              <NavLink to={"/restaurant/"+res.info.id}><ResCart key={res.info.id} resName={res} /></NavLink> 
              ))}
            </div>
          </div>
          </div>
        </div>
        
      </div>
    );
  }
};

export default Body;
