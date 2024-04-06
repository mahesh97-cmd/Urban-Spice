import React, { useState } from 'react';
import logo from "../components/utils/1.png";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './utils/authSlice';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const logged = useSelector((store) => store.auth.isLoggedIn);
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const loggedOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className='header-main flex justify-center bg-[#111827]'>
      <div className='header flex justify-between items-center w-[100%] max-w-[80%]'>
        <div className='logo h-[65px] justify-center items-center'>
          <h2 className=' py-2 lg:py-0 '>
            <span className='text-red-600 text-2xl lg:text-red-600 lg:font-bold lg:text-4xl'>अ</span>
            <span className='text-md lg:text-xl text-white lg:font-semibold'>र्बन</span>
            <span className='text-red-600 text-2xl lg:text-red-600 lg:font-bold lg:text-3xl'>S</span>
            <span className='text-md lg:text-xl text-white lg:font-semibold'>pice</span>
          </h2>
          <h3 className='text-xs absolute top-9 left-14 text-gray-400 lg:text-red-200 lg:text-sm lg:absolute lg:top-9 lg:left-44'>भारत का स्वाद</h3>
        </div>
        <div className="navItem lg:block hidden">
          <ul className='flex justify-around gap-6 font-semibold '>
            <NavLink to="/"><li className='text-gray-300'>Home</li></NavLink>
            <NavLink to="/about"><li className='text-gray-300'>About</li></NavLink>
            <NavLink to="/help"><li className='text-gray-300'>Help</li></NavLink>
            {logged ? (
              <li className='text-gray-300 cursor-pointer' onClick={loggedOut}>Logout</li>
            ) : (
              <NavLink to="/login"><li className='text-gray-300'>Login</li></NavLink>
            )}
            <NavLink to="/cart"><li className='text-gray-300'>Cart({cartItems.length})</li></NavLink>
          </ul>
        </div>
        {/* <div className="">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div> */}
      </div>
      
        <div className="md:hidden">
          <ul className=" flex text-xs space-x-4 px-2 items-center text-center py-5">
            <NavLink to="/"><li className='text-gray-300'>Home</li></NavLink>
            <NavLink to="/about"><li className='text-gray-300'>About</li></NavLink>
            <NavLink to="/help"><li className='text-gray-300'>Help</li></NavLink>
            {logged ? (
              <li className='lg:text-gray-300 cursor-pointer' onClick={loggedOut}>Logout</li>
            ) : (
              <NavLink to="/login"><li className='text-gray-300'>Login</li></NavLink>
            )}
            <NavLink to="/cart"><li className='text-gray-300'>Cart({cartItems.length})</li></NavLink>
          </ul>
        </div>
      
    </div>
  );
}

export default Header;
