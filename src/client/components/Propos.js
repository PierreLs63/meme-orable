import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Propos.css';
import logo from '../Assets/logo.png';
import deco2 from '../Assets/deco2.png';
import un from '../Assets/1.png';
import deux from '../Assets/2.png';
import trois from '../Assets/3.png';

function Propos() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate('/');
  }

  return (
    <div>
          <img src={deco2} className='deco2' alt="Decoration" />
      <div className="info-container">
        <div className='text'>
          <h1 className='title'>À propos</h1>
          <div className='text-container'>
            <h2 className='subtitle'>6 étudiants de TC se sont réunis pour vous créer une super page pour partager vos instants mémorables</h2>
            <p className='info'>Ici vous pouvez partager n'importe quelle photo de votre galerie et choisir un temps au bout duquel celle-ci sera supprimée 
            Chaque utilisateur qui se connectera pendant la durée de vie de votre image la verra, autrement, il n'aura plus jamais l'occasion de la voir.</p>
          </div>
          <h1 className='subtitle'>Mais n'oubliez pas,<br />IL Y A DES RÈGLES ESSENTIELLES À RESPECTER</h1>
          <img src={un} className='numero' alt="Numéro 1" />
          <p className='rules'>Aucun screenshot admis, tout ce qu'un utilisateur publie sera supprimer au bout du temps imparti</p>
          <img src={deux} className='numero' alt="Numéro 2" />
          <p className='rules'>Le respect</p>
          <img src={trois} className='numero' alt="Numéro 3" />
          <p className='rules'>Soyez créatifs !!!</p>
        </div>
      </div>
      <div className='rules-container'>
        <button className="button" onClick={handleClick}>Retour</button>
      </div>
    </div>
  );
}

export default Propos;
