import '../Styles/Propos.css';
import logo from '../Assets/logo.png';
import deco2 from '../Assets/deco2.png';
import un from '../Assets/1.png';
import deux from '../Assets/2.png';
import trois from '../Assets/3.png';


function Propos() {
  window.resizeTo(100,100);
  return (
    <div className="container">
          <div className="info-container">

      <div className='text'>
        <h1 className='title'>à propos</h1>
        <div className='text-container'>
          <h2 className='subtitle'>6 étudiants de TC se sont réunis pour vous créer une super page pour partager vos instants mémorables</h2>
          <p className='info'> Ici vous pouvez partager n'importe quelle photo de votre galerie et choisir un temps au bout duquel celle-ci sera supprimée 
            Chaque utilisateur qui se connectera pendant la durée de vie de votre image la verra, autrement, il n'aura plus jamais l'occasion de la voir.
          </p>
        </div>
        <h1 className='subtitle'>Mais n'oubliez pas, 
        <br></br>IL Y A DES REGLES ESSENTIELLES A RESPECTER </h1>
          <p className='rules'>aucun screenshot admis, tout ce qu'un utilisateur publie sera supprimer au bout du temps imparti</p>
          <p className='rules'>le respect</p>
      </div>
      </div>
      <img src={logo} className='logo' />
      <img src={deco2} className='deco2' />
      <div className='rules-container'>
        <img src={un} className='numero' />
        <img src={deux} className='numero' />
        <img src={trois} className='numero' />
      </div>
    </div>
  );
}

export default Propos;
