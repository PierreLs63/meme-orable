import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Timer(props) {
  const { createdAt, timeEnd } = props; 
  const navigate = useNavigate();
  let initialTime = Date.parse(timeEnd) - Date.parse(createdAt);
  let A = Date.now() - Date.parse(createdAt);
  const [time, setTime] = useState(initialTime); // Temps initial en secondes
  const [progress, setProgress] = useState(100); // Progression en pourcentage

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1);

    return () => clearInterval(timer); // Nettoie le timer lors de la suppression du composant
  }, []);

  useEffect(() => {
    if (time >= 0) {
      setProgress(((time - A) / initialTime) * 100);
    } // Calcule la progression en pourcentage}
    else {
      setProgress(0);
    }
  }, [time]);

  const formatTime = () => {
    let c = "";
    console.log(A);
    if(time-A<=0){
      c = `${0}`;
    
  
    } else if (time - A <= 60*1000) {
      c = `${Math.floor((time - A)/1000)}` + "s";
    } else if (time - A <= 3600*1000) {
      c = `${Math.floor((time - A) / (60*1000))}` + "min";
    } else if (time - A <= 86400*1000) {
      c = `${Math.floor((time - A) / (3600*1000))}` + "h";
    } else {
      c = `${Math.floor((time - A) / (86400*1000))}` + "j";
    }
    return c;
  };

  return (
    <container id="timer">
      <svg width="50" height="50">
        <circle
          cx="25"
          cy="25"
          r="22.5"
          stroke="#ccc"
          strokeWidth="2.5"
          fill="transparent"
        />
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
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12px"
          fontWeight="800"
          fill="#000"
        >
          {formatTime()}
        </text>
      </svg>
    </container>
  );
}

export default Timer;