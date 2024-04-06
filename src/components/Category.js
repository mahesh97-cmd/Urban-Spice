import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

import ItemsList from './ItemsList';


const Category = ({data,isOpen,setShowIndex}) => {
    const toggleMenu=()=>{
        setShowIndex()
       }
    console.log(data,)
    
  return (
    <div>
      <div className=' m-4 cursor-pointer' >
      <h2 className='font-bold text-xl p-2 flex justify-between items-center bg-gray-200 'onClick={toggleMenu}>
        {data.title}({data.itemCards.length})
        <button ><span className=''>{!isOpen ?<FaAngleDown/>:<FaAngleUp/>}</span></button>
      </h2>
      
      {isOpen && (<ul className=''>
        <ItemsList items={data.itemCards}/>
      </ul>)}
    </div>
    </div>
  )
}

export default Category
