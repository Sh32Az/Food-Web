import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
const Login = () => {
  const [show, setShow] = useState(true);
  const togglePassword = () => {
    setShow(!show);
  }
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if(localStorage.length===0)
    {
      alert("You don't have an account, please sign up first");
    }
    else
    {
    const loggedData = JSON.parse(localStorage.getItem("user"));
    if (input.email === loggedData.email && input.password === loggedData.password) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
    }
  }
  return (
    <div className='w-[100%] h-[100vh] bg-[#009579] flex justify-center items-center'>
      <div className='w-[30%] h-[55%] bg-white rounded-lg flex flex-col justify-center items-center gap-2'>
        <span className='font-bold text-[30px]'>Login</span>
        <form onSubmit={handleSubmit} className='w-full h-[65%] p-5 flex flex-col gap-5 items-start justify-center'>
          <input type="email"
            required
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value, })
            }
            placeholder='Enter your email'
            className='w-full h-[50px] p-3 rounded-md border-2 text-lg border-gray-300'
          />
          <div className="relative w-full">
            <input type={show ? "password" : "text"}
              required
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value, })
              }
              placeholder='Enter your password'
              className='relative w-full h-[50px] p-3 rounded-md border-2 text-lg border-gray-300 pr-10'
            />
            <div className='absolute top-4 right-3 cursor-pointer text-lg'>
              {
                show ? <FaEye onClick={togglePassword} /> : <FaEyeSlash onClick={togglePassword} />
              }
            </div>
          </div>
          <span className='text-[#009579] font-semibold text-lg'>Forget password?</span>
          <button type='submit' className='w-full h-[50px] p-2 rounded-md bg-[#009579] text-white text-lg font-semibold hover:opacity-80'>Login</button>
        </form>
        <div>Dont have an acount? <span onClick={() => { navigate('/signup') }} className='text-[#009579] font-semibold cursor-pointer'>Sign up</span></div>
      </div>
    </div>
  )
}

export default Login
