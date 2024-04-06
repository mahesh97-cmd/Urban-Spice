import React from 'react'
import gpay from "../components/utils/gpay.png"
import paymentBG from "../components/utils/paymentBG5.jpg"
import visa from "../components/utils/visa.svg"
import { useSelector } from 'react-redux'

const Payment = ({total}) => {
  const totalCartPrice=useSelector((store)=>store.cart.totalCartPrice)
  return (
    <div className='w-[100%] h-[90vh] flex justify-center bg-[#0A1F3C] '>
      <div className='w-[60%] flex h-[85%] py-8'>
      <div className=' w-2/4 h-full flex justify-center items-center'>
        <img src={paymentBG} alt="" className=' bg-cover bg-center w-full h-full' />
      </div>
      <div className='w-3/4  flex justify-center  px-8 py-4 h-full bg-white '>
      <div className="container mx-auto ">
      <h1 className="text-3xl font-semibold mb-5">Payment Details</h1>
      <div className='flex gap-2'>
        <h2>Pay with credit card</h2>
        <img src={visa} alt='' className='w-10'/>
      </div>
      <form className="max-w-md py-2 ">
        <div className="mb-3">
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
          <input type="text" id="cardNumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter card number" />
        </div>
        <div className="mb-3">
          <label htmlFor="expiry" className="block text-gray-700 font-bold mb-2">Expiry Date</label>
          <input type="text" id="expiry" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="MM/YY" />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
          <input type="text" id="cvv" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="CVV" />
        </div>
        <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Total Amount ₹ {totalCartPrice.toFixed(2)}</button>
        
      <div className='flex flex-col items-center justify-center py-3'>
        <h2 className='pb-2'>Or select other payment method</h2>
        <button className='flex bg-gray-200  hover:bg-gray-400 w-[80%] justify-center gap-2 items-center'>Pay with <img src={gpay} alt='' className='w-10'/></button>
      </div>
      </form>
      
    </div>
      </div>
      </div>
    </div>
  )
}

export default Payment
