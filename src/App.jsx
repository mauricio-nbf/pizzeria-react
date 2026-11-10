import { useState } from 'react'

import './App.css'
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import Register from './assets/components/Register'
import Footer from './assets/components/Footer'
import Login from './assets/components/Login'


function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Register/>
      <Login/>
      <Footer/>
    </>
  )
}

export default App
