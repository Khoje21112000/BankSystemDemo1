import React from 'react';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import BookingRoom from './BookingRoom';

const Router = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/bookroom' element={<BookingRoom/> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default Router;
