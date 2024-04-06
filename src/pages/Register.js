import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginLogo from '../components/utils/loginLogo.jpg'
import { NavLink } from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate()
    const [input,setInput]=useState({
        name:"",
        email:"",
        password:"",
    })
    const handleSubmit=(e)=>{
     e.preventDefault();
     localStorage.setItem("user",JSON.stringify(input));
     navigate("/login")
    }
  return (
    <div className="bg-gradient-to-tr from-[#F97316] to-[#EFAF20] w-full h-screen flex px-24 py-10 ">
        <div className="w-1/2 h-full shadow-2xl shadow-black  relative left-48">
          <img
            src={loginLogo}
            alt="loginImg"
            className="w-full h-full "
          />
          <div className="absolute top-52 left-16 w-4/5 mx-auto">
            <p className=" text-3xl text-orange-500 font-bold">
              Start your journey with us.
              <span className="text-white inline-block my-10">
              Delivering Happiness
              </span>
            </p>
          </div>
        </div>
        <div className="w-2/2 h-[68%] shadow-2xl shadow-black h-full bg-white  flex justify-center absolute top-28 right-72 items-center">
          <div className=" w-4/5 h-4/5  flex flex-col mx-24 ">
            <h3 className="text-3xl font-semibold text-gray-600 py-4 ">Register</h3>
            <form onSubmit={handleSubmit} className="flex flex-col ">
            <input
                type="text"
                placeholder="User Name"
                value={input.name}
                onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                name="name"
                className="p-2  border border-orange-400 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Email Id"
                value={input.email}
                onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                name="email"
                className="p-2 my-4 border border-orange-400 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Password"
                value={input.password}
                onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                name="password"
                className="p-2  border border-orange-400 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-between my-2 text-gray-500">
                <div className="flex items-center space-x-1">
                  {" "}
                  <input
                    type="checkbox"
                    name="IsrememberMe"
                    id="rememberMe"
                    className="h-4 w-4"
                  />
                  <label htmlFor="rememberMe">Rememmber me</label>
                </div>
                {/* <p>Forgot Password?</p> */}
              </div>
  
              <button
                type="submit"
                className="bg-[#F40030] py-2 mt-6 w-full text-white text-lg hover:bg-orange-400 font-semibold"
              >
                Register
              </button>
            </form>
  
            <NavLink to="/login">
              <p className="py-1">
                Already have an account?{" "}
                <span className="text-blue-600 font-bold">Login</span>
              </p>
            </NavLink>
          </div>
        </div>
        
      </div>
  )
}

export default Register
