import { useState } from 'react'

import './App.css'
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import Register from './assets/components/Register'
import Cart from './assets/components/Cart'
import Footer from './assets/components/Footer'
import Login from './assets/components/Login'


function App() {


 
  return (
    <>
      <Navbar/>
      <Home/>
      <Register/>
      <Login/>
      <Cart/>

      <Footer/>
    </>
  )
}

export default App
