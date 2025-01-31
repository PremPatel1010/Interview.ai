import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import About from '../screens/About';
import Contact from '../screens/Contact';
import ProfileForm from '../screens/ProfileForm';
import UserAuth from '../auth/UserAuth';

const AppRoute = () => {
  const user = true;
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile-form' element={<UserAuth><ProfileForm /></UserAuth>} />
      <Route path='*' element={<h1>Not Found</h1>} />

    </Routes>
    </>
  )
}

export default AppRoute
