import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({Component}) => {
    console.log(Component,"component")
    const navigate=useNavigate()
    const loggedIn=useSelector((store)=>store.auth.isLoggedIn)
    useEffect(() => {
        if(loggedIn===false){
            navigate("/login")
    }},[]);
  return (
    <div>
      <Component/>
    </div>
  )
}

export default PrivateRoute
