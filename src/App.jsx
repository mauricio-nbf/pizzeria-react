import { useState } from 'react'

import './App.css'
import Home from './assets/pages/Home'
import Navbar from './assets/components/Navbar'
import Register from './assets/pages/Register'
import Cart from './assets/pages/Cart'
import Footer from './assets/components/Footer'
import Login from './assets/pages/Login'
import Pizza from './assets/pages/Pizza'
import Profile from './assets/pages/Profile'
import NotFound from './assets/pages/NotFound'
import { Routes, Route } from 'react-router-dom'


function App() {



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
