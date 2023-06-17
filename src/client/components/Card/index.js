import "./index.css";
import Timer from "../Timer";
const Card = (props) => {
  const { source, name, description, createdAt, timeEnd } = props;
  return (
    <div className="card">
      <div className="profile-info-cotainer">
        <div className="post-details-container">
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="children-container">
        <img src={source} alt="" className="post-image" />
        <Timer createdAt={createdAt} timeEnd={timeEnd} className="timer" />
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
