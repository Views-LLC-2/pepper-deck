import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <>
      <nav className='navBar'>
         <div className='logoTitle'>
            <h1><Link className='linkItem' to='/'>Pepper Deck</Link></h1>
         </div>
         <div className='rightNav'>
            <Link className='linkItem' to='/login'>Login</Link>
            <Link className='linkItem' to='/signup'>Sign Up</Link>
         </div>
      </nav>
    </>
  );
}

export default App;
