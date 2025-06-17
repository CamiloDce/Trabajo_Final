import React from 'react';
import cavernicola from '../assets/cavernicola.png';
import '../style/homePage.css';

export const HomePage = () => {
  return (
    <div className="homepage-container">
      <p>Mateo - Fede - Camilo</p>
      <img 
        src={cavernicola} 
        alt="Cavernícola programando" 
      />
    </div>
  );
};
