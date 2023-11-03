import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Home from "./client/pages/Home.jsx";
import Login from "./client/pages/Login.jsx";
import Signup from "./client/pages/Signup.jsx";
import Deck from "./client/pages/Deck.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/deck' element={<Deck />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  </BrowserRouter>
);

