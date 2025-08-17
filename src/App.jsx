import React from 'react'
import Home from './pages/Home'
import {ToastContainer} from "react-toastify"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoutes from './ProtectedRoutes'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoutes/>}>
        <Route path='/' element={<Home/>}/>
        </Route>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  )
}

export default App
