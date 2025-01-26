import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import About from '../screens/About';
import Contact from '../screens/Contact';

const AppRoute = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
    </>
  )
}

export default AppRoute
