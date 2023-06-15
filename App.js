import React, { useState, useEffect } from 'react';
import Timer from './Timer.js';
import LikeButton from './LikeButton.js';
function App(){



  return (
    <div>
      <container id='likeContainer'>
      <LikeButton currentLikes="10" />
      <Timer createdAt="13000" timeEnd="13070" />

      
      </container>
      
      

      
    </div>
  );
  
}


export default App;