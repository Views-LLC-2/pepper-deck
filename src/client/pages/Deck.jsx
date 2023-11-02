import React, { useState } from 'react';
import './Deck.css';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Deck(props) {
  const [deck, setDeck] = useState([
    {
      front: 'question1',
      back: 'answer1'
    },
    {
      front: 'question2',
      back: 'answer2'
    },
    {
      front: 'question3',
      back: 'answer3'
    },
    {
      front: 'question4',
      back: 'answer4'
    },
    {
      front: 'question5',
      back: 'answer5'
    }
  ]);


  return (
    <div>
      <nav className='navBar'>
         <div className='logoTitle'>
            <h1><Link className='linkItem' to='/'>Pepper Deck</Link></h1>
         </div>
         <div className='rightNav'>
            <Link className='linkItem' to='/login'>Login</Link>
            <Link className='linkItem' to='/signup'>Sign Up</Link>
         </div>
      </nav>
    <div>
      <div className='job_description'>
        <h1>Frontend Engineer</h1>
        <p>
          Develop data processing pipeline to ingest and enrich product data for internal and external customers
        </p>
        <p>
          Develop our search platform that helps our internal and external customers to discover, monetize our product inventory
        </p>
        <p>
          Help implement our new applications and infrastructure leveraging: Google Cloud, Kubernetes
        </p>
        <p>
          Ensure high code-quality and high availability of our inventory platform
        </p>
      </div>
      <br></br>
      <div className='cards_container'>
        {deck.map(card => <Card front={card.front} back={card.back}/>)}
      </div>
      <br></br>
      <div>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          +
        </button>
      </div>
    </div>
    </div>
  );
}

export default Deck;