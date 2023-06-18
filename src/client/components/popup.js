import React, { useState } from "react";
import axios from "axios";
import '../styles/popup.css';

const a = localStorage.getItem('token') || '';
  const authToken= a.slice(1, -1);
  const b = localStorage.getItem('userId') || '';
  const authUserId= b.slice(1, -1);
const Popup = props => {
  const [textboxValue, setTextboxValue] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDescChange = (event) => {
    setTextboxValue(event.target.value);
  };

  const handleHoursChange = (event) => {
    const value = parseInt(event.target.value);
    setHours(value);
  };

  const handleMinutesChange = (event) => {
    const value = parseInt(event.target.value);
    setMinutes(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const durationInMilliseconds = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);
  
    const formData = new FormData();
    formData.append("picture", selectedFile);
    formData.append("userId", authUserId);
    formData.append("timeEnd", Date.now() + durationInMilliseconds);
    formData.append("description", textboxValue);
    formData.append("picturePath", selectedFile.name);
  
    axios
      .post("http://localhost:3001/posts/", formData, {
        headers: {
          Autorization: `Bearer ${authToken}`
        },
      })
      .then((response) => {
        // handle the response
        console.log(response);
        props.handleClose(); // Close the popup window
      })
      .catch((error) => {
        // handle errors
        console.log(error.response);
      });
  };

  return (
    <div className="popup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleClose}>X</button>
        {props.content}
        <input type="file" onChange={handleFileUpload} className='fileInput' />
        {selectedFile ? (
          <p>Fichier choisi : {selectedFile.name}</p>
        ) : (
          <p>Pas de fichier enregistré</p>
        )}
        <form onSubmit={handleSubmit}>
          Description<br /><textarea type="text" name="description" className='desc' id="desc-input" onChange={handleDescChange}></textarea><br /><br />
          Durée d'affichage du post<br/><br/>
          <label>
            Heures : 
            <input type="number" value={hours} onChange={handleHoursChange} min={0} className="time"/>
          </label>
          <br /><br />
          <label>
            Minutes : 
            <input type="number" value={minutes} onChange={handleMinutesChange} min={0} max={59} className="time"/>
          </label>
          <br /><br />
          <button value='upload' className='btn' type="submit">Poster</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;