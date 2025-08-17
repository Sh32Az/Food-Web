import React from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const navigate=useNavigate();  
  useEffect(()=>{
    const isLogged=localStorage.getItem("loggedin");
    if(!isLogged)
    {
        navigate("/login");
    }
  },[])  
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoutes
