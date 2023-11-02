import React, { useState } from 'react';
import './Card.css'



function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardClick}>
      <div className="card">
        <div className="card-face card-face-front">
          F: {props.front}
        </div>
        <div className="card-face card-face-back">
          B: {props.back}
        </div>
      </div>
    </div>
    // <div className={`scene card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardClick}>
    //   <div className="card"> 
    //     <div className="card_face front">
    //       F: {props.front}
    //     </div>
    //     <div className="card_face back">
    //       B: {props.back}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;