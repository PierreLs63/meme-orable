import "./index.css";
import Timer from "../Timer";
import coeurr from '../../data/coeura.png';
import coeurn from '../../data/coeurna.png';
const Card = (props) => {
  const { source,isLikes2,likes, name, description, createdAt, timeEnd ,id} = props;
  return (
    <div className="card">
      <div className="profile-info-cotainer">
        <div className="post-details-container">
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="children-container">
        <img src={source} alt="" className="post-image" />
        <Timer
  timeEnd={timeEnd}
  createdAt={createdAt}
  className="timer"
 
/>

        <img
               src={isLikes2 ? coeurr : coeurn}
               alt="aime"
               className="heart-image"
               onClick={() => props.handleClick(id)}
             />
          <p className="like"> {likes}
</p>  
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;