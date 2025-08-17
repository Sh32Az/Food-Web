import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Cart2 from '../components/Cart2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate();
  function handleLogout()
  {
    localStorage.removeItem("loggedin");
    navigate('/login');
  }
  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = subtotal * (0.5 / 100);
  let total = Math.floor(subtotal + deliveryFee + taxes);
  let { cate, setCate, input, setInput, showCart, setShowCart } = useContext(dataContext)
  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    }
    else {
      let newList = food_items.filter((item) => (item.food_category === category));
      setCate(newList);
    }
  }
  return (
    <div className=' bg-slate-200 w-full min-h-screen'>
      <Nav />
      {!input ? <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item) =>
        (
          <div className='w-[140px] h-[150px] flex flex-col items-start justify-start text-[20px] 
          font-semibold text-gray-600 bg-white gap-5 p-5 rounded-lg shadow-xl
          hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={() =>
              filter(item.name)
            }>
            {item.image}
            {item.name}</div>
        ))}
      </div> : null}

      <div className='w-full min-h-[600px] flex flex-wrap justify-center gap-8 px-5 pt-8 pb-8'>
        {cate.length > 1 ? cate.map((item) => (
          <Card name={item.food_name} image={item.food_image}
            id={item.id} price={item.price} type={item.food_type} />)) :
          <div className='w-full h-[400px] flex justify-center items-center text-[100px] text-green-500 font-semibold pt-5'>No Dish Found!</div>
          }
          <div className='mt-24 w-full h-[50px]'>
        <button className='ml-3 h-full w-[100px] text-red-500 bg-white
         flex justify-center items-center rounded-lg gap-1 font-bold text-[18px] shadow-md' onClick={handleLogout}>
          <span>Log out</span>
          <CiLogout />
        </button>
      </div>
          
      </div>
      <div className={`w-full md:w-[40%] h-[100%] flex flex-col items-center overflow-scroll fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center text-green-400 font-semibold'>
          <span>Order items</span>
          <RxCross2 className='w-[30px] h-[30px] cursor-pointer hover:text-gray-600' onClick={() => setShowCart(false)} />
        </header>
        {items.length > 0
          ? <>
            <div className='w-full mt-9 flex flex-col gap-8'>
              {
                items.map((item) => (
                  <Cart2 name={item.name} price={item.price}
                    id={item.id} image={item.image} qty={item.qty} />
                ))
              }
            </div>
            <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7
        flex flex-col gap-2 p-8'>
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg font-semibold'>Subtotal</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {subtotal} /-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg font-semibold'>Delivery Fee</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee} /-</span>
              </div>
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg font-semibold'>Taxes</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {taxes} /-</span>
              </div>
            </div>
            <div className='w-full flex justify-between items-center p-9'>
              <span className='text-2xl font-semibold'>Total</span>
              <span className='text-green-400 font-semibold text-2xl'>Rs {total} /-</span>
            </div>
            <button className='w-[80%] p-3 bg-green-500 rounded-lg text-white
       hover:bg-green-400 transition-all duration-200' onClick={() => toast.success("Order Placed")}>Place Order</button>
          </> :
          <div className='text-center text-2xl text-green-500 font-semibold pt-5'>
            Empty Card
          </div>}
      </div>
    </div>
  )
}

export default Home