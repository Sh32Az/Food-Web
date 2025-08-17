import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
const Nav = () => {
   let items=useSelector((state)=>state.cart)
  let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext);
  useEffect(()=>
  {
    let newList=food_items.filter((item)=>item.food_name.
    includes(input) || item.food_name.toLocaleLowerCase().includes(input));
    setCate(newList)
  },[input])
  return (
    <div className='w-full h-[100px] flex justify-between px-5 pt-4 md:px-8'>
        <div className='w-[60px] h-[60px] bg-white flex 
        justify-center items-center rounded-md shadow-md'> 
        <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form className='w-[45%] h-[60px] bg-white flex items-center px-4 gap-4 rounded-md shadow-md md:w-[70%]'
        onSubmit={(e)=>e.preventDefault()}>
            <IoSearch className='w-[20px] h-[20px] text-green-500' />
            <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px]'
            onChange={(e)=>setInput(e.target.value)} value={input} />
        </form>
        <div className='w-[60px] h-[60px] bg-white flex 
        justify-center items-center rounded-md shadow-md relative cursor-pointer' onClick={()=>setShowCart(true)}>
          <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
        <FiShoppingBag className='w-[30px] h-[30px] text-green-500'/>
        </div>
      
    </div>
  )
}

export default Nav
