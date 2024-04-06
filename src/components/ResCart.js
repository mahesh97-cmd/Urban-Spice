import React from 'react'
import RES_LOGO from './utils/Constant';


const ResCart = ({resName}) => {
  // console.log(resName)
  const{cloudinaryImageId,name,cuisines,avgRating,slaString,costForTwo}=resName?.info;
  const{deliveryTime}=resName?.info?.sla;
  return (
    <div className='res-cart  my-4 w-[250px] h-[350px] ml-3 transition-transform ease-in-out duration-700 hover:scale-75'>
        <img className='res-logo h-[180px] w-[100%] rounded-xl' src={RES_LOGO+cloudinaryImageId} alt="restaurant" />
        <h3 className='font-bold font-sans'>{name}</h3>
        <h4 className='cuisine text-slate-800'>{cuisines.join(", ")}</h4>
        <h4 className='font-semibold'><span>{avgRating +" star"}</span> . <span>{deliveryTime +" mins"}</span></h4>
        <h4 className='font-semibold'>{slaString}</h4>
        <h4 className='font-semibold'>{costForTwo}</h4>
        
      
    </div>
  )
}

export default ResCart
