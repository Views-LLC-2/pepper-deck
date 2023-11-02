import React from 'react';
import './Card.css'


function Card(props) {
  return (
    <div className="scene">
      <div className="card">
        <h3 className="card_face front">
          F: {props.front}
        </h3>
        <p className="card_face back">
          B: {props.back}
        </p>
      </div>
    </div>
  );
}

export default Card;