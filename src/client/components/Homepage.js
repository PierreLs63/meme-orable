import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Homepage.css';
import logo from '../Assets/logo.png';
import deco from '../Assets/deco.png';

function Homepage() {
  const navigate = useNavigate();

  function handleClick(e) {
    if (e === 'sign') {
      navigate('/signin');
    } else if (e === 'log') {
      navigate('/login');
    } else {
      navigate('/propos');
    }
  }

  return (
    <div className="homepage-container">
      <div className="text">
        <h1 className="title">MEME - ORABLE</h1>
        <p className="noms">Ewan - Pierre Louis - Maëlle - Hugo - Maxime - Martin</p>
      </div>
      <div className="button-container">
        <button className="button" onClick={() => handleClick('sign')}>S'inscrire</button>
        <button className="button" onClick={() => handleClick('log')}>Log In</button>
        </div>
        <div className="button-container">
          <button className="button" onClick={() => handleClick('propos')}>À propos</button>
        </div>
      <img src={logo} className="logo" alt="Logo" />
      <img src={deco} className="deco" alt="Decoration" />
      
    </div>
  );
}

export default Homepage;
