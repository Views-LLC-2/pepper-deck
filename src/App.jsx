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
      <nav className='navBar'>
        
         <div className='logoTitle'>
            <h1>PepperDeck</h1>
         </div>
         <div className='rightNav'>
            <Link className='linkItem' to='/'>Home</Link>
            <Link className='linkItem' to='/login'>Login</Link>
            <Link className='linkItem' to='/signup'>Sign Up</Link>
            <Link className='linkItem' to='/deck'>Deck</Link>
         </div>
      
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
