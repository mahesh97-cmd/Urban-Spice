import React from 'react'
import RES_LOGO from './utils/Constant'






const Banner = ({banName}) => {
  
    // console.log(banName)
    const {imageId}=banName
  return (
    
    <div className=''>
        <div className="">
            <img src={RES_LOGO+imageId} alt="" className=''/>
        </div>
    </div>
    
  )
}

export default Banner
