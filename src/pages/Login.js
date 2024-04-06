import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../components/utils/authSlice'
import loginLogo from "../components/utils/loginLogo.jpg"

const Login = () => {
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const [input,setInput]=useState({
        email:"",
        password:"",
    });
    const handleLogin=(e)=>{
        e.preventDefault();
        const loggedUser=JSON.parse(localStorage.getItem("user"));
        if(input.email===loggedUser.email && input.password===loggedUser.password){
        // localStorage.setItem("loggedIn",true)
        dispatch(login())    
        navigate("/")
        }else{
            alert("wrong email or password")
        }
    }
  return (
    // <div className='bg-orange-200 w-[100%] h-screen flex justify-center'>
      
    //   <div className=' w-full h-screen flex bg-gradient-to-br from-[#F3C522] to-[#EFAF20] ... bg- '>
      
    //     <img src={loginLogo} alt="" className='w-[40%] h-[90%] my-9 mx-60' />
      
    //     <div className=' w-[34%] h-[70%]  items-center bg-white justify-center absolute right-56 top-28'>
    //     <h1 className='text-center mt-8 text-2xl font-bold font-sans text-[#EFAF20]'>Login</h1>

    //         <form onSubmit={handleLogin} className=' bg-[red] space-y-8  '>
    //             <input className=' border-b border-gray-400 focus:border-indigo-500 focus:outline-none bg-transparent text-white' type="text" name="email" placeholder='username'
    //             value={input.email}
    //             onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
    //             /><br/>
    //             {/* <label className='m-2 font-semibold' htmlFor="name">Name:</label><br/> */}
    //             <input className='  text-white border-b border-gray-400 focus:border-indigo-500 focus:outline-none bg-transparent' type="text" name="password" placeholder='Password'
    //             value={input.password}
    //             onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
    //             /><br/>
    //             {/* <label className='m-2 font-semibold' htmlFor="email">Email:</label> */}
    //             <button type="submit" className=' rounded  text-white bg-[#F40030] font-semibold text-center w-full py-2'>Login</button>
               
    //             <div className='flex justify-center mb-12 mt-2 font-semibold text-[#EFAF20]'><h2>Don't have an account?<NavLink to="/register">Register Here</NavLink> </h2></div>
                
    //         </form>
    //     </div>
    //   </div>
    // </div>
    
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
        <div className="w-2/2 h-[69%] shadow-2xl shadow-black  bg-white  flex justify-center absolute top-28 right-72 items-center">
          <div className=" w-4/5 h-4/5  flex flex-col mx-24   ">
            <h3 className="text-3xl font-semibold text-gray-600 py-4">Log In</h3>
            <form onSubmit={handleLogin} className="flex flex-col ">
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
                Log In
              </button>
            </form>
  
            <NavLink to="/register">
              <p className="py-1">
                Don't have an account?{" "}
                <span className="text-blue-600 font-bold">Sign up</span>
              </p>
            </NavLink>
          </div>
        </div>
        
      </div>
    );
  
}

export default Login
