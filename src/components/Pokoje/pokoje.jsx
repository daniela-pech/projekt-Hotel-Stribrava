import './style.css';
import pokoj1 from './fotky/pokoj01.jpg';
import pokoj2 from './fotky/pokoj02.jpg';
import pokoj3 from './fotky/pokoj03.jpg';
import pokoj4 from './fotky/pokoj04.jpg';
import pokoj5 from './fotky/pokoj05.jpg';
import { useState, useEffect } from 'react';

export const Pokoje = ({ pokoje, onPokojClick }) => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {pokoje.map((pokoj) => (
            <div key={pokoj.id} className="card" onClick={() => onPokojClick(pokoj)}>
              <img className="cardimage" src={pokoj.image} alt={pokoj.nazev} />
              <div className="cardtitle">{pokoj.nazev}</div>
              <div className="card__body">{pokoj.cena}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
