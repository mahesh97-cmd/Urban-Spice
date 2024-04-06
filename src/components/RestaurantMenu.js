import React, { useState } from 'react'
import {useEffect} from 'react'

import Shimmer from "./Shimmer"
import { FaStar } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { HiCurrencyRupee } from "react-icons/hi2";

import { useParams } from 'react-router-dom';
import Category from './Category';







const RestaurantMenu = () => {
  const [showIndex,setShowIndex]=useState(null)
   const {resId}=useParams()
   
    const [resInfo,setResInfo]=useState(null)
     
    const MENU_API=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}`

    useEffect(()=>{
        menuList();
    },[]);

    const menuList=async()=>{
        const data=await fetch(MENU_API);
        const json=await data.json();
        // console.log(json.data.cards[0].card.card.info.name);
        setResInfo(json);
        console.log(json.data.cards)
        console.log("hi")
        

        // json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    }
   
    
    // if (resInfo===null){
    //   return <Shimmer/>
    // }
    console.log(resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards,"listtttttttttttt")
    const {name,cuisines,costForTwoMessage,areaName,avgRatingString,sla,feeDetails,totalRatingsString}=resInfo?.data.cards[2]?.card?.card?.info || {}
    const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category=>category?.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    const fees=feeDetails?.message?.replace(/<\/?[^>]+(>|$)/g, "")
    console.log(resInfo?.data.cards[2]?.card?.card?.info,"allcategory")
    // const {cards}=resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR || {};
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,"gvuiguiuiuuiui")
    return (resInfo===null)?<Shimmer/>: (
    <div className='flex justify-center items-center w-[100%] '>
      <div className='w-[100%] max-w-[60%] '>
      <div className='flex items-center w-[100%] mt-4 justify-between   rounded-md p-4' >
      <div className=''>
      <h1 className='color-black text-2xl font-bold '>{name}</h1>
      <h2 className='text-gray-400 font-font-light font-sans'>{cuisines.join(", ")}</h2>
      <h2 className='text-gray-400 font-font-light flex items-center font-sans'><span className='text-xl'> <MdDeliveryDining/>
      </span>{areaName+" ,"}{sla.lastMileTravel+ " km"}</h2>
      
      </div>
      <div className='border-2 border-black  p-4 m-4 rounded-md'>
        <h2 className='flex text-center justify-center items-center'>
          <span className='text-center text-[green]' > <FaStar /></span>{avgRatingString}
        </h2>
        <h2>{totalRatingsString}</h2>
      </div>
      
    </div>
    <div className="border-b border-gray-300 border-dashed my-4"></div>
    <div className='mx-4'><h2 className='text-gray-400 font-font-light font-sans'>{fees}</h2>
    <h2 className='text-gray-400 font-semibold font-sans text-md flex gap-2 pb-4'><span className='flex items-center'><IoIosTime/>{sla.deliveryTime+" min"}</span>  <span className='flex items-center'><HiCurrencyRupee/> {costForTwoMessage}</span></h2></div>
    
    <p>
      {categories.map((category,index)=> <Category data={category.card.card} isOpen={index===showIndex ? true:false} setShowIndex={()=>setShowIndex(index)}/>)}
    </p>
    </div>
    </div>
    
  )
}

export default RestaurantMenu;
