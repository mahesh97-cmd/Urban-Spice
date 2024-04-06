import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { clearItems, totalPrice } from "./utils/cartSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import RES_LOGO from "./utils/Constant";
import { useState } from "react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItems,
  promoCode
} from "./utils/cartSlice";
import Payment from "../pages/Payment";

const Cart = () => {
  const dispatch = useDispatch();
  const totalCartPrice = useSelector((store) => store.cart.totalCartPrice);
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);
  const promoApplyCode = useSelector((store) => store.cart.discountCode);
  const [enteredCode, setEnteredCode] = useState('');

  // useEffect(() => {
  //   console.log(totalPrice, "total price of all product")
  // },[totalPrice]);
  
  const handleClear = () => {
    dispatch(clearItems());
  };
  const handleApply=(e)=>{
    const setEnteredCode=e.target.value
    dispatch(promoCode(enteredCode))
    alert("code applied successfully")
  }
  const handleRemoveItem = (itemId) => {
    console.log(itemId,"item isss remove");
    dispatch(removeItems(itemId));
  };
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };
  const items = useSelector((state) => state.cart.items);
  const cartItems = useSelector((store) =>
    store.cart.items.map((item) => ({
      name: item.card.info.name,
      price: item.card.info.price || item.card.info.defaultPrice,
      imageId: item.card.info.imageId,
      id: item.card.info.id,
      description: item.card.info.description,
      quantity: item.quantity,
    }))
  );
  
  console.log(cartItems, "cartsss");
  // const totalQuantity = (cartItems) => {
  //   return cartItems.reduce((total, item) => {
  //     return total + item.quantity;
  //   }, 0);
  // };
  // const calculatetotalalPrice = (cartItems) => {
  //   return cartItems.reduce((total, item) => {
  //     console.log(`total: ${total} item: ${item}`);
  //     return total + item.price * item.quantity;
  //   }, 0);
  // };
  // const total = calculatetotalalPrice(cartItems);
  // const quantity = totalQuantity(cartItems);
  return (
    cartItems.length === 0 ?  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
    <p className="text-lg text-gray-600">Please add items to your cart to continue shopping.</p>
    <NavLink to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Continue Shopping</NavLink>
  </div> :
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          </div>
          {cartItems.map((item, index) => (
            <div
              className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
              key={item.id}
            >
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={RES_LOGO + item.imageId}
                  alt="Black Leather Purse"
                  className=" object-center object-cover md:block hidden w-40 h-40"
                />
                {/* <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" /> */}
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    {item.name}
                  </p>
                  <div className="flex items-center">
                    <button
                      className="border rounded-md py-2 px-4 mr-2"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <span className="text-center w-8">{item.quantity}</span>
                    <button
                      className="border rounded-md py-2 px-4 ml-2"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-5">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p
                      className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">
                    {(item.quantity * item.price) / 100}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
              Continue Shopping
            </NavLink>
            <button className="flex bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-4 text-sm text-white" onClick={handleClear}>Clear Cart</button>
          </div>
        </div>
        <div
          id="summary"
          className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-lg uppercase">
              Bill Details
            </span>
          </div>
          {/* <div>
            <h4 className="font-medium inline-block mb-3 text-sm uppercase">
              {totalQuantity}
            </h4>
            <br />
            <h4 className="font-medium inline-block mb-3 text-sm uppercase">
              {totalCartPrice}
            </h4>
          </div> */}
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
              onChange={(e) => setEnteredCode(e.target.value)}
              value={enteredCode}
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={handleApply}>
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total Quantity</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{totalCartPrice.toFixed(2)}</span>
            </div>
            <NavLink to="/address">
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    // <div classNameName='flex justify-center p-4'>

    //   <div classNameName=' border border-black w-2/4 bg-gray-200 p-6'>
    //     <div>
    //         {/* <img src='' alt=''/> */}
    //     </div>
    //     <div classNameName=''>
    //         <div classNameName='flex justify-center items-center gap-2'>
    //         <h1 classNameName='text-2xl font-bold'>Cart Items</h1>
    //         </div>
    //        {cartItems.map((item,index)=>
    //         <div classNameName='flex justify-between py-4'key={index}>
    //           <img src={RES_LOGO+item.imageId} alt="" classNameName='w-20'/>
    //           <h2>{item.name}</h2>
    //           <button onClick={() => handleDecreaseQuantity(item)}>-</button>

    //           <p>Quantity: {item.quantity}</p>
    //           <button onClick={() => handleIncreaseQuantity(item)}>+</button>

    //           <h3>{item.price/100}</h3>
    //         </div>
    //        )}
    //         <div classNameName='flex justify-center'>
    //         {cartItems.length===0 ? <h1 classNameName='text-xl p-4 text-red-500'>Please add items to cart...<button classNameName='text-l text-blue-500 px-4 py-1 underline'><NavLink to="/">Home</NavLink> </button></h1> : ""}

    //         </div>

    //         <button classNameName={`text-l bg-red-500 px-4 py-1 rounded ${cartItems.length > 0? "visible":"hidden"}`} onClick={handleClear}>Clear Cart</button>

    //     </div>
    //     <NavLink to="/payment"><button classNameName='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>paynow</button></NavLink>
    //   </div>

    // </div>
  );
};

export default Cart;
