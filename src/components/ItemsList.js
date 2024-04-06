import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { addItem } from "./utils/cartSlice";
import RES_LOGO from "./utils/Constant";
import { useDispatch } from "react-redux";

const ItemsList = ({ items }) => {
  console.log(items,"puredetailssssssssssssssssssss");
  const dispatch=useDispatch()
  const handleAddItem=(item)=>{
    
    console.log(item,"action")
    dispatch(addItem(item))
    console.log(dispatch,"dispatch")
  }
  // console.log(items, "puredetails");
  
  // const {imageId}=items.card.info.badgesV2
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" py-6 flex justify-between  font-semibold font-sans border-gray-200 border-b-2"
        >
         <div className="w-[60%] ">
            <h2 className="font-bold text-xl">{item?.card?.info?.name}</h2>
            
            <div className="flex items-center"><span><MdCurrencyRupee/></span>{item?.card?.info?.price ? item?.card?.info?.price/100 :item?.card?.info?.defaultPrice/100 }</div>
            <h3 className="flex items-center"><IoMdStar className="text-[green]"/>{item?.card?.info?.ratings.aggregatedRating.rating}({item?.card?.info?.ratings.aggregatedRating.ratingCountV2})</h3>
            <div className="text-l text-gray-400 py-4">
            {item?.card?.info?.description}
            </div>
         </div> 
         <div className="relative">
            <img src={RES_LOGO + item?.card?.info?.imageId} alt="" className="w-[180px] h-[180px] rounded-xl" />
            <button className="absolute left-14 bottom-1 py-2 rounded-xl px-4 bg-[white]" onClick={()=>handleAddItem(item)}>ADD</button>
         </div>
      
        </div>
        
      ))}
    </div>
  );
};

export default ItemsList;
