import React, { useState, useEffect } from 'react';

let currentLikes= 10;
let createdAt =13000;
let timeEnd = 13070;// à diviser par 1000 à un moment peut être
let initialTime = timeEnd-createdAt;
let A = 13000 - createdAt;//Date.now() - createdAt;

const Timer = () => {
  const [time, setTime] = useState(initialTime); // Temps initial en secondes
  const [progress, setProgress] = useState(100); // Progression en pourcentage

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Nettoie le timer lors de la suppression du composant
  }, []);

  useEffect(() => {
    if (time >= 0){setProgress(((time-A) / initialTime) * 100);} // Calcule la progression en pourcentage}
    else {setProgress(0);}
  }, [time]);

  const formatTime = () => {
    let c = "";
    if (time-A<=0){c = `${0}`}
    else if (time-A <= 60){c = `${time-A}` + "s"}
    else if (time-A <= 3600){c = `${Math.floor((time-A) / 60)}`+ "min"}
    else if (time-A <= 86400){c = `${Math.floor((time-A)/3600)}`+"h"}
    else {c = `${Math.floor((time-A)/86400)}`+"j"}
    return c
  };



  const [likes, setLikes] = useState(currentLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  let displayedLikes=likes;
  if (likes>999){
    displayedLikes=Math.floor(likes/1000) +'k'; 
  }

  const heartColor = isLiked ? 'red' : 'gray';

  return (
    <div>
      <container id='likeContainer'>
      <container id='like'>
      <button onClick={handleLike} id='likeButton'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill={heartColor}
        >
          <path
            d="M12 20.7l-1.94-1.74C5.62 14.2 2 11.04 2 7.5 2 4.42 4.42 2 7.5 2c1.86 0 3.53 1.13 4.5 2.86C13.97 3.13 15.64 2 17.5 2 20.58 2 23 4.42 23 7.5c0 3.54-3.62 6.7-8.06 11.46L12 20.7z"
          />
          {}
        </svg>

      </button>
      <span id='spanned'>{displayedLikes} likes</span>
      </container>

      <container id='timer'>
      <svg width="50"  height="50"   >
        <circle cx="25" cy="25" r="22.5" stroke="#ccc" strokeWidth="2.5" fill="transparent" />
        <circle
          left="0"
          cx="25"
          cy="25"
          r="22.5"
          stroke="#ff0000"
          strokeWidth="2.5"
          strokeDasharray="141.37"
          strokeDashoffset={141.37 - (progress / 100) * 141.37}
          transform="rotate(-90 25 25)"
          fill="transparent"
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12px" fill="#000">
          {formatTime()}
        </text>
      </svg>
      </container>
      </container>
      
      

      
    </div>
  );
  
}


export default Timer;