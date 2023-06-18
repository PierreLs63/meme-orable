import React, { useState, useEffect } from "react";
import Textfit from 'react-textfit';

function Timer(props) {
  const { timeEnd2 } = props;
  const initialTime = Math.max(new Date(timeEnd2).getTime() - Date.now(), 0);
  const [time, setTime] = useState(initialTime);
  const [progress, setProgress] = useState(100);
  const circleDiameter = 40; // Diamètre du cercle en pixels

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time > 0) {
      setProgress(((time / initialTime) * 100).toFixed(2));
    } else {
      setProgress(0);
    }
  }, [time]);

  const calculateFontSize = () => {
    const circleRadius = circleDiameter / 2;
    const maxFontSize = 20; // Taille de police maximale
    const minFontSize = 8; // Taille de police minimale
    const circumference = 2 * Math.PI * circleRadius;

    // Calculer la taille de police adaptative en fonction du diamètre du cercle
    const fontSize = circumference / formatTime().length;

    // Limiter la taille de police entre les valeurs maximale et minimale
    return Math.max(Math.min(fontSize, maxFontSize), minFontSize);
  };

  const formatTime = () => {
    if (time <= 0) {
      return "0";
    } else {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);

      let formattedTime = "";
      if (days > 0) {
        formattedTime += `${days}j `;
      }
      if (hours > 0) {
        formattedTime += `${hours}h `;
      }
      if (minutes > 0) {
        formattedTime += `${minutes}min `;
      }
      if (seconds > 0) {
        formattedTime += `${seconds}s`;
      }

      return formattedTime.trim();
    }
  };

  return (
    <div id="timer">
      <Textfit mode="single" max={calculateFontSize()}>
        <svg width={circleDiameter} height={circleDiameter}>
          <circle
            cx={circleDiameter / 2}
            cy={circleDiameter / 2}
            r={circleDiameter / 2 - 2.5}
            stroke="#ccc"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx={circleDiameter / 2}
            cy={circleDiameter / 2}
            r={circleDiameter / 2 - 2.5}
            stroke="#ff0000"
            strokeWidth="2.5"
            strokeDasharray={2 * Math.PI * (circleDiameter / 2 - 2.5)}
            strokeDashoffset={2 * Math.PI * (circleDiameter / 2 - 2.5) * (1 - progress / 100)}
            transform={`rotate(-90 ${circleDiameter / 2} ${circleDiameter / 2})`}
            fill="transparent"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize={`${calculateFontSize()}px`}
            fontWeight="800"
            fill="black"
          >
            {formatTime()}
          </text>
        </svg>
      </Textfit>
    </div>
  );
}

export default Timer;
