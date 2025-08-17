import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
const Signup = () => {
  const [show, setShow] = useState(true);
  const togglePassword = () => {
    setShow(!show);
  }
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  }
  return (
    <div className='w-[100%] h-[100vh] bg-[#009579] flex justify-center items-center'>
      <div className='w-[30%] h-[60%] bg-white rounded-lg flex flex-col justify-center items-center gap-2'>
        <span className='font-bold text-[30px]'>Sign up</span>
        <form onSubmit={handleSubmit} className='w-full h-[70%] p-5 flex flex-col gap-6 items-start justify-center'>
          <input type="text"
            required
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value, })
            }
            placeholder='Enter your name'
            className='w-full h-[50px] p-3 rounded-md border-2 text-lg border-gray-300'
          />
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
          <button type='submit' className='w-full h-[50px] p-2 rounded-md bg-[#009579] text-white text-lg font-semibold hover:opacity-80'>Sign up</button>
        </form>
        <div>Already have an acount? <span onClick={() => { navigate('/login') }} className='text-[#009579] font-semibold cursor-pointer'>Login</span></div>
      </div>
    </div>
  )
}

export default Signup
