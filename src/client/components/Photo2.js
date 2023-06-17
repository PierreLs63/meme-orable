import axios from 'axios';
import React, { useState, useEffect } from 'react';
import coeurr from '../data/coeura.png';
import coeurn from '../data/coeurna.png';
import Utilisateur from './Utilisateur';
import '../styles/App.css';
import Popup from "./popup";
import { useNavigate } from 'react-router-dom';
import Card from "./Card";

function Photo2() {
  const [photoList, setPhotoList] = useState([]);
  const [selecU, updateSelU] = useState('');
  const[likes2,setLikes2]=useState([])
  const [filteredPhotoList, setFilteredPhotoList] = useState([]);
  const [likeCounts, setLikeCounts] = useState({});
  const [isLike, setIsLike] = useState({});
  const storedToken = localStorage.getItem('token');
  const [isOpen, setIsOPen] = useState(false);
  const navigate = useNavigate();
  const togglePopup = () => {
      setIsOPen(!isOpen);
  }
  const a = localStorage.getItem('token') || "";
  const authToken= a.slice(1, -1);
  const b = localStorage.getItem('userId') || "";
  const authUserId= b.slice(1, -1);
  useEffect(() => {
    const apiUrl = 'http://localhost:3001/posts/';

    axios.get(apiUrl, {
      headers: {
        Autorization: `Bearer ${authToken}`
      }
    })
    .then(res => {
      const photoListData = res.data;
      setPhotoList(photoListData);
      setLikeCounts(photoListData.reduce((acc, photo) => {
        acc[photo._id] = Object.keys(photo.likes).length;        return acc;
      }, {}));

      setIsLike (
        photoListData.reduce((acc, photo) => {
          acc[photo._id] = false;
          return acc;
        }, {}));
      

    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
    });
  }, []);
  
  

  useEffect(() => {
    const updatedList = photoList.map((photo) => {
      const timeEnd = photo;
      const timeValue = new Date(timeEnd);
      const currentDate = new Date();

      return {
        ...photo,
        afficher: timeValue > currentDate,
      };
    });

    const filteredList = updatedList.filter((photo) =>
      selecU ? photo.pseudo === selecU : true
    );

    setFilteredPhotoList(filteredList);
  }, [selecU, photoList]);

  const utilisateurs = photoList.reduce(
    (acc, elem) =>
      acc.includes(elem.pseudo) ? acc : acc.concat(elem.pseudo),
    []
  );

  
  function handleClick(_id) {
    const apiUrl = 'http://localhost:3001/posts/' + _id + '/like';
  
    axios.patch(apiUrl, { userId: authUserId }, {
      headers: {
        Autorization: `Bearer ${authToken}`,
        Body: { "userId": authUserId }
      },
    })
      .then((response) => {
        console.log(response);
        const updatedPhotoList = photoList.map((photo) => {
          if (photo._id === _id) {
            return {
              ...photo,
              likes: response.data.likes
            };
          }
          return photo;
        });
        setPhotoList(updatedPhotoList);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  
  
  function deconection() {
    navigate('/login');
  }
  



  return (
    <div>


<button className = "button" onClick={togglePopup}>Click to open popup</button>
{isOpen && <Popup 
handleClose={togglePopup}
content={<div>
    <h2>Title</h2>
    <p>This is sample content for my pop.</p>
</div>}
/>}
<button className = "button" onClick={() => deconection()}>Déconnexion</button>


     
      <Utilisateur  utilisateurs={utilisateurs} updateSelU={updateSelU} />
      <div className="container">
        <div className="content-wrapper">
          {filteredPhotoList.length > 0 ? (
            filteredPhotoList.map(({ _id, picturePath, pseudo, userId,description ,likes}, index) => (
             <Card
             name={pseudo}
             isLiked={false}
             source={`http://localhost:3001/assets/${picturePath}`} 
             description={description}
              createAt="1"
              timeEnd="90000"
             ></Card>
              
            ))
          ) : (
            authToken
          )}
        </div>
      </div>
    </div>
  );
}

export default Photo2;
