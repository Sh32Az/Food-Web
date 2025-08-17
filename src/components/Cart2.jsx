import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
const Cart2 = ({ name, price, id, image, qty }) => {
  let dispatch = useDispatch();
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg'>
          <img src={image} alt="" className='object-cover' />
        </div>
        <div className='w-[40%] h-full flex flex-col justify-between gap-3'>
          <div className='text-lg text-gray-600 font-semibold'>{name}</div>
          <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg
             border-2 border-green-400 text-green-400 font-semibold text-lg'>
            <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200' onClick={() => { qty>1?dispatch(DecreamentQty(id)):1 }}>-</button>
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>{qty}</span>
            <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200' onClick={() => { dispatch(IncreamentQty(id)) }}>+</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start gap-5 items-end'>
        <span className='text-green-400 font-semibold'>Rs {price}/-</span>
        <RiDeleteBin6Line className='text-red-500 w-[30px] h-[30px] cursor-pointer' onClick={() => {dispatch(RemoveItem(id)); toast.error(`${name} removed`)}} />
      </div>
    </div>
  )
}
export default Cart2