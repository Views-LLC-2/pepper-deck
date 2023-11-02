import React from 'react';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from "./client/pages/Home.jsx";
import Login from "./client/pages/Login.jsx";
import Signup from "./client/pages/Signup.jsx";
import Deck from "./client/pages/Deck.jsx";
import './App.css';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/deck'>Deck</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/deck' element={<Deck />}/>
      </Routes>
    </>
  );
}

export default App;
