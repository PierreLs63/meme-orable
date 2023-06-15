import './LikeButton.css'
import React, { useState } from 'react';

function LikeButton(props){
    const {currentLikes}=props;


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
)
}

export default LikeButton;