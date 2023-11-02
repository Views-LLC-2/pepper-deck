import React from 'react';
import './Deck.css';
import Card from '../components/Card';

function Deck(props) {
  const testArray = [
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
    }
  ];


  return (
    <div>
      <div className='job_description'>
        <h1>JOB TITLE</h1>
        <p>job description</p>
      </div>
      <br></br>
      <div className='cards_container'>
        {testArray.map(card => <Card front={card.front} back={card.back}/>)}
      </div>
      <br></br>
      <div>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          +
        </button>
      </div>
    </div>
  );
}

export default Deck;