import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
